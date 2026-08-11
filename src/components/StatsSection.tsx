import React, { useState, useEffect, useRef } from 'react';
import { UtensilsCrossed, Smile, Leaf, Clock } from 'lucide-react';
import { STATS_DATA } from '../data';

export const StatsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const renderIcon = (name: string) => {
    switch (name) {
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-7 h-7 text-[#1B8F3A]" />;
      case 'Smile':
        return <Smile className="w-7 h-7 text-[#FF7A00]" />;
      case 'Leaf':
        return <Leaf className="w-7 h-7 text-[#1B8F3A]" />;
      case 'Clock':
        return <Clock className="w-7 h-7 text-[#FF7A00]" />;
      default:
        return <UtensilsCrossed className="w-7 h-7 text-[#1B8F3A]" />;
    }
  };

  return (
    <section ref={sectionRef} className="py-12 bg-white border-y border-gray-200/60 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {STATS_DATA.map((stat, idx) => (
            <div
              key={stat.id}
              className="bg-[#F4F7F2] p-6 rounded-[20px] border border-gray-200/80 hover:border-[#1B8F3A]/40 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 group text-center flex flex-col items-center justify-center space-y-3"
            >
              {/* Icon Container */}
              <div className="p-3 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                {renderIcon(stat.iconName)}
              </div>

              {/* Stat Value */}
              <div className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0B3D2E] tracking-tight">
                {isVisible ? (
                  <Counter targetValue={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                ) : (
                  <span>0{stat.suffix}</span>
                )}
              </div>

              {/* Stat Label */}
              <p className="text-xs sm:text-sm font-semibold text-[#718096] uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Animated Counter Sub-component
interface CounterProps {
  targetValue: number;
  prefix?: string;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ targetValue, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500; // ms
    const increment = targetValue / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [targetValue]);

  return (
    <span>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};
