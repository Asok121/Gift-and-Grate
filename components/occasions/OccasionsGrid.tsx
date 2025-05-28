"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const occasions = [
  {
    id: 1,
    name: "Birthday",
    image: "https://images.unsplash.com/photo-1464349153735-7db50ed83743?q=80&w=1889&auto=format&fit=crop",
    link: "/occasions/birthday",
    description: "Make their day extra special with our birthday surprises",
  },
  {
    id: 2,
    name: "Anniversary",
    image: "https://images.unsplash.com/photo-1537274942065-eda9d00a6293?q=80&w=1740&auto=format&fit=crop",
    link: "/occasions/anniversary",
    description: "Celebrate love and togetherness with perfect anniversary gifts",
  },
  {
    id: 3,
    name: "Love & Romance",
    image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=1888&auto=format&fit=crop",
    link: "/occasions/love",
    description: "Express your feelings with thoughtful romantic gifts",
  },
  {
    id: 4,
    name: "Congratulations",
    image: "https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?q=80&w=1742&auto=format&fit=crop",
    link: "/occasions/congratulations",
    description: "Celebrate achievements and milestones with special gifts",
  },
  {
    id: 5,
    name: "Wedding",
    image: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=1740&auto=format&fit=crop",
    link: "/occasions/wedding",
    description: "Beautiful gifts to celebrate the union of two souls",
  },
  {
    id: 6,
    name: "Festivals",
    image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?q=80&w=1740&auto=format&fit=crop",
    link: "/occasions/festivals",
    description: "Celebrate festivals with special hampers and gifts",
  },
  {
    id: 7,
    name: "Sympathy",
    image: "https://images.unsplash.com/photo-1506845347893-c942c93d0d4f?q=80&w=1738&auto=format&fit=crop",
    link: "/occasions/sympathy",
    description: "Express your condolences with thoughtful arrangements",
  },
  {
    id: 8,
    name: "Custom Gifting",
    image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=1774&auto=format&fit=crop",
    link: "/occasions/custom",
    description: "Create your own unique gift for any special occasion",
  },
];

export default function OccasionsGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {occasions.map((occasion, index) => (
            <motion.div
              key={occasion.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-sm card-hover"
            >
              <Link href={occasion.link} className="block group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={occasion.image}
                    alt={occasion.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl text-gift-text mb-2">{occasion.name}</h3>
                  <p className="text-gray-600 mb-4">{occasion.description}</p>
                  <span className="text-gift-rosegold font-medium inline-flex items-center">
                    View Collection
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