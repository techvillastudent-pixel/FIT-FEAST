import React, { useState, useEffect } from 'react';
import { ArrowUp, Instagram, Twitter, Facebook, Youtube, Heart, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { LogoComponent } from './LogoComponent';

export const Footer: React.FC = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B3D2E] text-white pt-16 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Description */}
          <div className="lg:col-span-5 space-y-4">
            <LogoComponent size="md" showTagline={true} />
            <p className="text-sm text-gray-300 leading-relaxed max-w-sm pt-2">
              Fit Feast Kitchen delivers fresh, macro-balanced, chef-crafted healthy meals to fuel your fitness journey without compromising on delicious flavor.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              {[
                { icon: <Instagram className="w-4 h-4" />, label: 'Instagram' },
                { icon: <Twitter className="w-4 h-4" />, label: 'Twitter' },
                { icon: <Facebook className="w-4 h-4" />, label: 'Facebook' },
                { icon: <Youtube className="w-4 h-4" />, label: 'YouTube' },
              ].map((s, idx) => (
                <a
                  key={idx}
                  href="#home"
                  aria-label={s.label}
                  className="p-2.5 rounded-full bg-white/10 hover:bg-[#1B8F3A] text-white transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-base text-white tracking-wider uppercase text-[#B7E4C7]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              {['Home', 'Menu', 'About', 'Testimonials', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="hover:text-[#FF7A00] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#1B8F3A] font-bold">›</span> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-heading font-bold text-base text-white tracking-wider uppercase text-[#B7E4C7]">
              Get In Touch
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#FF7A00] shrink-0 mt-1" />
                <span>14 Culinary Boulevard, Victoria Island, Lagos</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#FF7A00] shrink-0" />
                <span>+234 90 4489 7455</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0 fill-current" />
                <a
                  href="https://wa.me/2349044897455?text=Hello%20Fit%20Feast%20Kitchen!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-[#25D366] font-semibold"
                >
                  WhatsApp: +234 90 4489 7455
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#FF7A00] shrink-0" />
                <span>hello@fitfeastkitchen.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright & Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} Fit Feast Kitchen. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-current" />
            <span>for Clean Eaters Worldwide</span>
          </p>
        </div>

      </div>

      {/* Back to Top Floating Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 bg-[#FF7A00] hover:bg-[#e06b00] text-white p-3.5 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 border-2 border-white/20"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
};
