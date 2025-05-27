"use client";

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Coimbatore",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop",
    rating: 5,
    text: "Gift & Grate exceeded my expectations! The birthday hamper I ordered for my husband was beautifully presented and delivered right on time. Will definitely order again!"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Coimbatore",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop",
    rating: 5,
    text: "The personalized photo frame was perfect for our anniversary. The quality is outstanding and the customer service was exceptional. Highly recommend!"
  },
  {
    id: 3,
    name: "Aisha Patel",
    location: "Coimbatore",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1288&auto=format&fit=crop",
    rating: 4,
    text: "I ordered flowers for my mother's birthday and they were fresh and beautiful. The same-day delivery was a lifesaver! Just wish there were more color options."
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    console.log('Moving to next testimonial');
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    console.log('Moving to previous testimonial');
  };

  return (
    <section className="section-padding bg-blushpink/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-3 text-deepplum">
            What Our Customers Say
          </h2>
          <p className="text-lg text-deepplum/70 max-w-2xl mx-auto">
            Real stories from our happy customers in Coimbatore
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
              <div className="w-24 h-24 md:w-32 md:h-32 relative rounded-full overflow-hidden flex-shrink-0">
                <Image 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-2">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-festivegold text-festivegold" />
                  ))}
                </div>
                
                <p className="text-lg md:text-xl italic mb-6 text-deepplum/80">
                  "{testimonials[currentIndex].text}"
                </p>
                
                <div>
                  <h4 className="font-montserrat font-bold text-deepplum">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-sm text-deepplum/60">
                    {testimonials[currentIndex].location}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="bg-white p-3 rounded-full shadow-sm hover:bg-blushpink/20 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} className="text-deepplum" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="bg-white p-3 rounded-full shadow-sm hover:bg-blushpink/20 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} className="text-deepplum" />
            </button>
          </div>
          
          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full ${index === currentIndex ? 'bg-rosegold' : 'bg-rosegold/30'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;