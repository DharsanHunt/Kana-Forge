import { auth } from './firebase';

const BASE_URL = import.meta.env.VITE_API_URL || '/api';

/**
 * Helper to fetch with Firebase authentication token
 */
async function request(endpoint, options = {}) {
    const headers = {
        'Content-Type': 'application/json',
        ...(options.headers || {}),
    };

    if (auth.currentUser) {
        try {
            const token = await auth.currentUser.getIdToken();
            headers['Authorization'] = `Bearer ${token}`;
        } catch (e) {
            console.warn('Could not retrieve Firebase ID token:', e);
        }
    }

    const url = `${BASE_URL}${endpoint}`;
    const response = await fetch(url, {
        ...options,
        headers,
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        const error = new Error(errorData?.error || `API request failed with status ${response.status}`);
        error.status = response.status;
        error.data = errorData;
        throw error;
    }

    return await response.json();
}

export const api = {
    // Users
    syncUser: (data) => request('/users/sync', { method: 'POST', body: JSON.stringify(data) }),
    getUserProfile: () => request('/users/me'),
    updateProfile: (data) => request('/users/profile', { method: 'PUT', body: JSON.stringify(data) }),
    deleteAccount: () => request('/users/account', { method: 'DELETE' }),

    // Progress
    getProgress: () => request('/progress'),
    updateLevel: (level) => request('/progress/level', { method: 'PUT', body: JSON.stringify({ level }) }),
    migrateProgress: (localProgress) => request('/progress/migrate', { method: 'POST', body: JSON.stringify({ localProgress }) }),

    // Lessons
    getCompletedLessons: () => request('/lessons/completed'),
    completeLesson: (lessonId) => request('/lessons/complete', { method: 'POST', body: JSON.stringify({ lessonId }) }),

    // Quizzes
    getQuizHistory: () => request('/quizzes/history'),
    submitQuizAttempt: (attemptData) => request('/quizzes/attempts', { method: 'POST', body: JSON.stringify(attemptData) }),

    // Wrong answers / Review deck
    getWrongAnswers: () => request('/wrong-answers'),
    addWrongAnswers: (items) => request('/wrong-answers', { method: 'POST', body: JSON.stringify({ items }) }),
    removeWrongAnswer: (questionId) => request(`/wrong-answers/${questionId}`, { method: 'DELETE' }),

    // Vocabulary
    getSavedWords: () => request('/vocabulary/saved'),
    saveWord: (word) => request('/vocabulary/save', { method: 'POST', body: JSON.stringify(word) }),
    removeSavedWord: (wordId) => request(`/vocabulary/${wordId}`, { method: 'DELETE' }),

    // Writing
    getWritingProgress: () => request('/writing/progress'),
    saveWritingProgress: (progress) => request('/writing/progress', { method: 'POST', body: JSON.stringify(progress) }),

    // AI
    sendAIChatMessage: (data) => request('/ai/chat', { method: 'POST', body: JSON.stringify(data) }),
    checkStrokeWithAI: (data) => request('/ai/check-stroke', { method: 'POST', body: JSON.stringify(data) }),
};

export default api;
