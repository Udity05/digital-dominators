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
    <section
      id="testimonials"
      className="w-full bg-black py-24 px-10 text-white"
    >
      {/* HEADER */}
      <div className="flex justify-between items-center mb-20 font-['GoogleSans'] max-w-7xl mx-auto">
        <h2 className="text-xl md:text-4xl font-['GoogleSans']">
          Real Stories From the People <br />
          <span className="text-gray-400 md:text-3xl">
            Who Stayed With Us
          </span>
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

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8 font-['GoogleSans']">

        {/* MAIN TEXT BOX */}
        <div className="w-full border border-white/30 rounded-2xl px-12 py-14 bg-white/[0.03] backdrop-blur-sm">

          <AnimatePresence mode="wait">
            <motion.p
              key={testimonials[index].text}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl leading-relaxed font-['GoogleSans']"
            >
              {testimonials[index].text}
            </motion.p>
          </AnimatePresence>

        </div>

        {/* NAME BOX */}
        <motion.div
          key={testimonials[index].name}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 border border-purple-500/40 rounded-full px-6 py-2 bg-black font-['GoogleSans']"
        >
          <span className="text-lg">
            {testimonials[index].name}
          </span>
          <span className="text-gray-400 text-lg">
            — {testimonials[index].role}
          </span>
        </motion.div>

      </div>
    </section>
  );
}