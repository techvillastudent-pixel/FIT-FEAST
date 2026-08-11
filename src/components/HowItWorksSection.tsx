import React from 'react';
import { ShoppingCart, ChefHat, Truck, ArrowRight } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Choose Your Meal',
      desc: 'Select from 20+ weekly high-protein, low-carb, and Nigerian specialty prep bowls.',
      icon: <ShoppingCart className="w-8 h-8 text-[#1B8F3A]" />,
      color: 'bg-[#B7E4C7]/40',
    },
    {
      num: '02',
      title: 'We Prepare It Fresh',
      desc: 'Our culinary team cooks your order daily using zero preservatives and clean farm produce.',
      icon: <ChefHat className="w-8 h-8 text-[#FF7A00]" />,
      color: 'bg-[#FF7A00]/10',
    },
    {
      num: '03',
      title: 'Delivered To Your Door',
      desc: 'Receive thermal eco-packaging maintaining peak flavor and warmth within 30 minutes.',
      icon: <Truck className="w-8 h-8 text-[#1B8F3A]" />,
      color: 'bg-[#B7E4C7]/40',
    },
  ];

  return (
    <section className="py-20 bg-[#F4F7F2] relative border-t border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1B8F3A] bg-[#B7E4C7]/50 px-3.5 py-1.5 rounded-full">
            Simple 3-Step Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3D2E] tracking-tight">
            How Fit Feast Kitchen Works
          </h2>
          <p className="text-sm sm:text-base text-[#718096]">
            From our kitchen to your table in 3 seamless steps. No cooking, no meal prep cleanup!
          </p>
        </div>

        {/* Steps Grid with Connecting Line */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Connecting Line behind cards on desktop */}
          <div className="hidden md:block absolute top-1/2 left-1/6 right-1/6 h-1 bg-gradient-to-r from-[#1B8F3A] via-[#FF7A00] to-[#1B8F3A] -translate-y-6 z-0 opacity-20" />

          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[24px] p-8 border border-gray-200/80 hover:border-[#1B8F3A]/40 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 relative z-10 flex flex-col items-center text-center group"
            >
              {/* Step Number Badge */}
              <div className="absolute -top-4 bg-[#0B3D2E] text-white text-xs font-extrabold px-3 py-1 rounded-full shadow-md">
                STEP {step.num}
              </div>

              {/* Icon Container */}
              <div className={`p-5 rounded-2xl ${step.color} mt-2 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#0B3D2E] mb-2 group-hover:text-[#1B8F3A] transition-colors">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#718096] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}

        </div>

        {/* Bottom Callout */}
        <div className="mt-12 text-center">
          <a
            href="#menu"
            className="inline-flex items-center gap-2 bg-[#1B8F3A] hover:bg-[#0B3D2E] text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-md transition-all"
          >
            <span>Start Your Order Now</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
