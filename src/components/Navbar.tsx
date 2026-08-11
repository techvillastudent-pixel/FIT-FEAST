import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Upload } from 'lucide-react';
import { LogoComponent } from './LogoComponent';

interface NavbarProps {
  cartItemCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartItemCount, onOpenCart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section intersection detection for active menu highlight
      const sections = ['home', 'menu', 'about', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Menu', href: '#menu', id: 'menu' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Testimonials', href: '#testimonials', id: 'testimonials' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-gray-100'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left Side: Brand Logo */}
        <a href="#home" className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#1B8F3A] rounded-lg">
          <LogoComponent size="md" allowUpload={true} />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`text-sm font-semibold transition-colors duration-200 relative py-1 ${
                  isActive
                    ? 'text-[#1B8F3A]'
                    : 'text-[#2D3748] hover:text-[#1B8F3A]'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1B8F3A] rounded-full animate-pulse" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Side: Cart & CTA Button */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Cart Icon */}
          <button
            onClick={onOpenCart}
            aria-label="View Shopping Cart"
            className="relative p-2.5 text-[#2D3748] hover:text-[#1B8F3A] bg-white hover:bg-[#F4F7F2] border border-gray-200 rounded-full transition-all shadow-sm group focus:outline-none focus:ring-2 focus:ring-[#1B8F3A]"
          >
            <ShoppingBag className="w-5 h-5 transition-transform group-hover:scale-110 text-[#0B3D2E]" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#FF7A00] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-bounce shadow-sm">
                {cartItemCount}
              </span>
            )}
          </button>

          {/* CTA Order Now Button */}
          <a
            href="#menu"
            className="bg-[#FF7A00] hover:bg-[#e06b00] text-white font-semibold text-sm px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
          >
            <span>Order Now</span>
            <span className="w-2 h-2 rounded-full bg-white/80 animate-ping" />
          </a>
        </div>

        {/* Mobile Hamburger & Cart Button */}
        <div className="flex md:hidden items-center space-x-3">
          <button
            onClick={onOpenCart}
            aria-label="Shopping Cart"
            className="relative p-2 text-[#2D3748] bg-white border border-gray-200 rounded-full shadow-sm"
          >
            <ShoppingBag className="w-5 h-5 text-[#0B3D2E]" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#FF7A00] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 text-[#2D3748] hover:text-[#1B8F3A] focus:outline-none focus:ring-2 focus:ring-[#1B8F3A] rounded-lg bg-white border border-gray-200 shadow-sm"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#1B8F3A]" /> : <Menu className="w-6 h-6 text-[#0B3D2E]" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-lg border-b border-gray-200 shadow-xl px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-300">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl font-medium text-base transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#B7E4C7]/40 text-[#1B8F3A] font-semibold'
                    : 'text-[#2D3748] hover:bg-gray-50'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-gray-100 flex flex-col gap-3">
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-[#FF7A00] text-white font-semibold text-center py-3 rounded-xl shadow-md text-base"
            >
              Order Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
