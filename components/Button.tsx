"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Button({
  children, href, variant = "primary", size = "md", className, onClick,
}: {
  children: React.ReactNode; href?: string; variant?: "primary" | "ghost";
  size?: "md" | "lg"; className?: string; onClick?: () => void;
}) {
  const cls = cn(
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl font-semibold",
    size === "md" ? "px-5 py-3 text-sm" : "px-7 py-4 text-base",
    variant === "primary"
      ? "bg-primary text-white shadow-[0_12px_28px_-12px_rgba(91,84,238,0.8)] hover:bg-primary-deep"
      : "text-ink hover:text-primary-deep",
    className
  );
  const inner = (
    <>
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      {variant === "primary" && (
        <span
          aria-hidden
          className="absolute inset-0 -translate-x-[110%] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[110%]"
        />
      )}
    </>
  );
  const motionProps = { whileTap: { scale: 0.96 }, whileHover: { y: -2 } } as const;

  return href ? (
    <motion.a href={href} onClick={onClick} className={cls} {...motionProps}>{inner}</motion.a>
  ) : (
    <motion.button type="button" onClick={onClick} className={cls} {...motionProps}>{inner}</motion.button>
  );
}
