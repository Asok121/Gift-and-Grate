"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ShoppingBag, Heart, Menu, Search, X } from 'lucide-react';
import { Button } from './ui/button';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log('Mobile menu toggled:', !isMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center">
              <h1 className="text-2xl md:text-3xl font-bold font-montserrat tracking-wide text-rosegold">
                Gift <span className="text-festivegold">&</span> Grate
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="nav-link font-medium hover:text-rosegold transition-colors">
              Home
            </Link>
            <Link href="/categories" className="nav-link font-medium hover:text-rosegold transition-colors">
              Categories
            </Link>
            <Link href="/occasions" className="nav-link font-medium hover:text-rosegold transition-colors">
              Occasions
            </Link>
            <Link href="/about" className="nav-link font-medium hover:text-rosegold transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="nav-link font-medium hover:text-rosegold transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-deepplum hover:text-rosegold transition-colors">
              <Search size={20} />
            </button>
            <Link href="/wishlist" className="text-deepplum hover:text-rosegold transition-colors relative">
              <Heart size={20} />
              <span className="absolute -top-2 -right-2 bg-blushpink text-deepplum text-xs w-5 h-5 rounded-full flex items-center justify-center">0</span>
            </Link>
            <Link href="/cart" className="text-deepplum hover:text-rosegold transition-colors relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-2 -right-2 bg-blushpink text-deepplum text-xs w-5 h-5 rounded-full flex items-center justify-center">0</span>
            </Link>
            <Button className="btn-primary ml-4" asChild>
              <Link href="/track">Track Order</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-deepplum"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full py-4 px-4 mt-2 transition-all">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="text-deepplum hover:text-rosegold transition-colors" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="/categories" className="text-deepplum hover:text-rosegold transition-colors" onClick={toggleMenu}>
              Categories
            </Link>
            <Link href="/occasions" className="text-deepplum hover:text-rosegold transition-colors" onClick={toggleMenu}>
              Occasions
            </Link>
            <Link href="/about" className="text-deepplum hover:text-rosegold transition-colors" onClick={toggleMenu}>
              About Us
            </Link>
            <Link href="/contact" className="text-deepplum hover:text-rosegold transition-colors" onClick={toggleMenu}>
              Contact
            </Link>
            <div className="pt-4 flex items-center justify-between">
              <Link href="/wishlist" className="text-deepplum hover:text-rosegold transition-colors relative flex items-center">
                <Heart size={20} />
                <span className="ml-2">Wishlist</span>
              </Link>
              <Link href="/cart" className="text-deepplum hover:text-rosegold transition-colors relative flex items-center">
                <ShoppingBag size={20} />
                <span className="ml-2">Cart</span>
              </Link>
            </div>
            <Button className="btn-primary mt-2" onClick={toggleMenu}>
              Track Order
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;