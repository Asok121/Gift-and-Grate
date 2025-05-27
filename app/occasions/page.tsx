import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const occasions = [
  {
    id: 'birthday',
    name: 'Birthday',
    emoji: '🎂',
    description: 'Make their special day unforgettable',
    image: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?q=80&w=1470&auto=format&fit=crop'
  },
  {
    id: 'anniversary',
    name: 'Anniversary',
    emoji: '💍',
    description: 'Celebrate years of togetherness',
    image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1470&auto=format&fit=crop'
  },
  {
    id: 'love',
    name: 'Love & Romance',
    emoji: '❤️',
    description: 'Express your feelings with our romantic gifts',
    image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=1588&auto=format&fit=crop'
  },
  {
    id: 'congratulations',
    name: 'Congratulations',
    emoji: '🎉',
    description: 'Celebrate achievements and successes',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1470&auto=format&fit=crop'
  },
  {
    id: 'festivals',
    name: 'Festivals',
    emoji: '✨',
    description: 'Celebrate festivals with special gifts',
    image: 'https://images.unsplash.com/photo-1514446557020-4d4fac035c85?q=80&w=1374&auto=format&fit=crop'
  },
  {
    id: 'custom',
    name: 'Custom Gifting',
    emoji: '🎁',
    description: 'Create personalized gifts for any occasion',
    image: 'https://images.unsplash.com/photo-1513267257198-e3ef37980ec3?q=80&w=1470&auto=format&fit=crop'
  }
];

export default function OccasionsPage() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-deepplum mb-4">Shop by Occasion</h1>
          <p className="text-lg text-deepplum/70 max-w-2xl mx-auto">Find the perfect gift for every special moment in life</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {occasions.map((occasion) => (
            <Link href={`/occasions/${occasion.id}`} key={occasion.id}>
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={occasion.image} 
                    alt={occasion.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-2xl">
                    {occasion.emoji}
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-deepplum mb-2">{occasion.name}</h2>
                  <p className="text-deepplum/70 mb-4">{occasion.description}</p>
                  <Button className="btn-primary w-full">View Gifts</Button>
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
