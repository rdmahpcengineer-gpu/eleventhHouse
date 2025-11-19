"use client";

import { motion } from "framer-motion";
import GlassmorphicBox from "./GlassmorphicBox";
import AnimatedServicesList from "./AnimatedServicesList";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-full max-w-7xl mx-auto px-6 md:px-12"
    >
      {/* Hero layout with content and glassmorphic box */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Main hero content - Left side */}
        <div className="text-center lg:text-left space-y-8">
          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-6xl font-bold text-white leading-tight"
          >
            Where Industries Meet{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Intelligence
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-lg text-gray-400"
          >
            Turning Computational Power into Industrial Revolution
          </motion.p>

          {/* Animated Services List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <AnimatedServicesList />
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <button className="group relative px-6 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-full transition-all duration-300 shadow-xl hover:shadow-orange-500/50 hover:scale-105">
              <span className="relative z-10 flex flex-col items-center gap-1">
                <span className="text-lg">Contact us</span>
                <span className="text-sm font-medium">agents@eleventhhouse.ai</span>
              </span>
              <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </motion.div>

        </div>

        {/* Glassmorphic box - Right side */}
        <div className="hidden lg:flex justify-center items-center">
          <GlassmorphicBox />
        </div>
      </div>
    </motion.div>
  );
}
