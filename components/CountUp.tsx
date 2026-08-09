"use client";
import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function CountUp({
  to, duration = 1.8, format, className,
}: {
  to: number; duration?: number; format?: (v: number) => string; className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [v, setV] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration, ease: [0.16, 1, 0.3, 1], onUpdate: setV });
    return () => c.stop();
  }, [inView, to, duration]);

  return <span ref={ref} className={className}>{format ? format(v) : String(Math.round(v))}</span>;
}
