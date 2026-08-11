import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  const currentTestimonial = TESTIMONIALS_DATA[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Blur Accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#1B8F3A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF7A00] bg-[#FF7A00]/10 px-3.5 py-1.5 rounded-full">
            Real Reviews From Real Fit Foodies
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3D2E] tracking-tight">
            Loved By 5,000+ Busy Health Enthusiasts
          </h2>
          <p className="text-sm sm:text-base text-[#718096]">
            See how Fit Feast Kitchen is helping doctors, tech leaders, and fitness coaches stay fit without cooking stress.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="max-w-4xl mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Card */}
          <div className="bg-[#F4F7F2] rounded-[28px] border border-gray-200/80 p-8 sm:p-12 shadow-sm transition-all duration-500 relative flex flex-col md:flex-row items-center gap-8">
            
            {/* Quote Watermark Icon */}
            <div className="absolute top-6 right-8 text-[#1B8F3A]/10 pointer-events-none">
              <Quote className="w-20 h-20" />
            </div>

            {/* Avatar Image */}
            <div className="shrink-0 text-center">
              <img
                src={currentTestimonial.avatar}
                alt={currentTestimonial.name}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-white shadow-md mx-auto"
                referrerPolicy="no-referrer"
              />
              <div className="flex items-center justify-center gap-1 mt-3 text-[#FF7A00]">
                {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="flex-1 space-y-4 text-center md:text-left">
              <p className="text-base sm:text-lg text-[#2D3748] italic font-normal leading-relaxed">
                "{currentTestimonial.text}"
              </p>

              <div>
                <h3 className="font-heading font-extrabold text-[#0B3D2E] text-lg">
                  {currentTestimonial.name}
                </h3>
                <p className="text-xs font-semibold text-[#1B8F3A]">
                  {currentTestimonial.occupation}
                </p>
              </div>
            </div>

          </div>

          {/* Controls & Dots Bar */}
          <div className="flex items-center justify-between mt-8">
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              aria-label="Previous Testimonial"
              className="p-3 rounded-full bg-white border border-gray-200 text-[#0B3D2E] hover:bg-[#1B8F3A] hover:text-white shadow-sm hover:shadow-md transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Indicator Dots */}
            <div className="flex items-center space-x-2">
              {TESTIMONIALS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? 'w-8 bg-[#1B8F3A]' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              aria-label="Next Testimonial"
              className="p-3 rounded-full bg-white border border-gray-200 text-[#0B3D2E] hover:bg-[#1B8F3A] hover:text-white shadow-sm hover:shadow-md transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
