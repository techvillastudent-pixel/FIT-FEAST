import React from 'react';
import { Target, Heart, Award, Quote, CheckCircle } from 'lucide-react';
import { LogoComponent } from './LogoComponent';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#F4F7F2] via-white to-[#F4F7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Brand Story & Mission */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B7E4C7]/50 text-[#1B8F3A] text-xs font-bold uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span>Our Story & Mission</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B3D2E] tracking-tight">
              Fueling Busy Professionals With Real Food, Made Right.
            </h2>

            <p className="text-base sm:text-lg text-[#2D3748] leading-relaxed">
              At <strong className="text-[#1B8F3A]">Fit Feast Kitchen</strong>, we believe eating clean shouldn't mean eating bland chicken and dry rice. Founded in 2022 by a passionate team of chefs and sports nutritionists, our mission is to eliminate the stress of healthy meal planning for hardworking professionals, athletes, and busy parents.
            </p>

            {/* Mission & Vision Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-5 rounded-[20px] border border-gray-200/80 shadow-sm space-y-2">
                <div className="w-9 h-9 rounded-xl bg-[#1B8F3A]/10 text-[#1B8F3A] flex items-center justify-center font-bold">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#0B3D2E] text-base">Our Mission</h3>
                <p className="text-xs text-[#718096] leading-relaxed">
                  To empower thousands of individuals daily by making gourmet, macro-balanced nutrition accessible, delicious, and effortless.
                </p>
              </div>

              <div className="bg-white p-5 rounded-[20px] border border-gray-200/80 shadow-sm space-y-2">
                <div className="w-9 h-9 rounded-xl bg-[#FF7A00]/10 text-[#FF7A00] flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#0B3D2E] text-base">Our Quality Promise</h3>
                <p className="text-xs text-[#718096] leading-relaxed">
                  Zero artificial preservatives, zero refined sugars, and 100% locally sourced organic produce prepared in certified clean kitchens.
                </p>
              </div>
            </div>

            {/* Core Values Bullets */}
            <ul className="space-y-2.5 pt-2">
              {[
                'Strictly portioned macro control for weight loss & muscle build',
                'Ethically raised lean proteins (chicken breast, wild salmon, sirloin)',
                'Eco-friendly thermal packaging that keeps food piping fresh',
              ].map((bullet, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-[#2D3748] font-medium">
                  <CheckCircle className="w-4 h-4 text-[#1B8F3A] shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Founder Quote Card with Soft Mint Background */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-[#B7E4C7]/40 border border-[#1B8F3A]/30 p-8 rounded-[28px] shadow-lg relative overflow-hidden flex flex-col justify-between space-y-6">
              
              {/* Quote Mark Icon */}
              <div className="absolute top-6 right-6 text-[#1B8F3A]/20">
                <Quote className="w-16 h-16" />
              </div>

              {/* Logo Header */}
              <div>
                <LogoComponent size="sm" />
              </div>

              {/* Founder Quote Text */}
              <p className="text-base text-[#0B3D2E] italic leading-relaxed font-medium relative z-10">
                "We built Fit Feast Kitchen because we were tired of choosing between healthy dry food and greasy takeaway. Every meal we cook is crafted with the exact love and nutritional precision we feed our own families."
              </p>

              {/* Founder Bio */}
              <div className="pt-4 border-t border-[#1B8F3A]/20 flex items-center gap-4 relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=200&q=80"
                  alt="Executive Chef & Founder - Chef Tunde Lawson"
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#1B8F3A] shadow-md"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-[#0B3D2E] text-base">Chef Tunde Lawson</h4>
                  <p className="text-xs text-[#1B8F3A] font-semibold">Founder & Head Culinary Director</p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
