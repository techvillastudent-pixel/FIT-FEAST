import React from 'react';
import { Play, Flame, Sparkles, Star, ShieldCheck, ArrowRight, Clock } from 'lucide-react';
import heroBowlImg from '../assets/images/fit_feast_hero_bowl_1786102161435.jpg';

interface HeroSectionProps {
  onOpenVideo: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenVideo }) => {
  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#F4F7F2] via-[#E8F5EC]/50 to-[#F4F7F2]">
      {/* Decorative Organic Background Blurs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#1B8F3A]/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FF7A00]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#B7E4C7]/40 border border-[#1B8F3A]/30 text-[#1B8F3A] text-xs sm:text-sm font-semibold tracking-wide">
              <Sparkles className="w-4 h-4 text-[#1B8F3A] animate-spin" style={{ animationDuration: '8s' }} />
              <span>Healthy Meal Prep • Fresh Daily</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B3D2E] tracking-tight leading-[1.15]">
              Healthy Meals That{' '}
              <span className="bg-gradient-to-r from-[#1B8F3A] to-[#FF7A00] bg-clip-text text-transparent">
                Fuel Your Best Life
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#2D3748] leading-relaxed max-w-2xl font-normal">
              Chef-crafted, nutritionist-approved meal prep delivered fresh to your doorstep. Experience nutrient-dense, high-protein recipes made with 100% farm-fresh ingredients to power your fitness goals without sacrificing flavor.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#menu"
                className="bg-[#FF7A00] hover:bg-[#e06b00] text-white font-bold text-base px-8 py-4 rounded-full shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3 group"
              >
                <span>Explore Menu</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                onClick={onOpenVideo}
                className="bg-white hover:bg-[#E8F5EC] text-[#0B3D2E] font-semibold text-base px-6 py-3.5 rounded-full border border-gray-200 hover:border-[#1B8F3A]/40 shadow-sm transition-all duration-300 flex items-center gap-3 group"
              >
                <span className="w-9 h-9 rounded-full bg-[#1B8F3A] text-white flex items-center justify-center transition-transform group-hover:scale-110">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </span>
                <span>Watch Story</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-gray-200/80 grid grid-cols-3 gap-4 max-w-lg">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-[#B7E4C7]/30 rounded-lg text-[#1B8F3A]">
                  <Star className="w-5 h-5 fill-current text-[#FF7A00]" />
                </div>
                <div>
                  <div className="font-extrabold text-sm text-[#0B3D2E]">4.9 / 5.0</div>
                  <div className="text-xs text-[#718096]">2,500+ Reviews</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="p-2 bg-[#B7E4C7]/30 rounded-lg text-[#1B8F3A]">
                  <ShieldCheck className="w-5 h-5 text-[#1B8F3A]" />
                </div>
                <div>
                  <div className="font-extrabold text-sm text-[#0B3D2E]">100% Organic</div>
                  <div className="text-xs text-[#718096]">Zero Preservatives</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="p-2 bg-[#FF7A00]/10 rounded-lg text-[#FF7A00]">
                  <Clock className="w-5 h-5 text-[#FF7A00]" />
                </div>
                <div>
                  <div className="font-extrabold text-sm text-[#0B3D2E]">30 Mins</div>
                  <div className="text-xs text-[#718096]">Express Delivery</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Hero Image & Floating Cards */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Outer Decorative Image Frame */}
              <div className="relative z-10 rounded-[28px] overflow-hidden shadow-2xl border-4 border-white bg-white group">
                <img
                  src={heroBowlImg}
                  alt="Fit Feast Power Bowl - Fresh Healthy Meal Prep"
                  className="w-full h-[420px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Bottom Overlay Tag on Image */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white flex justify-between items-end">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#FF7A00]">Featured Prep</span>
                    <h3 className="text-xl font-extrabold text-white">Grilled Chicken Power Bowl</h3>
                    <p className="text-xs text-gray-200 mt-0.5">520 Cal • 45g Protein • $14.99</p>
                  </div>
                  <a
                    href="#menu"
                    className="bg-[#1B8F3A] hover:bg-[#0B3D2E] text-white text-xs font-bold px-3.5 py-2 rounded-lg transition-colors"
                  >
                    Order
                  </a>
                </div>
              </div>

              {/* Floating Glassmorphism Badge 1: Protein High */}
              <div className="absolute -top-4 -left-4 sm:-left-8 z-20 glass-card p-3.5 rounded-2xl shadow-xl flex items-center gap-3 animate-float">
                <div className="p-2.5 bg-[#FF7A00] text-white rounded-xl shadow-md">
                  <Flame className="w-6 h-6 fill-current animate-pulse" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#718096]">Macro Balanced</div>
                  <div className="text-sm font-extrabold text-[#0B3D2E]">45g High Protein</div>
                </div>
              </div>

              {/* Floating Glassmorphism Badge 2: Daily Delivery */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 z-20 glass-card p-3.5 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#1B8F3A] animate-ping" />
                <div>
                  <div className="text-xs font-semibold text-[#718096]">Status</div>
                  <div className="text-sm font-extrabold text-[#1B8F3A]">Freshly Prepared Today</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
