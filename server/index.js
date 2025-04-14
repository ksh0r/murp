import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import taskRoutes from './routes/taskRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.MONGO_URI | 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB not connected Error: ", err));

app.use(cors());
app.use(express.json());
app.use('/api/tasks', taskRoutes);

app.get('/', (req,res) => {
    res.send("Welcome to the MurP Server");
});

app.listen(PORT, () => {
    console.log(`The Server is up and running on PORT: ${PORT}`);
})
