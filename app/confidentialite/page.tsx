import { LegalLayout } from "@/components/LegalLayout";

export default function ConfidentialitePage() {
  return (
    <LegalLayout
      title="Politique de confidentialité"
      intro="Nous collectons uniquement les données nécessaires pour fournir le service et améliorer l’expérience."
    >
      <p className="mt-3">Nous traitons vos informations avec précaution et ne les partageons pas sans votre accord.</p>
      <p className="mt-4">Vous pouvez demander l’accès, la rectification ou la suppression de vos données à tout moment.</p>
    </LegalLayout>
  );
}
