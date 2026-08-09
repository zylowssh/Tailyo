"use client";
import { motion } from "framer-motion";
import { CountUp } from "@/components/CountUp";
import { ToolChip } from "@/components/ToolChip";
import { EASE, frInt } from "@/lib/utils";
import {
  BellIcon, ChartIcon, ChevronDownIcon, GearIcon, GridIcon, HomeIcon,
  LogoMark, TrendUpIcon, UsersIcon,
} from "@/components/icons";

const MONTHS = ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"];
const VALUES = [82, 86, 118, 108, 112, 106, 138, 158, 128, 148, 152, 160];
const W = 640, H = 200;

const PTS = VALUES.map((v, i) => {
  const x = 12 + (i * (W - 24)) / (VALUES.length - 1);
  const y = H - 30 - (v / 200) * (H - 70);
  return [x, y] as const;
});
const LINE = PTS.map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");
const AREA = `${LINE} L ${PTS[PTS.length - 1][0].toFixed(1)} ${H - 22} L ${PTS[0][0].toFixed(1)} ${H - 22} Z`;
const [LX, LY] = PTS[PTS.length - 1];

const STATS = [
  { label: "Dépense totale", value: 143650, euro: true, delta: "+12% vs mois dernier" },
  { label: "Abonnements", value: 96, delta: "+4 nouveaux" },
  { label: "Outils suivis", value: 42 },
  { label: "Économies potentielles", value: 24350, euro: true, link: "Identifier" },
];

const TOOLS = [
  { name: "Salesforce", amount: "36 000 €", chip: "salesforce" },
  { name: "Slack", amount: "15 600 €", chip: "slack" },
  { name: "Miro", amount: "9 200 €", chip: "miro" },
  { name: "Notion", amount: "8 100 €", chip: "notion" },
  { name: "Adobe Creative Cloud", amount: "6 300 €", chip: "adobe" },
];

const RENEWALS = [
  { name: "Monday.com", amount: "2 450 €", date: "15 mai 2026", chip: "monday" },
  { name: "HubSpot", amount: "7 200 €", date: "22 mai 2026", chip: "hubspot" },
  { name: "DocuSign", amount: "1 320 €", date: "5 juin 2026", chip: "docusign" },
  { name: "Zoom", amount: "2 100 €", date: "18 juin 2026", chip: "zoom" },
];

const NAV = [HomeIcon, GridIcon, UsersIcon, BellIcon, ChartIcon, GearIcon];

export function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 48, rotate: 1.5 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 1, ease: EASE, delay: 0.5 }}
    >
      <div className="animate-floaty">
        <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-lift">
          <div className="flex items-stretch">
            {/* sidebar */}
            <div className="flex w-12 flex-col items-center gap-1.5 bg-[#1E2235] py-4 sm:w-14">
              <LogoMark className="mb-3 h-6 w-6 text-primary" />
              {NAV.map((I, i) => (
                <span key={i} className={
                  i === 0
                    ? "grid size-9 place-items-center rounded-lg bg-primary text-white"
                    : "grid size-9 place-items-center rounded-lg text-white/45 transition hover:bg-white/10 hover:text-white"
                }>
                  <I className="h-4.5 w-4.5 h-[18px] w-[18px]" />
                </span>
              ))}
            </div>

            {/* main */}
            <div className="flex-1 bg-[#FAFAF7] p-3 sm:p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold">Vue d'ensemble</p>
                <button className="flex items-center gap-1 rounded-lg border border-ink/10 bg-white px-2.5 py-1.5 text-[10px] font-medium text-ink-soft transition hover:border-primary/50 hover:text-ink">
                  30 derniers jours <ChevronDownIcon className="h-3 w-3" />
                </button>
              </div>

              {/* KPI cards */}
              <div className="mt-3 grid grid-cols-2 gap-2 xl:grid-cols-4">
                {STATS.map((s, i) => (
                  <motion.div key={s.label} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.95 + i * 0.1, duration: 0.5, ease: EASE }}
                    className="rounded-xl border border-ink/10 bg-white p-3 transition-shadow hover:shadow-card">
                    <p className="text-[10px] font-medium text-ink-soft">{s.label}</p>
                    <p className="mt-1 text-base font-extrabold tracking-tight sm:text-lg">
                      <CountUp to={s.value} duration={1.6} format={(v) => (s.euro ? `${frInt(v)} €` : frInt(v))} />
                    </p>
                    {s.delta && (
                      <p className="mt-1 flex items-center gap-1 text-[10px] font-semibold text-emerald-600">
                        <TrendUpIcon className="h-3 w-3" /> {s.delta}
                      </p>
                    )}
                    {s.link && <span className="mt-1 block cursor-pointer text-[10px] font-semibold text-primary-deep hover:underline">{s.link}</span>}
                  </motion.div>
                ))}
              </div>

              {/* chart */}
              <div className="mt-3 rounded-xl border border-ink/10 bg-white p-3 sm:p-4">
                <p className="text-[11px] font-semibold">Dépenses au cours du temps</p>
                <div className="mt-2 flex gap-2">
                  <div className="flex flex-col justify-between py-1 text-right text-[8px] leading-none text-ink-soft/70">
                    {["200k €", "150k €", "100k €", "50k €", "0 €"].map((t) => <span key={t}>{t}</span>)}
                  </div>
                  <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full flex-1">
                    <defs>
                      <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#5B54EE" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#5B54EE" stopOpacity="0.02" />
                      </linearGradient>
                    </defs>
                    {[0, 50, 100, 150, 200].map((v) => {
                      const y = H - 30 - (v / 200) * (H - 70);
                      return <line key={v} x1="12" x2={W - 12} y1={y} y2={y} stroke="rgba(22,22,31,0.07)" strokeDasharray="4 6" />;
                    })}
                    <motion.path d={AREA} fill="url(#areaGrad)" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                      transition={{ delay: 1.7, duration: 0.9 }} />
                    <motion.path d={LINE} fill="none" stroke="#5B54EE" strokeWidth={3}
                      strokeLinecap="round" strokeLinejoin="round"
                      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                      transition={{ delay: 1.2, duration: 1.6, ease: "easeInOut" }} />
                    <motion.circle cx={LX} cy={LY} r={5} fill="#5B54EE" stroke="#fff" strokeWidth={2}
                      style={{ transformBox: "fill-box", transformOrigin: "center" }}
                      initial={{ scale: 0 }} animate={{ scale: 1 }}
                      transition={{ delay: 2.7, type: "spring", stiffness: 260, damping: 16 }} />
                    <motion.g style={{ transformBox: "fill-box", transformOrigin: "center" }}
                      initial={{ opacity: 0, scale: 0.6, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: 2.9, type: "spring", stiffness: 220, damping: 18 }}>
                      <rect x={LX - 100} y={LY - 42} width={94} height={28} rx={9} fill="#fff" stroke="rgba(22,22,31,0.15)" />
                      <text x={LX - 53} y={LY - 23} textAnchor="middle" fontSize={12} fontWeight={700} fill="#16161F">143 650 €</text>
                    </motion.g>
                  </svg>
                </div>
                <div className="mt-1 flex justify-between pl-8 text-[8px] text-ink-soft/70">
                  {MONTHS.map((m, i) => (
                    <span key={m} className={i % 2 === 1 ? "hidden sm:block" : ""}>{m}</span>
                  ))}
                </div>
              </div>

              {/* lists */}
              <div className="mt-3 grid gap-3 md:grid-cols-2">
                <div className="rounded-xl border border-ink/10 bg-white p-3 sm:p-4">
                  <p className="text-[11px] font-semibold">Top outils par dépense</p>
                  <ul className="mt-2 space-y-2">
                    {TOOLS.map((t, i) => (
                      <motion.li key={t.name} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.5 + i * 0.08, duration: 0.4 }}
                        className="flex items-center gap-2">
                        <ToolChip kind={t.chip} />
                        <span className="flex-1 truncate text-[11px] font-medium">{t.name}</span>
                        <span className="text-[11px] font-semibold">{t.amount}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <span className="mt-3 block cursor-pointer text-[10px] font-semibold text-primary-deep hover:underline">Voir tous les outils</span>
                </div>

                <div className="rounded-xl border border-ink/10 bg-white p-3 sm:p-4">
                  <p className="text-[11px] font-semibold">Renouvellements à venir</p>
                  <ul className="mt-2 space-y-2">
                    {RENEWALS.map((t, i) => (
                      <motion.li key={t.name} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.6 + i * 0.08, duration: 0.4 }}
                        className="flex items-center gap-2">
                        <ToolChip kind={t.chip} />
                        <span className="flex-1 truncate text-[11px] font-medium">{t.name}</span>
                        <span className="text-[11px] font-semibold">{t.amount}</span>
                        <span className="hidden w-16 text-right text-[9px] text-ink-soft/70 sm:block">{t.date}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <span className="mt-3 block cursor-pointer text-[10px] font-semibold text-primary-deep hover:underline">Voir toutes les alertes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
