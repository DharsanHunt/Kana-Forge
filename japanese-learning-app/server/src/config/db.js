import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/kanaforge';

export const pool = new Pool({
    connectionString,
    ssl: process.env.NODE_ENV === 'production' && !connectionString.includes('localhost')
        ? { rejectUnauthorized: false }
        : false,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 5000,
});

pool.on('error', (err) => {
    console.error('Unexpected PostgreSQL client error on idle connection:', err);
});

export const query = async (text, params) => {
    const start = Date.now();
    try {
        const res = await pool.query(text, params);
        const duration = Date.now() - start;
        if (process.env.DEBUG_SQL) {
            console.log('Executed query', { text, duration, rows: res.rowCount });
        }
        return res;
    } catch (error) {
        console.error('Database query error:', { text, error: error.message });
        throw error;
    }
};

export const getClient = async () => {
    return await pool.connect();
};

export default {
    pool,
    query,
    getClient,
};
