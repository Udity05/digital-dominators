import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">

      {/* Logo / Text */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="text-3xl md:text-7xl font-['GoogleSans'] font-bold  text-purple-500 mb-6"
      >
        Digital Dominators
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 text-gray-400 mb-8 font-['GoogleSans']"
      >
        Loading experience...
      </motion.p>

      {/* Progress Bar */}
      <div className="mt-20 w-64 h-1 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </div>

      
    </div>
  );
}
