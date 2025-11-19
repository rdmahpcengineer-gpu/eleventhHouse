"use client";

import { motion } from "framer-motion";

export default function GlassmorphicBox() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="glassmorphic-box"
    >
      {/* Diagonal stripes pattern */}
      <div className="stripes-pattern" />

      {/* Content inside the glass box */}
      <div className="relative z-10 p-8 space-y-6">
        <h3 className="text-xl font-bold leading-tight whitespace-nowrap">
          <span className="text-white">Intelligence.</span>
          {" "}
          <span className="text-orange-500">Precision.</span>
          {" "}
          <span className="text-white">Acceleration</span>
        </h3>
        
        <p className="text-gray-200 text-base leading-relaxed">
          AI cloud platform combining HPC performance, digital-twin modeling, autonomous voice AI, and telecom LLM routing—designed to give{" "}
          <span className="text-orange-500 font-medium">you the advantage every business wants but few ever achieve.</span>
        </p>
      </div>
    </motion.div>
  );
}
