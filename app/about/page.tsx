import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <NavBar />
      
      <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-xl mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-deepplum/60 to-deepplum/30 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=1470&auto=format&fit=crop" 
            alt="Gift & Grate Team" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-4 md:px-8">
              <div className="max-w-2xl">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                  About Gift & Grate
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-6">
                  Premium gifting experiences from Coimbatore to your doorstep
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-deepplum mb-4">Our Story</h2>
            <div className="w-24 h-1 bg-blushpink mx-auto"></div>
          </div>
          
          <div className="prose prose-lg max-w-none text-deepplum/80">
            <p className="mb-4">
              Founded in 2020, Gift & Grate began as a small boutique in Coimbatore with a simple yet powerful mission: to transform ordinary moments into extraordinary memories through thoughtfully curated gifts.
            </p>
            <p className="mb-4">
              What started as a passion project by our founder, Priya Sharma, has now grown into one of Coimbatore's most loved gifting destinations. With a deep understanding of the art of gifting and a keen eye for detail, Priya built Gift & Grate on the foundation of quality, creativity, and exceptional customer service.
            </p>
            <p className="mb-4">
              We believe that every gift tells a story - it's not just about the physical item, but the emotion, thought, and care that goes into selecting it. Whether it's a birthday celebration, an anniversary milestone, or a festival gathering, we're here to help you express your feelings in the most beautiful way possible.
            </p>
            <p>
              Today, Gift & Grate continues to grow while staying true to its roots, bringing joy to countless homes across India with our premium flowers, delectable cakes, thoughtful hampers, and personalized gifts.
            </p>
          </div>
        </div>
        
        {/* Values Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-deepplum mb-4">Our Values</h2>
            <div className="w-24 h-1 bg-blushpink mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blushpink/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💯</span>
              </div>
              <h3 className="text-xl font-semibold text-deepplum mb-2">Quality First</h3>
              <p className="text-deepplum/70">We never compromise on the quality of our products, sourcing only the finest materials and ingredients.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blushpink/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-deepplum mb-2">Creative Excellence</h3>
              <p className="text-deepplum/70">We constantly innovate and create unique gifting experiences that stand out and create lasting impressions.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blushpink/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">❤️</span>
              </div>
              <h3 className="text-xl font-semibold text-deepplum mb-2">Customer Love</h3>
              <p className="text-deepplum/70">We treat each customer like family, going above and beyond to ensure complete satisfaction with every order.</p>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-rosegold/90 to-blushpink/90 rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Let's Create Memorable Moments Together</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-6">
            Looking for the perfect gift? Browse our collections or get in touch with us for personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-rosegold hover:bg-white/90 border-0">
              <Link href="/categories">Explore Collections</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <WhatsAppButton />
      <Footer />
    </main>
  );
}
