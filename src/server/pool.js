import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new pg.Pool({
    connectionString: process.env.LOCAL_DB_URL
});

pool.connect()
    .then((client) => {
        console.log(`Connected to postgres using connection string ${process.env.LOCAL_DB_URL}`);
        client.release();
    })
    .catch((err) => {
        console.log("Failed to connect to postgres:", err);
    });

export default pool;