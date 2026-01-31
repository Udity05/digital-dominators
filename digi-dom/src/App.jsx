import { Routes, Route } from "react-router-dom";
import { HeroUIProvider } from "@heroui/react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useState, useEffect } from "react"; 

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Stats from "./components/Stats";
import About from "./components/About";
import Team from "./components/Team";
import Events from "./components/Events";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Partner from "./components/Partner";

function MainPage() {
  return (
    <>
      <Home />
      <Stats />
      <About />
      <Partner />
      <Team />
      <Events />
      <Testimonials />
      <FAQ />
    </>
  );
}

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;


  return (
    <HeroUIProvider>
      <div className="bg-black min-h-screen">

        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-purple-500 origin-left z-50"
          style={{ scaleX }}
        />

        <Navbar />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/about" element={<Partner />} />
          <Route path="/team" element={<Team />} />
          <Route path="/events" element={<Events />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>

        <Footer />
      </div>
    </HeroUIProvider>
  );
}

export default App;
