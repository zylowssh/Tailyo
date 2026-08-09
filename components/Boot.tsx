"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const BARS = [
  { x: 4, y: 17, h: 11, d: 0.1 },
  { x: 13, y: 6, h: 22, d: 0.2 },
  { x: 22, y: 11, h: 17, d: 0.3 },
];

export function Boot({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {!loaded ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-cream"
        >
          <svg viewBox="0 0 32 32" className="h-20 w-20 text-primary" fill="currentColor">
            {BARS.map((b, i) => (
              <motion.rect
                key={i}
                x={b.x} y={b.y} width={6} height={b.h} rx={3}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.4, delay: b.d, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformOrigin: "bottom" }}
              />
            ))}
          </svg>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
