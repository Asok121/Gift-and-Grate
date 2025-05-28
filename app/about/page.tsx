import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import AboutHero from "@/components/about/AboutHero";
import AboutContent from "@/components/about/AboutContent";
import TeamSection from "@/components/about/TeamSection";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <AboutHero />
        <AboutContent />
        <TeamSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}