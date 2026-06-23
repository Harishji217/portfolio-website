import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { PortfolioLinks } from "@/components/Portfolio";
import { TestimonialsMarquee } from "@/components/TestimonialsMarquee";
import { Results } from "@/components/Results";
import { Services } from "@/components/Services";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { MouseGlow } from "@/components/ui/MouseGlow";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <MouseGlow />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <PortfolioLinks />
        <TestimonialsMarquee />
        <Results />
        <Services />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
