import React from 'react';
import { Sparkles, Activity, Zap, Target, CheckCircle2 } from 'lucide-react';
import { FEATURES_DATA } from '../data';
import salmonImg from '../assets/images/salmon_delight_bowl_1786102176689.jpg';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string, accent: string) => {
    const isGreen = accent === 'green';
    const colorClass = isGreen ? 'text-[#1B8F3A]' : 'text-[#FF7A00]';
    const bgClass = isGreen ? 'bg-[#B7E4C7]/30' : 'bg-[#FF7A00]/10';

    switch (iconName) {
      case 'Sparkles':
        return (
          <div className={`p-3 rounded-2xl ${bgClass} ${colorClass}`}>
            <Sparkles className="w-6 h-6" />
          </div>
        );
      case 'Activity':
        return (
          <div className={`p-3 rounded-2xl ${bgClass} ${colorClass}`}>
            <Activity className="w-6 h-6" />
          </div>
        );
      case 'Zap':
        return (
          <div className={`p-3 rounded-2xl ${bgClass} ${colorClass}`}>
            <Zap className="w-6 h-6" />
          </div>
        );
      case 'Target':
        return (
          <div className={`p-3 rounded-2xl ${bgClass} ${colorClass}`}>
            <Target className="w-6 h-6" />
          </div>
        );
      default:
        return (
          <div className={`p-3 rounded-2xl ${bgClass} ${colorClass}`}>
            <CheckCircle2 className="w-6 h-6" />
          </div>
        );
    }
  };

  return (
    <section className="py-20 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Presentation */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame */}
              <div className="relative z-10 rounded-[28px] overflow-hidden shadow-2xl border-4 border-[#F4F7F2]">
                <img
                  src={salmonImg}
                  alt="Fit Feast Kitchen Fresh Ingredients Preparation"
                  className="w-full h-[450px] object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating Overlay Badge */}
                <div className="absolute top-6 right-6 glass-card p-4 rounded-2xl shadow-lg max-w-[200px]">
                  <div className="flex items-center gap-2 text-[#1B8F3A] font-bold text-xs uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Tested Quality</span>
                  </div>
                  <p className="text-xs text-[#2D3748] mt-1 font-semibold">
                    100% Farm Fresh Non-GMO Produce
                  </p>
                </div>
              </div>

              {/* Decorative Accent Background Box */}
              <div className="absolute -bottom-6 -left-6 w-full h-full bg-[#1B8F3A]/10 rounded-[28px] -z-0" />
            </div>
          </div>

          {/* Right Column: 4 Feature Blocks */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#1B8F3A] bg-[#B7E4C7]/40 px-3.5 py-1.5 rounded-full">
                The Fit Feast Standard
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3D2E] tracking-tight mt-3">
                Why Health Conscious Foodies Choose Fit Feast Kitchen
              </h2>
              <p className="text-base text-[#718096] mt-3 leading-relaxed">
                We bridge the gap between strict nutritional discipline and mouth-watering culinary mastery so you can stay consistent effortlessly.
              </p>
            </div>

            {/* Feature Blocks Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {FEATURES_DATA.map((feat) => (
                <div
                  key={feat.id}
                  className="bg-[#F4F7F2] p-6 rounded-[20px] border border-gray-200/80 hover:border-[#1B8F3A]/40 transition-all duration-300 hover:shadow-md flex flex-col space-y-3 group"
                >
                  <div className="flex items-center justify-between">
                    {getIcon(feat.iconName, feat.accent)}
                    <span className="text-xs font-bold text-gray-400 group-hover:text-[#1B8F3A] transition-colors">
                      0{feat.id.replace('feat-', '')}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0B3D2E] group-hover:text-[#1B8F3A] transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-[#718096] leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
