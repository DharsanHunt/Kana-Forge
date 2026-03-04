import { createContext, useContext, useState, useEffect } from 'react';

const ProgressContext = createContext();

const STORAGE_KEY = 'kana-forge-progress';

const defaultProgress = {
    completedLessons: [],
    quizScores: [],
    savedWords: [],
    reviewList: [],
    streak: { count: 0, lastStudyDate: null },
    weakSpots: [],
};

function loadProgress() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            return { ...defaultProgress, ...JSON.parse(saved) };
        }
    } catch (e) {
        console.error('Failed to load progress:', e);
    }
    return defaultProgress;
}

function saveProgress(progress) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
        console.error('Failed to save progress:', e);
    }
}

export function ProgressProvider({ children }) {
    const [progress, setProgress] = useState(loadProgress);

    useEffect(() => {
        saveProgress(progress);
    }, [progress]);

    const completeLesson = (lessonId) => {
        setProgress((prev) => {
            if (prev.completedLessons.includes(lessonId)) return prev;
            const today = new Date().toISOString().split('T')[0];
            const lastDate = prev.streak.lastStudyDate;
            const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
            let newStreak = prev.streak.count;
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
    };

    const addQuizScore = (score) => {
        setProgress((prev) => {
            const today = new Date().toISOString().split('T')[0];
            const lastDate = prev.streak.lastStudyDate;
            const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
            let newStreak = prev.streak.count;
            if (lastDate === today) {
                // already studied today
            } else if (lastDate === yesterday) {
                newStreak += 1;
            } else {
                newStreak = 1;
            }
            return {
                ...prev,
                quizScores: [...prev.quizScores, { ...score, date: today }],
                streak: { count: newStreak, lastStudyDate: today },
            };
        });
    };

    const addToReviewList = (items) => {
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
    };

    const saveWord = (word) => {
        setProgress((prev) => {
            if (prev.savedWords.find((w) => w.id === word.id)) return prev;
            return { ...prev, savedWords: [...prev.savedWords, word] };
        });
    };

    const removeWord = (wordId) => {
        setProgress((prev) => ({
            ...prev,
            savedWords: prev.savedWords.filter((w) => w.id !== wordId),
        }));
    };

    const removeFromReviewList = (itemId) => {
        setProgress((prev) => ({
            ...prev,
            reviewList: prev.reviewList.filter((r) => r.id !== itemId),
        }));
    };

    const value = {
        progress,
        completeLesson,
        addQuizScore,
        addToReviewList,
        removeFromReviewList,
        saveWord,
        removeWord,
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
