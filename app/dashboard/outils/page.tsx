"use client";
import { PageHead, Card, SearchBox, Select, GhostBtn, Table, td, Pill, Pagination, BrandTile } from "@/components/dash/ui";
import { PlusIcon } from "@/components/dash/icons";
import { TOOLS } from "@/lib/data";

export default function Outils() {
  return (
    <>
      <PageHead title="Outils" sub="Tous les outils SaaS détectés dans votre entreprise.">
        <SearchBox placeholder="Rechercher un outil..." />
        <Select label="Catégorie" /><Select label="Équipe" /><Select label="Plus de filtres" />
        <GhostBtn className="border-primary/30 text-primary-deep"><PlusIcon className="h-3.5 w-3.5" /> Ajouter un outil</GhostBtn>
      </PageHead>
      <Card d={0.15}>
        <Table head={["Outil", "Catégorie", "Dépense mensuelle", "Utilisateurs actifs", "Propriétaire", "Statut"]}>
          {TOOLS.map((t) => (
            <tr key={t.name} className="border-b border-ink/5 last:border-0">
              <td className={`${td} font-semibold text-ink`}><span className="flex items-center gap-3"><BrandTile name={t.name} /> {t.name}</span></td>
              <td className={`${td} text-ink-soft`}>{t.cat}</td>
              <td className={`${td} text-ink-soft`}>{t.monthly}</td>
              <td className={`${td} text-ink-soft`}>{t.users}</td>
              <td className={`${td} text-ink-soft`}>{t.owner}</td>
              <td className={td}><Pill tone="green">Actif</Pill></td>
            </tr>
          ))}
        </Table>
        <Pagination label="1 – 8 sur 96 outils" pages={[1, 2, 3, -1, 12]} />
      </Card>
    </>
  );
}
