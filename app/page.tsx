import HeroSection from "@/components/home/HeroSection";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import CategorySection from "@/components/home/CategorySection";
import BestsellerSection from "@/components/home/BestsellerSection";
import USPSection from "@/components/home/USPSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import InstagramFeed from "@/components/home/InstagramFeed";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <CategorySection />
        <BestsellerSection />
        <USPSection />
        <TestimonialSection />
        <InstagramFeed />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}