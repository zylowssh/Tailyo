"use client";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/utils";
import { Blob, Underline } from "@/components/doodles";
import { BankIcon, BellIcon, BinocularsIcon, PeopleIcon, PieIcon } from "@/components/icons";

const ITEMS = [
  { icon: BankIcon, blob: "text-blob-lavender", title: "Des abonnements partout", text: "Vos abonnements sont éparpillés entre cartes bancaires, équipes et outils. Impossible d'avoir une vue d'ensemble." },
  { icon: BinocularsIcon, blob: "text-blob-sun", title: "Des gaspillages invisibles", text: "Licences inutilisées, doublons d'outils, abonnements oubliés… L'argent part sans que vous vous en rendiez compte." },
  { icon: BellIcon, blob: "text-blob-rose", title: "Des renouvellements à risque", text: "Sans alerte, les renouvellements automatiques vous coûtent cher et limitent votre marge de négociation." },
  { icon: PeopleIcon, blob: "text-blob-leaf", title: "Qui utilise quoi, vraiment ?", text: "Sans intégrations SSO, personne ne sait qui utilise quels outils et combien de licences sont réellement actives." },
  { icon: PieIcon, blob: "text-blob-sky", title: "Des décisions à l'aveugle", text: "Sans données fiables, difficile de savoir quoi garder, quoi supprimer, et où réaliser des économies." },
];

export function Problems() {
  return (
    <section id="fonctionnalites" className="container-x scroll-mt-28 py-24">
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        className="font-hand text-2xl text-primary -rotate-1">
        “Trop d'outils. Pas assez de visibilité.”
      </motion.p>

      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
        Les problèmes que{" "}
        <span className="relative inline-block">
          Tallyo résout
          <Underline className="absolute -bottom-3 left-0 h-4 w-full text-accent" />
        </span>
      </motion.h2>

      <motion.div variants={stagger(0.09)} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}
        className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
        {ITEMS.map((p, i) => (
          <motion.div key={p.title} variants={fadeUp}
            className="lg:border-l lg:border-ink/10 lg:px-6 lg:first:border-l-0 lg:first:pl-0">
            <div className="relative mx-auto h-24 w-32 lg:mx-0">
              <Blob className={`absolute inset-0 h-full w-full ${p.blob}`} />
              <motion.div whileHover={{ rotate: [0, -7, 5, 0], scale: 1.1 }} transition={{ duration: 0.55 }}
                className="absolute inset-0 grid place-items-center text-ink">
                <p.icon className="h-11 w-11" />
              </motion.div>
            </div>
            <h3 className="mt-5 text-base font-bold leading-snug">{p.title}</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">{p.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
