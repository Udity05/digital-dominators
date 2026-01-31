import { motion } from "framer-motion";

// Replace these with your real logo paths
const partners = [
  { id: 1, img: "/Apertre.logo.png", name: "Sourcefy" },
  { id: 2, img: "/ByteRush_Logo.png", name: "Partner 2" },
  { id: 3, img: "/commudle-logo192.png", name: "Partner 3" },
  { id: 4, img: "/GMCLogSq.562e75e0.png", name: "Partner 4" },
  { id: 5, img: "/hackolution logo.png", name: "Partner 5" },
  { id: 6, img: "/JWOC.logo.jpeg", name: "Partner 6" },
  { id: 7, img: "/metamorph.png", name: "Partner 7" },
  { id: 8, img: "/OSCI Logo.jpg", name: "Partner 8" },
  { id: 9, img: "/SAMARTH_GRADIENT.png", name: "Partner 9" },
  { id: 10, img: "/SIT.png", name: "Partner 10" },
  { id: 11, img: "/Social Dark.png", name: "Partner 11" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Partner() {
  return (
    <section id="partner" className="w-full bg-black py-24 text-white">
      <div className="max-w-6xl mx-auto px-6 font-['GoogleSans']">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold text-center mb-16"
        >
          Our Partners
        </motion.h2>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12 place-items-center"
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.id}
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              className="group relative"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-xl bg-purple-500 blur-xl opacity-0 group-hover:opacity-30 transition" />

              <img
                src={partner.img}
                alt={partner.name}
                className="relative w-24 h-24 object-contain transition duration-300"
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
