import { LegalLayout } from "@/components/LegalLayout";

export default function ContactPage() {
  return (
    <LegalLayout
      title="Contact"
      intro="Une question, un besoin, ou un simple coucou ? On répond vite."
    >
      <p className="mt-3">Vous pouvez nous écrire à hello@tallyo.fr.</p>
      <p className="mt-4">Nous répondons généralement sous 24 heures ouvrées.</p>
    </LegalLayout>
  );
}
