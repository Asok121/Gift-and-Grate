"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import { Heart, ShoppingBag } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Enchanted Roses Box",
    price: 1499,
    image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=1480&auto=format&fit=crop",
    category: "Flowers",
    rating: 4.8,
    reviews: 124,
    isNew: true,
  },
  {
    id: 2,
    name: "Premium Chocolate Cake",
    price: 899,
    image: "https://images.unsplash.com/photo-1559620192-032c4bc4674e?q=80&w=1029&auto=format&fit=crop",
    category: "Cakes",
    rating: 4.7,
    reviews: 98,
    isNew: false,
  },
  {
    id: 3,
    name: "Deluxe Birthday Hamper",
    price: 2499,
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1340&auto=format&fit=crop",
    category: "Hampers",
    rating: 4.9,
    reviews: 56,
    isNew: true,
  },
  {
    id: 4,
    name: "Personalized Photo Frame",
    price: 799,
    image: "https://images.unsplash.com/photo-1518831696273-910e3696e14c?q=80&w=1364&auto=format&fit=crop",
    category: "Personalized",
    rating: 4.6,
    reviews: 87,
    isNew: false,
  }
];

const BestsellersSection = () => {
  const [wishlist, setWishlist] = useState<number[]>([]);

  const toggleWishlist = (productId: number) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter(id => id !== productId));
      console.log('Removed from wishlist:', productId);
    } else {
      setWishlist([...wishlist, productId]);
      console.log('Added to wishlist:', productId);
    }
  };

  return (
    <section className="section-padding bg-softcream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-3 text-deepplum">
            Bestsellers
          </h2>
          <p className="text-lg text-deepplum/70 max-w-2xl mx-auto">
            Our most popular gifts loved by customers across Coimbatore
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <div className="aspect-square relative overflow-hidden">
                  <Image 
                    src={product.image} 
                    alt={product.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <button 
                  onClick={() => toggleWishlist(product.id)}
                  className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-blushpink/20 transition-colors"
                  aria-label={wishlist.includes(product.id) ? "Remove from wishlist" : "Add to wishlist"}
                >
                  <Heart 
                    size={18} 
                    className={wishlist.includes(product.id) ? "fill-rosegold text-rosegold" : "text-deepplum"} 
                  />
                </button>
                {product.isNew && (
                  <span className="absolute top-4 left-4 bg-festivegold text-white text-xs font-bold px-3 py-1 rounded-full">
                    NEW
                  </span>
                )}
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-montserrat font-semibold text-deepplum">{product.name}</h3>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-deepplum/70">{product.category}</span>
                  <div className="flex items-center">
                    <span className="text-sm text-deepplum/70">★ {product.rating}</span>
                    <span className="text-xs text-deepplum/50 ml-1">({product.reviews})</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-montserrat font-bold text-deepplum">₹{product.price}</span>
                  <Button size="sm" className="rounded-full bg-rosegold hover:bg-rosegold/90">
                    <ShoppingBag size={16} className="mr-2" /> Add
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button className="btn-secondary px-8">
            View All Bestsellers
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BestsellersSection;