"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CursorShadow = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-50 rounded-full bg-blue-500/40 blur-3xl"
      style={{
        width: "100px",
        height: "100px",
        x: cursorPos.x - 50,
        y: cursorPos.y - 50,
      }}
      animate={{ scale: [0.9, 1.1, 0.9] }}
      transition={{
        repeat: Infinity,
        duration: 4,
        ease: "easeInOut",
      }}
    />
  );
};

export default CursorShadow;
