"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { LogoMark } from "@/components/icons";
import { Button } from "@/components/Button";
import { Magnetic } from "@/components/Magnetic";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <AnimatePresence>
      {!loaded ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-cream"
        >
          <svg viewBox="0 0 32 32" className="h-20 w-20 text-primary" fill="currentColor">
            <motion.rect
              x="4" y="17" width="6" height="11" rx="3"
              initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
              transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "bottom" }}
            />
            <motion.rect
              x="13" y="6" width="6" height="22" rx="3"
              initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
              transition={{ duration: 0.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "bottom" }}
            />
            <motion.rect
              x="22" y="11" width="6" height="17" rx="3"
              initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
              transition={{ duration: 0.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "bottom" }}
            />
          </svg>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="min-h-screen bg-cream"
        >
          <div className="container-x flex min-h-screen flex-col items-center justify-center py-12">
            {/* Header */}
            <motion.a
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              href="/"
              className="mb-8 flex items-center gap-2 text-xl font-extrabold tracking-tight"
            >
              <LogoMark className="h-6 w-6 text-primary" /> Tallyo
            </motion.a>

            {/* Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="w-full max-w-md rounded-2xl border border-ink/5 bg-white p-8 shadow-card sm:p-10"
            >
              <h1 className="text-2xl font-extrabold tracking-tight text-ink">Se connecter</h1>
              <p className="mt-2 text-sm text-ink-soft">Accédez à votre dashboard Tallyo</p>

              <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-ink">Email</label>
                  <input
                    id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    className="mt-2 w-full rounded-lg border border-ink/10 bg-cream px-4 py-3 text-sm text-ink outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                    placeholder="vous@entreprise.com" required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <label htmlFor="password" className="block text-sm font-medium text-ink">Mot de passe</label>
                  <input
                    id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                    className="mt-2 w-full rounded-lg border border-ink/10 bg-cream px-4 py-3 text-sm text-ink outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                    placeholder="••••••••" required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="flex items-center justify-between"
                >
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="h-4 w-4 rounded border-ink/20 text-primary focus:ring-primary" />
                    <span className="text-xs text-ink-soft">Se souvenir de moi</span>
                  </label>
                  <a href="#" className="text-xs font-medium text-primary hover:text-primary-deep">
                    Mot de passe oublié ?
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <Magnetic>
                    <Button href="/dashboard" size="lg" className="w-full">Se connecter</Button>
                  </Magnetic>
                </motion.div>
              </form>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="mt-6 text-center text-sm text-ink-soft"
              >
                Pas encore de compte ?{" "}
                <a href="/signup" className="font-semibold text-primary hover:text-primary-deep">
                  Créer un compte
                </a>
              </motion.div>
            </motion.div>

            {/* Footer links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8 flex gap-6 text-xs font-medium text-ink-soft"
            >
              <a href="/" className="transition hover:text-ink">Retour à l&apos;accueil</a>
              <a href="#" className="transition hover:text-ink">Aide</a>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
