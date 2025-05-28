"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FiMenu, FiX, FiSearch, FiUser, FiHeart, FiShoppingBag } from "react-icons/fi";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Categories", href: "/categories" },
  { name: "Occasions", href: "/occasions" },
  { name: "Bestsellers", href: "/bestsellers" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container-custom py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gift-rosegold font-playfair">
              Gift & Grate
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gift-text hover:text-gift-rosegold transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button aria-label="Search" className="p-2 rounded-full hover:bg-gift-lightpink transition-colors">
              <FiSearch className="h-5 w-5 text-gift-text" />
            </button>
            <Link href="/account">
              <button aria-label="Account" className="p-2 rounded-full hover:bg-gift-lightpink transition-colors">
                <FiUser className="h-5 w-5 text-gift-text" />
              </button>
            </Link>
            <Link href="/wishlist">
              <button aria-label="Wishlist" className="p-2 rounded-full hover:bg-gift-lightpink transition-colors">
                <FiHeart className="h-5 w-5 text-gift-text" />
              </button>
            </Link>
            <Link href="/cart">
              <button aria-label="Cart" className="p-2 rounded-full hover:bg-gift-lightpink transition-colors relative">
                <FiShoppingBag className="h-5 w-5 text-gift-text" />
                <span className="absolute -top-1 -right-1 bg-gift-rosegold text-white text-xs font-medium rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <Link href="/cart">
              <button aria-label="Cart" className="p-2 rounded-full hover:bg-gift-lightpink transition-colors relative">
                <FiShoppingBag className="h-5 w-5 text-gift-text" />
                <span className="absolute -top-1 -right-1 bg-gift-rosegold text-white text-xs font-medium rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </button>
            </Link>
            <button
              aria-label="Toggle Menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full hover:bg-gift-lightpink transition-colors"
            >
              {isMenuOpen ? (
                <FiX className="h-6 w-6 text-gift-text" />
              ) : (
                <FiMenu className="h-6 w-6 text-gift-text" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-50 bg-white transform transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <span className="text-xl font-bold text-gift-rosegold">Gift & Grate</span>
          <button
            aria-label="Close Menu"
            onClick={() => setIsMenuOpen(false)}
            className="p-2 rounded-full hover:bg-gift-lightpink transition-colors"
          >
            <FiX className="h-6 w-6 text-gift-text" />
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-base font-medium text-gift-text hover:text-gift-rosegold transition-colors py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex space-x-4 pt-4">
            <Link href="/account" className="flex items-center space-x-2 text-gift-text">
              <FiUser className="h-5 w-5" />
              <span>Account</span>
            </Link>
            <Link href="/wishlist" className="flex items-center space-x-2 text-gift-text">
              <FiHeart className="h-5 w-5" />
              <span>Wishlist</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}