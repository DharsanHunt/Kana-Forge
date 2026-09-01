import { lessons } from '../data/lessons.js';
import { kanjiList } from '../data/kanji.js';
import { vocabulary } from '../data/vocabulary.js';

/**
 * Kana-Forge Centralized Progress Calculator
 * Deterministically computes learner metrics from actual curriculum and user activity.
 */

/**
 * Calculate progress for a specific JLPT level (N5, N4, N3, N2)
 * @param {string[]} completedLessonIds - Array of completed lesson IDs
 * @param {string} level - 'N5' | 'N4' | 'N3' | 'N2'
 * @returns {{ level: string, completed: number, total: number, percentage: number }}
 */
export function calculateLevelProgress(completedLessonIds = [], level = 'N5') {
    const levelLessons = lessons.filter((l) => l.level === level);
    const total = levelLessons.length;
    if (total === 0) {
        return { level, completed: 0, total: 0, percentage: 0 };
    }
    const completed = levelLessons.filter((l) => completedLessonIds.includes(l.id)).length;
    const percentage = Math.min(100, Math.max(0, Math.round((completed / total) * 100)));
    return { level, completed, total, percentage };
}

/**
 * Calculate overall learner statistics
 * @param {Object} progress - User progress object from ProgressContext
 * @returns {Object} Calculated metrics
 */
export function calculateOverallStats(progress = {}) {
    const completedLessons = progress.completedLessons || [];
    const quizScores = progress.quizScores || [];
    const savedWords = progress.savedWords || [];
    const weakSpots = progress.weakSpots || [];
    const learnedKanji = progress.learnedKanji || [];

    // 1. Level by Level Breakdown
    const n5Progress = calculateLevelProgress(completedLessons, 'N5');
    const n4Progress = calculateLevelProgress(completedLessons, 'N4');
    const n3Progress = calculateLevelProgress(completedLessons, 'N3');
    const n2Progress = calculateLevelProgress(completedLessons, 'N2');

    // 2. Total Learned Kanji: count of unique kanji practiced/mastered from writing or completed kanji lessons
    const totalKanjiLearned = learnedKanji.length;

    // 3. Studied / Saved Vocabulary: real count of saved/bookmarked words + lesson vocabulary
    const savedVocabCount = savedWords.length;

    // 4. Mastery Rate: actual average percentage across all quiz attempts, or 0% for new users
    const quizzesTaken = quizScores.length;
    let masteryRate = 0;
    if (quizzesTaken > 0) {
        const totalPercentage = quizScores.reduce((sum, q) => {
            const score = Number(q.score) || 0;
            const total = Number(q.total) || 1;
            return sum + (score / total) * 100;
        }, 0);
        masteryRate = Math.min(100, Math.max(0, Math.round(totalPercentage / quizzesTaken)));
    }

    // 5. Study Streak: computed based on streak count and date validity
    const today = new Date().toISOString().split('T')[0];
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    const lastDate = progress.streak?.lastStudyDate;
    let currentStreak = progress.streak?.count || 0;

    // Reset streak if user hasn't studied today or yesterday
    if (lastDate && lastDate !== today && lastDate !== yesterday) {
        currentStreak = 0;
    }

    // 6. Weak Spots: sorted by highest error frequency
    const sortedWeakSpots = [...weakSpots]
        .filter((w) => (w.wrongCount || 0) > 0)
        .sort((a, b) => (b.wrongCount || 0) - (a.wrongCount || 0))
        .slice(0, 5);

    return {
        n5: n5Progress,
        n4: n4Progress,
        n3: n3Progress,
        n2: n2Progress,
        levels: [n5Progress, n4Progress, n3Progress, n2Progress],
        totalKanjiLearned,
        totalKanjiCurriculum: kanjiList.length,
        savedVocabCount,
        totalVocabCurriculum: vocabulary.length,
        masteryRate,
        quizzesTaken,
        streakCount: currentStreak,
        lastStudyDate: lastDate,
        weakSpots: sortedWeakSpots,
    };
}

export default {
    calculateLevelProgress,
    calculateOverallStats,
};
