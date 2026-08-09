"use client";
import { PageHead, Card, GhostBtn, Pill } from "@/components/dash/ui";
import { INVOICES } from "@/lib/data";
import { WalletIcon } from "@/components/dash/icons";

export default function Facturation() {
  return (
    <>
      <PageHead title="Facturation" sub="Consultez les factures passées et le plan actuel.">
        <GhostBtn><WalletIcon className="h-3.5 w-3.5" /> Ajouter un mode de paiement</GhostBtn>
      </PageHead>
      <div className="grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
        <Card d={0.12}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-ink">Plan actuel</p>
              <p className="mt-1 text-sm text-ink-soft">Essentiel • 12 utilisateurs • jusqu’à 80 outils</p>
            </div>
            <Pill tone="green">Actif</Pill>
          </div>
          <div className="mt-6 rounded-2xl bg-mist p-5">
            <p className="text-3xl font-extrabold text-ink">199,00 € / mois</p>
            <p className="mt-2 text-sm text-ink-soft">Paiement mensuel • renouvellement le 1er du mois</p>
          </div>
        </Card>
        <Card d={0.16}>
          <h2 className="text-base font-semibold text-ink">Factures récentes</h2>
          <div className="mt-4 space-y-3">
            {INVOICES.map((invoice) => (
              <div key={invoice.month} className="flex items-center justify-between rounded-xl border border-ink/5 bg-white/70 px-3 py-2 text-sm">
                <span className="text-ink">{invoice.month}</span>
                <span className="font-semibold text-ink-soft">{invoice.amount}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </>
  );
}
