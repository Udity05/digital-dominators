require('dotenv').config();
const mongoose = require('mongoose');
const Event = require('./models/Event');

const events = [
    {
        title: "Upcoming Event",
        date: "Coming Soon",
        img: "/Luma.jpeg",
        link: "https://luma.com/digital-dominators?k=c",
        type: "upcoming"
    },
    {
        title: "Google Arcade Facilitator Program",
        date: "2024",
        img: "/Facilitator.jpeg",
        link: "https://rsvp.withgoogle.com/events/arcade-facilitator/home",
        type: "past"
    },
    {
        title: "Gen AI with Pieces",
        date: "13th July, 7PM",
        img: "/AliMustafa.jpeg",
        link: "https://luma.com/699zvici",
        type: "past"
    },
    {
        title: "React Caching: From useMemo to Server Components",
        date: "12th August, 7:30 PM",
        img: "/Sulagna.jpeg",
        link: "https://lu.ma/tktsoytq",
        type: "past"
    },
    {
        title: "Design Smarter: UI/UX Basics to Industry-Ready",
        date: "31st August, 7PM",
        img: "/Rahul.jpeg",
        link: "https://lu.ma/gablitiv",
        type: "past"
    },
    {
        title: "Google Arcade Facilitator Program",
        date: "2025",
        img: "/Facilitator.jpeg",
        link: "https://rsvp.withgoogle.com/events/arcade-facilitator/home",
        type: "past"
    },
    {
        title: "SIH & Beyond",
        date: "14th September, 8PM",
        img: "/Souradip.jpeg",
        link: "https://luma.com/ct3kpr96",
        type: "past"
    },
    {
        title: "Building AI-Powered Apps with Gemini & Firebase",
        date: "19th October, 6PM",
        img: "/Deb.jpeg",
        link: "https://luma.com/783237t7",
        type: "past"
    },
    {
        title: "30 Days DSA Challenge",
        date: "1st Nov - 30th Nov",
        img: "/DSA.jpeg",
        link: "https://luma.com/990pdla5",
        type: "past"
    },
    {
        title: "Beyond Boundaries: Azure AI for Next-Gen Applications",
        date: "10th January, 7PM",
        img: "/Harsh.jpeg",
        link: "https://luma.com/7qzpy95q",
        type: "past"
    },
    {
        title: "Building a Real-Time Surplus Engine with Gemini 3 Flash & AlloyDB",
        date: "8th Feb, 7:30 PM",
        img: "/Real-Time-Surplus-Engine-Event.jpeg",
        link: "https://luma.com/npfyfwfn",
        type: "past"
    },
    {
        title: "Why Build on the Conflux Network — Web3 Basics, Open Source, Hackathons & OSEN",
        date: "21st Feb, 7:00 PM",
        img: "/Conflux-Network-Event.jpeg",
        link: "https://luma.com/km5arp23",
        type: "past"
    }
];

const seedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB for seeding...');

        // Clear existing events (optional, but good for reset)
        // await Event.deleteMany({});

        // Check if database is empty before seeding
        const count = await Event.countDocuments();
        if (count === 0) {
            await Event.insertMany(events);
            console.log('Database seeded successfully with initial events!');
        } else {
            console.log('Database already has events, skipping seed.');
        }

        process.exit();
    } catch (err) {
        console.error('Error seeding database:', err);
        process.exit(1);
    }
};

seedDB();
