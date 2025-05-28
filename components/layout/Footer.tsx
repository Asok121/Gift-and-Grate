import Link from "next/link";
import { FiInstagram, FiTwitter, FiFacebook, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gift-rosegold">Gift & Grate</h3>
            <p className="text-sm text-gray-600">
              Premium gifting experience for all your special occasions. Based in Coimbatore, delivering joy nationwide.
            </p>
            <div className="flex space-x-4">
              <Link href="https://instagram.com/gift_and_grate" target="_blank" rel="noopener noreferrer">
                <FiInstagram className="h-5 w-5 text-gift-rosegold hover:text-gift-gold transition-colors" />
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <FiFacebook className="h-5 w-5 text-gift-rosegold hover:text-gift-gold transition-colors" />
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <FiTwitter className="h-5 w-5 text-gift-rosegold hover:text-gift-gold transition-colors" />
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="h-5 w-5 text-gift-rosegold hover:text-gift-gold transition-colors" />
              </Link>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gift-text">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-gift-rosegold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/bestsellers" className="text-sm text-gray-600 hover:text-gift-rosegold transition-colors">
                  Bestsellers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-gift-rosegold transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/track-order" className="text-sm text-gray-600 hover:text-gift-rosegold transition-colors">
                  Track Order
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-gray-600 hover:text-gift-rosegold transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gift-text">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/categories/flowers" className="text-sm text-gray-600 hover:text-gift-rosegold transition-colors">
                  Flowers
                </Link>
              </li>
              <li>
                <Link href="/categories/cakes" className="text-sm text-gray-600 hover:text-gift-rosegold transition-colors">
                  Cakes
                </Link>
              </li>
              <li>
                <Link href="/categories/hampers" className="text-sm text-gray-600 hover:text-gift-rosegold transition-colors">
                  Hampers
                </Link>
              </li>
              <li>
                <Link href="/categories/personalized" className="text-sm text-gray-600 hover:text-gift-rosegold transition-colors">
                  Personalized Gifts
                </Link>
              </li>
              <li>
                <Link href="/categories/corporate" className="text-sm text-gray-600 hover:text-gift-rosegold transition-colors">
                  Corporate Gifts
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gift-text">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FiMapPin className="h-5 w-5 text-gift-rosegold mt-0.5" />
                <span className="text-sm text-gray-600">123 Gift Street, Coimbatore, Tamil Nadu, India - 641001</span>
              </li>
              <li className="flex items-center space-x-3">
                <FiPhone className="h-5 w-5 text-gift-rosegold" />
                <span className="text-sm text-gray-600">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <FiMail className="h-5 w-5 text-gift-rosegold" />
                <span className="text-sm text-gray-600">hello@giftandgrate.com</span>
              </li>
              <li className="mt-4">
                <Link 
                  href="https://wa.me/919876543210" 
                  className="inline-flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-full text-sm hover:bg-green-600 transition-colors"
                >
                  <FaWhatsapp className="h-4 w-4" />
                  <span>Chat on WhatsApp</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">&copy; 2025 Gift & Grate. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-sm text-gray-500 hover:text-gift-rosegold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-500 hover:text-gift-rosegold transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/shipping" className="text-sm text-gray-500 hover:text-gift-rosegold transition-colors">
              Shipping Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}