/* Comments have been done by ksh0r
 * for better understanding */

import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

// Call to read .env file. Should be above all other comments.
dotenv.config();

// Make the express head function to utilize various funtions within it.
const app = express();

// Get the port from .env file if exists otherwise sets to default 5000.
const PORT = process.env.PORT || 5000;

// Make the app utilize the middleware cors.
app.use(cors());

// Tell the express app to parse browser requests as json and not use the raw data sent out.
app.use(express.json());

// Request handling check on connecting to localhost:5000.
app.get('/', (req,res) => {
        res.send("API is working");
});

// Dummy functions to understand
app.get('/power', (req,res) => {
    res.send("You are powerful");
});
app.get('/greet/:name', (req,res) => {
    const name = req.params.name;
    res.send(`Hello ${name}`);
});

app.listen(PORT, () => {
    console.log(`Server is running successfully on ${PORT}`);
});

