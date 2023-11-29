import express from 'express';
import dotenv from 'dotenv';

// config
dotenv.config();
const app = express();
const port = process.env.PORT || 6000;

// start server
app.listen(port, () => console.log(`Server started on port ${port}`));
