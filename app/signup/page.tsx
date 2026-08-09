"use client";
import { useState } from "react";
import { LogoMark } from "@/components/icons";
import { Button } from "@/components/Button";
import { Magnetic } from "@/components/Magnetic";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");

  return (
    <div className="min-h-screen bg-cream">
      <div className="container-x flex min-h-screen flex-col items-center justify-center py-12">
        {/* Header */}
        <a href="/" className="mb-8 flex items-center gap-2 text-xl font-extrabold tracking-tight">
          <LogoMark className="h-6 w-6 text-primary" /> Tallyo
        </a>

        {/* Card */}
        <div className="w-full max-w-md rounded-2xl border border-ink/5 bg-white p-8 shadow-card sm:p-10">
          <h1 className="text-2xl font-extrabold tracking-tight text-ink">Créer un compte</h1>
          <p className="mt-2 text-sm text-ink-soft">Commencez votre essai gratuit de 14 jours</p>

          <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-ink">
                Nom complet
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 w-full rounded-lg border border-ink/10 bg-cream px-4 py-3 text-sm text-ink outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                placeholder="Jean Dupont"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-ink">
                Email professionnel
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-full rounded-lg border border-ink/10 bg-cream px-4 py-3 text-sm text-ink outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                placeholder="vous@entreprise.com"
                required
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-ink">
                Entreprise
              </label>
              <input
                id="company"
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="mt-2 w-full rounded-lg border border-ink/10 bg-cream px-4 py-3 text-sm text-ink outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                placeholder="Nom de votre entreprise"
                required
              />
            </div>

            <div className="flex items-start gap-2">
              <input type="checkbox" id="terms" className="mt-1 h-4 w-4 rounded border-ink/20 text-primary focus:ring-primary" required />
              <label htmlFor="terms" className="text-xs text-ink-soft">
                J&apos;accepte les{" "}
                <a href="#" className="font-medium text-primary hover:text-primary-deep">
                  conditions d&apos;utilisation
                </a>{" "}
                et la{" "}
                <a href="#" className="font-medium text-primary hover:text-primary-deep">
                  politique de confidentialité
                </a>
              </label>
            </div>

            <Magnetic>
              <Button href="/dashboard" size="lg" className="w-full">
                Commencer l&apos;essai gratuit
              </Button>
            </Magnetic>
          </form>

          <div className="mt-6 text-center text-sm text-ink-soft">
            Déjà un compte ?{" "}
            <a href="/login" className="font-semibold text-primary hover:text-primary-deep">
              Se connecter
            </a>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-8 text-center">
          <p className="text-xs font-medium text-ink-soft">Aucune carte bancaire requise • Annulez à tout moment</p>
        </div>
      </div>
    </div>
  );
}
