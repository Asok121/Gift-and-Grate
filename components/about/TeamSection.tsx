"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiInstagram, FiLinkedin } from "react-icons/fi";

const team = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Founder & Creative Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
    instagram: "#",
    linkedin: "#",
  },
  {
    id: 2,
    name: "Arjun Patel",
    role: "Operations Manager",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop",
    instagram: "#",
    linkedin: "#",
  },
  {
    id: 3,
    name: "Divya Mehta",
    role: "Floral Designer",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1740&auto=format&fit=crop",
    instagram: "#",
    linkedin: "#",
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Customer Experience Manager",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
    instagram: "#",
    linkedin: "#",
  },
];

export default function TeamSection() {
  return (
    <section className="py-16 bg-gift-pink bg-opacity-10">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="title-medium mb-4">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The passionate people behind Gift & Grate
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-sm group"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gift-rosegold bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="flex space-x-4 scale-0 group-hover:scale-100 transition-transform duration-300">
                    <a 
                      href={member.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white p-2 rounded-full text-gift-rosegold hover:bg-gift-pink transition-colors"
                    >
                      <FiInstagram className="h-5 w-5" />
                    </a>
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white p-2 rounded-full text-gift-rosegold hover:bg-gift-pink transition-colors"
                    >
                      <FiLinkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-semibold text-lg text-gift-text">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}