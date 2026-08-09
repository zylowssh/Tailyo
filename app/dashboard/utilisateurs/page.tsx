"use client";
import { PageHead, Card, SearchBox, Select, Table, td, Pill, Pagination, Avatar } from "@/components/dash/ui";
import { USERS } from "@/lib/data";

export default function Utilisateurs() {
  return (
    <>
      <PageHead title="Utilisateurs" sub="Suivi des accès, des équipes et des outils utilisés.">
        <SearchBox placeholder="Rechercher un utilisateur..." />
        <Select label="Équipe" /><Select label="Statut" />
      </PageHead>
      <Card d={0.15}>
        <Table head={["Utilisateur", "Équipe", "Outils actifs", "Dernière activité", "Statut"]}>
          {USERS.map((u) => (
            <tr key={u.name} className="border-b border-ink/5 last:border-0">
              <td className={`${td} font-semibold text-ink`}><span className="flex items-center gap-3"><Avatar name={u.name} /> {u.name}</span></td>
              <td className={`${td} text-ink-soft`}>{u.team}</td>
              <td className={`${td} text-ink-soft`}>{u.tools}</td>
              <td className={`${td} text-ink-soft`}>{u.last}</td>
              <td className={td}><Pill tone={u.status === "Actif" ? "green" : "red"}>{u.status}</Pill></td>
            </tr>
          ))}
        </Table>
        <Pagination label="1 – 6 sur 144 utilisateurs" pages={[1, 2, 3, -1, 24]} />
      </Card>
    </>
  );
}
