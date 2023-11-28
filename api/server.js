import express from 'express';
import dotenv from 'dotenv';

// config
dotenv.config();
const app = express();
const port = process.env.PORT || 5500;

//start server
app.listen(port, () => console.log(`Server started on port ${port}`));
