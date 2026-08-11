import React from 'react';
import { X, Play, ShieldCheck, Heart } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
      />

      <div className="relative bg-[#0B3D2E] text-white rounded-[28px] max-w-3xl w-full overflow-hidden shadow-2xl z-10 border border-white/10 animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#FF7A00] animate-ping" />
            <h3 className="font-heading font-bold text-base text-white">
              Fit Feast Kitchen — The Culinary Craft
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close video"
            className="p-1.5 text-gray-300 hover:text-white rounded-full hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Frame Container */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube-nocookie.com/embed/5qap5aO4i9A?autoplay=1&mute=0"
            title="Fit Feast Kitchen Healthy Meal Prep"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Footer Info */}
        <div className="p-6 bg-[#072B20] flex items-center justify-between text-xs text-gray-300">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#1B8F3A]" />
            <span>100% Farm Fresh Ingredients • Victoria Island Kitchen</span>
          </div>
          <div className="flex items-center gap-1 text-[#FF7A00]">
            <Heart className="w-4 h-4 fill-current" />
            <span>Eat Clean, Feel Great</span>
          </div>
        </div>

      </div>
    </div>
  );
};
