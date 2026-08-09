"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import { Magnetic } from "@/components/Magnetic";
import { ArrowDoodle, Underline } from "@/components/doodles";
import { CheckIcon } from "@/components/icons";
import { fadeUp } from "@/lib/utils";

export function Pricing({ features }: { features: string[] }) {
  return (
    <motion.aside id="tarifs" variants={fadeUp} initial="hidden" whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className="relative scroll-mt-28 rounded-3xl border border-primary/10 bg-primary-soft p-7 sm:p-9">
      <h2 className="text-xl font-extrabold tracking-tight sm:text-2xl">
        Un prix{" "}
        <span className="relative inline-block">
          simple et juste
          <Underline className="absolute -bottom-2 left-0 h-3 w-full text-primary" />
        </span>
      </h2>

      <p className="mt-6 text-sm font-medium text-ink-soft">Plan PME</p>
      <p className="mt-1 text-5xl font-extrabold tracking-tight">
        199 € <span className="text-base font-semibold text-ink-soft">/ mois</span>
      </p>
      <p className="mt-2 text-xs text-ink-soft">Pour les entreprises de 20 à 500 employés</p>

      <ul className="mt-7 space-y-3">
        {features.map((f, i) => (
          <motion.li key={f} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.07, duration: 0.45 }}
            className="flex items-start gap-3 text-[13px] font-medium">
            <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" /> {f}
          </motion.li>
        ))}
      </ul>

      <div className="relative mt-8">
        <Magnetic className="block">
          <Button href="/signup" size="lg" className="w-full">Essayer gratuitement pendant 14 jours</Button>
        </Magnetic>
        <ArrowDoodle className="absolute -right-4 -top-16 hidden h-14 w-14 rotate-[30deg] text-ink xl:block" />
      </div>
      <p className="mt-4 text-center text-xs font-medium text-primary-deep">Aucune carte bancaire requise</p>
    </motion.aside>
  );
}
