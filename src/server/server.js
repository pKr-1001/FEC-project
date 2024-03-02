import express from 'express';
import pg from 'pg';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8888;
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

app.use(express.json());
app.use(cors());
//app.use(express.static(/*"folder"*/)); ADD THIS WHEN PRODUCTION FOLDER IS UP

app.get('/', (req, res) => {
    res.send('Homepage');
});

app.get('/mugs', async (req, res) => {
    try {
        const data = await pool.query('SELECT * FROM mugs');
        console.log("Result of get all products query: ", data.rows);
        res.json(data.rows);
    }
    catch(err){
        console.error(err);
    }
})

app.get('/mugs/:id', async (req, res) => {
    //TODO edge cases for id
    const id = req.params.id;
    try {
        const data = await pool.query(
            `SELECT * FROM mugs
            WHERE mug_id = $1`,
            [id]
        )
        console.log("Result of get all mugs query: ", data.rows[0]);
        res.json(data.rows[0]);
    }
    catch (err) {
        console.error(err);
    }
})

app.post('/mugs', async (req, res) => {
    const { mug_name, mug_description_1, mug_cost } = req.body
    try {
        const data = await pool.query(
            `INSERT INTO mugs (mug_name, mug_description_1, mug_cost) VALUES
            ($1, $2, $3) RETURNING *`,
            [mug_name, mug_description_1, mug_cost]
        )
        console.log("Result of post request: ", data.rows[0]);
        res.json(data.rows[0]);
    }
    catch (err) {
        console.error(err);
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});