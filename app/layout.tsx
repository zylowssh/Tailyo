import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat", display: "swap" });

export const metadata: Metadata = {
  title: "Tallyo — Le contrôle de vos abonnements SaaS, enfin.",
  description:
    "Tallyo vous donne une visibilité claire sur tous vos abonnements SaaS, détecte les gaspillages et vous alerte avant chaque renouvellement.",
  openGraph: {
    title: "Tallyo — Découvrez, comprenez, économisez.",
    description: "Le contrôle de vos abonnements SaaS, enfin.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${caveat.variable}`}>
      <body>
        <Providers>
          {children}
          {/* paper grain overlay */}
          <div
            aria-hidden
            className="pointer-events-none fixed inset-0 z-[60] opacity-[0.05] mix-blend-multiply"
            style={{ backgroundImage: "url(/textures/paper.png)", backgroundSize: "512px 512px" }}
          />
        </Providers>
      </body>
    </html>
  );
}
