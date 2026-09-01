import { createContext, useContext, useState, useEffect } from 'react';
import {
    auth,
    googleProvider,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signInWithPopup,
    firebaseSignOut,
    sendPasswordResetEmail,
    updateProfile,
    onAuthStateChanged
} from '../services/firebase';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [firebaseUser, setFirebaseUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Sync user with backend whenever Firebase auth state changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (fbUser) => {
            setFirebaseUser(fbUser);
            if (fbUser) {
                try {
                    const token = await fbUser.getIdToken();
                    // Attempt sync with PostgreSQL backend
                    const apiUrl = import.meta.env.VITE_API_URL || '/api';
                    const res = await fetch(`${apiUrl}/users/sync`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`,
                        },
                        body: JSON.stringify({
                            name: fbUser.displayName || fbUser.email?.split('@')[0],
                            email: fbUser.email,
                        }),
                    });

                    if (res.ok) {
                        const data = await res.json();
                        setUser({
                            uid: fbUser.uid,
                            email: fbUser.email,
                            displayName: fbUser.displayName || data.user?.name,
                            photoURL: fbUser.photoURL,
                            dbUser: data.user,
                        });
                    } else {
                        // Fallback client user if backend is starting up or offline
                        setUser({
                            uid: fbUser.uid,
                            email: fbUser.email,
                            displayName: fbUser.displayName || fbUser.email?.split('@')[0],
                            photoURL: fbUser.photoURL,
                        });
                    }
                } catch (err) {
                    console.warn('Backend sync failed, continuing with client auth:', err);
                    setUser({
                        uid: fbUser.uid,
                        email: fbUser.email,
                        displayName: fbUser.displayName || fbUser.email?.split('@')[0],
                        photoURL: fbUser.photoURL,
                    });
                }
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const signInWithEmail = async (email, password) => {
        const cred = await signInWithEmailAndPassword(auth, email, password);
        return cred.user;
    };

    const signUpWithEmail = async (email, password, name) => {
        const cred = await createUserWithEmailAndPassword(auth, email, password);
        if (name && cred.user) {
            await updateProfile(cred.user, { displayName: name });
        }
        return cred.user;
    };

    const signInWithGoogle = async () => {
        const cred = await signInWithPopup(auth, googleProvider);
        return cred.user;
    };

    const resetPassword = async (email) => {
        await sendPasswordResetEmail(auth, email);
    };

    const updateUsername = async (newName) => {
        if (!newName || !newName.trim()) {
            throw new Error('Username cannot be empty');
        }
        const trimmed = newName.trim();
        
        // 1. Update Firebase display name if available
        if (auth.currentUser) {
            await updateProfile(auth.currentUser, { displayName: trimmed });
        }

        // 2. Synchronize PostgreSQL database
        try {
            await api.updateProfile({ name: trimmed });
        } catch (backendErr) {
            console.warn('Backend profile update notice:', backendErr.message);
        }

        // 3. Update local user state immediately
        setUser((prev) => prev ? { ...prev, displayName: trimmed } : null);
    };

    const deleteAccount = async () => {
        // 1. Delete application & progress data from backend
        try {
            await api.deleteAccount();
        } catch (backendErr) {
            console.warn('Backend account deletion notice:', backendErr.message);
        }

        // 2. Delete Firebase authentication user
        if (auth.currentUser) {
            try {
                await auth.currentUser.delete();
            } catch (fbErr) {
                // If reauthentication is required
                if (fbErr.code === 'auth/requires-recent-login') {
                    throw new Error('Please sign in again to confirm account deletion.');
                }
                throw fbErr;
            }
        }

        // 3. Clear local state
        setUser(null);
        setFirebaseUser(null);
        try {
            localStorage.removeItem('kana-forge-progress');
        } catch {}
    };

    const signOut = async () => {
        await firebaseSignOut(auth);
        setUser(null);
        setFirebaseUser(null);
    };

    const getIdToken = async () => {
        if (!auth.currentUser) return null;
        return await auth.currentUser.getIdToken();
    };

    const value = {
        user,
        firebaseUser,
        loading,
        signInWithEmail,
        signUpWithEmail,
        signInWithGoogle,
        resetPassword,
        updateUsername,
        deleteAccount,
        signOut,
        getIdToken,
        isAuthenticated: !!user,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
