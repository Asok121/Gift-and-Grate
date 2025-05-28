import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import AllCategoriesBanner from "@/components/categories/AllCategoriesBanner";
import CategoryGrid from "@/components/categories/CategoryGrid";

export default function CategoriesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <AllCategoriesBanner />
        <CategoryGrid />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}