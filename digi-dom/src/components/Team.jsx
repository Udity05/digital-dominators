import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const team = [
  { name: "UDITY BANERJEE", role: "ORGANISER", img: "/Udity.png" },
  { name: "TITASH SHIL", role: "ORGANISER", img: "/Titash-new.png" },
  { name: "EKARNA DAS", role: "GRAPHICS TEAM", img: "/Ekarna.png" },
  { name: "PITAMBAR CHOUDHURY", role: "GRAPHICS TEAM", img: "/Pitambar.png" },
  { name: "SOURASISH DAS", role: "GRAPHICS TEAM", img: "/Sourasish.png" },
  { name: "PAYAL GHOSH", role: "GRAPHICS TEAM", img: "/Payel.png" },
  { name: "SK AFIF HASSAN", role: "CONTENT TEAM", img: "/Afif.png" },
  { name: "LUKUMANI MAJUMDAR", role: "CONTENT TEAM", img: "/Lukumani.png" },
  { name: "MADHUJA KUNDU", role: "CONTENT TEAM", img: "/Madhu.png" },
  { name: "GOPA PAUL", role: "CONTENT TEAM", img: "/Gopa.png" },
  { name: "SAYAN SENAPATI", role: "WEB DEV TEAM", img: "/Sayan.png" },
  { name: "HIMANISH CHATTERJEE", role: "WEB DEV TEAM", img: "/Himanish.png" },
  { name: "DHRUBOJYOTI CHAKRABORTY", role: "WEB DEV TEAM", img: "/Dhrubo.png" },
  { name: "SWARTHAK DAS", role: "WEB DEV TEAM", img: "/Swarthak.png" },
  { name: "SAMPURNA SETT", role: "SOCIAL MEDIA TEAM", img: "/Sam.png" },
  { name: "AAFIA AKRAM", role: "SOCIAL MEDIA TEAM", img: "/Afia.png" },
  { name: "BIKRAM MONDAL", role: "AI&ML TEAM", img: "/Bikraam.png" },
  { name: "B.VENKATESH", role: "AI&ML TEAM", img: "/Venkatesh.png" },
  { name: "SEKH MAINUDDIN JAMAL", role: "AI&ML TEAM", img: "/Jamal.png" },
  { name: "RABISANKAR MAITY", role: "PR TEAM", img: "/RaviShankar.png" },
  { name: "HARSHAVARDHAN CHEERA", role: "CP TEAM", img: "/Harsh.png" },
  { name: "SOURAV BAG", role: "CP TEAM", img: "/Sourav.png" },
];

const imagePosition = {
  "TITASH SHIL": "object-top",
  "UDITY BANERJEE": "object-center",
  "EKARNA DAS": "object-center",
  "PAYAL GHOSH": "object-center",
};

const variants = {
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

export default function Team() {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Preload all images on mount
  useEffect(() => {
    team.forEach((member) => {
      const img = new Image();
      img.src = member.img;
    });
  }, []);

  // Memoize visible members to avoid recalculation
  const visible = useMemo(() => [
    team[(index - 1 + team.length) % team.length],
    team[index],
    team[(index + 1) % team.length],
  ], [index]);

  const handleTransition = (callback) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    callback();
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prev = () => handleTransition(() =>
    setIndex((i) => (i - 1 + team.length) % team.length)
  );

  const next = () => handleTransition(() =>
    setIndex((i) => (i + 1) % team.length)
  );

  return (
    <section id="team" className="w-full bg-black py-20 text-white overflow-hidden">

      <div className="max-w-xl ml-28 mb-16">
        <p className="text-4xl text-left text-white font-['GoogleSans']">
          Our team is a powerhouse of creativity, leadership, and unstoppable
          energy for community success.
        </p>
      </div>

      <div className="relative h-[420px] flex items-center justify-center gap-16">


        {/* LEFT BUTTON */}
        <button
          onClick={prev}
          disabled={isTransitioning}
          className="absolute left-[45%] -translate-x-[180px] z-30
          w-12 h-12 rounded-full border border-white/40
          flex items-center justify-center hover:bg-white/10 transition
          disabled:opacity-50 disabled:cursor-not-allowed"
        >
          ❮
        </button>

        {/* CAROUSEL */}
        <div className="mt-24 relative flex items-center justify-center">

          {visible.map((member, i) => {
            const pos = i === 0 ? "left" : i === 1 ? "center" : "right";
            const uniqueKey = `${member.name}-${pos}-${index}`;

            return (
              <motion.div
                key={uniqueKey}
                className="absolute flex flex-col items-center mt-23"
                variants={variants}
                animate={pos}
                initial={pos}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 25,
                  mass: 0.8
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.1}
                onDragEnd={(e, info) => {
                  if (Math.abs(info.offset.x) > 80) {
                    if (info.offset.x > 0) prev();
                    else next();
                  }
                }}
                style={{
                  willChange: "transform",
                  pointerEvents: isTransitioning ? "none" : "auto"
                }}
              >
                <div className="relative w-52 h-52">
                  {/* Optimized Glow */}
                  <div
                    className={`absolute inset-0 rounded-full blur-2xl transition-opacity duration-300
                    ${pos === "center" ? "opacity-80 bg-purple-500" : "opacity-40 bg-purple-500/50"}`}
                    style={{
                      willChange: "opacity",
                      transform: "translateZ(0)"
                    }}
                  />

                  <img
                    src={member.img}
                    alt={member.name}
                    loading="eager"
                    className={`relative w-full h-full rounded-full object-cover transition-all duration-300
                    ${imagePosition[member.name] || "object-center"}
                    ${pos !== "center" ? "grayscale" : ""}`}
                    style={{
                      willChange: "filter",
                      transform: "translateZ(0)"
                    }}
                  />
                </div>

                {pos === "center" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                  >
                    <h3 className="mt-8 text-xl font-['GoogleSans'] whitespace-nowrap">
                      {member.name}
                    </h3>
                    <p className="text-grey font-['ProductSans-Light'] text-md mt-2">
                      {member.role}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            );
          })}

        </div>

        {/* RIGHT BUTTON */}
        <button
          onClick={next}
          disabled={isTransitioning}
          className="absolute left-[55%] translate-x-[140px] z-30
          w-12 h-12 rounded-full border border-white/40
          flex items-center justify-center hover:bg-white/10 transition
          disabled:opacity-50 disabled:cursor-not-allowed"
        >
          ❯
        </button>

      </div>
    </section>
  );
}
