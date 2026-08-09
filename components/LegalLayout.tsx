import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export function LegalLayout({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main className="container-x py-20">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-ink/10 bg-white p-8 shadow-card md:p-12">
          <p className="font-hand text-2xl text-primary-deep">Tallyo</p>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-ink">{title}</h1>
          <p className="mt-4 text-lg text-ink-soft">{intro}</p>
          <div className="prose prose-sm mt-8 max-w-none text-ink-soft">
            {children}
          </div>
          <div className="mt-10 rounded-2xl bg-cream-deep p-5 text-sm text-ink-soft">
            Besoin d’aide ? <Link href="/contact" className="font-semibold text-primary">Écrivez-nous</Link>.
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
