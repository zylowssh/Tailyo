"use client";
import { PageHead, Card, SearchBox, Select, Pill, statusTone } from "@/components/dash/ui";
import { CardIcon, SparklesIcon } from "@/components/dash/icons";
import { BellIcon, UsersIcon } from "@/components/icons";
import { ALERTS } from "@/lib/data";

export default function Alertes() {
  return (
    <>
      <PageHead title="Alertes" sub="Recevez un aperçu des anomalies et renouvellements à venir.">
        <SearchBox placeholder="Rechercher une alerte..." />
        <Select label="Priorité" /><Select label="Date" />
      </PageHead>
      <div className="grid gap-4">
        {ALERTS.map((a, i) => (
          <Card key={a.title} d={0.08 + i * 0.03} className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-base font-semibold text-ink">{a.title}</h2>
                <Pill tone={statusTone(a.prio)}>{a.prio}</Pill>
              </div>
              <p className="mt-2 text-sm text-ink-soft">{a.sub}</p>
            </div>
            <div className="text-sm text-ink-soft">{a.date}</div>
          </Card>
        ))}
      </div>
    </>
  );
}
