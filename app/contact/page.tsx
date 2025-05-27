"use client";

import { useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible."
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <main className="min-h-screen">
      <NavBar />
      
      <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-deepplum mb-4">Contact Us</h1>
          <p className="text-lg text-deepplum/70 max-w-2xl mx-auto">We'd love to hear from you! Reach out with any questions, custom order requests, or feedback.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-deepplum mb-6">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-deepplum mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blushpink"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-deepplum mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blushpink"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-deepplum mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blushpink"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-deepplum mb-1">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blushpink"
                    required
                  />
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="btn-primary w-full" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-deepplum mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-rosegold mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="font-medium text-deepplum">Our Location</h3>
                    <p className="text-deepplum/70">
                      123 Gift Street, R.S. Puram<br />
                      Coimbatore, Tamil Nadu 641002<br />
                      India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-rosegold mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="font-medium text-deepplum">Call Us</h3>
                    <p className="text-deepplum/70">+91 98765 43210</p>
                    <p className="text-deepplum/70">+91 87654 32109</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-rosegold mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="font-medium text-deepplum">Email Us</h3>
                    <p className="text-deepplum/70">hello@giftandgrate.com</p>
                    <p className="text-deepplum/70">support@giftandgrate.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blushpink/10 rounded-lg p-8">
              <h2 className="text-xl font-semibold text-deepplum mb-4">Business Hours</h2>
              
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>10:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>11:00 AM - 6:00 PM</span>
                </div>
              </div>
              
              <h2 className="text-xl font-semibold text-deepplum mb-4">Follow Us</h2>
              <div className="flex space-x-4">
                <a href="https://instagram.com/gift_and_grate" target="_blank" rel="noopener noreferrer" className="hover:text-rosegold transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" className="hover:text-rosegold transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="#" className="hover:text-rosegold transition-colors">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <WhatsAppButton />
      <Footer />
    </main>
  );
}
