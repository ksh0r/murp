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

router.put('/:id', async (req,res) => {
    try {
        const task = await Task.findById(req.params.id);
        if(!task) return res.status(404).json({message: "Task not found"});
        task.isCompleted = req.body.isCompleted;
        await task.save();
        res.json(task);
    } catch (err) {
        res.status(500).json({ message: "Server Error",error: err.message });
    }
});

router.delete('/:id', async (req,res) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id);
        if(!deletedTask) return res.status(404).json({ message: "Task not found" });
        res.json({ message: "Task Deleted", task: deletedTask });
    } catch (err) {
        res.status(500).json({ message: "Server Error", error: err.message });
    }
});

export default router;
