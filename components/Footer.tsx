import Link from 'next/link';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-deepplum text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold font-montserrat mb-4">Gift & Grate</h3>
            <p className="text-white/70 mb-4">
              Premium gifting services in Coimbatore. We specialize in flowers, cakes, hampers, and personalized gifts for all occasions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-festivegold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com/gift_and_grate" className="text-white/70 hover:text-festivegold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-festivegold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold font-montserrat mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white/70 hover:text-blushpink transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-white/70 hover:text-blushpink transition-colors">
                  Shop by Category
                </Link>
              </li>
              <li>
                <Link href="/occasions" className="text-white/70 hover:text-blushpink transition-colors">
                  Shop by Occasion
                </Link>
              </li>
              <li>
                <Link href="/track" className="text-white/70 hover:text-blushpink transition-colors">
                  Track Order
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-blushpink transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-xl font-bold font-montserrat mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-white/70 hover:text-blushpink transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-white/70 hover:text-blushpink transition-colors">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-white/70 hover:text-blushpink transition-colors">
                  Returns Policy
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-white/70 hover:text-blushpink transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/70 hover:text-blushpink transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold font-montserrat mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-blushpink mr-2 mt-1 flex-shrink-0" />
                <span className="text-white/70">
                  123 Gift Street, R.S. Puram, Coimbatore, Tamil Nadu - 641002
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-blushpink mr-2 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-white/70 hover:text-blushpink transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-blushpink mr-2 flex-shrink-0" />
                <a href="mailto:hello@giftandgrate.com" className="text-white/70 hover:text-blushpink transition-colors">
                  hello@giftandgrate.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
          <p>© {new Date().getFullYear()} Gift & Grate. All rights reserved.</p>
          <p className="mt-2">Designed with ❤ in Coimbatore, India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;