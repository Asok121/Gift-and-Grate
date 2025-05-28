"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutContent() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="title-medium mb-6">Welcome to Gift & Grate</h2>
            <div className="prose prose-lg text-gray-600 max-w-none space-y-4">
              <p>
                Gift & Grate was born from a simple idea - to transform the way people experience gifting. Founded in 2022 in the beautiful city of Coimbatore, Tamil Nadu, our journey started with a small team passionate about creating memorable moments through thoughtfully curated gifts.
              </p>
              <p>
                We believe that a gift is more than just a material object - it's an expression of emotion, a celebration of relationships, and a way to create lasting memories. This philosophy drives everything we do at Gift & Grate.
              </p>
              <p>
                Our team works tirelessly to source the finest products, from fresh flowers to delicious cakes, premium hampers to personalized keepsakes. Each item in our collection is carefully selected to ensure quality, uniqueness, and the ability to bring joy to both the giver and the receiver.
              </p>
              <p>
                As a proudly Indian brand, we infuse our local culture and traditions into our offerings while maintaining a contemporary and elegant aesthetic that appeals to modern sensibilities.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[500px] rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src="https://images.unsplash.com/photo-1557081384-25b05127efcf?q=80&w=1740&auto=format&fit=crop"
              alt="Gift & Grate team"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
        
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="title-medium mb-4">Our Mission & Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Creating exceptional gifting experiences that connect hearts and celebrate special moments
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gift-pink bg-opacity-10 p-6 rounded-lg"
            >
              <div className="text-gift-rosegold text-4xl font-playfair mb-4">01</div>
              <h3 className="text-xl font-semibold mb-3 text-gift-text">Quality & Excellence</h3>
              <p className="text-gray-600">
                We are committed to delivering only the finest products and services, paying meticulous attention to every detail from selection to delivery.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gift-gold bg-opacity-10 p-6 rounded-lg"
            >
              <div className="text-gift-gold text-4xl font-playfair mb-4">02</div>
              <h3 className="text-xl font-semibold mb-3 text-gift-text">Personalization</h3>
              <p className="text-gray-600">
                We believe that the most meaningful gifts are those that reflect the unique relationship between the giver and receiver, which is why we emphasize customization.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gift-rosegold bg-opacity-10 p-6 rounded-lg"
            >
              <div className="text-gift-rosegold text-4xl font-playfair mb-4">03</div>
              <h3 className="text-xl font-semibold mb-3 text-gift-text">Reliability & Trust</h3>
              <p className="text-gray-600">
                We understand the importance of timely delivery and transparent communication, especially when it comes to special occasions that cannot be postponed.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}