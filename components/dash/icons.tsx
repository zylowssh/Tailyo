import type { SVGProps } from "react";
type P = SVGProps<SVGSVGElement>;
const base = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" } as const;

export const SearchIcon = (p: P) => (<svg viewBox="0 0 24 24" {...base} {...p}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>);
export const PlusIcon = (p: P) => (<svg viewBox="0 0 24 24" {...base} {...p}><path d="M12 5v14M5 12h14" /></svg>);
export const DownloadIcon = (p: P) => (<svg viewBox="0 0 24 24" {...base} {...p}><path d="M12 4v11m0 0 4-4m-4 4-4-4M4 19h16" /></svg>);
export const CalendarIcon = (p: P) => (<svg viewBox="0 0 24 24" {...base} {...p}><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M8 3v4M16 3v4M3 10h18" /></svg>);
export const InfoIcon = (p: P) => (<svg viewBox="0 0 24 24" {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8v.01" /></svg>);
export const XIcon = (p: P) => (<svg viewBox="0 0 24 24" {...base} {...p}><path d="M6 6l12 12M18 6L6 18" /></svg>);
export const ArrowLeftIcon = (p: P) => (<svg viewBox="0 0 24 24" {...base} {...p}><path d="M20 12H4m7-7-7 7 7 7" /></svg>);
export const UploadIcon = (p: P) => (<svg viewBox="0 0 24 24" {...base} {...p}><path d="M12 16V5m0 0-4 4m4-4 4 4M4 19h16" /></svg>);
export const LockIcon = (p: P) => (<svg viewBox="0 0 24 24" {...base} {...p}><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg>);
export const EyeIcon = (p: P) => (<svg viewBox="0 0 24 24" {...base} {...p}><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>);
export const EyeOffIcon = (p: P) => (<svg viewBox="0 0 24 24" {...base} {...p}><path d="M4 4l16 16M10 5.3A9.8 9.8 0 0 1 12 5c6.5 0 10 7 10 7a17 17 0 0 1-3 3.9M6.6 6.6A16.7 16.7 0 0 0 2 12s3.5 7 10 7c1.9 0 3.6-.6 5-1.4" /></svg>);
export const CardIcon = (p: P) => (<svg viewBox="0 0 24 24" {...base} {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 10h18M7 15h4" /></svg>);
export const PlugIcon = (p: P) => (<svg viewBox="0 0 24 24" {...base} {...p}><path d="M9 3v5m6-5v5M6 8h12v3a6 6 0 0 1-12 0V8ZM12 17v4" /></svg>);
export const FileIcon = (p: P) => (<svg viewBox="0 0 24 24" {...base} {...p}><path d="M6 2h8l5 5v15H6V2ZM14 2v5h5M9 13h6M9 17h6" /></svg>);
export const SparklesIcon = (p: P) => (<svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 2l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6ZM19 14l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3ZM5 15l.8 2.2L8 18l-2.2.8L5 21l-.8-2.2L2 18l2.2-.8L5 15Z" /></svg>);
export const PiggyIcon = (p: P) => (<svg viewBox="0 0 24 24" {...base} {...p}><path d="M5 10a7 7 0 0 1 14 0c0 1.5-.5 2.8-1.3 3.9L18 17h-2.5l-.7 2h-2l-.3-2h-1l-.3 2h-2l-.7-2H6l-.4-3.2A6.8 6.8 0 0 1 5 10Z" /><path d="M3 10h2M9 6.5A7 7 0 0 1 14 6" /><path d="M15.5 10h.01" strokeWidth={3} /></svg>);
export const DotsIcon = (p: P) => (<svg viewBox="0 0 24 24" fill="currentColor" {...p}><circle cx="5" cy="12" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="19" cy="12" r="2" /></svg>);
export const WalletIcon = (p: P) => (<svg viewBox="0 0 24 24" {...base} {...p}><path d="M3 7a2 2 0 0 1 2-2h13v4" /><path d="M3 7v10a2 2 0 0 0 2 2h16V9H5a2 2 0 0 1-2-2Z" /><path d="M16 14h.01" strokeWidth={3} /></svg>);

export const GoogleG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <path fill="#EA4335" d="M12 5.04c1.62 0 3.06.56 4.2 1.66l3.12-3.12C17.46 1.8 14.96.75 12 .75 7.62.75 3.84 3.27 2 6.94l3.66 2.84C6.52 7.09 9.02 5.04 12 5.04Z" />
    <path fill="#4285F4" d="M23.25 12.27c0-.92-.08-1.6-.26-2.31H12v4.51h6.44c-.13 1.08-.83 2.7-2.39 3.79l3.57 2.77c2.14-1.97 3.63-4.88 3.63-8.76Z" />
    <path fill="#FBBC05" d="M5.66 14.22a7.03 7.03 0 0 1 0-4.44L2 6.94a11.26 11.26 0 0 0 0 10.12l3.66-2.84Z" />
    <path fill="#34A853" d="M12 23.25c3.04 0 5.6-1 7.46-2.72l-3.57-2.77c-.95.66-2.23 1.12-3.89 1.12-2.98 0-5.48-2.05-6.34-4.66L2 17.06c1.84 3.68 5.62 6.19 10 6.19Z" />
  </svg>
);
export const MicrosoftMark = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <rect x="2" y="2" width="9.5" height="9.5" fill="#F25022" />
    <rect x="12.5" y="2" width="9.5" height="9.5" fill="#7FBA00" />
    <rect x="2" y="12.5" width="9.5" height="9.5" fill="#00A4EF" />
    <rect x="12.5" y="12.5" width="9.5" height="9.5" fill="#FFB900" />
  </svg>
);
