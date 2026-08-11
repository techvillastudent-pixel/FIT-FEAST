import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Instagram, Twitter, Facebook, Youtube, MessageCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#F4F7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1B8F3A] bg-[#B7E4C7]/50 px-3.5 py-1.5 rounded-full">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3D2E] tracking-tight">
            We’d Love To Hear From You
          </h2>
          <p className="text-sm sm:text-base text-[#718096]">
            Have questions about custom corporate catering, meal prep plans, or dietary allergies? Drop us a message!
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5 bg-white p-8 sm:p-10 rounded-[28px] border border-gray-200/80 shadow-sm flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#0B3D2E]">
                Contact Information
              </h3>
              <p className="text-sm text-[#718096] leading-relaxed">
                Reach out directly to our culinary support team or visit our flagship kitchen in Victoria Island.
              </p>

              <div className="space-y-5 pt-2">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#B7E4C7]/30 text-[#1B8F3A] rounded-2xl shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Kitchen Location</h4>
                    <p className="text-sm font-semibold text-[#0B3D2E] mt-0.5">
                      14 Culinary Boulevard, Victoria Island, Lagos
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#25D366]/10 text-[#25D366] rounded-2xl shrink-0">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">WhatsApp & Direct Line</h4>
                    <p className="text-sm font-semibold text-[#0B3D2E] mt-0.5">
                      +234 90 4489 7455
                    </p>
                    <a
                      href="https://wa.me/2349044897455?text=Hello%20Fit%20Feast%20Kitchen!%20I'd%20like%20to%20order%20or%20make%20an%20inquiry."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#25D366] hover:underline mt-1"
                    >
                      <span>Chat on WhatsApp</span>
                      <MessageCircle className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#FF7A00]/10 text-[#FF7A00] rounded-2xl shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Kitchen Hotline</h4>
                    <p className="text-sm font-semibold text-[#0B3D2E] mt-0.5">
                      +234 90 4489 7455
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#B7E4C7]/30 text-[#1B8F3A] rounded-2xl shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email Address</h4>
                    <p className="text-sm font-semibold text-[#0B3D2E] mt-0.5">
                      hello@fitfeastkitchen.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#FF7A00]/10 text-[#FF7A00] rounded-2xl shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Kitchen Working Hours</h4>
                    <p className="text-sm font-semibold text-[#0B3D2E] mt-0.5">
                      Mon – Sat: 7:00 AM – 9:00 PM<br />
                      Sunday: 8:00 AM – 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-gray-100">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                Follow Our Kitchen Journey
              </h4>
              <div className="flex items-center space-x-3">
                {[
                  { icon: <Instagram className="w-5 h-5" />, label: 'Instagram' },
                  { icon: <Twitter className="w-5 h-5" />, label: 'Twitter' },
                  { icon: <Facebook className="w-5 h-5" />, label: 'Facebook' },
                  { icon: <Youtube className="w-5 h-5" />, label: 'YouTube' },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href="#contact"
                    aria-label={social.label}
                    className="p-3 rounded-full bg-[#F4F7F2] text-[#0B3D2E] hover:bg-[#1B8F3A] hover:text-white transition-all duration-200"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-[28px] border border-gray-200/80 shadow-sm">
            <h3 className="text-2xl font-bold text-[#0B3D2E] mb-6">
              Send Us A Message
            </h3>

            {submitted ? (
              <div className="p-8 bg-[#E8F5EC] border border-[#1B8F3A]/30 text-[#0B3D2E] rounded-2xl text-center space-y-3 animate-in fade-in duration-300">
                <CheckCircle2 className="w-12 h-12 text-[#1B8F3A] mx-auto" />
                <h4 className="text-xl font-bold">Thank You!</h4>
                <p className="text-sm text-[#718096]">
                  Your message has been received. One of our nutrition advisors will respond within 2 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-[#0B3D2E] uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Johnson"
                      className="w-full px-4 py-3.5 rounded-[14px] bg-[#F4F7F2] border border-gray-200 text-sm text-[#2D3748] focus:outline-none focus:ring-2 focus:ring-[#1B8F3A] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0B3D2E] uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@example.com"
                      className="w-full px-4 py-3.5 rounded-[14px] bg-[#F4F7F2] border border-gray-200 text-sm text-[#2D3748] focus:outline-none focus:ring-2 focus:ring-[#1B8F3A] focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0B3D2E] uppercase tracking-wider mb-2">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+234 800 000 0000"
                    className="w-full px-4 py-3.5 rounded-[14px] bg-[#F4F7F2] border border-gray-200 text-sm text-[#2D3748] focus:outline-none focus:ring-2 focus:ring-[#1B8F3A] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0B3D2E] uppercase tracking-wider mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we help you achieve your health goals?"
                    className="w-full px-4 py-3.5 rounded-[14px] bg-[#F4F7F2] border border-gray-200 text-sm text-[#2D3748] focus:outline-none focus:ring-2 focus:ring-[#1B8F3A] focus:bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1B8F3A] hover:bg-[#0B3D2E] text-white font-bold text-base py-4 rounded-[14px] shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
