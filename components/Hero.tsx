"use client";
import { motion } from "framer-motion";
import { EASE } from "@/lib/utils";
import { Button } from "@/components/Button";
import { Magnetic } from "@/components/Magnetic";
import { Tilt } from "@/components/Tilt";
import { ArrowDoodle, Blob, Dashes, Sparkle, Underline } from "@/components/doodles";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";
import { DashboardMockup } from "@/components/DashboardMockup";

const CHECKS = ["Installation en 15 minutes", "Aucune carte bancaire", "Annulez à tout moment"];

export function Hero() {
  return (
    <section className="container-x grid items-start gap-16 pb-28 pt-32 sm:pt-36 lg:grid-cols-2 lg:gap-10">
      {/* ——— left ——— */}
      <div>
        <div className="relative inline-block">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-block rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold text-primary-deep"
          >
            Le contrôle de vos abonnements SaaS, enfin.
          </motion.span>
          <ArrowDoodle className="absolute -right-16 -top-8 hidden h-12 w-12 text-ink lg:block" />
        </div>

        <h1 className="mt-6 text-5xl font-extrabold leading-[1.04] tracking-tight sm:text-6xl xl:text-7xl">
          {["Découvrez,", "comprenez,"].map((l, i) => (
            <span key={l} className="block overflow-hidden pb-1">
              <motion.span className="block" initial={{ y: "112%" }} animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.15 + i * 0.12 }}>
                {l}
              </motion.span>
            </span>
          ))}
          <span className="block overflow-hidden pb-3">
            <motion.span className="relative block text-primary" initial={{ y: "112%" }} animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.4 }}>
              économisez.
              <Underline className="absolute -bottom-4 left-0 h-5 w-full text-primary" />
            </motion.span>
          </span>
        </h1>

        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.55 }}
          className="mt-6 max-w-md text-[15px] leading-relaxed text-ink-soft">
          Tallyo vous donne une visibilité claire sur tous vos abonnements SaaS, détecte les
          gaspillages et vous alerte avant chaque renouvellement.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.68 }}
          className="mt-8 flex flex-wrap items-center gap-6">
          <Magnetic><Button href="/signup" size="lg">Essayer gratuitement</Button></Magnetic>
          <a href="/dashboard" className="group inline-flex items-center gap-2 text-sm font-semibold">
            Voir la démo (2 min)
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        <ul className="mt-10 space-y-3">
          {CHECKS.map((c, i) => (
            <motion.li key={c} initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.85 + i * 0.1 }}
              className="flex items-center gap-3 text-sm font-medium text-ink-soft">
              <CheckIcon className="h-4 w-4 text-primary" /> {c}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* ——— right : dashboard ——— */}
      <div className="relative isolate lg:pl-4">
        <Blob className="absolute -bottom-12 -left-12 -z-10 h-64 w-72 text-blob-sun" />
        <Dashes className="absolute -left-16 top-1/2 hidden h-14 w-10 text-ink lg:block" />
        <Sparkle className="absolute -top-12 right-4 h-10 w-10 text-ink" />

        <Tilt max={5}>
          <DashboardMockup />
        </Tilt>

        <div className="absolute -bottom-16 right-0 hidden items-end gap-3 md:flex">
          <ArrowDoodle className="h-12 w-12 -scale-y-100 rotate-[15deg] text-ink" />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2, duration: 0.8 }}
            className="font-hand text-2xl leading-tight text-ink -rotate-3">
            Tout est centralisé.<br />Enfin.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
