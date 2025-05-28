"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiInstagram } from "react-icons/fi";

const instagramPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1556658038-9595e3c8464f?q=80&w=1964&auto=format&fit=crop",
    link: "https://instagram.com/gift_and_grate",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=1740&auto=format&fit=crop",
    link: "https://instagram.com/gift_and_grate",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=1888&auto=format&fit=crop",
    link: "https://instagram.com/gift_and_grate",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1564144006388-615432892646?q=80&w=1964&auto=format&fit=crop",
    link: "https://instagram.com/gift_and_grate",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1740&auto=format&fit=crop",
    link: "https://instagram.com/gift_and_grate",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?q=80&w=1965&auto=format&fit=crop",
    link: "https://instagram.com/gift_and_grate",
  },
];

export default function InstagramFeed() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12">
          <h2 className="title-medium mb-4">Follow Us on Instagram</h2>
          <p className="text-gray-600 max-w-2xl mx-auto flex items-center justify-center">
            <FiInstagram className="h-5 w-5 mr-2" /> @gift_and_grate
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {instagramPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link href={post.link} target="_blank" rel="noopener noreferrer" className="block group">
                <div className="relative overflow-hidden aspect-square">
                  <Image
                    src={post.image}
                    alt="Instagram post"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gift-rosegold bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <FiInstagram className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link 
            href="https://instagram.com/gift_and_grate"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gift-rosegold text-white font-medium py-3 px-6 rounded-full hover:bg-gift-gold transition-colors"
          >
            <FiInstagram className="h-5 w-5" />
            <span>View Instagram</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
