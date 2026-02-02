import { motion } from "framer-motion";


const certificatePartner = [
  { id: 1, img: "/commudle-logo192.png", name: "Commudle" },
  { id: 4, img: "/GMCLogSq.562e75e0.png", name: "Google Developer Groups" },
];


const communityPartners = [
  { id: 2, img: "/Apertre.logo.png", name: "Apertre" },
  { id: 3, img: "/ByteRush_Logo.png", name: "ByteRush" },
  { id: 5, img: "/hackolution logo.png", name: "Hackolution" },
  { id: 6, img: "/JWOC.logo.jpeg", name: "JWOC" },
  { id: 7, img: "/metamorph.png", name: "Metamorph" },
  { id: 8, img: "/OSCI Logo.jpg", name: "OSCI" },
  { id: 9, img: "/SAMARTH_GRADIENT.png", name: "Samarth" },
  { id: 10, img: "/SIT.png", name: "SIT" },
  { id: 11, img: "/Social Dark.png", name: "Social" },
  { id: 12, img: "/GDG Siliguri.png", name: "GDG Siliguri"},
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};


const CertificatePartnerGrid = ({ partners }) => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="flex justify-center items-center gap-12 flex-wrap"
  >
    {partners.map((partner) => (
      <motion.div
        key={partner.id}
        variants={itemVariants}
        whileHover={{ scale: 1.08 }}
      >
        <img
          src={partner.img}
          alt={partner.name}
          className="w-28 h-28 object-contain transition"
        />
      </motion.div>
    ))}
  </motion.div>
);


const CommunityPartnerGrid = ({ partners }) => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-10 gap-y-12 justify-center justify-items-center"
  >
    {partners.map((partner) => (
      <motion.div
        key={partner.id}
        variants={itemVariants}
        whileHover={{ scale: 1.07 }}
        className="rounded-xl border border-purple-500/40 p-4 hover:border-purple-400 transition"
      >
        <img
          src={partner.img}
          alt={partner.name}
          className="w-24 h-24 object-contain"
        />
      </motion.div>
    ))}
  </motion.div>
);

export default function Partner() {
  return (
    <section id="partner" className="w-full bg-black py-20 text-white">
      <div className="max-w-6xl mx-auto px-6 font-['GoogleSans']">

      
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold text-center mb-16"
        >
          Our Partners
        </motion.h2>

        
        <div className="mb-20">
          <h3 className="text-xl md:text-2xl font-medium text-center mb-8 text-purple-400">
            Event & Certificate Partner
          </h3>
          <CertificatePartnerGrid partners={certificatePartner} />
        </div>

        
        <div>
          <h3 className="text-xl md:text-2xl font-medium text-center mb-8 text-purple-400">
            Community Partners
          </h3>
          <CommunityPartnerGrid partners={communityPartners} />
        </div>

      </div>
    </section>
  );
}