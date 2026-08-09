import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main className="container-x py-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-ink/10 bg-white p-8 shadow-card md:p-12">
          <p className="font-hand text-2xl text-primary-deep">Tarifs</p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink">Des plans simples pour une vraie clarté</h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-soft">Commencez avec l’essai gratuit puis passez à un plan qui correspond à votre équipe.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { name: "Starter", price: "29€", desc: "Par utilisateur / mois", perks: ["Audit de base", "Alertes simples", "Export CSV"] },
              { name: "Scale", price: "79€", desc: "Par utilisateur / mois", perks: ["Connecteurs avancés", "Rapports partagés", "Support prioritaire"] },
              { name: "Enterprise", price: "Sur mesure", desc: "Pour des équipes plus larges", perks: ["SSO", "RBAC", "Onboarding dédié"] },
            ].map((plan) => (
              <div key={plan.name} className="rounded-2xl border border-ink/10 bg-cream-deep p-6">
                <h2 className="text-xl font-bold text-ink">{plan.name}</h2>
                <p className="mt-2 text-sm text-ink-soft">{plan.desc}</p>
                <p className="mt-6 text-4xl font-extrabold tracking-tight text-ink">{plan.price}</p>
                <ul className="mt-6 space-y-3 text-sm text-ink-soft">
                  {plan.perks.map((perk) => (
                    <li key={perk}>✓ {perk}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
