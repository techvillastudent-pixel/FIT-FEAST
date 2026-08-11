import React, { useState } from 'react';
import { X, Flame, ShieldCheck, Plus, Minus, ShoppingBag, Check } from 'lucide-react';
import { Meal } from '../types';

interface MealModalProps {
  meal: Meal | null;
  onClose: () => void;
  onAddToCart: (meal: Meal, quantity: number) => void;
}

export const MealModal: React.FC<MealModalProps> = ({ meal, onClose, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!meal) return null;

  const handleAdd = () => {
    onAddToCart(meal, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      <div className="relative bg-white rounded-[28px] max-w-2xl w-full overflow-hidden shadow-2xl z-10 animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 bg-white/80 hover:bg-white text-gray-700 p-2 rounded-full shadow-md transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative h-64 sm:h-72 w-full bg-gray-100">
          <img
            src={meal.image}
            alt={meal.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
            <div className="text-white">
              <span className="bg-[#1B8F3A] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {meal.category.replace('-', ' ')}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mt-1 text-white">{meal.name}</h2>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-sm sm:text-base text-[#2D3748] leading-relaxed">
            {meal.description}
          </p>

          {/* Macro Breakdown */}
          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
              Nutritional Macros (Per Portion)
            </h4>
            <div className="grid grid-cols-4 gap-3 text-center">
              <div className="bg-[#F4F7F2] p-3 rounded-2xl border border-gray-200/80">
                <div className="text-xs text-gray-500 font-semibold">Calories</div>
                <div className="text-lg font-extrabold text-[#0B3D2E] mt-0.5">{meal.calories}</div>
              </div>
              <div className="bg-[#E8F5EC] p-3 rounded-2xl border border-[#1B8F3A]/30">
                <div className="text-xs text-[#1B8F3A] font-semibold">Protein</div>
                <div className="text-lg font-extrabold text-[#1B8F3A] mt-0.5">{meal.protein}g</div>
              </div>
              <div className="bg-[#F4F7F2] p-3 rounded-2xl border border-gray-200/80">
                <div className="text-xs text-gray-500 font-semibold">Carbs</div>
                <div className="text-lg font-extrabold text-[#0B3D2E] mt-0.5">{meal.carbs}g</div>
              </div>
              <div className="bg-[#F4F7F2] p-3 rounded-2xl border border-gray-200/80">
                <div className="text-xs text-gray-500 font-semibold">Healthy Fat</div>
                <div className="text-lg font-extrabold text-[#0B3D2E] mt-0.5">{meal.fat}g</div>
              </div>
            </div>
          </div>

          {/* Key Attributes */}
          <div className="flex flex-wrap gap-2 text-xs font-semibold text-[#1B8F3A]">
            <span className="px-3 py-1 bg-[#B7E4C7]/30 rounded-full flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> 100% Organic Produce
            </span>
            <span className="px-3 py-1 bg-[#B7E4C7]/30 rounded-full flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-[#FF7A00]" /> Fresh Cooked Daily
            </span>
          </div>

          {/* Quantity & Add Action */}
          <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-4">
            <div>
              <span className="text-xs text-gray-400 font-semibold block">Total Price</span>
              <span className="text-2xl font-extrabold text-[#0B3D2E]">
                ${(meal.price * quantity).toFixed(2)}
              </span>
            </div>

            <div className="flex items-center gap-3">
              {/* Quantity Counter */}
              <div className="flex items-center border border-gray-200 rounded-full p-1 bg-[#F4F7F2]">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-1.5 rounded-full bg-white text-gray-700 hover:bg-gray-100"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-3 text-sm font-bold">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-1.5 rounded-full bg-white text-gray-700 hover:bg-gray-100"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Add Button */}
              <button
                onClick={handleAdd}
                className={`px-6 py-3.5 rounded-full font-bold text-sm flex items-center gap-2 transition-all shadow-md ${
                  added
                    ? 'bg-[#1B8F3A] text-white'
                    : 'bg-[#FF7A00] hover:bg-[#e06b00] text-white hover:shadow-orange-500/25'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" /> Added to Order!
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" /> Add to Order
                  </>
                )}
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
