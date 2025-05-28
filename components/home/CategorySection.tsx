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
  },
  {
    id: 2,
    name: "Cakes",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1689&auto=format&fit=crop",
    link: "/categories/cakes",
  },
  {
    id: 3,
    name: "Hampers",
    image: "https://images.unsplash.com/photo-1612323817752-5f85d3fc789b?q=80&w=1949&auto=format&fit=crop",
    link: "/categories/hampers",
  },
  {
    id: 4,
    name: "Personalized",
    image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=1774&auto=format&fit=crop",
    link: "/categories/personalized",
  },
  {
    id: 5,
    name: "Corporate",
    image: "https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?q=80&w=1742&auto=format&fit=crop",
    link: "/categories/corporate",
  },
];

export default function CategorySection() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12">
          <h2 className="title-medium mb-4">Shop by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of gifting options for every occasion
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={category.link} className="block group">
                <div className="relative overflow-hidden rounded-lg aspect-square card-hover">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <h3 className="text-white text-xl font-semibold font-playfair drop-shadow-md">
                      {category.name}
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
