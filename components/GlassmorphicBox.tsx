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
        <h3 className="text-2xl font-bold text-white">Advanced Features</h3>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500/80 mt-1" />
            <span className="text-gray-200">Real-time Processing</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500/80 mt-1" />
            <span className="text-gray-200">AI-Powered Analytics</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500/80 mt-1" />
            <span className="text-gray-200">Scalable Infrastructure</span>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
