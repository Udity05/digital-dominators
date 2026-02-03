import { useState } from "react";
import { motion } from "framer-motion";

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
  left: { x: -450, scale: 0.75, opacity: 0.5, zIndex: 1 },
  center: { x: 0, scale: 1.15, opacity: 1, zIndex: 2 },
  right: { x: 450, scale: 0.75, opacity: 0.5, zIndex: 1 },
};

export default function Team() {
  const [index, setIndex] = useState(0);

  const visible = [
    team[(index - 1 + team.length) % team.length],
    team[index],
    team[(index + 1) % team.length],
  ];

  const prev = () =>
    setIndex((i) => (i - 1 + team.length) % team.length);

  const next = () =>
    setIndex((i) => (i + 1) % team.length);

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
          className="absolute left-[45%] -translate-x-[180px] z-30
          w-12 h-12 rounded-full border border-white/40
          flex items-center justify-center hover:bg-white/10 transition"
        >
          ❮
        </button>

        {/* CAROUSEL */}
        <div className="mt-24 relative flex items-center justify-center">

          {visible.map((member, i) => {
            const pos = i === 0 ? "left" : i === 1 ? "center" : "right";

            return (
              <motion.div
                key={pos}
                className="absolute flex flex-col items-center mt-23"
                variants={variants}
                animate={pos}
                initial={false}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, info) => {
                  if (info.offset.x > 100) prev();
                  if (info.offset.x < -100) next();
                }}
                style={{ willChange: "transform, opacity" }}
              >
                <div className="relative w-52 h-52">
                  {/* Glow (same as before) */}
                  <div
                    className={`absolute inset-0 bg-purple-500 rounded-full blur-2xl 
                    ${pos === "center" ? "opacity-80" : "opacity-40"}`}
                  />

                  <img
                    src={member.img}
                    alt={member.name}
                    className={`relative w-full h-full rounded-full object-cover
                    ${imagePosition[member.name] || "object-center"}
                    ${pos !== "center" ? "grayscale" : ""}`}
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

        {/* RIGHT BUTTON */}
        <button
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
