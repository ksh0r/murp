import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const PORT = process.env.PORT | 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB not connected Error: ", err));

app.get('/', (req,res) => {
    res.send("Welcome to the MurP Server");
});

app.listen(PORT, () => {
    console.log(`The Server is up and running on PORT: ${PORT}`);
})
