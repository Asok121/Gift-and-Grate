import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import OccasionsBanner from "@/components/occasions/OccasionsBanner";
import OccasionsGrid from "@/components/occasions/OccasionsGrid";

export default function OccasionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <OccasionsBanner />
        <OccasionsGrid />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}