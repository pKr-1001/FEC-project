import express from 'express';
import pg from 'pg';
import dotenv from 'dotenv';
import cors from 'cors';
import pool from './pool.js';
import mugRoutes from './mugRoutes.js';
import mugPicsRoutes from './mugPicsRoutes.js';

const app = express();
const PORT = process.env.PORT || 8888;

app.use(express.json());
app.use(cors());
//app.use(express.static(/*"folder"*/)); ADD THIS WHEN PRODUCTION FOLDER IS UP

app.use('/mugs', mugRoutes);

app.use('/mug_pics', mugPicsRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});