"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "@/components/icons";
import { SearchIcon } from "@/components/dash/icons";
import type { ReactNode } from "react";

export const fadeUp = (d = 0): any => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: d, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
});

export function Card({ children, className, d = 0 }: { children: ReactNode; className?: string; d?: number }) {
  return (
    <motion.div {...fadeUp(d)} className={cn("rounded-2xl border border-ink/5 bg-white p-5 shadow-card sm:p-6", className)}>
      {children}
    </motion.div>
  );
}

export function PageHead({ title, sub, children }: { title: string; sub: string; children?: ReactNode }) {
  return (
    <motion.div {...fadeUp(0.05)} className="mb-6 flex flex-wrap items-end justify-between gap-4">
      <div>
        <h1 className="text-xl font-extrabold tracking-tight text-ink sm:text-2xl">{title}</h1>
        <p className="mt-1 text-sm text-ink-soft">{sub}</p>
      </div>
      {children && <div className="flex flex-wrap items-center gap-2">{children}</div>}
    </motion.div>
  );
}

export function GhostBtn({ children, className, onClick }: { children: ReactNode; className?: string; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-2 rounded-lg border border-ink/10 bg-white px-3.5 py-2 text-xs font-semibold text-ink transition hover:border-primary/40 hover:text-primary-deep",
        className
      )}
    >
      {children}
    </button>
  );
}

export function SearchBox({ placeholder }: { placeholder: string }) {
  return (
    <div className="relative w-full max-w-xs">
      <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft" />
      <input
        placeholder={placeholder}
        className="w-full rounded-lg border border-ink/10 bg-cream-deep/40 py-2 pl-9 pr-3 text-xs text-ink outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
      />
    </div>
  );
}

export function Select({ label }: { label: string }) {
  return (
    <button className="inline-flex items-center gap-2 rounded-lg border border-ink/10 bg-white px-3 py-2 text-xs font-medium text-ink-soft transition hover:border-primary/40">
      {label} <ChevronDownIcon className="h-3.5 w-3.5" />
    </button>
  );
}

const TONES: Record<string, string> = {
  green: "bg-success-soft text-success",
  orange: "bg-warn-soft text-warn",
  red: "bg-danger-soft text-danger",
  purple: "bg-primary/10 text-primary-deep",
  gray: "bg-ink/5 text-ink-soft",
};
export function Pill({ tone = "green", children }: { tone?: string; children: ReactNode }) {
  return <span className={cn("inline-flex rounded-full px-2 py-0.5 text-[11px] font-semibold", TONES[tone])}>{children}</span>;
}
export const statusTone = (s: string) =>
  s === "Actif" ? "green" : s === "Inactif" ? "red" : s === "Élevée" ? "red" : s === "Moyenne" ? "orange" : s === "Faible" ? "green" : "orange";

export function Table({ head, children }: { head: string[]; children: ReactNode }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[680px] text-left text-sm">
        <thead>
          <tr className="border-b border-ink/5 text-[10px] uppercase tracking-[0.12em] text-ink-soft">
            {head.map((h) => (<th key={h} className="pb-3 pr-4 font-semibold">{h}</th>))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}
export const td = "py-3.5 pr-4";

export function Pagination({ label, pages }: { label: string; pages: number[] }) {
  return (
    <div className="mt-4 flex items-center justify-between text-xs text-ink-soft">
      <span>{label}</span>
      <div className="flex items-center gap-1">
        <button className="rounded-md px-2 py-1 hover:bg-ink/5">‹</button>
        {pages.map((p, i) =>
          p === -1 ? (
            <span key={`e${i}`} className="px-1">…</span>
          ) : (
            <button key={p} className={cn("rounded-md px-2 py-1", p === 1 ? "bg-primary text-white" : "hover:bg-ink/5")}>{p}</button>
          )
        )}
        <button className="rounded-md px-2 py-1 hover:bg-ink/5">›</button>
      </div>
    </div>
  );
}

const BRANDS: Record<string, string> = {
  Slack: "#611F69", "Microsoft 365": "#0078D4", HubSpot: "#FF7A59", Figma: "#A259FF", Notion: "#111111",
  Zoom: "#0B5CFF", Miro: "#FFD02F", Zendesk: "#03363D", "Monday.com": "#FF3D57", DocuSign: "#FFCC22",
  Atlassian: "#0052CC", Dropbox: "#0061FF", "Google Workspace": "#4285F4", Okta: "#007DC1", Stripe: "#635BFF",
};
export function BrandTile({ name, className }: { name: string; className?: string }) {
  const bg = BRANDS[name] ?? "#5B54EE";
  const darkText = bg === "#FFD02F" || bg === "#FFCC22";
  return (
    <span className={cn("grid h-8 w-8 shrink-0 place-items-center rounded-lg text-xs font-extrabold", darkText ? "text-ink" : "text-white", className)} style={{ background: bg }}>
      {name[0]}
    </span>
  );
}

export function Avatar({ name, className }: { name: string; className?: string }) {
  const initials = name.split(" ").map((w) => w[0]).slice(0, 2).join("");
  return (
    <span className={cn("grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary/10 text-[11px] font-extrabold text-primary-deep", className)}>
      {initials}
    </span>
  );
}

export function Sparkline({ values, w = 140, h = 44, id = "sp" }: { values: number[]; w?: number; h?: number; id?: string }) {
  const max = Math.max(...values), min = Math.min(...values);
  const pts = values.map((v, i) => [(i / (values.length - 1)) * (w - 8) + 4, h - 4 - ((v - min) / (max - min)) * (h - 10)]);
  const d = pts.map((p, i) => `${i ? "L" : "M"}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(" ");
  const last = pts[pts.length - 1];
  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: w, height: h }} className="overflow-visible">
      <defs><linearGradient id={id} x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#5B54EE" stopOpacity=".25" /><stop offset="100%" stopColor="#5B54EE" stopOpacity="0" /></linearGradient></defs>
      <path d={`${d} L${last[0]},${h} L4,${h} Z`} fill={`url(#${id})`} />
      <motion.path d={d} fill="none" stroke="#5B54EE" strokeWidth="2" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.5, ease: "easeOut" }} />
      <circle cx={last[0]} cy={last[1]} r="3" fill="#5B54EE" stroke="#fff" strokeWidth="1.5" />
    </svg>
  );
}

export function AreaChart({ values }: { values: number[] }) {
  const W = 560, H = 210, PL = 44, PB = 28, PT = 12, max = 200;
  const x = (i: number) => PL + (i / (values.length - 1)) * (W - PL - 14);
  const y = (v: number) => PT + (1 - v / max) * (H - PT - PB);
  const d = values.map((v, i) => `${i ? "L" : "M"}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(" ");
  const months = ["Nov.", "Déc.", "Jan.", "Fév.", "Mars", "Avr."];
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full">
      <defs><linearGradient id="area" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#5B54EE" stopOpacity=".22" /><stop offset="100%" stopColor="#5B54EE" stopOpacity="0" /></linearGradient></defs>
      {[0, 50, 100, 150, 200].map((g) => (<g key={g}><line x1={PL} x2={W} y1={y(g)} y2={y(g)} stroke="#16161F" strokeOpacity=".06" /><text x={PL - 8} y={y(g) + 3} textAnchor="end" fontSize="9" fill="#8A8A96">{g === 0 ? "0 €" : `${g}k €`}</text></g>))}
      <path d={`${d} L${x(values.length - 1)},${y(0)} L${x(0)},${y(0)} Z`} fill="url(#area)" />
      <motion.path d={d} fill="none" stroke="#5B54EE" strokeWidth="2.5" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }} />
      {values.map((v, i) => (<circle key={i} cx={x(i)} cy={y(v)} r="3" fill="#5B54EE" stroke="#fff" strokeWidth="1.5" />))}
      <g><rect x={x(values.length - 1) - 62} y={y(values[values.length - 1]) - 26} rx="6" width="56" height="18" fill="#fff" stroke="#16161F" strokeOpacity=".08" /><text x={x(values.length - 1) - 34} y={y(values[values.length - 1]) - 13.5} textAnchor="middle" fontSize="9" fontWeight="700" fill="#16161F">143 650 €</text></g>
      {months.map((m, i) => (<text key={m} x={PL + (i / (months.length - 1)) * (W - PL - 14)} y={H - 8} textAnchor="middle" fontSize="9" fill="#8A8A96">{m}</text>))}
    </svg>
  );
}

export function Donut({ data, centerTop, centerSub }: { data: { label: string; value: number; color: string }[]; centerTop: string; centerSub: string }) {
  const total = data.reduce((s, d) => s + d.value, 0);
  let acc = 0;
  const stops = data.map((d) => { const a = (acc / total) * 360; acc += d.value; const b = (acc / total) * 360; return `${d.color} ${a}deg ${b}deg`; }).join(", ");
  return (
    <div className="relative h-40 w-40 shrink-0 rounded-full" style={{ background: `conic-gradient(${stops})` }}>
      <div className="absolute inset-4 grid place-items-center rounded-full bg-white"><div className="text-center"><p className="text-sm font-extrabold text-ink">{centerTop}</p><p className="text-[10px] text-ink-soft">{centerSub}</p></div></div>
    </div>
  );
}
