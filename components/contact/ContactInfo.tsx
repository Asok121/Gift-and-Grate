"use client";

import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";
import { FaWhatsapp, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <h2 className="text-2xl font-semibold mb-6 text-gift-text">Contact Information</h2>
      
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="bg-gift-pink p-3 rounded-full">
              <FiMapPin className="h-6 w-6 text-gift-rosegold" />
            </div>
            <div>
              <h3 className="font-medium text-gift-text">Our Location</h3>
              <p className="text-gray-600 mt-1">123 Gift Street, Coimbatore, Tamil Nadu, India - 641001</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="bg-gift-pink p-3 rounded-full">
              <FiPhone className="h-6 w-6 text-gift-rosegold" />
            </div>
            <div>
              <h3 className="font-medium text-gift-text">Phone Number</h3>
              <p className="text-gray-600 mt-1">+91 98765 43210</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="bg-gift-pink p-3 rounded-full">
              <FiMail className="h-6 w-6 text-gift-rosegold" />
            </div>
            <div>
              <h3 className="font-medium text-gift-text">Email Address</h3>
              <p className="text-gray-600 mt-1">hello@giftandgrate.com</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="bg-gift-pink p-3 rounded-full">
              <FiClock className="h-6 w-6 text-gift-rosegold" />
            </div>
            <div>
              <h3 className="font-medium text-gift-text">Business Hours</h3>
              <p className="text-gray-600 mt-1">Monday - Saturday: 9 AM - 8 PM</p>
              <p className="text-gray-600">Sunday: 10 AM - 6 PM</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <h3 className="font-medium text-gift-text mb-3">Connect With Us</h3>
          <div className="flex space-x-4">
            <a 
              href="https://wa.me/919876543210" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-colors"
            >
              <FaWhatsapp className="h-5 w-5" />
            </a>
            <a 
              href="https://instagram.com/gift_and_grate" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gift-rosegold text-white p-3 rounded-full hover:bg-gift-gold transition-colors"
            >
              <FaInstagram className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gift-rosegold text-white p-3 rounded-full hover:bg-gift-gold transition-colors"
            >
              <FaFacebook className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gift-rosegold text-white p-3 rounded-full hover:bg-gift-gold transition-colors"
            >
              <FaTwitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125323.4938532412!2d76.9068853!3d11.0120475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1653490491015!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg shadow-sm"
          title="Gift & Grate Location"
        ></iframe>
      </div>
    </motion.div>
  );
}