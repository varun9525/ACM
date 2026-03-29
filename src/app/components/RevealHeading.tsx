import { motion } from "motion/react";
import React from "react";

interface RevealHeadingProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}

export default function RevealHeading({ children, className = "", style, delay = 0.1 }: RevealHeadingProps) {
  return (
    <div className={`relative w-fit inline-block overflow-hidden pb-1 ${className}`} style={style}>
      {/* The Text is hidden initially and snaps to visible exactly as the bar finishes covering it */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.01, delay: delay + 0.45 }}
        viewport={{ once: true, margin: "-50px" }}
        className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40"
      >
        {children}
      </motion.div>

      {/* The Solid Block Curtain: expands from left to fill container, then retracts to the right */}
      <motion.div
        initial={{ left: 0, right: "100%" }}
        whileInView={{
          left: ["0%", "0%", "100%"],
          right: ["100%", "0%", "0%"]
        }}
        transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1], delay, times: [0, 0.5, 1] }}
        viewport={{ once: true, margin: "-50px" }}
        className="absolute top-0 bottom-0 bg-gradient-to-r from-emerald-400 to-green-500 z-10"
      />
    </div>
  );
}
