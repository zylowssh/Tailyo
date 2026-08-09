import { LegalLayout } from "@/components/LegalLayout";

export default function SecurityPage() {
  return (
    <LegalLayout
      title="Sécurité"
      intro="Nous protégeons vos données avec une approche simple, transparente et sérieuse."
    >
      <h2 className="text-xl font-semibold text-ink">Ce que nous faisons</h2>
      <p className="mt-3">Tallyo chiffre vos données, limite l’accès au strict nécessaire et ne stocke pas d’informations sensibles au-delà de ce qui est requis pour l’audit.</p>
      <h2 className="mt-8 text-xl font-semibold text-ink">Bonnes pratiques</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5">
        <li>Connexion sécurisée via HTTPS</li>
        <li>Authentification forte et gestion des accès</li>
        <li>Surveillance des anomalies et journalisation</li>
      </ul>
    </LegalLayout>
  );
}
