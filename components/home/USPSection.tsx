"use client";

import { motion } from "framer-motion";
import { FiClock, FiGift, FiStar, FiTruck } from "react-icons/fi";

const uspItems = [
  {
    id: 1,
    title: "Timely Delivery",
    description: "Same day delivery for Coimbatore. Next day for metro cities.",
    icon: FiClock,
  },
  {
    id: 2,
    title: "Premium Quality",
    description: "Handpicked premium products for your special occasions.",
    icon: FiStar,
  },
  {
    id: 3,
    title: "Custom Gifting",
    description: "Create personalized gifts with your own touch.",
    icon: FiGift,
  },
  {
    id: 4,
    title: "Safe Packaging",
    description: "Careful packaging to ensure your gifts arrive in perfect condition.",
    icon: FiTruck,
  },
];

export default function USPSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12">
          <h2 className="title-medium mb-4">Why Choose Gift & Grate?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We strive to make your gifting experience special and memorable
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {uspItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gift-lightpink bg-opacity-20 rounded-lg p-6 text-center card-hover"
            >
              <div className="inline-flex items-center justify-center bg-gift-pink rounded-full p-3 mb-4">
                <item.icon className="h-6 w-6 text-gift-rosegold" />
              </div>
              <h3 className="text-lg font-semibold text-gift-text mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
