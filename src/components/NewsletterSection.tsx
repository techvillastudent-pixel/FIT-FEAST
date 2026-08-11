import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, Sparkles, Utensils } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => {
        setSubscribed(false);
      }, 5000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#1B8F3A] to-[#0B3D2E] text-white relative overflow-hidden">
      {/* Decorative Floating Accent Icons */}
      <div className="absolute top-8 left-10 opacity-10 text-white animate-float pointer-events-none">
        <Sparkles className="w-24 h-24" />
      </div>
      <div className="absolute bottom-8 right-12 opacity-10 text-white animate-float pointer-events-none" style={{ animationDelay: '2s' }}>
        <Utensils className="w-28 h-28" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#B7E4C7] text-xs font-semibold uppercase tracking-wider mb-4 border border-white/10">
          <span>Get 15% Off Your First Week</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
          Start Your Healthy Eating Journey Today
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-gray-200 mt-4 max-w-2xl mx-auto leading-relaxed">
          Subscribe to our weekly VIP chef menu drops, fitness macro tips, and exclusive subscriber meal prep discounts.
        </p>

        {/* Subscription Form */}
        <div className="mt-8 max-w-xl mx-auto">
          {subscribed ? (
            <div className="bg-white/15 backdrop-blur-md border border-white/30 text-white p-4 rounded-2xl flex items-center justify-center gap-3 animate-in fade-in duration-300">
              <CheckCircle2 className="w-6 h-6 text-[#FF7A00]" />
              <span className="font-semibold text-sm sm:text-base">
                Welcome to Fit Feast! Check your inbox for your 15% discount code.
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="w-full px-5 py-4 rounded-full bg-white text-[#2D3748] placeholder-gray-400 text-sm font-medium focus:outline-none focus:ring-4 focus:ring-[#FF7A00]/50 shadow-lg"
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#FF7A00] hover:bg-[#e06b00] text-white font-bold text-sm px-8 py-4 rounded-full shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 whitespace-nowrap flex items-center justify-center gap-2 shrink-0"
              >
                <span>Subscribe Now</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* Privacy Reassurance */}
          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-300 font-medium">
            <ShieldCheck className="w-4 h-4 text-[#B7E4C7]" />
            <span>We respect your privacy. Unsubscribe anytime with 1 click.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
