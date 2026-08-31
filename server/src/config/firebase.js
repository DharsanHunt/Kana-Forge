import admin from 'firebase-admin';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

let firebaseApp = null;
let isMockAuth = false;

try {
    if (admin.apps.length > 0) {
        firebaseApp = admin.app();
    } else if (process.env.FIREBASE_SERVICE_ACCOUNT_PATH && fs.existsSync(process.env.FIREBASE_SERVICE_ACCOUNT_PATH)) {
        const serviceAccount = JSON.parse(fs.readFileSync(process.env.FIREBASE_SERVICE_ACCOUNT_PATH, 'utf8'));
        firebaseApp = admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
        });
        console.log('✅ Firebase Admin initialized from service account file.');
    } else if (process.env.FIREBASE_PROJECT_ID && process.env.FIREBASE_CLIENT_EMAIL && process.env.FIREBASE_PRIVATE_KEY) {
        firebaseApp = admin.initializeApp({
            credential: admin.credential.cert({
                projectId: process.env.FIREBASE_PROJECT_ID,
                clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
                privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
            }),
        });
        console.log('✅ Firebase Admin initialized from environment variables.');
    } else {
        console.warn('⚠️ Firebase Admin credentials not found. Initializing in development/fallback mode.');
        // Initialize default app for project ID if available
        firebaseApp = admin.initializeApp({
            projectId: process.env.FIREBASE_PROJECT_ID || 'kana-forge',
        });
    }
} catch (error) {
    console.error('⚠️ Firebase Admin initialization error:', error.message);
    isMockAuth = true;
}

export { admin, isMockAuth };
export default admin;
