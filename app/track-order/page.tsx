import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import TrackOrderForm from "@/components/track-order/TrackOrderForm";

export default function TrackOrderPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="py-16 bg-gift-pink bg-opacity-10">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-8">
              <TrackOrderForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}