import express from 'express';
import Log from '../models/Log.js'

const router = express.Router();

router.get('/', async (req,res) => {
    try {
        const logs = await Log.find();
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

router.delete('/:id', async (req,res) => {
    try {
        const deletedLog = await Log.findByIdAndDelete(req.params.id);
        if(!deletedLog) return res.status(404).json({ error: "Log not found"});
        res.json({ message: "Log Deleted", log: deletedLog});
    } catch (err) {
        res.status(500).json({ error: "Server Error"});
    }
})

export default router;
