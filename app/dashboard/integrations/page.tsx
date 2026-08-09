"use client";
import { PageHead, Card, GhostBtn, Pill } from "@/components/dash/ui";
import { PlusIcon, CardIcon, LockIcon, GoogleG } from "@/components/dash/icons";
import { BankIcon } from "@/components/icons";
import { INTEGRATIONS } from "@/lib/data";

export default function Integrations() {
  return (
    <>
      <PageHead title="Intégrations" sub="Connectez vos comptes bancaires, cartes et outils métier.">
        <GhostBtn><PlusIcon className="h-3.5 w-3.5" /> Ajouter une intégration</GhostBtn>
      </PageHead>
      <div className="grid gap-4 md:grid-cols-2">
        {INTEGRATIONS.map((item, i) => (
          <Card key={item.name} d={0.08 + i * 0.03} className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-lg font-semibold text-primary-deep">{item.icon}</div>
              <div>
                <h2 className="text-base font-semibold text-ink">{item.name}</h2>
                <p className="mt-1 text-sm text-ink-soft">{item.date}</p>
              </div>
            </div>
            <Pill tone="green">Connecté</Pill>
          </Card>
        ))}
      </div>
    </>
  );
}
