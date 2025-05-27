"use client";

import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slideData = [
  {
    id: 1,
    title: "Festive Season Sale",
    subtitle: "Up to 25% Off on Premium Gift Hampers",
    cta: "Shop Now",
    image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=1470&auto=format&fit=crop",
    bgColor: "from-blushpink/50 to-white"
  },
  {
    id: 2,
    title: "Anniversary Specials",
    subtitle: "Surprise Your Loved Ones with Personalized Gifts",
    cta: "Explore Collection",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1340&auto=format&fit=crop",
    bgColor: "from-festivegold/30 to-white"
  },
  {
    id: 3,
    title: "Birthday Bouquets",
    subtitle: "Fresh Flowers Delivered in 3 Hours",
    cta: "Order Now",
    image: "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?q=80&w=1374&auto=format&fit=crop",
    bgColor: "from-rosegold/40 to-white"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slideData.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slideData.length - 1 ? 0 : prev + 1));
    console.log('Moving to next slide');
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slideData.length - 1 : prev - 1));
    console.log('Moving to previous slide');
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    console.log('Going to slide:', index);
  };

  return (
    <div className="relative h-[90vh] w-full overflow-hidden mt-16">
      {slideData.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgColor} opacity-90 z-10`}></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ backgroundImage: `url(${slide.image})` }}
          ></div>
          
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-4 md:px-8">
              <div className="max-w-xl mx-auto md:mx-0 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat mb-4 text-deepplum">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-deepplum/80">
                  {slide.subtitle}
                </p>
                <Button className="btn-primary text-lg px-8 py-6">
                  {slide.cta}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Carousel Controls */}
      <button 
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="text-deepplum" size={24} />
      </button>
      <button 
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="text-deepplum" size={24} />
      </button>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slideData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-rosegold' : 'bg-white/50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;