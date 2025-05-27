import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const categories = [
  {
    id: 'flowers',
    name: 'Flowers',
    description: 'Fresh bouquets, arrangements and floral gifts',
    image: 'https://images.unsplash.com/photo-1596438459194-f275f413d6ff?q=80&w=1374&auto=format&fit=crop'
  },
  {
    id: 'cakes',
    name: 'Cakes',
    description: 'Delicious, freshly baked cakes for all occasions',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1389&auto=format&fit=crop'
  },
  {
    id: 'hampers',
    name: 'Gift Hampers',
    description: 'Curated gift hampers for special moments',
    image: 'https://images.unsplash.com/photo-1607897513860-fca1d3d1d658?q=80&w=1374&auto=format&fit=crop'
  },
  {
    id: 'personalized',
    name: 'Personalized Gifts',
    description: 'Custom gifts with a personal touch',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1340&auto=format&fit=crop'
  },
  {
    id: 'corporate',
    name: 'Corporate Gifts',
    description: 'Professional gifting solutions for businesses',
    image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=1470&auto=format&fit=crop'
  },
  {
    id: 'plants',
    name: 'Plants',
    description: 'Indoor and outdoor plants that bring joy',
    image: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?q=80&w=1470&auto=format&fit=crop'
  }
];

export default function CategoriesPage() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-deepplum mb-4">Shop by Category</h1>
          <p className="text-lg text-deepplum/70 max-w-2xl mx-auto">Explore our wide range of gifting options for every occasion and recipient</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link href={`/categories/${category.id}`} key={category.id}>
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-deepplum mb-2">{category.name}</h2>
                  <p className="text-deepplum/70 mb-4">{category.description}</p>
                  <Button className="btn-primary w-full">View Products</Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <WhatsAppButton />
      <Footer />
    </main>
  );
}
