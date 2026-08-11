import React, { useState, useEffect } from 'react';
import { Upload, Image as ImageIcon, RotateCcw } from 'lucide-react';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
  allowUpload?: boolean;
}

export const LogoComponent: React.FC<LogoProps> = ({
  className = '',
  showTagline = false,
  size = 'md',
  allowUpload = false,
}) => {
  const [customLogoUrl, setCustomLogoUrl] = useState<string | null>(null);

  useEffect(() => {
    // Check if user previously uploaded a logo in localStorage
    const saved = localStorage.getItem('fit_feast_custom_logo');
    if (saved) {
      setCustomLogoUrl(saved);
    }
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setCustomLogoUrl(result);
          localStorage.setItem('fit_feast_custom_logo', result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetLogo = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCustomLogoUrl(null);
    localStorage.removeItem('fit_feast_custom_logo');
  };

  const heightClasses = {
    sm: 'h-8',
    md: 'h-11',
    lg: 'h-16',
  }[size];

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
  }[size];

  return (
    <div className={`relative group inline-flex items-center gap-3 ${className}`}>
      {customLogoUrl ? (
        <div className="flex items-center gap-2">
          <img
            src={customLogoUrl}
            alt="Fit Feast Kitchen Custom Logo"
            className={`${heightClasses} object-contain transition-transform duration-200 group-hover:scale-105`}
            referrerPolicy="no-referrer"
          />
          {allowUpload && (
            <button
              onClick={handleResetLogo}
              title="Reset to official brand logo"
              className="opacity-0 group-hover:opacity-100 p-1 bg-gray-200 hover:bg-red-100 text-gray-600 hover:text-red-600 rounded-full transition-all text-xs"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      ) : (
        /* Official SVG Brand Logo styled after the uploaded brand emblem */
        <div className="flex items-center gap-2.5">
          {/* Logo Icon Graphic */}
          <div className="relative flex items-center justify-center shrink-0">
            <svg
              className={`${heightClasses} w-auto text-[#1B8F3A] transition-transform duration-300 group-hover:scale-105`}
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer Ring Accent */}
              <circle cx="50" cy="50" r="45" stroke="#1B8F3A" strokeWidth="2.5" strokeDasharray="240 30" />
              <path d="M 12 50 A 38 38 0 0 1 88 50" stroke="#FF7A00" strokeWidth="2.5" />

              {/* Bowl Base */}
              <path
                d="M 22 45 C 22 72, 78 72, 78 45 Z"
                fill="#0B3D2E"
              />
              <path
                d="M 26 48 C 26 68, 74 68, 74 48 Z"
                fill="#1B8F3A"
              />

              {/* Fresh Food Bowl Contents */}
              {/* Green Lettuce Leaves */}
              <circle cx="34" cy="42" r="8" fill="#2ECC71" />
              <circle cx="42" cy="38" r="9" fill="#1B8F3A" />
              
              {/* Grilled Protein / Chicken */}
              <path d="M 46 44 C 46 36, 62 36, 62 44 Z" fill="#FF7A00" />
              <line x1="50" y1="38" x2="48" y2="44" stroke="#D35400" strokeWidth="1.5" />
              <line x1="56" y1="38" x2="54" y2="44" stroke="#D35400" strokeWidth="1.5" />

              {/* Cucumber & Tomato Slices */}
              <circle cx="68" cy="42" r="6" fill="#E74C3C" />
              <circle cx="64" cy="45" r="5" fill="#27AE60" />

              {/* Fork & Leaf Emblem extending up */}
              <path
                d="M 48 36 L 48 18 C 48 14, 52 14, 52 18 L 52 36"
                stroke="#1B8F3A"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path d="M 46 16 L 46 22 M 50 15 L 50 22 M 54 16 L 54 22" stroke="#1B8F3A" strokeWidth="2" strokeLinecap="round" />
              
              {/* Energy Leaf Accent */}
              <path
                d="M 52 24 Q 66 18, 62 28 Q 54 32, 52 24 Z"
                fill="#FF7A00"
              />
            </svg>
          </div>

          {/* Typography */}
          <div className="flex flex-col">
            <div className={`font-heading font-extrabold tracking-tight ${textSizeClasses} leading-none flex items-center`}>
              <span className="text-[#0B3D2E] uppercase tracking-wide">FIT</span>
              <span className="text-[#FF7A00] italic uppercase ml-1">FEAST</span>
            </div>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#1B8F3A] uppercase">KITCHEN</span>
              <span className="w-1 h-1 rounded-full bg-[#FF7A00]"></span>
            </div>
          </div>
        </div>
      )}

      {/* Optional Upload Trigger Button */}
      {allowUpload && (
        <label
          className="cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 hover:bg-white text-gray-700 text-xs px-2 py-1 rounded-md shadow-sm border border-gray-200 flex items-center gap-1"
          title="Upload custom logo file (.png, .svg, .jpg)"
        >
          <Upload className="w-3 h-3 text-[#1B8F3A]" />
          <span className="text-[11px] font-medium hidden sm:inline">Swap Logo</span>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
          />
        </label>
      )}

      {showTagline && (
        <p className="text-xs text-[#718096] mt-1 font-medium italic">
          Eat Clean • Live Fit • Feel Great
        </p>
      )}
    </div>
  );
};
