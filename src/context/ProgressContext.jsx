import { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { useAuth } from './AuthContext';
import { api } from '../services/api';

const ProgressContext = createContext(null);

const STORAGE_KEY = 'kana-forge-progress';

const defaultProgress = {
    completedLessons: [],
    quizScores: [],
    savedWords: [],
    reviewList: [],
    streak: { count: 0, lastStudyDate: null },
    weakSpots: [],
    learnedKanji: [],
    selectedLevel: 'N5',
};

function loadLocalProgress() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            return { ...defaultProgress, ...JSON.parse(saved) };
        }
    } catch (e) {
        console.error('Failed to load local progress:', e);
    }
    return defaultProgress;
}

function saveLocalProgress(progress) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
        console.error('Failed to save local progress:', e);
    }
}

export function ProgressProvider({ children }) {
    const { user, isAuthenticated } = useAuth();
    const [progress, setProgress] = useState(loadLocalProgress);
    const [loading, setLoading] = useState(false);
    const hasMigrated = useRef(false);

    // Fetch from backend when authenticated, with automatic localStorage migration
    const fetchRemoteProgress = useCallback(async () => {
        if (!isAuthenticated) return;
        setLoading(true);
        try {
            // Check if we need to migrate existing localStorage data
            const local = loadLocalProgress();
            const hasLocalData = local.completedLessons.length > 0 ||
                local.quizScores.length > 0 ||
                local.savedWords.length > 0 ||
                local.weakSpots.length > 0;

            if (hasLocalData && !hasMigrated.current) {
                try {
                    await api.migrateProgress(local);
                    hasMigrated.current = true;
                    localStorage.removeItem(STORAGE_KEY);
                } catch (migrationErr) {
                    console.warn('LocalStorage migration notice:', migrationErr);
                }
            }

            const [progressData, writingData] = await Promise.allSettled([
                api.getProgress(),
                api.getWritingProgress(),
            ]);

            let remoteProgress = { ...defaultProgress };
            if (progressData.status === 'fulfilled' && progressData.value?.progress) {
                remoteProgress = { ...remoteProgress, ...progressData.value.progress };
            }

            if (writingData.status === 'fulfilled' && writingData.value?.writingProgress) {
                const kanjiChars = writingData.value.writingProgress
                    .filter(w => w.characterType === 'kanji')
                    .map(w => w.character);
                remoteProgress.learnedKanji = Array.from(new Set(kanjiChars));
            }

            setProgress(remoteProgress);
        } catch (error) {
            console.warn('Could not load remote progress from backend, using local state:', error.message);
        } finally {
            setLoading(false);
        }
    }, [isAuthenticated]);

    useEffect(() => {
        if (isAuthenticated) {
            fetchRemoteProgress();
        } else {
            // Reset to guest local progress when unauthenticated
            setProgress(loadLocalProgress());
            hasMigrated.current = false;
        }
    }, [isAuthenticated, fetchRemoteProgress, user?.uid]);

    // Fallback sync to localStorage when unauthenticated
    useEffect(() => {
        if (!isAuthenticated) {
            saveLocalProgress(progress);
        }
    }, [progress, isAuthenticated]);

    // 1. Complete Lesson
    const completeLesson = async (lessonId) => {
        const today = new Date().toISOString().split('T')[0];
        const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

        // Optimistic update
        setProgress((prev) => {
            if (prev.completedLessons.includes(lessonId)) return prev;
            let newStreak = prev.streak.count || 0;
            const lastDate = prev.streak.lastStudyDate;
            if (lastDate === today) {
                // already studied today
            } else if (lastDate === yesterday) {
                newStreak += 1;
            } else {
                newStreak = 1;
            }
            return {
                ...prev,
                completedLessons: [...prev.completedLessons, lessonId],
                streak: { count: newStreak, lastStudyDate: today },
            };
        });

        // Remote persistence
        if (isAuthenticated) {
            try {
                const res = await api.completeLesson(lessonId);
                if (res?.streak) {
                    setProgress((prev) => ({ ...prev, streak: res.streak }));
                }
            } catch (err) {
                console.error('Failed to persist lesson completion to backend:', err);
            }
        }
    };

    // 2. Add Quiz Score / Attempt
    const addQuizScore = async (scoreData, answers = []) => {
        const today = new Date().toISOString().split('T')[0];
        const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

        // Optimistic update
        setProgress((prev) => {
            let newStreak = prev.streak.count || 0;
            const lastDate = prev.streak.lastStudyDate;
            if (lastDate === today) {
                // already studied today
            } else if (lastDate === yesterday) {
                newStreak += 1;
            } else {
                newStreak = 1;
            }
            return {
                ...prev,
                quizScores: [...prev.quizScores, { ...scoreData, date: today }],
                streak: { count: newStreak, lastStudyDate: today },
            };
        });

        // Remote persistence
        if (isAuthenticated) {
            try {
                const res = await api.submitQuizAttempt({
                    category: scoreData.category,
                    score: scoreData.score,
                    total: scoreData.total,
                    answers,
                });
                if (res?.streak) {
                    setProgress((prev) => ({ ...prev, streak: res.streak }));
                }
            } catch (err) {
                console.error('Failed to persist quiz attempt to backend:', err);
            }
        }
    };

    // 3. Add to Review List / Weak Spots
    const addToReviewList = async (items) => {
        if (!items || items.length === 0) return;

        // Optimistic update
        setProgress((prev) => {
            const existingIds = new Set(prev.reviewList.map((r) => r.id));
            const newItems = items.filter((item) => !existingIds.has(item.id));
            const updatedWeakSpots = [...prev.weakSpots];

            items.forEach((item) => {
                const existing = updatedWeakSpots.find((w) => w.id === item.id);
                if (existing) {
                    existing.wrongCount = (existing.wrongCount || 0) + 1;
                } else {
                    updatedWeakSpots.push({ ...item, wrongCount: 1 });
                }
            });

            return {
                ...prev,
                reviewList: [...prev.reviewList, ...newItems],
                weakSpots: updatedWeakSpots,
            };
        });

        // Remote persistence
        if (isAuthenticated) {
            try {
                await api.addWrongAnswers(items);
            } catch (err) {
                console.error('Failed to persist review items to backend:', err);
            }
        }
    };

    // 4. Remove from Review List
    const removeFromReviewList = async (itemId) => {
        // Optimistic update
        setProgress((prev) => ({
            ...prev,
            reviewList: prev.reviewList.filter((r) => r.id !== itemId),
        }));

        // Remote persistence
        if (isAuthenticated) {
            try {
                await api.removeWrongAnswer(itemId);
            } catch (err) {
                console.error('Failed to remove review item from backend:', err);
            }
        }
    };

    // 5. Save Vocabulary Word
    const saveWord = async (word) => {
        // Optimistic update
        setProgress((prev) => {
            if (prev.savedWords.find((w) => w.id === word.id)) return prev;
            return { ...prev, savedWords: [...prev.savedWords, word] };
        });

        // Remote persistence
        if (isAuthenticated) {
            try {
                await api.saveWord(word);
            } catch (err) {
                console.error('Failed to persist saved word to backend:', err);
            }
        }
    };

    // 6. Remove Vocabulary Word
    const removeWord = async (wordId) => {
        // Optimistic update
        setProgress((prev) => ({
            ...prev,
            savedWords: prev.savedWords.filter((w) => w.id !== wordId),
        }));

        // Remote persistence
        if (isAuthenticated) {
            try {
                await api.removeSavedWord(wordId);
            } catch (err) {
                console.error('Failed to remove saved word from backend:', err);
            }
        }
    };

    // 7. Record Kanji Writing Practice
    const recordKanjiPractice = async (character, score = 10) => {
        setProgress((prev) => {
            const set = new Set(prev.learnedKanji || []);
            set.add(character);
            return { ...prev, learnedKanji: Array.from(set) };
        });

        if (isAuthenticated) {
            try {
                await api.saveWritingProgress({
                    character,
                    characterType: 'kanji',
                    score,
                });
            } catch (err) {
                console.error('Failed to persist kanji practice:', err);
            }
        }
    };

    // 8. Update Level
    const setLevel = async (level) => {
        setProgress((prev) => ({ ...prev, selectedLevel: level }));
        if (isAuthenticated) {
            try {
                await api.updateLevel(level);
            } catch (err) {
                console.error('Failed to update level in backend:', err);
            }
        }
    };

    const value = {
        progress,
        loading,
        completeLesson,
        addQuizScore,
        addToReviewList,
        removeFromReviewList,
        saveWord,
        removeWord,
        recordKanjiPractice,
        setLevel,
        refreshProgress: fetchRemoteProgress,
    };

    return (
        <ProgressContext.Provider value={value}>
            {children}
        </ProgressContext.Provider>
    );
}

export function useProgress() {
    const context = useContext(ProgressContext);
    if (!context) {
        throw new Error('useProgress must be used within a ProgressProvider');
    }
    return context;
}
