"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Boot } from "@/components/Boot";
import { LogoMark, CheckIcon, BankIcon } from "@/components/icons";
import { EyeIcon, EyeOffIcon, XIcon, CardIcon, LockIcon, UploadIcon, ArrowLeftIcon, GoogleG } from "@/components/dash/icons";
import { cn } from "@/lib/utils";

const fade = (d = 0): any => ({ initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -12 }, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: d } });

const PLANS = [
  { name: "Essentiel", price: 99, desc: "Idéal pour les petites équipes qui veulent y voir clair.", feats: ["Jusqu'à 25 outils suivis", "Jusqu'à 50 employés", "Alertes renouvellements", "Tableaux de bord", "Support par email"], cta: "Commencer", popular: false },
  { name: "Croissance", price: 199, desc: "Pour les entreprises en croissance qui veulent reprendre le contrôle.", feats: ["Jusqu'à 75 outils suivis", "Jusqu'à 250 employés", "Toutes les intégrations", "Détection des licences inutilisées", "Support prioritaire"], cta: "Commencer", popular: true },
  { name: "Entreprise", price: 0, desc: "Pour les organisations qui ont besoin d'un accompagnement dédié.", feats: ["Outils illimités", "Employés illimités", "Gestion multi-entités", "Exports avancés & API", "Account manager dédié"], cta: "Nous contacter", popular: false },
];

const SOURCES = [
  { icon: BankIcon, t: "Compte bancaire", rec: true, d: "Connectez votre banque professionnelle via notre partenaire sécurisé.", plaid: true },
  { icon: CardIcon, t: "Cartes bancaires pro", d: "Connectez vos cartes professionnelles pour détecter les abonnements.", plaid: true },
  { icon: LockIcon, t: "Stripe", d: "Connectez votre compte Stripe pour importer vos paiements." },
  { icon: UploadIcon, t: "Importer un CSV", d: "Vous avez déjà un fichier de dépenses ? Importez-le en quelques secondes." },
  { icon: GoogleG, t: "Google Workspace", d: "Voir quelles licences sont assignées et utilisées." },
  { icon: LockIcon, t: "Okta / Entra ID", d: "Voir l'utilisation réelle des outils via le SSO." },
];

function Stepper({ step }: { step: number }) {
  return (
    <div className="flex items-center">
      {[1, 2, 3].map((n, i) => (
        <div key={n} className="flex items-center">
          <span className={cn("grid h-7 w-7 place-items-center rounded-full text-xs font-bold transition", step >= n ? "bg-primary text-white" : "bg-ink/10 text-ink-soft")}>
            {step > n ? <CheckIcon className="h-3.5 w-3.5" /> : n}
          </span>
          {i < 2 && <span className={cn("h-0.5 w-16 sm:w-24", step > n ? "bg-primary" : "bg-ink/10")} />}
        </div>
      ))}
    </div>
  );
}

function BillingToggle({ annual, setAnnual }: { annual: boolean; setAnnual: (v: boolean) => void }) {
  return (
    <div className="inline-flex rounded-lg border border-ink/10 bg-white p-1">
      {[{ v: false, l: "Mensuel" }, { v: true, l: "Annuel", badge: "-20%" }].map((o) => (
        <button key={o.l} onClick={() => setAnnual(o.v)} className={cn("flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition", annual === o.v ? "bg-primary/10 text-primary-deep ring-1 ring-primary/30" : "text-ink-soft")}>
          {o.l}{o.badge && <span className="rounded bg-success-soft px-1 text-[10px] font-bold text-success">{o.badge}</span>}
        </button>
      ))}
    </div>
  );
}

export default function SignupPage() {
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [pwd, setPwd] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [annual, setAnnual] = useState(false);
  const [plan, setPlan] = useState(PLANS[1]);
  const [picked, setPicked] = useState<string[]>([]);

  const price = plan.price === 0 ? 0 : annual ? Math.round(plan.price * 0.8) : plan.price;
  const ttc = (price * 1.2).toLocaleString("fr-FR", { minimumFractionDigits: 2 });
  const checks = [pwd.length >= 8, /[A-Z]/.test(pwd) && /\d/.test(pwd), true];

  return (
    <Boot>
      <div className="min-h-screen bg-mist">
        <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <a href="/" className="flex items-center gap-2 text-lg font-extrabold tracking-tight text-ink">
            <LogoMark className="h-6 w-6 text-primary" /> Tallyo
          </a>
          <div className="absolute left-1/2 -translate-x-1/2"><Stepper step={step > 3 ? 3 : step} /></div>
          {step !== 1 ? (
            <a href="/" className="text-ink-soft hover:text-ink"><XIcon className="h-5 w-5" /></a>
          ) : <span className="w-5" />}
        </header>

        <main className="mx-auto max-w-5xl px-6 pb-20 pt-6">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="s1" {...fade()} className="mx-auto max-w-md">
                <div className="relative">
                  <h1 className="text-3xl font-extrabold tracking-tight text-ink">On y va ? 🚀</h1>
                  <span className="font-hand absolute -right-12 -top-6 rotate-6 text-xl text-primary-deep">C'est gratuit 14 jours !</span>
                </div>
                <p className="mt-2 text-sm text-ink-soft">Créez votre espace en 30 secondes.</p>

                <form className="mt-8 space-y-5" onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[13px] font-semibold text-ink">Prénom</label>
                      <input required placeholder="Thomas" className="mt-2 w-full rounded-lg border border-ink/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10" />
                    </div>
                    <div>
                      <label className="text-[13px] font-semibold text-ink">Nom</label>
                      <input required placeholder="Martin" className="mt-2 w-full rounded-lg border border-ink/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[13px] font-semibold text-ink">E-mail professionnel</label>
                    <input type="email" required placeholder="thomas@acme.com" className="mt-2 w-full rounded-lg border border-ink/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10" />
                  </div>
                  <div>
                    <label className="text-[13px] font-semibold text-ink">Mot de passe</label>
                    <div className="relative mt-2">
                      <input type={showPwd ? "text" : "password"} value={pwd} onChange={(e) => setPwd(e.target.value)} required placeholder="•••••••••••••" className="w-full rounded-lg border border-ink/10 bg-white px-4 py-3 pr-11 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10" />
                      <button type="button" onClick={() => setShowPwd(!showPwd)} className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-soft hover:text-ink">
                        {showPwd ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
                      </button>
                    </div>
                    <p className="font-hand mt-2 text-sm text-ink-soft">Astuce : utilisez votre gestionnaire de mots de passe 😉</p>
                    <ul className="mt-3 space-y-1.5">
                      {['8 caractères minimum', '1 majuscule et 1 chiffre', 'Caractères spéciaux autorisés'].map((l, i) => (
                        <li key={l} className={cn("flex items-center gap-2 text-xs", checks[i] ? "text-success" : "text-ink-soft")}>
                          <CheckIcon className="h-3 w-3" /> {l}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="w-full rounded-lg bg-ink py-3.5 text-sm font-bold text-cream transition hover:bg-ink/90">
                    C'est parti →
                  </button>
                </form>
                <p className="mt-6 text-center text-sm text-ink-soft">
                  Vous avez déjà un compte ? <a href="/login" className="font-semibold text-primary hover:text-primary-deep">Se connecter</a>
                </p>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="s2" {...fade()}>
                <div className="text-center">
                  <h1 className="text-3xl font-extrabold tracking-tight text-ink">D'où viennent vos dépenses ?</h1>
                  <p className="font-hand mt-2 text-2xl text-primary-deep">C'est ici que la magie opère ✨</p>
                  <p className="mt-1 text-sm text-ink-soft">Connectez vos comptes. Plus il y en a, plus on est précis.</p>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {SOURCES.map((s, i) => {
                    const on = picked.includes(s.t);
                    return (
                      <motion.button
                        key={s.t} {...fade(0.1 + i * 0.06)}
                        onClick={() => setPicked(on ? picked.filter((p) => p !== s.t) : [...picked, s.t])}
                        className={cn("relative rounded-2xl border bg-white p-5 text-left transition", on ? "border-primary ring-2 ring-primary/20" : "border-ink/10 hover:border-primary/40")}
                      >
                        <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10">
                          {s.icon === GoogleG ? <GoogleG className="h-4 w-4" /> : <s.icon className="h-5 w-5 text-primary-deep" />}
                        </span>
                        <p className="mt-3 text-sm font-bold text-ink">
                          {s.t} {s.rec && <span className="ml-1 text-[11px] font-semibold text-success">( recommandé )</span>}
                        </p>
                        <p className="mt-1.5 text-xs leading-relaxed text-ink-soft">{s.d}</p>
                        {s.plaid && (
                          <p className="mt-3 flex items-center gap-1.5 text-[10px] font-semibold text-ink-soft">
                            <LockIcon className="h-3 w-3" /> Sécurisé par <span className="font-extrabold text-ink">PLAID</span>
                          </p>
                        )}
                      </motion.button>
                    );
                  })}
                </div>

                <div className="mt-10 flex items-center justify-between">
                  <button onClick={() => setStep(3)} className="text-sm font-semibold text-primary hover:text-primary-deep">Je le ferai plus tard</button>
                  <button onClick={() => setStep(3)} className="rounded-lg bg-primary px-8 py-3 text-sm font-bold text-white shadow-[0_12px_28px_-12px_rgba(91,84,238,0.8)] transition hover:bg-primary-deep">Continuer</button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="s3" {...fade()}>
                <div className="text-center">
                  <h1 className="text-2xl font-extrabold tracking-tight text-ink">Choisissez votre plan</h1>
                  <p className="mt-1 text-sm text-ink-soft">Tous nos plans incluent une période d'essai de 14 jours. Sans engagement.</p>
                  <div className="mt-5"><BillingToggle annual={annual} setAnnual={setAnnual} /></div>
                </div>

                <div className="mt-10 grid gap-5 lg:grid-cols-3">
                  {PLANS.map((p, i) => (
                    <motion.div
                      key={p.name} {...fade(0.1 + i * 0.08)}
                      className={cn("relative rounded-2xl border bg-white p-6", p.popular ? "border-primary shadow-[0_24px_48px_-20px_rgba(91,84,238,0.35)]" : "border-ink/10")}
                    >
                      {p.popular && (
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-[10px] font-bold text-white">Le plus populaire</span>
                      )}
                      <p className="text-sm font-bold text-ink">{p.name}</p>
                      <p className="mt-3 text-3xl font-extrabold text-ink">
                        {p.price === 0 ? "Sur devis" : <>{annual ? Math.round(p.price * 0.8) : p.price} € <span className="text-sm font-medium text-ink-soft">/mois</span></>}
                      </p>
                      <p className="mt-3 text-xs leading-relaxed text-ink-soft">{p.desc}</p>
                      <ul className="mt-5 space-y-2.5">
                        {p.feats.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-xs text-ink-soft"><CheckIcon className="h-3 w-3 text-success" /> {f}</li>
                        ))}
                      </ul>
                      <button
                        onClick={() => { setPlan(p); setStep(4); }}
                        className={cn("mt-6 w-full rounded-lg py-2.5 text-sm font-bold transition", p.popular ? "bg-primary text-white hover:bg-primary-deep" : "border border-primary/40 text-primary-deep hover:bg-primary/5")}
                      >
                        {p.cta}
                      </button>
                    </motion.div>
                  ))}
                </div>
                <p className="mt-8 text-center text-xs text-ink-soft">
                  Besoin d'un plan sur mesure ? <a href="#" className="font-semibold text-primary hover:text-primary-deep">Contactez-nous →</a>
                </p>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div key="s4" {...fade()} className="mx-auto max-w-3xl">
                <button onClick={() => setStep(3)} className="flex items-center gap-2 text-sm font-semibold text-ink-soft hover:text-ink">
                  <ArrowLeftIcon className="h-4 w-4" /> Retour
                </button>
                <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-ink">Finalisez votre paiement</h1>
                <p className="mt-1 text-sm text-ink-soft">Plan {plan.name} — {price} € / mois</p>

                <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_320px]">
                  <div className="rounded-2xl border border-ink/10 bg-white p-6">
                    <p className="text-sm font-bold text-ink">Informations de paiement</p>
                    <div className="mt-4 space-y-3">
                      <div className="rounded-xl border-2 border-primary bg-primary/5 p-4">
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-2 text-sm font-semibold text-ink">
                            <span className="grid h-4 w-4 place-items-center rounded-full bg-primary"><CheckIcon className="h-2.5 w-2.5 text-white" /></span>
                            Carte bancaire
                          </span>
                          <span className="flex gap-1 text-[9px] font-extrabold">
                            <span className="rounded bg-[#1A1F71] px-1.5 py-0.5 text-white italic">VISA</span>
                            <span className="rounded bg-ink/5 px-1.5 py-0.5 text-ink">MC</span>
                            <span className="rounded bg-[#2E77BC] px-1.5 py-0.5 text-white">AMEX</span>
                          </span>
                        </div>
                        <div className="mt-4 space-y-3">
                          <input placeholder="4242 4242 4242 4242" className="w-full rounded-lg border border-ink/10 bg-white px-3 py-2.5 text-sm outline-none focus:border-primary" />
                          <div className="grid grid-cols-2 gap-3">
                            <input placeholder="MM / AA" className="rounded-lg border border-ink/10 bg-white px-3 py-2.5 text-sm outline-none focus:border-primary" />
                            <input placeholder="123" className="rounded-lg border border-ink/10 bg-white px-3 py-2.5 text-sm outline-none focus:border-primary" />
                          </div>
                          <input placeholder="Thomas Martin" className="w-full rounded-lg border border-ink/10 bg-white px-3 py-2.5 text-sm outline-none focus:border-primary" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between rounded-xl border border-ink/10 p-4">
                        <span className="flex items-center gap-2 text-sm font-semibold text-ink-soft"><span className="h-4 w-4 rounded-full border border-ink/20" /> Prélèvement SEPA</span>
                        <span className="text-xs font-extrabold text-[#2E77BC]">SEPA</span>
                      </div>
                    </div>
                  </div>

                  <div className="h-fit rounded-2xl border border-ink/10 bg-white p-6">
                    <p className="text-sm font-bold text-ink">Résumé de la commande</p>
                    <div className="mt-3"><BillingToggle annual={annual} setAnnual={setAnnual} /></div>
                    <dl className="mt-4 space-y-2 text-sm">
                      <div className="flex justify-between text-ink-soft"><span>Plan {plan.name}</span><span>{price.toLocaleString("fr-FR", { minimumFractionDigits: 2 })} €</span></div>
                      <div className="flex justify-between text-ink-soft"><span>TVA (20%)</span><span>{(price * 0.2).toLocaleString("fr-FR", { minimumFractionDigits: 2 })} €</span></div>
                      <div className="flex justify-between border-t border-ink/10 pt-2 font-extrabold text-ink"><span>Total TTC</span><span>{ttc} €</span></div>
                    </dl>
                    <p className="mt-3 text-[11px] leading-relaxed text-ink-soft">Puis {price.toLocaleString("fr-FR", { minimumFractionDigits: 2 })} € / mois à partir du 20 mai 2024. Annulation possible à tout moment.</p>
                    <ul className="mt-4 space-y-2 text-xs text-ink-soft">
                      <li className="flex items-center gap-2"><CheckIcon className="h-3 w-3 text-success" /> Essai 14 jours gratuit</li>
                      <li className="flex items-center gap-2"><CheckIcon className="h-3 w-3 text-success" /> Annulation à tout moment</li>
                    </ul>
                    <button onClick={() => setStep(5)} className="mt-5 w-full rounded-lg bg-primary py-3 text-sm font-bold text-white shadow-[0_12px_28px_-12px_rgba(91,84,238,0.8)] transition hover:bg-primary-deep">
                      Payer {ttc} €
                    </button>
                    <p className="mt-3 flex items-center justify-center gap-1.5 text-[10px] text-ink-soft"><LockIcon className="h-3 w-3" /> Paiement sécurisé par <span className="font-extrabold text-ink">Stripe</span></p>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 5 && (
              <motion.div key="s5" {...fade()} className="relative mx-auto max-w-md text-center">
                {Array.from({ length: 26 }).map((_, i) => (
                  <motion.span
                    key={i}
                    className="pointer-events-none absolute top-0 h-2 w-1 rounded-sm"
                    style={{ left: `${(i * 137) % 100}%`, background: ["#6C5CE7", "#F5C542", "#34C77B", "#4F7DF9", "#F0564A"][i % 5] }}
                    initial={{ y: -40, opacity: 0, rotate: 0 }}
                    animate={{ y: [-40, 260], opacity: [0, 1, 0], rotate: (i % 2 ? 1 : -1) * 260 }}
                    transition={{ duration: 2.2, delay: 0.3 + (i % 10) * 0.12, ease: "easeOut" }}
                  />
                ))}
                <svg viewBox="0 0 64 64" className="mx-auto h-20 w-20">
                  <motion.circle cx="32" cy="32" r="28" fill="none" stroke="#18A058" strokeWidth="3"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.7, ease: "easeOut" }} />
                  <motion.path d="M20 33l8 8 16-17" fill="none" stroke="#18A058" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.6, duration: 0.4 }} />
                </svg>
                <h1 className="mt-6 text-2xl font-extrabold tracking-tight text-ink">Tout est prêt ! 🎉</h1>
                <p className="mt-2 text-sm text-ink-soft">Votre compte Tallyo est créé.<br />Nous analysons vos données, cela peut prendre quelques minutes.</p>

                <div className="mt-8 rounded-2xl border border-ink/10 bg-white p-5 text-left">
                  <p className="text-xs font-bold text-ink">Et ensuite ?</p>
                  <ul className="mt-3 space-y-3 text-[13px] text-ink-soft">
                    <li className="flex items-center gap-3">🔍 Nous détectons vos abonnements</li>
                    <li className="flex items-center gap-3">💰 Nous identifions les économies potentielles</li>
                    <li className="flex items-center gap-3">📄 Vous recevez votre rapport personnalisé</li>
                  </ul>
                </div>

                <a href="/dashboard" className="mt-6 block w-full rounded-lg bg-primary py-3 text-sm font-bold text-white shadow-[0_12px_28px_-12px_rgba(91,84,238,0.8)] transition hover:bg-primary-deep">
                  Accéder à mon tableau de bord
                </a>
                <button className="mt-3 w-full rounded-lg border border-ink/10 bg-white py-3 text-sm font-semibold text-ink transition hover:border-primary/40">
                  Inviter un collègue
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </Boot>
  );
}
