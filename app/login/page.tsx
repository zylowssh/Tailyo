"use client";
import { useState } from "react";
import { LogoMark } from "@/components/icons";
import { Button } from "@/components/Button";
import { Magnetic } from "@/components/Magnetic";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-cream">
      <div className="container-x flex min-h-screen flex-col items-center justify-center py-12">
        {/* Header */}
        <a href="/" className="mb-8 flex items-center gap-2 text-xl font-extrabold tracking-tight">
          <LogoMark className="h-6 w-6 text-primary" /> Tallyo
        </a>

        {/* Card */}
        <div className="w-full max-w-md rounded-2xl border border-ink/5 bg-white p-8 shadow-card sm:p-10">
          <h1 className="text-2xl font-extrabold tracking-tight text-ink">Se connecter</h1>
          <p className="mt-2 text-sm text-ink-soft">Accédez à votre dashboard Tallyo</p>

          <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-ink">
                Email
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
              <label htmlFor="password" className="block text-sm font-medium text-ink">
                Mot de passe
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 w-full rounded-lg border border-ink/10 bg-cream px-4 py-3 text-sm text-ink outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                placeholder="••••••••"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4 rounded border-ink/20 text-primary focus:ring-primary" />
                <span className="text-xs text-ink-soft">Se souvenir de moi</span>
              </label>
              <a href="#" className="text-xs font-medium text-primary hover:text-primary-deep">
                Mot de passe oublié ?
              </a>
            </div>

            <Magnetic>
              <Button href="/dashboard" size="lg" className="w-full">
                Se connecter
              </Button>
            </Magnetic>
          </form>

          <div className="mt-6 text-center text-sm text-ink-soft">
            Pas encore de compte ?{" "}
            <a href="/signup" className="font-semibold text-primary hover:text-primary-deep">
              Créer un compte
            </a>
          </div>
        </div>

        {/* Footer links */}
        <div className="mt-8 flex gap-6 text-xs font-medium text-ink-soft">
          <a href="/" className="transition hover:text-ink">Retour à l&apos;accueil</a>
          <a href="#" className="transition hover:text-ink">Aide</a>
        </div>
      </div>
    </div>
  );
}
