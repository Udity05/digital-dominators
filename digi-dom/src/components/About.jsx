import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="w-full bg-black py-16 px-6 md:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">

        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <button className="mb-10 px-8 py-3 text-lg md:text-xl border border-white rounded-full text-white tracking-wider font-['GoogleSans']">
            ABOUT US
          </button>

          <h2 className="mb-10 text-2xl sm:text-3xl md:text-4xl text-white tracking-wide font-['GoogleSans'] leading-relaxed">
            Forged in the spirit of <br />
            digital dominance, <br />
            And elevate the future of <br />
            technology.
          </h2>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C20CD3] text-white font-['GoogleSans']"
          >
            View More
          </motion.button>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full blur-3xl bg-purple-500/40 animate-pulse"></div>

            <img
              src="/logo.png"
              alt="Digital Dominators"
              className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 object-contain"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
