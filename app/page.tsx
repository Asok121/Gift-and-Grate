import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import CategorySection from '@/components/CategorySection';
import OccasionSection from '@/components/OccasionSection';
import BestsellersSection from '@/components/BestsellersSection';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import InstagramSection from '@/components/InstagramSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <Hero />
      <CategorySection />
      <OccasionSection />
      <BestsellersSection />
      <FeaturesSection />
      <TestimonialsSection />
      <InstagramSection />
      <WhatsAppButton />
      <Footer />
    </main>
  );
}
