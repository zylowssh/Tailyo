import { cn } from "@/lib/utils";

const GLYPHS: Record<string, { cls: string; node?: React.ReactNode; label?: string }> = {
  salesforce: {
    cls: "bg-[#00A1E0]",
    node: (
      <svg viewBox="0 0 24 24" className="size-3.5" fill="#fff" aria-hidden>
        <circle cx="9" cy="13" r="4" /><circle cx="14" cy="11" r="5" /><rect x="7" y="12" width="12" height="5" rx="2.5" />
      </svg>
    ),
  },
  slack: {
    cls: "bg-white ring-1 ring-ink/10",
    node: (
      <svg viewBox="0 0 24 24" className="size-3.5" aria-hidden>
        <rect x="10" y="3" width="4" height="8" rx="2" fill="#36C5F0" />
        <rect x="13" y="10" width="8" height="4" rx="2" fill="#2EB67D" />
        <rect x="10" y="13" width="4" height="8" rx="2" fill="#E01E5A" />
        <rect x="3" y="10" width="8" height="4" rx="2" fill="#ECB22E" />
      </svg>
    ),
  },
  miro: { cls: "bg-[#FFD02F] text-[#131313]", label: "M" },
  notion: { cls: "bg-white text-[#131313] ring-1 ring-ink/10", label: "N" },
  adobe: { cls: "bg-[#FA0F00]", label: "A" },
  monday: { cls: "bg-[#FF3D57]", label: "M" },
  hubspot: {
    cls: "bg-[#FF7A59]",
    node: (
      <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="#fff" strokeWidth={2.4} strokeLinecap="round" aria-hidden>
        <circle cx="12" cy="14" r="4" /><path d="M12 10V4M8.5 5.5L12 4l3.5 1.5" />
      </svg>
    ),
  },
  docusign: { cls: "bg-[#FFCC22] text-[#131313]", label: "D" },
  zoom: {
    cls: "bg-[#0B5CFF]",
    node: (
      <svg viewBox="0 0 24 24" className="size-3.5" fill="#fff" aria-hidden>
        <rect x="3" y="7" width="12" height="10" rx="3" /><path d="M16 11l5-3v8l-5-3z" />
      </svg>
    ),
  },
};

export function ToolChip({ kind }: { kind: string }) {
  const g = GLYPHS[kind];
  return (
    <span className={cn("grid size-6 shrink-0 place-items-center rounded-md text-[10px] font-extrabold text-white", g.cls)}>
      {g.node ?? g.label}
    </span>
  );
}
