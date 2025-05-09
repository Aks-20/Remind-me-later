import { Router } from 'express';
const router = Router();
import Reminder from '../models/Reminder.js';

router.post('/', async (req, res) => {
    const { date, time, message, method } = req.body;

    // Basic validation
    if (!date || !time || !message || !method) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const reminder = new Reminder({ date, time, message, method });
        const savedReminder = await reminder.save();
        res.status(201).json(savedReminder);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

export default router;
