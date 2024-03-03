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
    res.sendStatus(500);
});

app.get('/mugs', async (req, res) => {
    try {
        const data = await pool.query('SELECT * FROM mugs');
        console.log("Result of get all products query: ", data.rows);
        res.json(data.rows);
    }
    catch(err){
        console.error(err);
        res.sendStatus(500);
    }
})

app.get('/mugs/:id', async (req, res) => {
    //TODO edge cases for id
    const id = Number.parseInt(req.params.id);
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
        res.sendStatus(500);
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
        res.sendStatus(500);
    }
})

app.patch('/mugs/:id', async (req, res) => {
    const id = Number.parseInt(req.params.id);
    const {
        mug_name,
        mug_description_1,
        mug_description_2,
        mug_shipping, 
        mug_cost
    } = req.body;
    try {
        const data = await pool.query(
            `UPDATE mugs SET
            mug_name = COALESCE($1, mug_name), 
            mug_description_1 = COALESCE($2, mug_description_1),
            mug_description_2 = COALESCE($3, mug_description_2), 
            mug_shipping = COALESCE($4, mug_shipping), 
            mug_cost = COALESCE($5, mug_cost) WHERE
            mug_id = $6 RETURNING *`,
            [mug_name, mug_description_1, mug_description_2, mug_shipping, mug_cost, id]
        );
        console.log("Results of patch request: ", data.rows[0]);
        res.json(data.rows[0]);
    }
    catch(err){
        console.error(err);
        res.sendStatus(500);
    }
})

app.delete('/mugs/:id', async (req, res) => {
    const id = Number.parseInt(req.params.id);
    try {
        const data = await pool.query(
            `DELETE FROM mugs
            WHERE mug_id = $1`,
            [id]
        )

        if (data.rowCount > 0) {
            res.status(200).json({ message: 'Resource deleted successfully' });
        } else {
            res.status(404).json({ message: 'Resource not found' });
        }
    }
    catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});