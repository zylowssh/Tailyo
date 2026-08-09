"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import { Magnetic } from "@/components/Magnetic";
import { PaperPlane } from "@/components/doodles";
import { fadeUp } from "@/lib/utils";

export function FinalCta() {
  return (
    <section className="container-x pb-24">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
        className="flex flex-col items-start justify-between gap-8 rounded-3xl border border-ink/5 bg-cream-deep p-8 sm:p-10 lg:flex-row lg:items-center">
        <div className="flex items-start gap-6">
          <motion.span whileHover={{ x: 8, y: -8, rotate: -10 }} transition={{ type: "spring", stiffness: 200, damping: 12 }}
            className="hidden sm:block">
            <PaperPlane className="h-12 w-12 text-ink" />
          </motion.span>
          <div>
            <h2 className="text-xl font-extrabold tracking-tight sm:text-2xl">
              Reprenez le contrôle. Économisez. Réinvestissez.
            </h2>
            <p className="mt-2 text-sm text-ink-soft">
              Rejoignez les entreprises qui ne laissent plus leurs abonnements leur échapper.
            </p>
          </div>
        </div>
        <Magnetic><Button href="#tarifs" size="lg" className="shrink-0">Essayer gratuitement</Button></Magnetic>
      </motion.div>
    </section>
  );
}
