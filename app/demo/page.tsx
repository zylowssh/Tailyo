"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Boot } from "@/components/Boot";
import { LogoMark, CheckIcon, BellIcon } from "@/components/icons";
import { SparklesIcon } from "@/components/dash/icons";
import { BrandTile } from "@/components/dash/ui";
import { cn } from "@/lib/utils";

type Step = { id: string; emoji?: string; title?: string; body?: string; hand?: string };

const STEPS: Step[] = [
  { id: "intro" },
  { id: "overview", emoji: "🧭", title: "Bienvenue chez Dupont & Fils", body: "Vous êtes Thomas, Head of Ops d'une scale-up de 85 personnes. Voici votre lundi matin : tout votre stack SaaS, résumé en un coup d'œil.", hand: "pas besoin de connecter quoi que ce soit 😉" },
  { id: "savings", emoji: "💸", title: "Trouvez des économies (pour de faux)", body: "Cliquez sur les suggestions pour voir combien Tallyo aurait détecté. Spoiler : ça pique.", hand: "allez-y, cliquez !" },
  { id: "radar", emoji: "📡", title: "Le radar anti-oublis", body: "Renouvellements, échecs de paiement, hausses de prix : Tallyo prévient avant que ça fasse mal, pas après.", hand: "fini les surprises sur le relevé bancaire" },
  { id: "tools", emoji: "🔍", title: "Chaque outil, à la loupe", body: "Doublons, sièges fantômes, licences jamais ouvertes : vous voyez exactement ce que vous payez pour rien.", hand: "regardez la ligne Zoom…" },
  { id: "end" },
];

const SUGGESTIONS = [
  { id: "slack", label: "12 sièges Slack inutilisés", detail: "Aucune activité depuis 60 jours", amount: 1248 },
  { id: "zoom", label: "Doublon Zoom + Google Meet", detail: "Deux outils, même usage", amount: 2150 },
  { id: "hubspot", label: "Passer HubSpot en facturation annuelle", detail: "Remise négociée automatiquement", amount: 1440 },
];

const TOOLS = [
  { name: "Slack", seats: "78 / 85", badge: "12 sièges fantômes", cls: "bg-warn-soft text-warn" },
  { name: "Zoom", seats: "31 / 35", badge: "Doublon", cls: "bg-danger-soft text-danger" },
  { name: "Notion", seats: "18 / 20", badge: "Actif", cls: "bg-success-soft text-success" },
];

function Section({ id, step, touring, children, className }: { id: string; step: number; touring: boolean; children: React.ReactNode; className?: string }) {
  const active = STEPS[step]?.id === id;
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (active) ref.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [active]);
  return (
    <div
      ref={ref}
      className={cn(
        "rounded-3xl transition-all duration-500",
        active && "relative z-10 ring-4 ring-primary/30 ring-offset-4 ring-offset-cream",
        touring && !active && "opacity-40 saturate-50",
        className
      )}
    >
      {children}
    </div>
  );
}

function Stat({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="rounded-2xl bg-white/70 p-4 backdrop-blur-sm">
      <p className="text-[10px] font-bold uppercase tracking-widest text-ink-soft">{label}</p>
      <p className="mt-1 text-2xl font-extrabold text-ink">{value}</p>
      <p className="text-[11px] text-ink-soft">{sub}</p>
    </div>
  );
}

export default function DemoPage() {
  const [step, setStep] = useState(0);
  const [free, setFree] = useState(false);
  const [picked, setPicked] = useState<string[]>([]);

  const total = SUGGESTIONS.filter((s) => picked.includes(s.id)).reduce((a, s) => a + s.amount, 0);
  const touring = !free && step >= 1 && step <= STEPS.length - 2;
  const last = step === STEPS.length - 1;
  const toggle = (id: string) => setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));

  return (
    <Boot>
      <div className="min-h-screen bg-cream pb-44">
        <header className="sticky top-0 z-40 border-b border-ink/5 bg-cream/80 backdrop-blur-md">
          <div className="container-x flex h-14 items-center justify-between">
            <a href="/" className="flex items-center gap-2 font-extrabold tracking-tight text-ink">
              <LogoMark className="h-5 w-5 text-primary" /> Tallyo
            </a>
            <div className="flex items-center gap-3">
              <span className="hidden font-hand text-lg text-ink-soft sm:block">données 100% fictives ✨</span>
              <span className="rounded-full bg-accent/40 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-ink">Mode démo</span>
              <a href="/signup" className="rounded-full bg-primary px-4 py-1.5 text-xs font-bold text-white transition hover:bg-primary-deep">Créer un compte</a>
            </div>
          </div>
        </header>

        <main className="container-x mt-8 space-y-6">
          <Section id="overview" step={step} touring={touring}>
            <div className="rounded-3xl bg-blob-lavender p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-ink font-extrabold text-cream">D</span>
                <div>
                  <p className="font-extrabold text-ink">Dupont & Fils</p>
                  <p className="text-xs text-ink-soft">85 employés · 42 outils suivis</p>
                </div>
                <span className="ml-auto rounded-full bg-white/70 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-ink-soft">entreprise fictive</span>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <Stat label="Dépenses ce mois-ci" value="8 030 €" sub="+6% vs mars" />
                <Stat label="Renouvellements à 30 j" value="3" sub="5 870 € engagés" />
                <Stat label="Outils suivis" value="42" sub="dont 2 doublons" />
              </div>
            </div>
          </Section>

          <Section id="savings" step={step} touring={touring}>
            <div className="rounded-3xl border border-ink/5 bg-white p-6 shadow-card sm:p-8">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <h2 className="flex items-center gap-2 text-lg font-extrabold text-ink">
                    <SparklesIcon className="h-5 w-5 text-primary" /> Économies détectées
                  </h2>
                  <p className="text-sm text-ink-soft">Ce que Tallyo aurait trouvé chez Dupont & Fils.</p>
                </div>
                <div className="text-right">
                  <motion.p key={total} initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-3xl font-extrabold text-primary-deep">
                    {total.toLocaleString("fr-FR")} €
                  </motion.p>
                  <p className="font-hand text-lg text-ink-soft">
                    {total === 0 ? "cliquez ci-dessous pour ajouter →" : "trouvé en 10 secondes, pas mal non ?"}
                  </p>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                {SUGGESTIONS.map((s) => {
                  const on = picked.includes(s.id);
                  return (
                    <button
                      key={s.id}
                      onClick={() => toggle(s.id)}
                      className={cn(
                        "flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition",
                        on ? "border-success bg-success-soft/60" : "border-ink/10 hover:border-primary/40"
                      )}
                    >
                      <span className={cn("grid h-6 w-6 shrink-0 place-items-center rounded-full border-2 transition", on ? "border-success bg-success text-white" : "border-ink/20") }>
                        {on && <CheckIcon className="h-3 w-3" />}
                      </span>
                      <span className="flex-1">
                        <span className="block text-sm font-bold text-ink">{s.label}</span>
                        <span className="block text-xs text-ink-soft">{s.detail}</span>
                      </span>
                      <span className="text-sm font-extrabold text-ink">+{s.amount.toLocaleString("fr-FR")} €/an</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </Section>

          <div className="grid gap-6 lg:grid-cols-2">
            <Section id="radar" step={step} touring={touring}>
              <div className="h-full rounded-3xl bg-ink p-6 text-cream sm:p-8">
                <h2 className="flex items-center gap-2 text-lg font-extrabold">
                  <BellIcon className="h-5 w-5 text-accent" /> Le radar
                </h2>
                <ul className="mt-5 space-y-4 text-sm">
                  <li>🚨 <b>HubSpot</b> renouvelle dans 12 jours — 7 200 € seront débités.</li>
                  <li>👀 <b>Dropbox</b> : échec de paiement détecté sur la carte pro.</li>
                  <li>✨ Nouveau : <b>Notion</b> détecté sur votre facture Stripe.</li>
                </ul>
                <p className="font-hand mt-6 text-lg text-accent">vous dormez mieux, non ?</p>
              </div>
            </Section>

            <Section id="tools" step={step} touring={touring}>
              <div className="h-full rounded-3xl border border-ink/5 bg-white p-6 shadow-card sm:p-8">
                <h2 className="text-lg font-extrabold text-ink">La loupe 🔍</h2>
                <ul className="mt-5 space-y-3">
                  {TOOLS.map((t) => (
                    <li key={t.name} className="flex items-center gap-3 rounded-2xl border border-ink/5 p-3">
                      <BrandTile name={t.name} />
                      <span className="flex-1">
                        <span className="block text-sm font-bold text-ink">{t.name}</span>
                        <span className="block text-xs text-ink-soft">{t.seats} sièges</span>
                      </span>
                      <span className={cn("rounded-full px-2.5 py-1 text-[10px] font-bold", t.cls)}>{t.badge}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-hand mt-5 text-lg text-ink-soft">chaque euro a un propriétaire.</p>
              </div>
            </Section>
          </div>
        </main>

        <AnimatePresence>
          {step === 0 && !free && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 grid place-items-center bg-cream/90 px-4 backdrop-blur-sm">
              <motion.div initial={{ y: 24, scale: 0.97 }} animate={{ y: 0, scale: 1 }} className="w-full max-w-md rounded-3xl border border-ink/10 bg-white p-8 text-center shadow-lift">
                <p className="font-hand text-2xl text-primary-deep">psst… vous voulez visiter ?</p>
                <h1 className="mt-2 text-2xl font-extrabold tracking-tight text-ink">La démo Tallyo</h1>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  Pendant 2 minutes, vous êtes <b className="text-ink">Thomas</b>, Head of Ops chez <b className="text-ink">Dupont & Fils</b> (entreprise 100% fictive, promis). Découvrez comment on déterre les économies cachées de votre stack SaaS.
                </p>
                <button onClick={() => setStep(1)} className="mt-6 w-full rounded-xl bg-primary py-3.5 text-sm font-bold text-white transition hover:bg-primary-deep">
                  C'est parti →
                </button>
                <p className="mt-3 text-[11px] text-ink-soft">Aucune donnée réelle · Aucun compte requis</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {!free && step > 0 && (
            <div className="pointer-events-none fixed inset-x-0 bottom-5 z-50 flex justify-center px-4">
              <motion.div
                key={step}
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 12, opacity: 0 }}
                className="pointer-events-auto w-full max-w-lg rounded-3xl border border-ink/10 bg-white p-5 shadow-lift"
              >
                {last ? (
                  <>
                    <p className="text-lg font-extrabold text-ink">Alors, convaincu·e ? 🎉</p>
                    <p className="mt-1 text-sm text-ink-soft">
                      En 2 minutes de démo, vous avez trouvé <b className="text-primary-deep">{total.toLocaleString("fr-FR")} €</b> d'économies fictives. Imaginez avec vos vraies données.
                    </p>
                    <div className="mt-4 flex gap-2">
                      <a href="/signup" className="flex-1 rounded-xl bg-primary py-3 text-center text-sm font-bold text-white transition hover:bg-primary-deep">Créer mon compte</a>
                      <button onClick={() => { setFree(true); }} className="rounded-xl border border-ink/10 px-4 text-sm font-semibold text-ink-soft transition hover:text-ink">Explorer librement</button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{STEPS[step].emoji}</span>
                      <div>
                        <p className="font-extrabold text-ink">{STEPS[step].title}</p>
                        <p className="mt-1 text-sm text-ink-soft">{STEPS[step].body}</p>
                        <p className="font-hand mt-1 text-lg text-primary-deep">{STEPS[step].hand}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <button onClick={() => setStep(STEPS.length - 1)} className="text-xs font-semibold text-ink-soft transition hover:text-ink">Passer la démo</button>
                      <div className="flex items-center gap-3">
                        <div className="flex gap-1.5">
                          {STEPS.slice(1, -1).map((_, i) => (
                            <span key={i} className={cn("h-1.5 rounded-full transition-all", i + 1 === step ? "w-5 bg-primary" : "w-1.5 bg-ink/15")} />
                          ))}
                        </div>
                        {step > 1 && (
                          <button onClick={() => setStep((s) => s - 1)} className="text-xs font-bold text-ink-soft transition hover:text-ink">←</button>
                        )}
                        <button onClick={() => setStep((s) => s + 1)} className="rounded-full bg-ink px-4 py-2 text-xs font-bold text-cream transition hover:bg-ink/80">Suivant →</button>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {free && (
          <div className="pointer-events-none fixed inset-x-0 bottom-5 z-50 flex justify-center px-4">
            <div className="pointer-events-auto flex items-center gap-3 rounded-full border border-ink/10 bg-white py-2 pl-4 pr-2 shadow-lift">
              <span className="text-xs font-semibold text-ink-soft">Exploration libre — données fictives</span>
              <button onClick={() => { setFree(false); setStep(1); }} className="text-xs font-bold text-primary-deep hover:underline">Reprendre la visite</button>
              <a href="/signup" className="rounded-full bg-primary px-4 py-2 text-xs font-bold text-white transition hover:bg-primary-deep">Créer un compte</a>
            </div>
          </div>
        )}
      </div>
    </Boot>
  );
}