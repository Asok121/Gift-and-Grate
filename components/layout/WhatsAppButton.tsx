"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors hover:scale-110 transform duration-300"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="h-6 w-6" />
    </a>
  );
}