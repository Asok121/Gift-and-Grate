"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiHeart, FiShoppingBag } from "react-icons/fi";

const bestsellers = [
  {
    id: 1,
    name: "Rosy Delight Bouquet",
    price: 1499,
    image: "https://images.unsplash.com/photo-1596438459194-f275f413d6ff?q=80&w=1887&auto=format&fit=crop",
    category: "Flowers",
    link: "/products/rosy-delight-bouquet",
    rating: 4.9,
    reviews: 124,
  },
  {
    id: 2,
    name: "Chocolate Truffle Cake",
    price: 899,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1689&auto=format&fit=crop",
    category: "Cakes",
    link: "/products/chocolate-truffle-cake",
    rating: 4.8,
    reviews: 86,
  },
  {
    id: 3,
    name: "Deluxe Gift Hamper",
    price: 2499,
    image: "https://images.unsplash.com/photo-1612323817752-5f85d3fc789b?q=80&w=1949&auto=format&fit=crop",
    category: "Hampers",
    link: "/products/deluxe-gift-hamper",
    rating: 4.9,
    reviews: 52,
  },
  {
    id: 4,
    name: "Personalized Photo Frame",
    price: 1299,
    image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=1774&auto=format&fit=crop",
    category: "Personalized",
    link: "/products/personalized-photo-frame",
    rating: 4.7,
    reviews: 38,
  },
  {
    id: 5,
    name: "Exotic Flower Arrangement",
    price: 1799,
    image: "https://images.unsplash.com/photo-1561181286-d5c73955ae43?q=80&w=1740&auto=format&fit=crop",
    category: "Flowers",
    link: "/products/exotic-flower-arrangement",
    rating: 4.8,
    reviews: 76,
  },
  {
    id: 6,
    name: "Black Forest Cake",
    price: 799,
    image: "https://images.unsplash.com/photo-1557979619-445218f326b9?q=80&w=1887&auto=format&fit=crop",
    category: "Cakes",
    link: "/products/black-forest-cake",
    rating: 4.6,
    reviews: 64,
  },
  {
    id: 7,
    name: "Birthday Surprise Box",
    price: 1899,
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1740&auto=format&fit=crop",
    category: "Hampers",
    link: "/products/birthday-surprise-box",
    rating: 4.9,
    reviews: 41,
  },
  {
    id: 8,
    name: "Personalized Mug Set",
    price: 699,
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=1740&auto=format&fit=crop",
    category: "Personalized",
    link: "/products/personalized-mug-set",
    rating: 4.5,
    reviews: 32,
  },
  {
    id: 9,
    name: "Premium Wine Hamper",
    price: 3499,
    image: "https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?q=80&w=1887&auto=format&fit=crop",
    category: "Corporate",
    link: "/products/premium-wine-hamper",
    rating: 4.9,
    reviews: 28,
  },
  {
    id: 10,
    name: "Indoor Plant Collection",
    price: 1199,
    image: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?q=80&w=1936&auto=format&fit=crop",
    category: "Plants",
    link: "/products/indoor-plant-collection",
    rating: 4.7,
    reviews: 47,
  },
  {
    id: 11,
    name: "Assorted Chocolate Box",
    price: 999,
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=1935&auto=format&fit=crop",
    category: "Chocolates",
    link: "/products/assorted-chocolate-box",
    rating: 4.8,
    reviews: 59,
  },
  {
    id: 12,
    name: "Silver Pendant Necklace",
    price: 1699,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1740&auto=format&fit=crop",
    category: "Jewelry",
    link: "/products/silver-pendant-necklace",
    rating: 4.6,
    reviews: 33,
  },
];

export default function BestsellersGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestsellers.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.5) }}
              className="bg-white rounded-lg overflow-hidden shadow-sm card-hover"
            >
              <Link href={product.link} className="block group">
                <div className="relative overflow-hidden aspect-square">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 z-10">
                    <button 
                      aria-label="Add to wishlist"
                      className="bg-white rounded-full p-2 shadow-md hover:bg-gift-pink transition-colors"
                    >
                      <FiHeart className="h-5 w-5 text-gift-rosegold" />
                    </button>
                  </div>
                </div>
              </Link>
              
              <div className="p-4">
                <div className="mb-2">
                  <span className="text-xs text-gift-rosegold font-medium">{product.category}</span>
                </div>
                <h3 className="font-medium text-gift-text mb-2 line-clamp-2">{product.name}</h3>
                <div className="flex items-center mb-3">
                  <div className="flex text-gift-gold">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'stroke-current fill-none'}`} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 ml-2">{product.reviews} reviews</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gift-text">₹{product.price}</span>
                  <button 
                    aria-label="Add to cart"
                    className="bg-gift-pink text-gift-rosegold rounded-full p-2 hover:bg-gift-rosegold hover:text-white transition-colors"
                  >
                    <FiShoppingBag className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}