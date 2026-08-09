"use client";
import { PageHead, Card, SearchBox, Select, Table, td, Pill, Pagination, BrandTile, statusTone } from "@/components/dash/ui";
import { SUBS } from "@/lib/data";

export default function Abonnements() {
  return (
    <>
      <PageHead title="Abonnements" sub="Gérez tous vos abonnements et renouvellements.">
        <SearchBox placeholder="Rechercher un abonnement..." />
        <Select label="Statut" /><Select label="Renouvellement" />
      </PageHead>
      <Card d={0.15}>
        <Table head={["Abonnement", "Outil", "Montant", "Période", "Prochain renouvellement", "Statut"]}>
          {SUBS.map((s) => (
            <tr key={s.plan} className="border-b border-ink/5 last:border-0">
              <td className={`${td} font-semibold text-ink`}>{s.plan}</td>
              <td className={td}><span className="flex items-center gap-2 text-ink-soft"><BrandTile name={s.tool} className="h-6 w-6 rounded-md text-[9px]" /> {s.tool}</span></td>
              <td className={`${td} text-ink-soft`}>{s.amount}</td>
              <td className={`${td} text-ink-soft`}>{s.period}</td>
              <td className={`${td} text-ink-soft`}>{s.next}</td>
              <td className={td}><Pill tone={statusTone(s.status) === "green" ? "green" : "orange"}>{s.status}</Pill></td>
            </tr>
          ))}
        </Table>
        <Pagination label="1 – 6 sur 128 abonnements" pages={[1, 2, 3, -1, 22]} />
      </Card>
    </>
  );
}
