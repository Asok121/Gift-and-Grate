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
  },
  {
    id: 2,
    name: "Chocolate Truffle Cake",
    price: 899,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1689&auto=format&fit=crop",
    category: "Cakes",
    link: "/products/chocolate-truffle-cake",
  },
  {
    id: 3,
    name: "Deluxe Gift Hamper",
    price: 2499,
    image: "https://images.unsplash.com/photo-1612323817752-5f85d3fc789b?q=80&w=1949&auto=format&fit=crop",
    category: "Hampers",
    link: "/products/deluxe-gift-hamper",
  },
  {
    id: 4,
    name: "Personalized Photo Frame",
    price: 1299,
    image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=1774&auto=format&fit=crop",
    category: "Personalized",
    link: "/products/personalized-photo-frame",
  },
];

export default function BestsellerSection() {
  return (
    <section className="py-16 bg-gift-lightpink bg-opacity-30">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12">
          <h2 className="title-medium mb-4">Our Bestsellers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most loved gifts that bring joy to every occasion
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestsellers.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
        
        <div className="text-center mt-10">
          <Link 
            href="/bestsellers"
            className="inline-block bg-gift-gold text-white font-medium py-3 px-6 rounded-full hover:bg-gift-darkgold transition-colors"
          >
            View All Bestsellers
          </Link>
        </div>
      </div>
    </section>
  );
}
