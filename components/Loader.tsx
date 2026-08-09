"use client";
import { motion, AnimatePresence } from "framer-motion";
import { LogoMark } from "./icons";
import { useEffect, useState } from "react";

export function Loader({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"bars" | "fade">("bars");

  useEffect(() => {
    // Bars animation for 1.2s, then fade out for 0.5s
    const barsTimer = setTimeout(() => setPhase("fade"), 1200);
    const completeTimer = setTimeout(onComplete, 1700);
    return () => {
      clearTimeout(barsTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-cream"
      >
        <div className="relative flex items-center justify-center">
          {/* Animated logo bars */}
          <svg viewBox="0 0 32 32" className="h-16 w-16 text-primary" fill="currentColor">
            <motion.rect
              x="4"
              y="17"
              width="6"
              height="11"
              rx="3"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "bottom" }}
            />
            <motion.rect
              x="13"
              y="6"
              width="6"
              height="22"
              rx="3"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "bottom" }}
            />
            <motion.rect
              x="22"
              y="11"
              width="6"
              height="17"
              rx="3"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "bottom" }}
            />
          </svg>
          
          {/* Fade phase - pulse effect */}
          {phase === "fade" && (
            <motion.div
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 rounded-full bg-primary/20"
            />
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
