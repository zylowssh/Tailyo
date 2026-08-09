"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Boot } from "@/components/Boot";
import { LogoMark } from "@/components/icons";
import { EyeIcon, EyeOffIcon, LockIcon, PiggyIcon, GoogleG, MicrosoftMark } from "@/components/dash/icons";
import { Sparkline, BrandTile } from "@/components/dash/ui";

const fade = (d: number): any => ({ initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { delay: d, duration: 0.55, ease: [0.16, 1, 0.3, 1] } });

const FEATURES = [
  { icon: EyeIcon, t: "Visibilité totale", d: "Centralisez toutes vos dépenses SaaS et identifiez ce qui compte vraiment." },
  { icon: LogoMark, t: "Maîtrise & contrôle", d: "Suivez l'utilisation réelle, évitez les doublons et reprenez le contrôle." },
  { icon: PiggyIcon, t: "Économies durables", d: "Identifiez les gaspillages et libérez du budget, durablement." },
];

export default function LoginPage() {
  const [showPwd, setShowPwd] = useState(false);

  return (
    <Boot>
      <div className="min-h-screen bg-mist lg:grid lg:grid-cols-[minmax(0,44%)_1fr]">
        <aside className="relative hidden overflow-hidden bg-night p-12 text-white lg:flex lg:flex-col lg:justify-between xl:p-16">
          <div aria-hidden className="pointer-events-none absolute -right-40 top-1/3 h-[560px] w-[560px] rounded-full bg-primary/25 blur-[140px]" />
          <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-24 h-[420px] w-[420px] rounded-full bg-[#2A2360]/60 blur-[120px]" />

          <motion.a {...fade(0.1)} href="/" className="relative z-10 flex items-center gap-2 text-xl font-extrabold tracking-tight">
            <LogoMark className="h-6 w-6 text-primary" /> Tallyo
          </motion.a>

          <div className="relative z-10 py-12">
            <motion.h1 {...fade(0.2)} className="font-display text-5xl leading-[1.08] xl:text-[56px]">
              Le contrôle<br />de vos abonnements<br />SaaS,{" "}
              <span className="relative inline-block italic text-[#8B85F7]">
                enfin.
                <svg viewBox="0 0 120 12" className="absolute -bottom-2 left-0 w-full" fill="none">
                  <path d="M4 8c30-6 70-6 112-2" stroke="#6C5CE7" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </motion.h1>
            <motion.p {...fade(0.3)} className="mt-7 max-w-md text-[15px] leading-relaxed text-white/55">
              Tallyo vous donne une visibilité totale sur vos dépenses, vos outils et vos licences pour mieux décider et économiser.
            </motion.p>

            <div className="mt-10 space-y-6">
              {FEATURES.map((f, i) => (
                <motion.div key={f.t} {...fade(0.4 + i * 0.1)} className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5">
                    <f.icon className="h-5 w-5 text-[#8B85F7]" />
                  </span>
                  <span>
                    <span className="block text-sm font-bold">{f.t}</span>
                    <span className="mt-1 block max-w-xs text-[13px] leading-relaxed text-white/50">{f.d}</span>
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div {...fade(0.7)} className="relative z-10 mb-6 max-w-sm">
            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
              <p className="text-xs text-white/55">Dépenses totales</p>
              <p className="mt-1 text-2xl font-extrabold">143 650 €</p>
              <p className="mt-1 flex items-center gap-2 text-[11px] text-white/50">
                <span className="font-semibold text-[#34C77B]">↗ 12%</span> vs mars 2024
              </p>
              <div className="mt-3"><Sparkline values={[40, 52, 48, 60, 55, 70, 66, 84, 80, 96]} w={260} h={54} id="login-sp" /></div>

              <div className="absolute -right-6 -top-6 animate-floaty rounded-xl bg-white p-2 shadow-lift"><BrandTile name="Slack" className="h-9 w-9 bg-white text-[#611F69]" /></div>
              <div className="absolute -right-9 top-10 animate-floaty rounded-xl bg-white p-2 shadow-lift [animation-delay:1.2s]"><BrandTile name="Notion" className="h-9 w-9" /></div>
              <div className="absolute -right-4 top-28 animate-floaty rounded-xl shadow-lift [animation-delay:2s]"><BrandTile name="HubSpot" className="h-11 w-11" /></div>
            </div>
          </motion.div>

          <motion.p {...fade(0.8)} className="relative z-10 text-[11px] text-white/35">© 2024 Tallyo – Tous droits réservés</motion.p>
        </aside>

        <div className="flex min-h-screen flex-col px-6 py-7">
          <motion.p {...fade(0.3)} className="self-end text-sm text-ink-soft">
            Pas encore de compte ?{" "}
            <a href="/signup" className="font-semibold text-primary hover:text-primary-deep">Créer un compte</a>
          </motion.p>

          <div className="flex flex-1 items-center justify-center py-10">
            <motion.div {...fade(0.4)} className="w-full max-w-md rounded-2xl border border-ink/5 bg-white p-8 shadow-card sm:p-10">
              <div className="flex items-center justify-center gap-2 text-xl font-extrabold tracking-tight text-ink">
                <LogoMark className="h-6 w-6 text-primary" /> Tallyo
              </div>
              <h1 className="mt-6 text-center text-2xl font-extrabold tracking-tight text-ink">Bienvenue de retour</h1>
              <p className="mt-2 text-center text-sm text-ink-soft">Connectez-vous à votre espace Tallyo.</p>

              <div className="mt-8 space-y-3">
                <motion.button {...fade(0.5)} className="flex w-full items-center justify-center gap-3 rounded-lg border border-ink/10 bg-white py-3 text-sm font-semibold text-ink transition hover:bg-mist">
                  <GoogleG className="h-4 w-4" /> Continuer avec Google
                </motion.button>
                <motion.button {...fade(0.55)} className="flex w-full items-center justify-center gap-3 rounded-lg border border-ink/10 bg-white py-3 text-sm font-semibold text-ink transition hover:bg-mist">
                  <MicrosoftMark className="h-4 w-4" /> Continuer avec Microsoft
                </motion.button>
              </div>

              <div className="my-6 flex items-center gap-4 text-[11px] text-ink-soft">
                <span className="h-px flex-1 bg-ink/10" /> ou <span className="h-px flex-1 bg-ink/10" />
              </div>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <motion.div {...fade(0.6)}>
                  <label htmlFor="email" className="text-[13px] font-semibold text-ink">Adresse e-mail</label>
                  <input
                    id="email" type="email" required placeholder="vous@entreprise.com"
                    className="mt-2 w-full rounded-lg border border-ink/10 bg-mist/60 px-4 py-3 text-sm text-ink outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                  />
                </motion.div>

                <motion.div {...fade(0.65)}>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-[13px] font-semibold text-ink">Mot de passe</label>
                    <a href="#" className="text-xs font-semibold text-primary hover:text-primary-deep">Mot de passe oublié ?</a>
                  </div>
                  <div className="relative mt-2">
                    <input
                      id="password" type={showPwd ? "text" : "password"} required placeholder="••••••••••••••••"
                      className="w-full rounded-lg border border-ink/10 bg-mist/60 px-4 py-3 pr-11 text-sm text-ink outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                    />
                    <button type="button" onClick={() => setShowPwd(!showPwd)} className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-soft hover:text-ink">
                      {showPwd ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
                    </button>
                  </div>
                </motion.div>

                <motion.label {...fade(0.7)} className="flex items-center gap-2 text-[13px] text-ink-soft">
                  <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-ink/20 accent-primary" />
                  Se souvenir de moi
                </motion.label>

                <motion.div {...fade(0.75)}>
                  <a
                    href="/dashboard"
                    className="block w-full rounded-lg bg-primary py-3.5 text-center text-sm font-bold text-white shadow-[0_12px_28px_-12px_rgba(91,84,238,0.8)] transition hover:bg-primary-deep"
                  >
                    Se connecter
                  </a>
                </motion.div>
              </form>
            </motion.div>
          </div>

          <motion.p {...fade(0.8)} className="flex items-center justify-center gap-2 pb-2 text-xs text-ink-soft">
            <LockIcon className="h-3.5 w-3.5" /> Vos données sont chiffrées et sécurisées.
          </motion.p>
        </div>
      </div>
    </Boot>
  );
}
