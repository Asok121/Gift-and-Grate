"use client";

import { MessageSquare } from 'lucide-react';
import { useState, useEffect } from 'react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openWhatsApp = () => {
    window.open('https://wa.me/919876543210?text=Hello%20Gift%20%26%20Grate!%20I%20would%20like%20to%20know%20more%20about%20your%20gifts.', '_blank');
    console.log('WhatsApp button clicked');
  };

  return (
    <button
      onClick={openWhatsApp}
      className={`fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-all duration-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
      aria-label="Chat on WhatsApp"
    >
      <MessageSquare size={24} fill="white" />
    </button>
  );
};

export default WhatsAppButton;