"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { navLinks } from '@/lib/data';
import { themeColors } from '@/lib/theme';
import { Menu, X, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled 
          ? "bg-white shadow-md py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="#home" className="flex items-center">
            <Shield className="h-6 w-6 text-pink-400 mr-2" />
            <span 
              className="font-semibold text-xl"
              style={{ color: scrolled ? themeColors.text.dark : themeColors.text.dark }}
            >
              Hridhima Karmakar
            </span>
          </Link>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={cn(
                  "text-sm font-medium transition-colors duration-300 hover:text-pink-500 relative",
                  scrolled ? "text-gray-700" : "text-gray-800"
                )}
              >
                {link.name}
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-pink-400 scale-x-0 transition-transform duration-300 hover:scale-x-100" />
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={cn(
          "fixed inset-0 top-16 bg-white z-40 transform transition-transform duration-300 ease-in-out lg:hidden",
          isOpen ? "translate-x-0" : "translate-x-full",
          scrolled ? "top-12" : "top-16"
        )}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8 text-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-xl font-medium text-gray-800 hover:text-pink-500 w-full py-2"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}