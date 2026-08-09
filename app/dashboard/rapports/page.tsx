"use client";
import { PageHead, Card, GhostBtn, Pill } from "@/components/dash/ui";
import { REPORTS } from "@/lib/data";
import { DownloadIcon } from "@/components/dash/icons";

export default function Rapports() {
  return (
    <>
      <PageHead title="Rapports" sub="Exportez et partagez l'état de votre stack SaaS.">
        <GhostBtn><DownloadIcon className="h-3.5 w-3.5" /> Télécharger tous</GhostBtn>
      </PageHead>
      <div className="grid gap-4 md:grid-cols-2">
        {REPORTS.map((r, i) => (
          <Card key={r.name} d={0.08 + i * 0.03} className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-base font-semibold text-ink">{r.name}</h2>
              <p className="mt-2 text-sm text-ink-soft">{r.sub}</p>
            </div>
            <Pill tone="purple">{r.tag}</Pill>
          </Card>
        ))}
      </div>
    </>
  );
}
