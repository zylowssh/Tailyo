"use client";
import { motion } from "framer-motion";

function D({ d, w = 3, delay = 0, duration = 0.7, opacity = 1 }: {
  d: string; w?: number; delay?: number; duration?: number; opacity?: number;
}) {
  return (
    <motion.path
      d={d} stroke="currentColor" strokeWidth={w} strokeLinecap="round"
      strokeLinejoin="round" fill="none" opacity={opacity}
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration, delay, ease: "easeInOut" }}
    />
  );
}

/** Double-stroke scribble underline */
export function Underline({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 20" fill="none" preserveAspectRatio="none" className={className} aria-hidden>
      <D d="M6 12 C 60 6, 130 5, 234 8" w={7} />
      <D d="M16 16 C 84 12, 156 11, 226 13" w={5} delay={0.15} opacity={0.75} />
    </svg>
  );
}

/** Loose ellipse scribble (circles a word) */
export function CircleScribble({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 70" fill="none" preserveAspectRatio="none" className={className} aria-hidden>
      <D
        d="M24 40 C 26 18, 92 8, 140 13 C 184 18, 196 38, 178 51 C 154 66, 62 66, 32 56 C 8 48, 14 30, 40 22"
        w={3.5} duration={0.9}
      />
    </svg>
  );
}

/** Curved arrow — head lands bottom-left by default. Flip with scale utilities. */
export function ArrowDoodle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 90 90" fill="none" className={className} aria-hidden>
      <D d="M82 8 C 62 16, 36 32, 20 62" w={3} />
      <D d="M15 44 C 16 51, 18 57, 20 63 C 26 59, 32 56, 39 54" w={3} delay={0.45} duration={0.35} />
    </svg>
  );
}

/** Three emphasis ticks */
export function Dashes({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 60" fill="none" className={className} aria-hidden>
      <D d="M10 8 L 22 20" w={3.5} />
      <D d="M4 32 L 20 32" w={3.5} delay={0.12} />
      <D d="M12 54 L 24 44" w={3.5} delay={0.24} />
    </svg>
  );
}

/** Sparkle strokes (top-right corner doodle) */
export function Sparkle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <D d="M8 36 C 12 26, 18 17, 30 10" w={3} />
      <D d="M26 40 C 30 32, 36 26, 44 22" w={3} delay={0.15} />
    </svg>
  );
}

/** Line-art paper plane */
export function PaperPlane({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden>
      <path d="M6 30 L58 8 L40 56 L30 38 L6 30 Z" stroke="currentColor" strokeWidth={2.5} strokeLinejoin="round" />
      <path d="M30 38 L58 8" stroke="currentColor" strokeWidth={2.5} strokeLinejoin="round" />
      <path d="M12 48 L20 44 M8 40 L14 38" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" />
    </svg>
  );
}

/** Soft irregular filled blob (color via text-*) */
export function Blob({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" className={className} aria-hidden>
      <path
        d="M100 12 C 140 8, 178 34, 182 74 C 186 116, 150 148, 104 150 C 58 152, 20 128, 16 86 C 12 44, 58 16, 100 12 Z"
        fill="currentColor"
      />
    </svg>
  );
}
