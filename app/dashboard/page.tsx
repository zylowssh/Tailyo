"use client";
import { LogoMark } from "@/components/icons";
import { Button } from "@/components/Button";
import { Magnetic } from "@/components/Magnetic";

const SUBSCRIPTIONS = [
  { name: "Notion", seats: 12, spent: "€1,248", status: "active", renewal: "15 janv." },
  { name: "Figma", seats: 8, spent: "€960", status: "active", renewal: "22 janv." },
  { name: "Slack", seats: 45, spent: "€2,340", status: "warning", renewal: "3 févr." },
  { name: "Linear", seats: 6, spent: "€432", status: "active", renewal: "10 févr." },
  { name: "Vercel", seats: 1, spent: "€240", status: "active", renewal: "28 févr." },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Top nav */}
      <header className="border-b border-ink/5 bg-white/80 backdrop-blur-md">
        <div className="container-x flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2 text-xl font-extrabold tracking-tight">
            <LogoMark className="h-6 w-6 text-primary" /> Tallyo
          </a>
          <div className="flex items-center gap-4">
            <span className="hidden text-sm font-medium text-ink-soft sm:block">Demo Mode</span>
            <Button href="/login" size="sm" variant="ghost">Se déconnecter</Button>
          </div>
        </div>
      </header>

      <main className="container-x py-8">
        {/* Stats */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="Dépense mensuelle" value="€4,220" trend="+12%" trendUp />
          <StatCard label="Abonnements actifs" value="23" trend="-2" trendUp={false} />
          <StatCard label="Sièges inutilisés" value="18" trend="€864/mois" trendUp={false} />
          <StatCard label="Renouvellements (30j)" value="7" trend="€1,890" trendUp />
        </div>

        {/* Main content */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Subscriptions table */}
          <div className="rounded-2xl border border-ink/5 bg-white p-6 shadow-card lg:col-span-2">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-bold text-ink">Abonnements</h2>
              <Button href="#" size="sm">Voir tout</Button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-ink/5 text-xs font-medium text-ink-soft">
                    <th className="pb-3">Outil</th>
                    <th className="pb-3">Sièges</th>
                    <th className="pb-3">Dépensé (an)</th>
                    <th className="pb-3">Renouvellement</th>
                    <th className="pb-3">Statut</th>
                  </tr>
                </thead>
                <tbody>
                  {SUBSCRIPTIONS.map((sub) => (
                    <tr key={sub.name} className="border-b border-ink/5 last:border-0">
                      <td className="py-3 font-medium text-ink">{sub.name}</td>
                      <td className="py-3 text-ink-soft">{sub.seats}</td>
                      <td className="py-3 text-ink-soft">{sub.spent}</td>
                      <td className="py-3 text-ink-soft">{sub.renewal}</td>
                      <td className="py-3">
                        <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
                          sub.status === "warning" 
                            ? "bg-accent/20 text-accent" 
                            : "bg-primary/10 text-primary-deep"
                        }`}>
                          {sub.status === "warning" ? "Attention" : "Actif"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Side panel */}
          <div className="space-y-6">
            {/* Alert card */}
            <div className="rounded-2xl border border-ink/5 bg-accent/10 p-6">
              <h3 className="font-bold text-ink">Action requise</h3>
              <p className="mt-2 text-sm text-ink-soft">
                Slack arrive à échéance dans 10 jours. 12 sièges semblent inutilisés.
              </p>
              <Magnetic>
                <Button href="#" size="sm" className="mt-4 bg-ink text-cream hover:bg-ink/90">
                  Examiner
                </Button>
              </Magnetic>
            </div>

            {/* Quick actions */}
            <div className="rounded-2xl border border-ink/5 bg-white p-6 shadow-card">
              <h3 className="font-bold text-ink">Actions rapides</h3>
              <div className="mt-4 space-y-2">
                <QuickAction icon="📊" label="Exporter les données" href="#" />
                <QuickAction icon="🔔" label="Configurer les alertes" href="#" />
                <QuickAction icon="👥" label="Inviter un collègue" href="#" />
                <QuickAction icon="💳" label="Ajouter une source" href="#" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function StatCard({ label, value, trend, trendUp }: { label: string; value: string; trend: string; trendUp?: boolean }) {
  return (
    <div className="rounded-2xl border border-ink/5 bg-white p-5 shadow-card">
      <p className="text-xs font-medium text-ink-soft">{label}</p>
      <p className="mt-2 text-2xl font-extrabold text-ink">{value}</p>
      <p className={`mt-1 text-xs font-medium ${trendUp ? "text-primary-deep" : "text-ink-soft"}`}>
        {trend}
      </p>
    </div>
  );
}

function QuickAction({ icon, label, href }: { icon: string; label: string; href: string }) {
  return (
    <a href={href} className="flex items-center gap-3 rounded-lg p-2 transition hover:bg-cream">
      <span className="text-lg">{icon}</span>
      <span className="text-sm font-medium text-ink">{label}</span>
    </a>
  );
}
