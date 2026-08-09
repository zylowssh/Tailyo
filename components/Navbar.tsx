"use client";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { LogoMark } from "@/components/icons";
import { Button } from "@/components/Button";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Fonctionnalités", href: "#fonctionnalites" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "Ressources", href: "#ressources" },
  { label: "À propos", href: "#a-propos" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 22 });

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <>
      <motion.div className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-primary" style={{ scaleX: progress }} />
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled ? "border-b border-ink/5 bg-cream/85 backdrop-blur-md" : "bg-transparent"
        )}
      >
        <nav className="container-x flex h-16 items-center justify-between sm:h-[72px]">
          <a href="#" className="flex items-center gap-2 text-xl font-extrabold tracking-tight">
            <LogoMark className="h-6 w-6 text-primary" /> Tallyo
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} className="group relative text-sm font-medium text-ink-soft transition hover:text-ink">
                {l.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 rounded bg-primary transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-5 lg:flex">
            <a href="#tarifs" className="text-sm font-medium text-ink-soft transition hover:text-ink">Se connecter</a>
            <Button href="#tarifs">Essayer gratuitement</Button>
          </div>

          {/* burger */}
          <button
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 4 : 0 }} className="block h-[2px] w-6 bg-ink" />
            <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -4 : 0 }} className="block h-[2px] w-6 bg-ink" />
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden border-b border-ink/5 bg-cream lg:hidden"
            >
              <div className="container-x flex flex-col gap-4 py-6">
                {LINKS.map((l) => (
                  <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-base font-medium">
                    {l.label}
                  </a>
                ))}
                <div className="mt-2 flex items-center gap-4">
                  <Button href="#tarifs" onClick={() => setOpen(false)}>Essayer gratuitement</Button>
                  <a href="#tarifs" className="text-sm font-medium text-ink-soft">Se connecter</a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
