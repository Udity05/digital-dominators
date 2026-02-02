import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const team =[
    {
        name: "UDITY BANERJEE",
        role: "ORGANISER",
        img: "/Udity.png",
    },

    {
        name: "TITASH SHIL",
        role: "ORGANISER",
        img: "/Titash.png",
    },

    {
        name: "EKARNA DAS",
        role: "GRAPHICS TEAM",
        img: "/Ekarna.png",
    },

    {
        name: "PITAMBAR CHOUDHURY",
        role: "GRAPHICS TEAM",
        img: "/Pitambar.png",
    },

    {
        name: "SOURASISH DAS",
        role: "GRAPHICS TEAM",
        img: "/Sourasish.png",
    },

     {
        name: "PAYAL GHOSH",
        role: "GRAPHICS TEAM",
        img: "/Payal.png",
    },

    {
        name: "SK AFIF HASSAN",
        role: "CONTENT TEAM",
        img: "/Afif.png",
    },

    {
        name: "LUKUMANI MAJUMDAR",
        role: "CONTENT TEAM",
        img: "/Lukumani.png",
    },

    {
        name: "MADHUJA KUNDU",
        role: "CONTENT TEAM",
        img: "/Madhuja.png",
    },

    {
        name: "GOPA PAUL",
        role: "CONTENT TEAM",
        img: "/Gopa.png",
    },

    {
        name: "SAYAN SENAPATI",
        role: "WEB DEV TEAM",
        img: "/Sayan.png",
    },

    {
        name: "HIMANISH CHATTERJEE",
        role: "WEB DEV TEAM",
        img: "/Himanish.png",
    },

    {
        name: "DHRUBOJYOTI CHAKRABORTY",
        role: "WEB DEV TEAM",
        img: "/Dhrubo.png",
    },

    {
        name: "SWARTHAK DAS",
        role: "WEB DEV TEAM",
        img: "/Swarthak.png",
    },

    {
        name: "SAMPURNA SETT",
        role: "SOCIAL MEDIA TEAM",
        img: "/Sampurna.png",
    },

    {
        name: "AAFIA AKRAM",
        role: "SOCIAL MEDIA TEAM",
        img: "/Afia.png",
    },

    {
        name: "BIKRAM MONDAL",
        role: "AI&ML TEAM",
        img: "/Bikram.png",
    },

    {
        name: "B.VENKATESH",
        role: "AI&ML TEAM",
        img: "/Venkatesh.png",
    },

    {
        name: "SEKH MAINUDDIN JAMAL",
        role: "AI&ML TEAM",
        img: "/Jamal.png",
    },

    {
        name: "RABISANKAR MAITY",
        role: "PR TEAM",
        img: "/RaviShankar.png",
    },

    {
        name: "HARSHAVARDHAN CHEERA",
        role: "CP TEAM",
        img: "/Harsh.png",
    },

    {
        name: "SOURAV BAG",
        role: "CP TEAM",
        img: "/Sourav.png",
    },


];

const positions = {
  left: {
    x: -450,
    scale: 0.75,
    opacity: 0.5,
    zIndex: 1,
  },
  center: {
    x: 0,
    scale: 1.15,
    opacity: 1,
    zIndex: 2,
  },
  right: {
    x: 450,
    scale: 0.75,
    opacity: 0.5,
    zIndex: 1,
  },
};

export default function Team(){
    const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((i) => (i - 1 + team.length) % team.length);
  };

  const next = () => {
    setIndex((i) => (i + 1) % team.length);
  };

   const visibleMembers = [
    team[(index - 1 + team.length) % team.length],
    team[index],
    team[(index + 1) % team.length],
  ];


  return (
    <section id="team" className="w-full bg-black py-20 text-white overflow-hidden">

      <div className="max-w-xl ml-28 mb-16">
  <p className="text-4xl text-left text-white font-['GoogleSans']">
    Our team is a powerhouse of creativity, leadership, and unstoppable energy
    for community success.
  </p>
</div>

      <div className="relative h-[400px] flex items-center justify-center gap-16">

        {/* LEFT ARROW */}
        <button
          type="button"
          onClick={prev}
          className="absolute left-[45%] -translate-x-[180px] z-30
          w-12 h-12 rounded-full border border-white/40
          flex items-center justify-center hover:bg-white/10 transition"
        >
          ❮
        </button>

        {/* CAROUSEL */}

        <div className=" mt-24 relative flex items-center justify-center">

          {visibleMembers.map((member, i) => {
            const pos = i === 0 ? "left" : i === 1 ? "center" : "right";

            return (
              <motion.div
                key={member.img}
                className="absolute flex flex-col items-center mt-23"
                animate={positions[pos]}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <div className="relative w-52 h-52">
                  {/* Glow */}
                  <div
                    className={`absolute inset-0 bg-purple-500 rounded-full blur-2xl 
                    ${pos === "center" ? "opacity-80" : "opacity-40"}`}
                  />

                  <img
  src={member.img}
  alt={member.name}
  className={`relative w-full h-full rounded-full object-cover
  ${pos !== "center" ? "grayscale" : ""}
  ${member.name === "TITASH SHIL" ? "object-top" : "object-center"}`}
/>

                </div>

                {pos === "center" && (
                  <>
                    <h3 className="mt-8 text-xl font-['GoogleSans'] whitespace-nowrap">
                      {member.name}
                    </h3>
                    <p className="text-grey font-['ProductSans-Light'] text-md mt-2">
                      {member.role}
                    </p>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>

        <button
          type="button"
          onClick={next}
          className="absolute left-[55%] translate-x-[140px] z-30
          w-12 h-12 rounded-full border border-white/40
          flex items-center justify-center hover:bg-white/10 transition"
        >
          ❯
        </button>

      </div>
    </section>
  );
}