import express from 'express';
import pool from './pool.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const data = await pool.query('SELECT * FROM mug_pics');
        console.log("Get all from mug_pics: ", data.rows);
        res.json(data.rows);
    }
    catch(err){
        console.error(err);
        res.sendStatus(500);
    }
})

router.get('/:id', async (req, res) => {
    try {
        const id = Number.parseInt(req.params.id);
        const data = await pool.query(
            `SELECT * FROM mug_pics WHERE
            mug_id = $1`, 
            [id]
        );
        //TODO if data at id doesnt exist, or data.rows.length === 0, return not found 404
        console.log(`Get one from mug_pics where mug_id = ${id}:`, data.rows[0]);
        res.json(data.rows[0]);
    }
    catch(err){
        console.error(err);
        res.sendStatus(500);
    }
})

export default router;