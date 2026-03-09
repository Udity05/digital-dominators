import { useEffect, useState } from "react";

export default function Hero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 200);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">


      <img
        src="/bg.png"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover opacity-70 animate-float"
      />


      <div className="absolute inset-0 bg-black/60"></div>


      <div
        className={`relative z-10 text-center transition-all duration-1000 ease-out
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <h1 className=" md:text-9xl font-bold text-white tracking-wide font-space-grotesk">
          DIGITAL
        </h1>

        <h1 className="mt-2 text-6xl md:text-9xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 
          bg-clip-text text-transparent font-space-grotesk">
          DOMINATORS
        </h1>

        <p className="mt-10 text-lg md:text-2xl text-gray-200 tracking-wide font-manrope">
          EXPLORE. LEARN. ELEVATE
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#signup" className="inline-flex items-center px-8 py-3 rounded-full text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition font-ui-sans">
            Join Now
          </a>

          <a href="#events" className="inline-flex items-center px-6 py-3 rounded-full text-white border border-white/20 hover:border-white/40 transition font-ui-sans">
            Explore Events
          </a>
        </div>
      </div>
    </section>
  );
}
