import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

// config
dotenv.config();
const app = express();
const port = process.env.PORT || 6000;
connectDB();

// start server
app.listen(port, () => console.log(`Server started on port ${port}`));
