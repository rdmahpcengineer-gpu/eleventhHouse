"use client";

import { motion } from "framer-motion";

const items = [
  "Customer care",
  "Telecoms",
  "Cloud managed",
  "Cyber-Security",
  "Anomaly detection",
  "Digital twin",
  "Cloud digital twin",
  "Robotic automation",
];

export default function ScrollingTextRoll() {
  return (
    <div className="relative h-48 w-full overflow-hidden flex items-center justify-center mb-8">
      {/* Gradient overlay for fade effect at top and bottom */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black via-transparent to-black z-10" />

      {/* Scrolling container */}
      <motion.div
        className="flex flex-col space-y-6"
        initial={{ y: 0 }}
        animate={{ y: -1000 }}
        transition={{
          duration: 15,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* First set of items */}
        {items.map((item, idx) => (
          <div
            key={`first-${idx}`}
            className="text-center text-gray-300 text-lg md:text-xl font-medium whitespace-nowrap"
          >
            {item}
          </div>
        ))}

        {/* Duplicate set for seamless loop */}
        {items.map((item, idx) => (
          <div
            key={`second-${idx}`}
            className="text-center text-gray-300 text-lg md:text-xl font-medium whitespace-nowrap"
          >
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
