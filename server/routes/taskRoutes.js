import express from 'express';
import Task from '../models/Task.js';

const router = express.Router();

router.get('/', async (req,res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

router.post('/', async (req,res) => {
    const { title } = req.body;
    const newTask = new Task({ title });
    const savedTask = await newTask.save();

    res.status(201).json(savedTask);
});

export default router;
