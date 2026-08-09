import { LegalLayout } from "@/components/LegalLayout";

export default function MentionsLegalesPage() {
  return (
    <LegalLayout
      title="Mentions légales"
      intro="Informations légales et coordonnées éditoriales de Tallyo."
    >
      <p className="mt-3">Tallyo est édité par une société française opérant dans l’analyse des dépenses SaaS.</p>
      <p className="mt-4">Le site est hébergé sur une infrastructure moderne avec sauvegardes régulières.</p>
    </LegalLayout>
  );
}
