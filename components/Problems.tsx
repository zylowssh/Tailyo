"use client";
import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const PROBLEMS = [
  {
    img: "/icons/bank.png",
    alt: "Dépenses bancaires",
    title: "Des dépenses éparpillées",
    desc: "Compte bancaire, cartes pro, Stripe… vos abonnements vivent partout, donc nulle part.",
  },
  {
    img: "/icons/binoculars.png",
    alt: "Détection des outils",
    title: "Des outils invisibles",
    desc: "Impossible de savoir qui utilise quoi. Tallyo détecte chaque outil payé par votre entreprise.",
  },
  {
    img: "/icons/bell.png",
    alt: "Renouvellements",
    title: "Des renouvellements surprises",
    desc: "Les paiements tombent sans prévenir. Tallyo vous alerte avant, pas après.",
  },
  {
    img: "/icons/people.png",
    alt: "Utilisateurs et sièges",
    title: "Des sièges fantômes",
    desc: "Des licences payées pour des comptes qui ne servent jamais. On vous montre lesquels.",
  },
  {
    img: "/icons/pie.png",
    alt: "Répartition des dépenses",
    title: "Zéro vision d'ensemble",
    desc: "Sans répartition par équipe ni catégorie, impossible de décider où économiser.",
  },
];

export function Problems() {
  return (
    <section className="container-x py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: EASE }}
        className="mx-auto max-w-2xl text-center"
      >
        <p className="font-hand text-2xl text-primary-deep">spoiler : c'est rarement la faute de quelqu'un</p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">
          Aujourd'hui, votre stack SaaS ressemble à ça.
        </h2>
      </motion.div>

      <div className="mt-16 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-5">
        {PROBLEMS.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
            className="group text-center lg:text-left"
          >
            <img
              src={p.img}
              alt={p.alt}
              draggable={false}
              className="mx-auto h-24 select-none object-contain mix-blend-multiply transition-transform duration-500 group-hover:-rotate-3 group-hover:scale-105 lg:mx-0"
            />
            <h3 className="mt-5 text-lg font-extrabold tracking-tight text-ink">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}