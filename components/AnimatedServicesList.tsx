"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const services = [
  "Ai Customer Service - Human Voice",
  "Cybersecurity Platform - fingerprinting",
  "Cloud Managed Services",
  "Anomaly Detection",
  "Digital Twin",
  "Digital Twin Cloud Assets",
  "Robotic Automation",
];

export default function AnimatedServicesList() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
        className="text-xl md:text-2xl text-orange-500 font-semibold"
      >
        {`- ${services[currentIndex]}`}
      </motion.div>
    </div>
  );
}
