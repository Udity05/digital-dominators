import { motion } from "framer-motion";


const certificatePartner = [
  { id: 1, img: "/commudle-logo192.png", name: "Commudle", link: "https://www.commudle.com/communities/digital-dominators" },
  { id: 4, img: "/GMCLogSq.562e75e0.png", name: "Give My Certificate", link: "https://givemycertificate.com/" },
];


const communityPartners = [
  { id: 2, img: "/Apertre.logo.png", name: "Apertre", link: "https://apertre.resourcio.in/" },
  { id: 3, img: "/ByteRush_Logo.png", name: "ByteRush", link: "https://byte-rush.tech/" },
  { id: 5, img: "/hackolution logo.png", name: "Hackolution", link: "https://www.hackolution.tech/" },
  { id: 6, img: "/JWOC.logo.jpeg", name: "JWOC", link: "https://www.jwoc.in/" },
  { id: 7, img: "/metamorph.png", name: "Metamorph", link: "https://www.meta-morph.tech/" },
  { id: 8, img: "/OSCI Logo.jpg", name: "OSCI", link: "https://www.osconnect.org/" },
  { id: 9, img: "/SAMARTH_GRADIENT.png", name: "Samarth", link: "https://educathon.samarthtmsl.in/" },
  { id: 10, img: "/SIT.png", name: "SIT", link: "https://konfhub.com/sap-inside-track-2025-kolkata" },
  { id: 11, img: "/Social Dark.png", name: "SOURCIFY", link: "http://cosmohack.tech" },
  { id: 12, img: "/GDG Siliguri.png", name: "GDG Siliguri", link: "https://gdg.community.dev/events/details/google-gdg-siliguri-presents-devfest-siliguri-2025/" },
  { id: 13, img: "/DoraDAO.jpeg", name: "DoraDAO", link: "https://doradao.xyz/" },
  { id: 14, img: "/techstars-startup-weekend-siliguri.jpeg", name: "Techstars Startup", link: "https://inspiria.edu.in/swsiliguri/" },
  { id: 15, img: "/react-kolkata.jpeg", name: "React Kolkata", link: "https://reactkolkata.com/" },
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
        className="flex flex-col items-center gap-3"
      >
        <a
          href={partner.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-3 cursor-pointer"
        >
          <img
            src={partner.img}
            alt={partner.name}
            className="w-28 h-28 object-contain transition"
          />
          <p className="text-sm text-center text-gray-300">{partner.name}</p>
        </a>
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
        className="rounded-xl border border-purple-500/40 p-4 hover:border-purple-400 transition flex flex-col items-center gap-3"
      >
        <a
          href={partner.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-3 cursor-pointer"
        >
          <img
            src={partner.img}
            alt={partner.name}
            className="w-24 h-24 object-contain"
          />
          <p className="text-sm text-center text-gray-300">{partner.name}</p>
        </a>
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