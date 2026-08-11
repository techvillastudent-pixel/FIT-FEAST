import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppFloatingButton: React.FC = () => {
  const whatsappNumber = '2349044897455';
  const defaultMessage = encodeURIComponent("Hello Fit Feast Kitchen! I'd like to inquire about healthy meal prep orders.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 left-6 z-40 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2.5 border-2 border-white/20 group"
    >
      <MessageCircle className="w-6 h-6 fill-current shrink-0 animate-bounce" style={{ animationDuration: '2s' }} />
      <span className="text-xs sm:text-sm font-bold tracking-wide hidden sm:inline">
        Order on WhatsApp
      </span>
      <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping hidden sm:inline-block" />
    </a>
  );
};
