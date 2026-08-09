"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LogoMark, HomeIcon, GridIcon, UsersIcon, BellIcon, ChartIcon, GearIcon, ChevronDownIcon } from "@/components/icons";
import { CardIcon, PlugIcon, DotsIcon, WalletIcon } from "@/components/dash/icons";
import { Avatar } from "@/components/dash/ui";

const NAV = [
  { href: "/dashboard", label: "Vue d'ensemble", icon: HomeIcon },
  { href: "/dashboard/outils", label: "Outils", icon: GridIcon },
  { href: "/dashboard/abonnements", label: "Abonnements", icon: CardIcon },
  { href: "/dashboard/utilisateurs", label: "Utilisateurs", icon: UsersIcon },
  { href: "/dashboard/alertes", label: "Alertes", icon: BellIcon, badge: 3 },
  { href: "/dashboard/rapports", label: "Rapports", icon: ChartIcon },
];
const NAV2 = [
  { href: "/dashboard/integrations", label: "Intégrations", icon: PlugIcon },
  { href: "/dashboard/equipes", label: "Équipes", icon: UsersIcon },
  { href: "/dashboard/parametres", label: "Paramètres", icon: GearIcon },
  { href: "/dashboard/facturation", label: "Facturation", icon: WalletIcon },
];

function Item({ item }: { item: (typeof NAV)[number] }) {
  const pathname = usePathname();
  const active = pathname === item.href;
  const Icon = item.icon;
  return (
    <Link
      href={item.href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium transition",
        active ? "bg-primary text-white shadow-[0_8px_20px_-8px_rgba(91,84,238,0.7)]" : "text-cream/55 hover:bg-cream/5 hover:text-cream"
      )}
    >
      <Icon className="h-4 w-4 shrink-0" />
      <span className="flex-1">{item.label}</span>
      {"badge" in item && item.badge && (
        <span className="grid h-5 w-5 place-items-center rounded-full bg-primary text-[10px] font-bold text-white">{item.badge}</span>
      )}
    </Link>
  );
}

export function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col bg-ink px-4 py-6 lg:flex">
      <Link href="/" className="mb-8 flex items-center gap-2 px-2 text-lg font-extrabold tracking-tight text-cream">
        <LogoMark className="h-6 w-6 text-primary" /> Tallyo
      </Link>
      <nav className="space-y-1">{NAV.map((i) => (<Item key={i.href} item={i} />))}</nav>
      <p className="mb-2 mt-6 px-3 text-[10px] font-bold uppercase tracking-[0.16em] text-cream/35">Paramètres</p>
      <nav className="space-y-1">{NAV2.map((i) => (<Item key={i.href} item={i} />))}</nav>
      <div className="mt-auto space-y-4">
        <div className="rounded-xl bg-cream/5 p-4">
          <p className="text-[11px] text-cream/50">Économies potentielles</p>
          <p className="mt-1 text-lg font-extrabold text-cream">24 350 €</p>
          <Link href="/dashboard" className="mt-2 inline-block text-[11px] font-semibold text-[#9B96FF] hover:text-cream">
            Voir les opportunités →
          </Link>
        </div>
        <button className="flex w-full items-center gap-3 rounded-xl px-2 py-2 text-left transition hover:bg-cream/5">
          <Avatar name="Thomas Martin" className="bg-cream/10 text-cream" />
          <span className="flex-1">
            <span className="block text-[13px] font-semibold text-cream">Thomas Martin</span>
            <span className="block text-[11px] text-cream/45">Acme Corp.</span>
          </span>
          <ChevronDownIcon className="h-4 w-4 text-cream/40" />
        </button>
      </div>
    </aside>
  );
}

export function MobileBars() {
  const pathname = usePathname();
  const tabs = [
    { href: "/dashboard", label: "Vue d'ensemble", icon: HomeIcon },
    { href: "/dashboard/outils", label: "Outils", icon: GridIcon },
    { href: "/dashboard/abonnements", label: "Abonnements", icon: CardIcon },
    { href: "/dashboard/alertes", label: "Alertes", icon: BellIcon },
    { href: "/dashboard/parametres", label: "Plus", icon: DotsIcon },
  ];
  return (
    <>
      <header className="sticky top-0 z-40 flex h-14 items-center justify-between bg-ink px-4 lg:hidden">
        <Link href="/" className="flex items-center gap-2 text-base font-extrabold text-cream">
          <LogoMark className="h-5 w-5 text-primary" /> Tallyo
        </Link>
        <Avatar name="Thomas Martin" className="bg-cream/10 text-cream" />
      </header>
      <nav className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-5 border-t border-cream/10 bg-ink pb-[env(safe-area-inset-bottom)] lg:hidden">
        {tabs.map((t) => {
          const active = pathname === t.href;
          const Icon = t.icon;
          return (
            <Link key={t.href} href={t.href} className={cn("flex flex-col items-center gap-1 py-2.5 text-[9px] font-medium", active ? "text-cream" : "text-cream/45")}>
              <Icon className="h-5 w-5" />
              {t.label}
            </Link>
          );
        })}
      </nav>
    </>
  );
}
