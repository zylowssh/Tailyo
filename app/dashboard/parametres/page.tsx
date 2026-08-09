"use client";
import { PageHead, Card, GhostBtn } from "@/components/dash/ui";
import { GearIcon } from "@/components/icons";

export default function Parametres() {
  return (
    <>
      <PageHead title="Paramètres" sub="Définissez les règles d'accès et les préférences de la plateforme.">
        <GhostBtn><GearIcon className="h-3.5 w-3.5" /> Gérer les règles</GhostBtn>
      </PageHead>
      <div className="grid gap-4 md:grid-cols-2">
        <Card d={0.1}>
          <h2 className="text-base font-semibold text-ink">Sécurité</h2>
          <p className="mt-2 text-sm text-ink-soft">Activer la validation MFA, limiter les accès aux équipes sensibles et garder un journal des activités.</p>
        </Card>
        <Card d={0.15}>
          <h2 className="text-base font-semibold text-ink">Notifications</h2>
          <p className="mt-2 text-sm text-ink-soft">Recevoir une alerte par email pour les abonnements à venir, les erreurs de paiement et les nouveaux outils.</p>
        </Card>
      </div>
    </>
  );
}
