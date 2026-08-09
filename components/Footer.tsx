import { LogoMark } from "@/components/icons";

export function Footer() {
  return (
    <footer id="a-propos" className="scroll-mt-28 border-t border-ink/5 bg-cream py-10">
      <div className="container-x flex flex-col gap-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-ink-soft">Produit</p>
            <ul className="mt-3 space-y-2 text-sm text-ink-soft">
              <li><a href="/demo" className="transition hover:text-ink">Démo interactive</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-ink-soft">Ressources</p>
            <ul className="mt-3 space-y-2 text-sm text-ink-soft">
              <li><a href="/prix" className="transition hover:text-ink">Tarifs</a></li>
              <li><a href="/contact" className="transition hover:text-ink">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-ink-soft">Légal</p>
            <ul className="mt-3 space-y-2 text-sm text-ink-soft">
              <li><a href="/mentions-legales" className="transition hover:text-ink">Mentions légales</a></li>
              <li><a href="/cgu" className="transition hover:text-ink">CGU</a></li>
              <li><a href="/confidentialite" className="transition hover:text-ink">Confidentialité</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-6 border-t border-ink/5 pt-6 sm:flex-row">
        <a href="/" className="flex items-center gap-2 font-extrabold tracking-tight">
          <LogoMark className="h-5 w-5 text-primary" /> Tallyo
        </a>
        <p className="text-xs text-ink-soft">© {new Date().getFullYear()} Tallyo — Fait avec soin à Paris.</p>
        </div>
      </div>
    </footer>
  );
}
