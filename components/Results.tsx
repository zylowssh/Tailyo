"use client";
import { motion } from "framer-motion";
import { CountUp } from "@/components/CountUp";
import { Button } from "@/components/Button";
import { Magnetic } from "@/components/Magnetic";
import { ArrowDoodle, CircleScribble, Underline } from "@/components/doodles";
import { CheckIcon, QuoteIcon, StarIcon } from "@/components/icons";
import { Pricing } from "@/components/Pricing";
import { fadeUp, stagger } from "@/lib/utils";

const FEATURES = [
  "Jusqu'à 100 outils suivis",
  "Intégrations bancaires & cartes",
  "Intégrations SSO (Okta, Google, Microsoft)",
  "Alertes de renouvellement",
  "Tableaux de bord illimités",
  "Support par email",
];

export function Results() {
  return (
    <section id="ressources" className="container-x scroll-mt-28 pb-24">
      <div className="grid items-start gap-8 lg:grid-cols-[1fr_420px]">
        {/* left column */}
        <div className="space-y-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
            className="rounded-2xl border border-ink/8 bg-white p-7 shadow-card sm:p-9">
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              Des résultats{" "}
              <span className="relative inline-block px-2">
                mesurables
                <CircleScribble className="absolute -left-3 -top-2 h-[calc(100%+16px)] w-[calc(100%+24px)] text-primary" />
              </span>
            </h2>

            <motion.div variants={stagger(0.12)} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:divide-x sm:divide-ink/10">
              <motion.div variants={fadeUp} className="sm:pr-6">
                <p className="font-hand text-5xl text-primary">
                  <CountUp to={23} duration={1.4} />%
                </p>
                <p className="mt-2 text-xs leading-relaxed text-ink-soft">d'économies en moyenne</p>
              </motion.div>
              <motion.div variants={fadeUp} className="sm:px-6">
                <p className="font-hand text-5xl text-primary">
                  <CountUp to={40} duration={1.6} />k€
                </p>
                <p className="mt-2 text-xs leading-relaxed text-ink-soft">économisés en moyenne la première année</p>
              </motion.div>
              <motion.div variants={fadeUp} className="sm:pl-6">
                <p className="font-hand text-5xl text-primary">
                  <CountUp to={2} duration={1.2} />h <span className="text-xl text-ink-soft">/ mois</span>
                </p>
                <p className="mt-2 text-xs leading-relaxed text-ink-soft">gagnées sur la gestion des abonnements</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* testimonial */}
          <motion.blockquote variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
            className="rounded-2xl border border-ink/8 bg-white p-7 shadow-card sm:p-9">
            <QuoteIcon className="h-6 w-8 text-primary" />
            <p className="mt-4 text-sm leading-relaxed text-ink">
              Tallyo nous a permis d'identifier plus de 40k€ de licences inutilisées en seulement
              quelques semaines. L'outil est simple, rapide à déployer et l'équipe est super réactive.
            </p>
            <footer className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <cite className="text-xs font-medium not-italic text-ink-soft">
                — Pierre-Etienne Luiggi, CFO @ Spendesk
              </cite>
              <span className="flex items-center gap-2 font-semibold text-ink">
                <svg viewBox="0 0 20 20" className="size-4" fill="currentColor" aria-hidden>
                  <path d="M3 4l7 6-7 6V4ZM10 4l7 6-7 6V4Z" />
                </svg>
                Spendesk
              </span>
            </footer>
          </motion.blockquote>

          {/* rating */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="flex items-center gap-4 px-2">
            <span className="text-xs font-medium text-ink-soft">Noté 5/5 sur</span>
            <span className="grid size-6 place-items-center rounded-full bg-[#FF6B35] text-xs font-extrabold text-white">C</span>
            <span className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <motion.span key={i} initial={{ scale: 0, rotate: -30 }} whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.09, type: "spring", stiffness: 300, damping: 15 }}>
                  <StarIcon className="size-4 text-accent" />
                </motion.span>
              ))}
            </span>
          </motion.div>
        </div>

        {/* pricing */}
        <Pricing features={FEATURES} />
      </div>
    </section>
  );
}
