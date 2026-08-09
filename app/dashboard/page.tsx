"use client";
import { motion } from "framer-motion";
import { Card, Select, AreaChart, BrandTile } from "@/components/dash/ui";
import { SparklesIcon, CardIcon, PiggyIcon } from "@/components/dash/icons";
import { BellIcon } from "@/components/icons";
import { GridIcon, UsersIcon } from "@/components/icons";
import { SPEND_SERIES, ALERTS } from "@/lib/data";

export default function Overview() {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative mb-8 overflow-hidden rounded-[2rem] bg-blob-lavender p-8 md:p-12"
      >
        <div className="relative z-10 max-w-lg">
          <h1 className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
            Bonjour Thomas <span className="inline-block animate-floaty">👋</span>
          </h1>
          <p className="mt-3 text-lg text-ink-soft">
            On a analysé vos dépenses de la nuit. <br />
            <span className="font-hand text-2xl text-primary-deep">J'ai trouvé 3 trucs bizarres...</span>
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/dashboard/alertes" className="rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-cream transition hover:bg-ink/80">
              Voir les 3 alertes
            </a>
            <a href="/dashboard/rapports" className="rounded-full bg-white/60 px-5 py-2.5 text-sm font-bold text-ink backdrop-blur-sm transition hover:bg-white">
              Lire le résumé
            </a>
          </div>
        </div>
        <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <svg className="absolute bottom-4 right-8 hidden md:block" width="120" height="120" viewBox="0 0 120 120" fill="none">
          <path d="M20 80 C 40 20, 80 20, 100 80" stroke="#5B54EE" strokeWidth="3" strokeLinecap="round" strokeDasharray="4 4" />
          <circle cx="100" cy="80" r="6" fill="#F5C542" />
        </svg>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-12">
        <Card d={0.1} className="relative flex flex-col justify-between md:col-span-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-ink-soft">Économies ce mois-ci</p>
            <p className="mt-3 text-5xl font-extrabold tracking-tight text-ink">2 450 €</p>
            <p className="font-hand mt-2 text-xl text-success">C'est 2 mois de Slack gratuits ! 🎉</p>
          </div>
          <div className="mt-6 h-24 w-full">
            <svg viewBox="0 0 200 80" className="h-full w-full">
              <motion.rect x="10" y="40" width="20" height="40" fill="#ECEBFC" rx="4" initial={{ height: 0, y: 80 }} animate={{ height: 40, y: 40 }} transition={{ delay: 0.3 }} />
              <motion.rect x="40" y="20" width="20" height="60" fill="#ECEBFC" rx="4" initial={{ height: 0, y: 80 }} animate={{ height: 60, y: 20 }} transition={{ delay: 0.4 }} />
              <motion.rect x="70" y="30" width="20" height="50" fill="#ECEBFC" rx="4" initial={{ height: 0, y: 80 }} animate={{ height: 50, y: 30 }} transition={{ delay: 0.5 }} />
              <motion.rect x="100" y="10" width="20" height="70" fill="#5B54EE" rx="4" initial={{ height: 0, y: 80 }} animate={{ height: 70, y: 10 }} transition={{ delay: 0.6 }} />
              <motion.path d="M 130 60 Q 160 -10, 190 20" stroke="#F5C542" strokeWidth="4" fill="none" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.8, duration: 1 }} />
            </svg>
          </div>
        </Card>

        <div className="grid gap-4 sm:grid-cols-2 md:col-span-7">
          <Card d={0.2} className="border-transparent bg-cream-deep shadow-none">
            <p className="text-xs font-bold uppercase tracking-widest text-ink-soft">Outils actifs</p>
            <p className="mt-2 text-3xl font-extrabold text-ink">96</p>
            <div className="mt-4 flex -space-x-2">
              <BrandTile name="Slack" />
              <BrandTile name="Notion" />
              <BrandTile name="Figma" />
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-ink text-[10px] font-bold text-cream">+93</span>
            </div>
          </Card>
          <Card d={0.3} className="border-transparent bg-blob-sun shadow-none">
            <p className="text-xs font-bold uppercase tracking-widest text-ink-soft">Renouvellements</p>
            <p className="mt-2 text-3xl font-extrabold text-ink">14 <span className="text-lg font-normal text-ink-soft">j</span></p>
            <p className="mt-2 text-sm font-medium text-ink-soft">HubSpot arrive bientôt...</p>
            <p className="font-hand text-lg text-danger">Attention au budget !</p>
          </Card>
        </div>
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-[1fr_380px]">
        <Card d={0.4} className="bg-white">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-bold text-ink">L'évolution de vos dépenses</h2>
            <Select label="6 derniers mois" />
          </div>
          <AreaChart values={SPEND_SERIES} />
          <div className="mt-4 flex items-center gap-2 border-t border-ink/5 pt-4">
            <SparklesIcon className="h-4 w-4 text-primary" />
            <p className="text-sm text-ink-soft">
              <span className="font-bold text-ink">IA Tallyo :</span> Vos dépenses ont augmenté de 12% à cause de l'ajout de 4 nouveaux designers sur Figma.
            </p>
          </div>
        </Card>

        <Card d={0.5} className="bg-ink text-cream">
          <h2 className="flex items-center gap-2 text-lg font-bold text-cream">
            <BellIcon className="h-5 w-5 text-accent" /> Le radar
          </h2>
          <ul className="mt-6 space-y-6">
            {ALERTS.slice(0, 3).map((a, i) => (
              <li key={i} className="relative border-b border-cream/10 pb-4 last:border-0">
                <span className={`font-hand absolute -left-2 -top-4 text-lg ${a.tone === "red" ? "text-danger" : a.tone === "orange" ? "text-accent" : "text-primary"}`}>
                  {a.tone === "red" ? "🚨" : a.tone === "orange" ? "👀" : "✨"}
                </span>
                <p className="text-sm font-bold leading-snug text-cream">{a.title}</p>
                <p className="mt-1 text-xs text-cream/60">{a.sub}</p>
              </li>
            ))}
          </ul>
          <a href="/dashboard/alertes" className="mt-4 inline-block font-hand text-xl text-accent hover:text-accent/80">Tout voir →</a>
        </Card>
      </div>
    </div>
  );
}
