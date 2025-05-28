"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Hardcoded slides for the hero section
const slides = [
  {
    id: 1,
    title: "Birthday Surprises",
    description: "Make their day special with curated gift boxes and fresh flowers",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1740&auto=format&fit=crop",
    link: "/occasions/birthday",
    color: "bg-pink-50",
  },
  {
    id: 2,
    title: "Anniversary Celebrations",
    description: "Express your love with elegant flowers and personalized gifts",
    image: "https://images.unsplash.com/photo-1537274942065-eda9d00a6293?q=80&w=1740&auto=format&fit=crop",
    link: "/occasions/anniversary",
    color: "bg-rose-50",
  },
  {
    id: 3,
    title: "Festival Collection",
    description: "Celebrate traditions with our special festive hampers",
    image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?q=80&w=1740&auto=format&fit=crop",
    link: "/occasions/festivals",
    color: "bg-amber-50",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide change every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Slides */}
      <div className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"} ${slide.color}`}
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                className="object-cover object-center opacity-80"
              />
            </div>
            
            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center z-10 bg-black bg-opacity-30">
              <div className="container-custom text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 font-playfair drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-md">
                  {slide.description}
                </p>
                <Link href={slide.link}>
                  <Button className="bg-gift-rosegold hover:bg-gift-gold text-white rounded-full px-6 py-6 text-base">
                    Shop Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}