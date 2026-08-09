import { LegalLayout } from "@/components/LegalLayout";

export default function CGUPage() {
  return (
    <LegalLayout
      title="Conditions générales d’utilisation"
      intro="Les règles d’utilisation de Tallyo sont simples : vous utilisez le service de façon responsable et loyale."
    >
      <p className="mt-3">L’utilisation du service implique le respect des obligations de confidentialité et des règles de sécurité.</p>
      <p className="mt-4">Tallyo se réserve le droit de suspendre tout accès en cas de comportement abusif.</p>
    </LegalLayout>
  );
}
