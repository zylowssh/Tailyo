import { LogoMark } from "@/components/icons";

export function Footer() {
  return (
    <footer id="a-propos" className="scroll-mt-28 border-t border-ink/5 py-10">
      <div className="container-x flex flex-col items-center justify-between gap-6 sm:flex-row">
        <a href="#" className="flex items-center gap-2 font-extrabold tracking-tight">
          <LogoMark className="h-5 w-5 text-primary" /> Tallyo
        </a>
        <p className="text-xs text-ink-soft">© {new Date().getFullYear()} Tallyo — Fait avec soin à Paris.</p>
        <div className="flex gap-6 text-xs font-medium text-ink-soft">
          <a href="#" className="transition hover:text-ink">Mentions légales</a>
          <a href="#" className="transition hover:text-ink">Confidentialité</a>
          <a href="#" className="transition hover:text-ink">Contact</a>
        </div>
      </div>
    </footer>
  );
}
