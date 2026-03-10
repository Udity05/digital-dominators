const express = require('express');
const router = express.Router();
const Testimonial = require('../models/Testimonial');

const { auth } = require('../middleware/auth');
const multer = require('multer');
const path = require('path');

// Multer Config for Profile Images
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, 'avatar-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Get all testimonials
router.get('/', async (req, res) => {
    try {
        const testimonials = await Testimonial.find().sort({ createdAt: -1 });
        res.json({ success: true, testimonials });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// Create new testimonial
router.post('/', [auth, upload.single('image')], async (req, res) => {
    try {
        const { text, name, role, rating, avatar } = req.body;

        // If file uploaded, use the file path; else use the provided avatar string
        const finalAvatar = req.file ? `/uploads/${req.file.filename}` : avatar;

        const newTestimonial = new Testimonial({
            text,
            name,
            role,
            rating: parseInt(rating) || 5,
            avatar: finalAvatar
        });

        await newTestimonial.save();
        res.status(201).json({ success: true, testimonial: newTestimonial });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

module.exports = router;
