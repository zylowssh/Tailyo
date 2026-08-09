"use client";
import { motion } from "framer-motion";
import { Card, PageHead, GhostBtn, Select, Sparkline, AreaChart, Donut, BrandTile, fadeUp } from "@/components/dash/ui";
import { CalendarIcon, DownloadIcon, InfoIcon, PiggyIcon, SparklesIcon, CardIcon } from "@/components/dash/icons";
import { GridIcon, UsersIcon, BellIcon } from "@/components/icons";
import { SPEND_SERIES, RENEWALS, CATS, TEAMS_SPEND, ALERTS } from "@/lib/data";

export default function Overview() {
  return (
    <>
      <PageHead title="Bonjour Thomas," sub="Voici l'état de vos abonnements SaaS.">
        <GhostBtn><CalendarIcon className="h-3.5 w-3.5" /> 1 – 30 avril 2024</GhostBtn>
        <GhostBtn><DownloadIcon className="h-3.5 w-3.5" /> Exporter</GhostBtn>
      </PageHead>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Card d={0.1} className="flex items-start justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-ink-soft">Dépenses totales</p>
            <p className="mt-2 text-2xl font-extrabold text-ink">143 650 €</p>
            <p className="mt-1 text-[11px] text-ink-soft"><span className="font-semibold text-success">↗ 12%</span> vs mars 2024</p>
          </div>
          <Sparkline values={[40, 55, 48, 62, 58, 74, 70, 88]} w={110} h={40} id="st1" />
        </Card>
        <Card d={0.15} className="flex items-start justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-ink-soft">Outils suivis</p>
            <p className="mt-2 text-2xl font-extrabold text-ink">96</p>
            <p className="mt-1 text-[11px] text-success">↗ 4 nouveaux</p>
          </div>
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-success-soft"><GridIcon className="h-4 w-4 text-success" /></span>
        </Card>
        <Card d={0.2} className="flex items-start justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-ink-soft">Abonnements actifs</p>
            <p className="mt-2 text-2xl font-extrabold text-ink">128</p>
            <p className="mt-1 text-[11px] text-warn">↘ 3 annulés</p>
          </div>
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-warn-soft"><CardIcon className="h-4 w-4 text-warn" /></span>
        </Card>
        <Card d={0.25} className="flex items-start justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-ink-soft">Économies potentielles</p>
            <p className="mt-2 text-2xl font-extrabold text-ink">24 350 €</p>
            <a href="#" className="mt-1 inline-block text-[11px] font-semibold text-primary hover:text-primary-deep">Voir les opportunités →</a>
          </div>
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10"><PiggyIcon className="h-4 w-4 text-primary-deep" /></span>
        </Card>
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_380px]">
        <Card d={0.3}>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="flex items-center gap-2 text-sm font-bold text-ink">Dépenses au cours du temps <InfoIcon className="h-3.5 w-3.5 text-ink-soft" /></h2>
            <Select label="Mensuel" />
          </div>
          <AreaChart values={SPEND_SERIES} />
        </Card>
        <Card d={0.35}>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm font-bold text-ink">Renouvellements à venir</h2>
            <a href="/dashboard/abonnements" className="text-xs font-semibold text-primary hover:text-primary-deep">Voir tout</a>
          </div>
          <ul className="space-y-3">
            {RENEWALS.map((r) => (
              <li key={r.name} className="flex items-center gap-3 rounded-xl border border-ink/5 p-2.5">
                <BrandTile name={r.name} />
                <span className="flex-1"><span className="block text-[13px] font-semibold text-ink">{r.name}</span><span className="block text-[11px] text-ink-soft">{r.amount}</span></span>
                <span className="text-right"><span className="block text-[11px] text-ink-soft">{r.date}</span><span className={`block text-[11px] font-semibold ${r.days < 30 ? "text-warn" : "text-success"}`}>● Dans {r.days} jours</span></span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        <Card d={0.4}>
          <h2 className="mb-5 text-sm font-bold text-ink">Dépenses par catégorie</h2>
          <div className="flex items-center gap-6">
            <Donut data={CATS} centerTop="143 650 €" centerSub="Total" />
            <ul className="flex-1 space-y-2">
              {CATS.map((c) => (
                <li key={c.label} className="flex items-center gap-2 text-[11px]"><span className="h-2.5 w-2.5 rounded-sm" style={{ background: c.color }} /><span className="flex-1 text-ink-soft">{c.label}</span><span className="font-semibold text-ink">{c.value.toLocaleString("fr-FR")} €</span><span className="w-8 text-right text-ink-soft">{c.pct}</span></li>
              ))}
            </ul>
          </div>
        </Card>
        <Card d={0.45}>
          <h2 className="mb-5 text-sm font-bold text-ink">Dépenses par équipe</h2>
          <ul className="space-y-3.5">
            {TEAMS_SPEND.map((t, i) => (
              <li key={t.label} className="grid grid-cols-[64px_1fr_auto] items-center gap-3 text-[11px]">
                <span className="text-ink-soft">{t.label}</span>
                <span className="h-1.5 overflow-hidden rounded-full bg-ink/5"><motion.span initial={{ width: 0 }} animate={{ width: `${t.pct * 4}%` }} transition={{ delay: 0.6 + i * 0.08, duration: 0.7, ease: "easeOut" }} className="block h-full rounded-full bg-primary" /></span>
                <span className="font-semibold text-ink">{t.amount} <span className="ml-1 font-normal text-ink-soft">{t.share}</span></span>
              </li>
            ))}
          </ul>
        </Card>
        <Card d={0.5} className="lg:col-span-2 xl:col-span-1">
          <div className="mb-4 flex items-center justify-between"><h2 className="text-sm font-bold text-ink">Alertes</h2><a href="/dashboard/alertes" className="text-xs font-semibold text-primary hover:text-primary-deep">Voir tout</a></div>
          <ul className="space-y-3">
            {ALERTS.slice(0, 3).map((a) => (
              <li key={a.title} className="flex items-start gap-3 rounded-xl border border-ink/5 p-3">
                <span className={`mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full ${a.tone === "red" ? "bg-danger-soft text-danger" : a.tone === "orange" ? "bg-warn-soft text-warn" : "bg-primary/10 text-primary-deep"}`}>
                  {a.tone === "orange" ? <UsersIcon className="h-3.5 w-3.5" /> : <BellIcon className="h-3.5 w-3.5" />}
                </span>
                <span><span className="block text-[13px] font-semibold leading-snug text-ink">{a.title}</span><span className="mt-0.5 block text-[11px] text-ink-soft">{a.sub}</span></span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <motion.div {...fadeUp(0.55)} className="mt-6 flex flex-wrap items-center gap-4 rounded-2xl border border-primary/15 bg-primary/5 p-5">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15"><SparklesIcon className="h-5 w-5 text-primary-deep" /></span>
        <div className="flex-1"><p className="text-sm font-bold text-ink">Nous avons identifié 24 350 € d'économies potentielles</p><p className="text-xs text-ink-soft">16 sièges inutilisés, 3 outils en doublon et 5 abonnements peu utilisés.</p></div>
        <a href="#" className="rounded-lg border border-primary/30 bg-white px-4 py-2.5 text-xs font-bold text-primary-deep transition hover:bg-primary hover:text-white">Découvrir les opportunités →</a>
      </motion.div>
    </>
  );
}
