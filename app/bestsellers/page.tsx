import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import BestsellersBanner from "@/components/bestsellers/BestsellersBanner";
import BestsellersGrid from "@/components/bestsellers/BestsellersGrid";

export default function BestsellersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <BestsellersBanner />
        <BestsellersGrid />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}