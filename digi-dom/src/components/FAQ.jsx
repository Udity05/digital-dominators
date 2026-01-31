import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is Digital Dominators?",
    answer:
      "Digital Dominators is a professional tech community focused on collaboration, skill-building, and innovation through technology-driven learning and real-world initiatives.",
  },
  {
    question: "Who can be a part of this community?",
    answer:
      "Students, professionals, founders, freelancers, and tech enthusiasts from all backgrounds can join to learn, share, and grow together.",
  },
  {
    question: "What benefits do members receive?",
    answer:
      "Members get access to workshops, hands-on sessions, mentorship talks, panel discussions, networking, community challenges, certifications, and swag programs.",
  },
  {
    question: "What kind of events and activities are organized?",
    answer:
      "The community hosts workshops, bootcamps, hackathons, expert talks, and panel discussions focused on practical skills and industry exposure.",
  },
  {
    question: "How can I join the community?",
    answer:
      "Join our official WhatsApp community and follow our social media platforms to stay updated on events, opportunities, and announcements.",
  },
  {
    question: "Want to collaborate or partner with Digital Dominators?",
    answer:
      "For partnerships, collaborations, or any community-related queries, drop a mail to our official email ID and our team will connect with you.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full py-20 px-10 text-white relative overflow-hidden">

    

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl mx-auto">

       
        <div>
          <h2 className="mt-20 text-9xl text-[#C20CD3] font-['GoogleSans'] font-bold mb-6 ">FAQs</h2>
          <p className="text-gray-300 leading-relaxed max-w-md font-['GoogleSans']">
            Have questions about our Digital Dominators? Our FAQs have got you
            covered. Discover important details on registration, session
            logistics, and more.
          </p>
        </div>

        
        <div className="space-y-4">

          {faqs.map((faq, index) => (
            <div key={index} className="pb-4">

              
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left text-md font-['GoogleSans'] py-4"
              >
                <span>{faq.question}</span>
                <span
                  className={`transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-300 pr-6"
                  >
                    <p className="pl-4 pt-4 font-['GoogleSans']">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
