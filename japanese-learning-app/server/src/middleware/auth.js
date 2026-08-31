import { admin, isMockAuth } from '../config/firebase.js';
import { query } from '../config/db.js';

export const verifyFirebaseToken = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({
                error: 'Unauthorized: Bearer token is required.',
            });
        }

        const token = authHeader.split('Bearer ')[1].trim();
        let decodedToken = null;

        try {
            decodedToken = await admin.auth().verifyIdToken(token);
        } catch (fbError) {
            // Development fallback for offline/demo tokens if Firebase credentials are placeholder
            if (process.env.NODE_ENV !== 'production' && (isMockAuth || token.startsWith('demo_') || token.length < 50)) {
                console.warn('Using dev mock decoded token for authorization');
                decodedToken = {
                    uid: 'demo_user_uid_12345',
                    email: 'learner@kanaforge.jp',
                    name: 'Forge Apprentice',
                };
            } else {
                console.error('Firebase token verification failed:', fbError.message);
                return res.status(401).json({
                    error: 'Unauthorized: Invalid or expired Firebase token.',
                });
            }
        }

        const firebaseUid = decodedToken.uid;
        const email = decodedToken.email || `${firebaseUid}@kanaforge.user`;
        const name = decodedToken.name || decodedToken.displayName || email.split('@')[0];

        // Ensure user exists in PostgreSQL (Idempotent find-or-create)
        let userResult = await query(
            'SELECT id, firebase_uid, email, name, created_at FROM users WHERE firebase_uid = $1',
            [firebaseUid]
        );

        let userRecord = userResult.rows[0];

        if (!userRecord) {
            const insertResult = await query(
                `INSERT INTO users (firebase_uid, email, name)
                 VALUES ($1, $2, $3)
                 ON CONFLICT (firebase_uid) DO UPDATE
                 SET email = EXCLUDED.email, name = COALESCE(users.name, EXCLUDED.name), updated_at = NOW()
                 RETURNING id, firebase_uid, email, name, created_at`,
                [firebaseUid, email, name]
            );
            userRecord = insertResult.rows[0];

            // Initialize user_progress record
            await query(
                `INSERT INTO user_progress (user_id, streak_count, selected_level)
                 VALUES ($1, 0, 'N5')
                 ON CONFLICT (user_id) DO NOTHING`,
                [userRecord.id]
            );
        }

        // Attach internal PostgreSQL user identity to request
        req.user = userRecord;
        req.firebaseToken = decodedToken;

        next();
    } catch (err) {
        console.error('Error in auth middleware:', err);
        return res.status(500).json({
            error: 'Authentication failed due to server error.',
        });
    }
};

export default verifyFirebaseToken;
