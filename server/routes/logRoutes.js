import express from 'express';
import Log from '../models/Log.js'

const router = express.Router();

router.get('/', async (req,res) => {
    try {
        const logs = await Log.find().sort({date: -1});
        res.json(logs);
    } catch (err) {
        res.status(500).json({error: "Server Error"});

    }
});

router.post('/', async (req,res) => {
    try {
        const { message } = req.body;
        const newLog = new Log({ message });
        const savedLog = await newLog.save();
        res.status(201).json(savedLog)
    } catch (err) {
        res.status(500).json({error: "Server Error"});
    }
})

export default router;
