import Image from 'next/image';
import { Button } from './ui/button';
import { Instagram } from 'lucide-react';

const instagramPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1473&auto=format&fit=crop",
    likes: 248,
    comments: 32
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1340&auto=format&fit=crop",
    likes: 176,
    comments: 24
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1470&auto=format&fit=crop",
    likes: 312,
    comments: 41
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1602923668104-8f9e03e77e62?q=80&w=1470&auto=format&fit=crop",
    likes: 203,
    comments: 28
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1565712538828-cb2398635a1d?q=80&w=1376&auto=format&fit=crop",
    likes: 268,
    comments: 36
  }
];

const InstagramSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-3 text-deepplum">
            Follow Us on Instagram
          </h2>
          <p className="text-lg text-deepplum/70 max-w-2xl mx-auto">
            @gift_and_grate
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {instagramPosts.map((post) => (
            <a 
              href="https://instagram.com/gift_and_grate" 
              target="_blank" 
              rel="noopener noreferrer" 
              key={post.id}
              className="block group relative overflow-hidden rounded-xl"
            >
              <div className="aspect-square relative">
                <Image 
                  src={post.image} 
                  alt={`Instagram post ${post.id}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-deepplum/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                <Instagram size={24} className="text-white mb-2" />
                <div className="flex items-center space-x-4 text-white">
                  <span className="flex items-center">
                    <span className="mr-1">❤</span> {post.likes}
                  </span>
                  <span className="flex items-center">
                    <span className="mr-1">💬</span> {post.comments}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button 
            className="bg-gradient-to-r from-rosegold to-festivegold hover:opacity-90 text-white px-8"
            asChild
          >
            <a href="https://instagram.com/gift_and_grate" target="_blank" rel="noopener noreferrer">
              <Instagram size={18} className="mr-2" />
              Follow @gift_and_grate
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;