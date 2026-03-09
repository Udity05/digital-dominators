const express = require('express');
const router = express.Router();
const Event = require('../models/Event');
const { auth, admin } = require('../middleware/auth');
const multer = require('multer');
const path = require('path');

// Multer Config
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Get all events
router.get('/', async (req, res) => {
    try {
        const events = await Event.find().sort({ createdAt: -1 });
        res.json({ success: true, events });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// Add new event (Admin only)
router.post('/', [auth, admin, upload.single('image')], async (req, res) => {
    try {
        const { title, date, link, type } = req.body;
        const img = req.file ? `/uploads/${req.file.filename}` : '';

        const newEvent = new Event({
            title,
            date,
            img,
            link,
            type: type || 'upcoming'
        });

        await newEvent.save();
        res.status(201).json({ success: true, event: newEvent });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// Delete event (Admin only)
router.delete('/:id', [auth, admin], async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);

        if (!event) {
            return res.status(404).json({ success: false, message: 'Event not found' });
        }

        await event.deleteOne();
        res.json({ success: true, message: 'Event deleted' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

module.exports = router;
