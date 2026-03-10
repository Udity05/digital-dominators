const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
    text: { type: String, required: true },
    name: { type: String, required: true },
    role: { type: String, required: true },
    rating: { type: Number, default: 5 },
    avatar: { type: String, default: null }
}, { timestamps: true });

module.exports = mongoose.model('Testimonial', testimonialSchema);
