"use client";
import { PageHead, Card, SearchBox, Select, Table, td, Pill, Pagination, Avatar } from "@/components/dash/ui";
import { TEAMS } from "@/lib/data";

export default function Equipes() {
  return (
    <>
      <PageHead title="Équipes" sub="Analysez votre structure et la répartition des coûts.">
        <SearchBox placeholder="Rechercher une équipe..." />
        <Select label="Ville" /><Select label="Rôle" />
      </PageHead>
      <Card d={0.15}>
        <Table head={["Équipe", "Membres", "Responsable", "Coût mensuel", "Statut"]}>
          {TEAMS.map((team) => (
            <tr key={team.name} className="border-b border-ink/5 last:border-0">
              <td className={`${td} font-semibold text-ink`}><span className="flex items-center gap-3"><Avatar name={team.name} /> {team.name}</span></td>
              <td className={`${td} text-ink-soft`}>{team.members}</td>
              <td className={`${td} text-ink-soft`}>{team.owner}</td>
              <td className={`${td} text-ink-soft`}>24 000 €</td>
              <td className={td}><Pill tone="green">Actif</Pill></td>
            </tr>
          ))}
        </Table>
        <Pagination label="1 – 6 sur 16 équipes" pages={[1, 2, 3]} />
      </Card>
    </>
  );
}
