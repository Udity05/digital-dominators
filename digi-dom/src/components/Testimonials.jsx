import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    text: "Digital Dominators is a vibrant tech community that truly values collaboration and creativity. Working here as a graphic designer, I’ve gained exposure through events, learning sessions, and a network of passionate innovators. It’s a space that constantly pushes you to grow, learn, and create meaningful impact.",
    name: "Ekarna Das",
    role: "Student",
  },
  {
    text: "Yeah, the day when i experienced the workshops and sessions held by the community, It's been great with rewarding experience and healthy future prospects!",
    name: "B.Venkatesh",
    role: "Student",
  },
  {
    text: "A community where learning, collaboration, and growth come together. For me, Digital Dominators is more than just a community. It feels like the hometown of my coding journey, a place I can trust, learn from others, and never hesitate to share my own ideas.",
    name: "Bikram Mondal",
    role: "Student",
  },
  {
    text: "Being part of Digital Dominators has been an amazing learning experience.The sessions are practical, insightful, and easy to understand.The community support and networking opportunities have really helped me grow.I feel more confident and motivated in my digital journey now.",
    name: "Ankita Mitra",
    role: "Student",
  },
  {
    text: "Being part of Digital Dominators has been an amazing learning experience.The sessions are practical, insightful, and easy to understand.The community support and networking opportunities have really helped me grow.I feel more confident and motivated in my digital journey now.",
    name: "Ankita Mitra",
    role: "Student",
  },
  {
    text: "The 30 Days DSA Arena by Digital Dominators gave my coding practice real structure and discipline. Daily problems and consistency pushed my problem-solving skills much faster than random practice. The community motivation and competitive environment genuinely helped me level up.",
    name: "Md Atyab Nadim",
    role: "Student",
  },
  {
    text: "Admins are really helpful and maintain decoram of the group and community members are very supportive, was glad to be part of the community for Google Arcade Program 2025 ",
    name: "Vansh Gupta",
    role: "Student",
  },
  {
    text: " It’s an amazing community where tech enthusiasts like me—and all of us—support and help each other. Every session is truly great and very helpful. Special thanks to Titash da, whose vision for this community is genuinely unmatched.",
    name: "Ayan Kar",
    role: "Student",
  },
  {
    text: "One of the best platform so far. Thanks for helping us with Google Cloud Arcade and other tech stuffs. ",
    name: "Sriz Debnath ",
    role: "Student",
  },
  {
    text: "The learning session were helpful but if you uploaded the video at you tube it would have been better since most sessions are short.I barely got to implement,most important are the advices of speakers are most important insights.so I Hope to see improvements and let's stay connected ",
    name: "Subham Das",
    role: "Student",
  },
  {
    text: "Digital domianation conducts the workshop very well Live demos & modern development workflows of GitHub ,azure  ai ,prompts etc.Thank you so much  for conducting the events and it was interesting and amazing session for workshop events.",
    name: "Ruposree De",
    role: "Student",
  },
];


export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setIndex((i) => (i + 1) % testimonials.length);
  };

  return (
    <section id="testimonials"className="w-full bg-black py-20 px-10 text-white">

      
      <div className="flex justify-between items-center mb-24 font-['GoogleSans']">
        <h2 className="text-xl md:text-4xl">
          Real Stories From the People <br />
          <span className="text-gray-400 md:text-3xl">Who Stayed With Us</span>
        </h2>

        <div className="flex gap-4">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10 transition"
          >
            ❮
          </button>
          <button
            onClick={next}
            className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10 transition"
          >
            ❯
          </button>
        </div>
      </div>

      
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto ">

        <AnimatePresence mode="wait">
          <motion.p
            key={testimonials[index].text}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl leading-relaxed mb-8 font-['GoogleSans']"
          >
            {testimonials[index].text}
          </motion.p>
        </AnimatePresence>

        <p className="text-lg mb-8 font-['GoogleSans']">
          {testimonials[index].name},{" "}
          <span className="text-gray-400">{testimonials[index].role}</span>
        </p>

        
      </div>
    </section>
  );
}