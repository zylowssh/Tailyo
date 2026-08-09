import type { SVGProps } from "react";
type P = SVGProps<SVGSVGElement>;
const base = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" } as const;

export const LogoMark = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden>
    <rect x="4" y="17" width="6" height="11" rx="3" />
    <rect x="13" y="6" width="6" height="22" rx="3" />
    <rect x="22" y="11" width="6" height="17" rx="3" />
  </svg>
);

export const CheckIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} strokeWidth={3} {...p}><path d="M4 12.5 L9.5 18 L20 6.5" /></svg>
);
export const ArrowRightIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M4 12h16M13 5l7 7-7 7" /></svg>
);
export const ArrowLeftIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M20 12H4m7-7-7 7 7 7" /></svg>
);
export const ChevronDownIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M6 9l6 6 6-6" /></svg>
);
export const TrendUpIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M3 17l6-6 4 4 8-8M14 7h7v7" /></svg>
);
export const SearchIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
);
export const HomeIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M4 11l8-7 8 7M6 10v10h12V10" /></svg>
);
export const GridIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <rect x="4" y="4" width="7" height="7" rx="1.5" /><rect x="13" y="4" width="7" height="7" rx="1.5" />
    <rect x="4" y="13" width="7" height="7" rx="1.5" /><rect x="13" y="13" width="7" height="7" rx="1.5" />
  </svg>
);
export const UsersIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <circle cx="9" cy="8" r="3.5" /><path d="M3.5 20c0-4 3-6 5.5-6s5.5 2 5.5 6" />
    <circle cx="17" cy="9" r="2.5" /><path d="M16.5 14.5c2.5 0 4.5 2 4.5 5" />
  </svg>
);
export const BellIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M12 4c-4 0-6 3-6 7 0 4-1.5 5-2.5 6h17c-1-1-2.5-2-2.5-6 0-4-2-7-6-7Z" />
    <path d="M10 20a2 2 0 0 0 4 0" />
  </svg>
);
export const ChartIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M4 20h16M7 16v-5M12 16V6M17 16v-8" /></svg>
);
export const GearIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <circle cx="12" cy="12" r="3.5" />
    <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
  </svg>
);
export const UploadIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M12 16V5m0 0-4 4m4-4 4 4M4 19h16" /></svg>
);
export const StarIcon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 2l2.9 6.2 6.6.8-4.9 4.6 1.3 6.6L12 17l-5.9 3.2 1.3-6.6L2.5 9l6.6-.8Z" />
  </svg>
);
export const QuoteIcon = (p: P) => (
  <svg viewBox="0 0 32 24" fill="currentColor" {...p}>
    <path d="M0 24V14.4C0 6.4 4.8 1.2 12.8 0l1.6 4.8C9.6 6.4 7.2 9.2 7.2 12H14v12H0Z" />
    <path d="M18 24V14.4C18 6.4 22.8 1.2 30.8 0l1.2 4.8c-4.8 1.6-7.2 4.4-7.2 7.2H32v12H18Z" />
  </svg>
);

/* ——— problem card line icons ——— */
export const BankIcon = (p: P) => (
  <svg viewBox="0 0 48 48" {...base} strokeWidth={2.4} {...p}>
    <path d="M8 18 L24 8 L40 18 M10 18 h28" />
    <path d="M14 23v12M22 23v12M30 23v12M38 23v12" transform="translate(-2 0)" />
    <path d="M10 39h28M12 35h24" />
  </svg>
);
export const BinocularsIcon = (p: P) => (
  <svg viewBox="0 0 48 48" {...base} strokeWidth={2.4} {...p}>
    <circle cx="15" cy="32" r="7" /><circle cx="33" cy="32" r="7" />
    <path d="M22 30h4M12 25l-1-12h7l2 12M36 25l1-12h-7l-2 12" />
  </svg>
);
export const PeopleIcon = (p: P) => (
  <svg viewBox="0 0 48 48" {...base} strokeWidth={2.4} {...p}>
    <circle cx="24" cy="15" r="5" /><path d="M15 30c0-6 18-6 18 0" />
    <circle cx="11" cy="19" r="4" /><path d="M4 30c0-5 10-5 12-2" />
    <circle cx="37" cy="19" r="4" /><path d="M44 30c0-5-10-5-12-2" />
  </svg>
);
export const PieIcon = (p: P) => (
  <svg viewBox="0 0 48 48" {...base} strokeWidth={2.4} {...p}>
    <circle cx="21" cy="27" r="12" />
    <path d="M21 27V15M21 27l10 5" />
    <path d="M30 10a12 12 0 0 1 10 10H30V10Z" />
  </svg>
);
