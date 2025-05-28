"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Coimbatore",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
    rating: 5,
    text: "Ordered a birthday surprise for my sister. The arrangement was absolutely beautiful and delivered right on time. Will definitely order again!",
  },
  {
    id: 2,
    name: "Rahul Mehta",
    location: "Chennai",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
    rating: 5,
    text: "The personalized photo frame I ordered was perfect! Great quality and attention to detail. My wife loved it for our anniversary.",
  },
  {
    id: 3,
    name: "Ananya Patel",
    location: "Bangalore",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1740&auto=format&fit=crop",
    rating: 4,
    text: "Ordered a hamper for my parents' anniversary. The packaging was beautiful and everything inside was premium quality. Only wish delivery was a bit faster.",
  },
];

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="py-16 bg-gift-pink bg-opacity-10">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12">
          <h2 className="title-medium mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our happy customers about their gifting experience
          </p>
        </motion.div>
        
        <div className="relative overflow-hidden">
          <div className="flex flex-nowrap transition-transform duration-500 ease-in-out" 
               style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="w-full flex-shrink-0 px-4"
              >
                <div className="bg-white rounded-lg p-6 shadow-sm max-w-3xl mx-auto">
                  <div className="flex items-center mb-4">
                    <div className="relative h-14 w-14 rounded-full overflow-hidden mr-4">
                      <Image 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gift-text">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                      <div className="flex mt-1">
                        {[...Array(5)].map((_, i) => (
                          <FiStar 
                            key={i}
                            className={`h-4 w-4 ${i < testimonial.rating ? 'text-gift-gold fill-gift-gold' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="italic text-gray-600">"{testimonial.text}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Pagination dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button 
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${index === activeIndex ? 'bg-gift-rosegold' : 'bg-gray-300'}`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
