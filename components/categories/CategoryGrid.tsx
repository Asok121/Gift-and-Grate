"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const categories = [
  {
    id: 1,
    name: "Flowers",
    image: "https://images.unsplash.com/photo-1561181286-d5c73955ae43?q=80&w=1740&auto=format&fit=crop",
    link: "/categories/flowers",
    description: "Beautiful bouquets and arrangements for all occasions",
  },
  {
    id: 2,
    name: "Cakes",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1689&auto=format&fit=crop",
    link: "/categories/cakes",
    description: "Delicious cakes in various flavors and designs",
  },
  {
    id: 3,
    name: "Hampers",
    image: "https://images.unsplash.com/photo-1612323817752-5f85d3fc789b?q=80&w=1949&auto=format&fit=crop",
    link: "/categories/hampers",
    description: "Curated gift hampers for all special occasions",
  },
  {
    id: 4,
    name: "Personalized Gifts",
    image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=1774&auto=format&fit=crop",
    link: "/categories/personalized",
    description: "Custom gifts with your personal touch",
  },
  {
    id: 5,
    name: "Corporate Gifts",
    image: "https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?q=80&w=1742&auto=format&fit=crop",
    link: "/categories/corporate",
    description: "Premium gifting solutions for your business",
  },
  {
    id: 6,
    name: "Plants",
    image: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?q=80&w=1936&auto=format&fit=crop",
    link: "/categories/plants",
    description: "Indoor and outdoor plants for green gifting",
  },
  {
    id: 7,
    name: "Chocolates",
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=1935&auto=format&fit=crop",
    link: "/categories/chocolates",
    description: "Premium chocolates and sweet treats",
  },
  {
    id: 8,
    name: "Jewelry",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1740&auto=format&fit=crop",
    link: "/categories/jewelry",
    description: "Elegant jewelry pieces for your loved ones",
  },
];

export default function CategoryGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-sm card-hover"
            >
              <Link href={category.link} className="block group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl text-gift-text mb-2">{category.name}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <span className="text-gift-rosegold font-medium inline-flex items-center">
                    Explore {category.name}
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}