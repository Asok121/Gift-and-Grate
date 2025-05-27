import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

type Props = {
  params: {
    categoryId: string;
  };
};

const categoryData: Record<string, {
  name: string;
  description: string;
  banner: string;
}> = {
  flowers: {
    name: 'Flowers',
    description: 'Express your feelings with our stunning flower arrangements and bouquets',
    banner: 'https://images.unsplash.com/photo-1596438459194-f275f413d6ff?q=80&w=1374&auto=format&fit=crop'
  },
  cakes: {
    name: 'Cakes',
    description: 'Celebrate with our delicious, freshly baked cakes for all occasions',
    banner: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1389&auto=format&fit=crop'
  },
  hampers: {
    name: 'Gift Hampers',
    description: 'Curated gift hampers that create an unforgettable impression',
    banner: 'https://images.unsplash.com/photo-1607897513860-fca1d3d1d658?q=80&w=1374&auto=format&fit=crop'
  },
  personalized: {
    name: 'Personalized Gifts',
    description: 'Make it special with custom gifts that carry your personal message',
    banner: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1340&auto=format&fit=crop'
  },
  corporate: {
    name: 'Corporate Gifts',
    description: 'Professional gifting solutions for businesses and corporate events',
    banner: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=1470&auto=format&fit=crop'
  },
  plants: {
    name: 'Plants',
    description: 'Indoor and outdoor plants that bring joy and freshness to any space',
    banner: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?q=80&w=1470&auto=format&fit=crop'
  }
};

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

const generateProducts = (categoryId: string): Product[] => {
  const products: Product[] = [];
  
  for (let i = 1; i <= 9; i++) {
    products.push({
      id: `${categoryId}-${i}`,
      name: `${categoryId.charAt(0).toUpperCase() + categoryId.slice(1)} Gift ${i}`,
      price: Math.floor(Math.random() * 3000) + 500,
      image: `https://source.unsplash.com/random/300x300/?${categoryId},gift`
    });
  }
  
  return products;
};

export default async function CategoryPage({ params }: Props) {
  // Make the function async to properly handle the params
  const categoryId = params.categoryId;
  const category = categoryData[categoryId] || {
    name: categoryId.charAt(0).toUpperCase() + categoryId.slice(1),
    description: 'Explore our collection',
    banner: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=1470&auto=format&fit=crop'
  };
  
  const products = generateProducts(categoryId);

  return (
    <main className="min-h-screen">
      <NavBar />
      
      <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-deepplum/50 to-deepplum/20 z-10"></div>
        <img 
          src={category.banner} 
          alt={category.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                {category.name}
              </h1>
              <p className="text-lg md:text-xl text-white/90">
                {category.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link href={`/product/${product.id}`} key={product.id}>
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-deepplum mb-2">{product.name}</h2>
                  <p className="text-rosegold font-bold mb-4">₹{product.price.toLocaleString()}</p>
                  <Button className="btn-primary w-full">View Details</Button>
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
