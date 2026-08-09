import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoCloud } from "@/components/LogoCloud";
import { Problems } from "@/components/Problems";
import { Results } from "@/components/Results";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <main className="overflow-x-clip">
      <Navbar />
      <Hero />
      <LogoCloud />
      <Problems />
      <Results />
      <FinalCta />
      <Footer />
    </main>
  );
}
