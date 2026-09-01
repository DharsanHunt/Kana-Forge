import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useProgress } from '../context/ProgressContext';
import { calculateOverallStats } from '../services/progressCalculator';

export default function ProfilePage() {
    const { user, updateUsername, deleteAccount, signOut, isAuthenticated } = useAuth();
    const { progress } = useProgress();
    const navigate = useNavigate();

    const [editingUsername, setEditingUsername] = useState(false);
    const [usernameInput, setUsernameInput] = useState(user?.displayName || '');
    const [savingUsername, setSavingUsername] = useState(false);
    const [usernameError, setUsernameError] = useState('');
    const [usernameSuccess, setUsernameSuccess] = useState('');

    // Delete account modal state
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [deleteConfirmationText, setDeleteConfirmationText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [deleteError, setDeleteError] = useState('');

    const stats = calculateOverallStats(progress);

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center px-6">
                <div className="text-center max-w-md bg-bg-card border border-neutral-warm/10 rounded-2xl p-8 shadow-xl">
                    <div className="text-4xl mb-3 font-serif text-primary">鍛</div>
                    <h2 className="text-xl font-bold text-neutral-warm mb-2">Authentication Required</h2>
                    <p className="text-sm text-neutral-warm/50 mb-6">Please log in to your Kana-Forge account to view and manage your profile.</p>
                    <Link
                        to="/login"
                        className="inline-block w-full py-3 bg-primary text-white rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
                    >
                        Go to Login
                    </Link>
                </div>
            </div>
        );
    }

    const handleSaveUsername = async (e) => {
        e.preventDefault();
        setUsernameError('');
        setUsernameSuccess('');

        const trimmed = usernameInput.trim();
        if (!trimmed) {
            setUsernameError('Username cannot be empty.');
            return;
        }
        if (trimmed.length < 2) {
            setUsernameError('Username must be at least 2 characters.');
            return;
        }
        if (trimmed.length > 50) {
            setUsernameError('Username cannot exceed 50 characters.');
            return;
        }

        setSavingUsername(true);
        try {
            await updateUsername(trimmed);
            setUsernameSuccess('Display name updated successfully.');
            setEditingUsername(false);
        } catch (err) {
            setUsernameError(err.message || 'Failed to update username.');
        } finally {
            setSavingUsername(false);
        }
    };

    const handleDeleteAccount = async () => {
        setDeleteError('');
        setIsDeleting(true);
        try {
            await deleteAccount();
            setShowDeleteModal(false);
            navigate('/');
        } catch (err) {
            setDeleteError(err.message || 'Failed to delete account. Please re-authenticate and try again.');
            setIsDeleting(false);
        }
    };

    // Determine initial letter
    const initialLetter = user?.displayName
        ? user.displayName.charAt(0).toUpperCase()
        : user?.email ? user.email.charAt(0).toUpperCase() : '鍛';

    return (
        <div className="fade-in min-h-screen">
            <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
                {/* Breadcrumb Navigation */}
                <div className="text-xs text-neutral-warm/40 tracking-wider uppercase mb-8 flex items-center gap-2">
                    <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                    <span>/</span>
                    <span className="text-primary font-semibold">Account Profile</span>
                </div>

                {/* Profile Card */}
                <div className="bg-bg-card border border-neutral-warm/10 rounded-3xl p-6 sm:p-10 mb-8 shadow-xl relative overflow-hidden">
                    <div className="absolute -top-10 -right-10 opacity-[0.03] pointer-events-none select-none">
                        <span className="text-[25vh] font-serif">名</span>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-neutral-warm/10">
                        <div className="flex items-center gap-5">
                            {/* Avatar */}
                            <div className="w-20 h-20 rounded-2xl bg-primary/20 border-2 border-primary/40 flex items-center justify-center text-primary text-3xl font-bold font-serif shadow-lg shadow-primary/10">
                                {initialLetter}
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <h1 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-warm">
                                        {user?.displayName || 'Forge Apprentice'}
                                    </h1>
                                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20 uppercase tracking-wider">
                                        Active
                                    </span>
                                </div>
                                <p className="text-xs sm:text-sm text-neutral-warm/50 font-mono">
                                    {user?.email}
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={() => {
                                setEditingUsername(!editingUsername);
                                setUsernameInput(user?.displayName || '');
                                setUsernameError('');
                                setUsernameSuccess('');
                            }}
                            className="px-4 py-2 bg-bg-elevated border border-neutral-warm/10 hover:border-primary/40 text-neutral-warm/80 hover:text-neutral-warm rounded-xl text-xs font-bold transition-all"
                        >
                            {editingUsername ? 'Cancel Editing' : '✏️ Edit Username'}
                        </button>
                    </div>

                    {/* Feedback Messages */}
                    {usernameSuccess && (
                        <div className="mt-4 p-3 rounded-xl bg-success/10 border border-success/30 text-success text-xs font-medium fade-in">
                            ✓ {usernameSuccess}
                        </div>
                    )}
                    {usernameError && (
                        <div className="mt-4 p-3 rounded-xl bg-error/10 border border-error/30 text-error text-xs font-medium fade-in">
                            ✕ {usernameError}
                        </div>
                    )}

                    {/* Edit Username Form */}
                    {editingUsername && (
                        <form onSubmit={handleSaveUsername} className="mt-6 pt-6 border-t border-neutral-warm/10 fade-in">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-warm/60 mb-3">
                                Change Display Username
                            </h3>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="text"
                                    value={usernameInput}
                                    onChange={(e) => setUsernameInput(e.target.value)}
                                    placeholder="Enter your new username..."
                                    maxLength={50}
                                    className="flex-1 px-4 py-3 bg-bg-elevated border border-neutral-warm/10 rounded-xl text-sm text-neutral-warm focus:outline-none focus:border-primary"
                                    autoFocus
                                />
                                <button
                                    type="submit"
                                    disabled={savingUsername}
                                    className="px-6 py-3 bg-primary text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-md shadow-primary/20 hover:bg-primary/90 disabled:opacity-50 transition-all shrink-0"
                                >
                                    {savingUsername ? 'Saving...' : 'Save Changes'}
                                </button>
                            </div>
                        </form>
                    )}

                    {/* Account Details Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                        <div className="bg-bg-elevated/40 border border-neutral-warm/5 rounded-2xl p-4">
                            <div className="text-[10px] text-neutral-warm/40 uppercase font-bold tracking-wider mb-1">
                                Authentication Provider
                            </div>
                            <div className="text-sm font-semibold text-neutral-warm flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-success"></span>
                                <span>Firebase Auth</span>
                            </div>
                        </div>

                        <div className="bg-bg-elevated/40 border border-neutral-warm/5 rounded-2xl p-4">
                            <div className="text-[10px] text-neutral-warm/40 uppercase font-bold tracking-wider mb-1">
                                Current Level Focus
                            </div>
                            <div className="text-sm font-semibold text-primary font-mono">
                                JLPT {progress.selectedLevel || 'N5'}
                            </div>
                        </div>

                        <div className="bg-bg-elevated/40 border border-neutral-warm/5 rounded-2xl p-4">
                            <div className="text-[10px] text-neutral-warm/40 uppercase font-bold tracking-wider mb-1">
                                Study Streak
                            </div>
                            <div className="text-sm font-semibold text-[#f1c40f]">
                                {stats.streakCount} Day{stats.streakCount === 1 ? '' : 's'} Active
                            </div>
                        </div>
                    </div>
                </div>

                {/* Learning Progress Summary */}
                <div className="bg-bg-card border border-neutral-warm/10 rounded-3xl p-6 sm:p-8 mb-8 shadow-sm">
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-warm/10">
                        <div className="flex items-center gap-3">
                            <div className="w-1.5 h-5 rounded-full bg-primary"></div>
                            <h2 className="text-lg font-bold text-neutral-warm">Curriculum Progress Overview</h2>
                        </div>
                        <Link to="/progress" className="text-xs text-primary font-bold hover:underline">
                            View Full Dashboard →
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                        <div className="p-4 rounded-xl bg-bg-elevated/60 border border-neutral-warm/5">
                            <div className="text-[10px] uppercase text-neutral-warm/40 font-bold mb-1">N5 Lessons</div>
                            <div className="text-xl font-bold font-serif text-neutral-warm">{stats.n5.completed} / {stats.n5.total}</div>
                            <div className="text-[11px] text-success mt-1 font-mono">{stats.n5.percentage}% done</div>
                        </div>

                        <div className="p-4 rounded-xl bg-bg-elevated/60 border border-neutral-warm/5">
                            <div className="text-[10px] uppercase text-neutral-warm/40 font-bold mb-1">N4 Lessons</div>
                            <div className="text-xl font-bold font-serif text-neutral-warm">{stats.n4.completed} / {stats.n4.total}</div>
                            <div className="text-[11px] text-[#3498db] mt-1 font-mono">{stats.n4.percentage}% done</div>
                        </div>

                        <div className="p-4 rounded-xl bg-bg-elevated/60 border border-neutral-warm/5">
                            <div className="text-[10px] uppercase text-neutral-warm/40 font-bold mb-1">Learned Kanji</div>
                            <div className="text-xl font-bold font-serif text-neutral-warm">{stats.totalKanjiLearned}</div>
                            <div className="text-[11px] text-neutral-warm/40 mt-1 font-mono">of 100 N5 kanji</div>
                        </div>

                        <div className="p-4 rounded-xl bg-bg-elevated/60 border border-neutral-warm/5">
                            <div className="text-[10px] uppercase text-neutral-warm/40 font-bold mb-1">Saved Vocabulary</div>
                            <div className="text-xl font-bold font-serif text-neutral-warm">{stats.savedVocabCount}</div>
                            <div className="text-[11px] text-neutral-warm/40 mt-1 font-mono">bookmarked</div>
                        </div>
                    </div>
                </div>

                {/* Account Security & Actions */}
                <div className="bg-bg-card border border-neutral-warm/10 rounded-3xl p-6 sm:p-8 mb-8 shadow-sm">
                    <h2 className="text-lg font-bold text-neutral-warm mb-2">Account Management</h2>
                    <p className="text-xs text-neutral-warm/50 mb-6">
                        Manage your session and access privileges on Kana-Forge.
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                        <button
                            onClick={async () => {
                                await signOut();
                                navigate('/');
                            }}
                            className="px-6 py-3 bg-bg-elevated border border-neutral-warm/10 hover:border-neutral-warm/30 text-neutral-warm text-xs font-bold rounded-xl transition-all"
                        >
                            🚪 Sign Out of Session
                        </button>
                    </div>
                </div>

                {/* Danger Zone */}
                <div className="bg-error/5 border border-error/20 rounded-3xl p-6 sm:p-8 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="text-lg text-error">⚠️</span>
                        <h2 className="text-lg font-bold text-error">Danger Zone</h2>
                    </div>
                    <p className="text-xs text-neutral-warm/60 leading-relaxed mb-6 max-w-xl">
                        Permanently delete your Kana-Forge account and all associated learner records, including lesson milestones, quiz history, weak spots, saved lexicon, and writing data. This action is irreversible.
                    </p>

                    <button
                        onClick={() => {
                            setShowDeleteModal(true);
                            setDeleteConfirmationText('');
                            setDeleteError('');
                        }}
                        className="px-6 py-3 bg-error/10 border border-error/40 text-error hover:bg-error hover:text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all"
                    >
                        Delete Account Permanently
                    </button>
                </div>
            </div>

            {/* Delete Account Confirmation Modal */}
            {showDeleteModal && (
                <div className="fixed inset-0 bg-bg-dark/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 fade-in">
                    <div className="bg-bg-card border border-error/30 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-error/20 flex items-center justify-center text-error text-xl font-bold">
                                ✕
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-neutral-warm">Delete Account?</h3>
                                <p className="text-xs text-neutral-warm/50">This action cannot be undone.</p>
                            </div>
                        </div>

                        <p className="text-xs text-neutral-warm/70 leading-relaxed mb-4">
                            All your progress, quiz history, and saved words will be permanently purged from PostgreSQL and Firebase Auth.
                        </p>

                        <div className="mb-6">
                            <label className="text-[11px] font-bold text-neutral-warm/60 uppercase tracking-wider block mb-2">
                                Type <strong className="text-error">DELETE</strong> to confirm:
                            </label>
                            <input
                                type="text"
                                value={deleteConfirmationText}
                                onChange={(e) => setDeleteConfirmationText(e.target.value)}
                                placeholder="DELETE"
                                className="w-full px-4 py-3 bg-bg-elevated border border-neutral-warm/10 rounded-xl text-sm font-mono text-neutral-warm focus:outline-none focus:border-error"
                                autoFocus
                            />
                        </div>

                        {deleteError && (
                            <div className="mb-4 p-3 rounded-xl bg-error/10 border border-error/30 text-error text-xs font-medium">
                                {deleteError}
                            </div>
                        )}

                        <div className="flex gap-3">
                            <button
                                onClick={() => setShowDeleteModal(false)}
                                disabled={isDeleting}
                                className="flex-1 py-3 bg-bg-elevated border border-neutral-warm/10 text-neutral-warm rounded-xl text-xs font-bold hover:bg-neutral-warm/5 transition-all"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleDeleteAccount}
                                disabled={deleteConfirmationText !== 'DELETE' || isDeleting}
                                className="flex-1 py-3 bg-error text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-lg shadow-error/20 hover:bg-error/90 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                            >
                                {isDeleting ? 'Deleting...' : 'Delete Permanently'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
