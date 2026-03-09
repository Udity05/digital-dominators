const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    date: { type: String, required: true },
    img: { type: String, required: true },
    link: { type: String, required: true },
    type: { type: String, enum: ['upcoming', 'past'], default: 'upcoming' },
}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);
