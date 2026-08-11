import React, { useState } from 'react';
import { Meal } from '../types';
import { MEALS_DATA } from '../data';
import { Flame, Plus, Check, Eye, Search, Sparkles } from 'lucide-react';

interface FeaturedMenuProps {
  onAddToCart: (meal: Meal) => void;
  onOpenMealModal: (meal: Meal) => void;
}

export const FeaturedMenu: React.FC<FeaturedMenuProps> = ({ onAddToCart, onOpenMealModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [addedItemIds, setAddedItemIds] = useState<Record<string, boolean>>({});

  const categories = [
    { id: 'all', label: 'All Prep Meals' },
    { id: 'high-protein', label: 'High Protein' },
    { id: 'low-carb', label: 'Keto / Low Carb' },
    { id: 'nigerian', label: 'Nigerian Favorites' },
    { id: 'plant-based', label: 'Plant Based' },
    { id: 'smoothies', label: 'Smoothies & Juices' },
  ];

  const filteredMeals = MEALS_DATA.filter((meal) => {
    const matchesCategory = activeCategory === 'all' || meal.category === activeCategory;
    const matchesSearch =
      meal.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      meal.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddClick = (meal: Meal, e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(meal);
    setAddedItemIds((prev) => ({ ...prev, [meal.id]: true }));
    setTimeout(() => {
      setAddedItemIds((prev) => ({ ...prev, [meal.id]: false }));
    }, 1200);
  };

  return (
    <section id="menu" className="py-20 bg-[#F4F7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B7E4C7]/50 text-[#1B8F3A] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Chef Prepared • Daily Menu</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B3D2E] tracking-tight">
            Our Popular Healthy Meals
          </h2>
          <p className="text-base text-[#718096]">
            Carefully portioned, macro-balanced, and prepared fresh daily using whole, nutrient-dense ingredients.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="mb-10 space-y-6">
          {/* Search Box */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search meals (e.g. chicken, jollof, salad)..."
              className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-[14px] text-sm text-[#2D3748] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1B8F3A] focus:border-transparent shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600 bg-gray-100 rounded-full px-2 py-1"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Pills */}
          <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm ${
                    isActive
                      ? 'bg-[#1B8F3A] text-white shadow-green-600/20 shadow-md scale-105'
                      : 'bg-white text-[#2D3748] hover:bg-[#E8F5EC] border border-gray-200/80 hover:border-[#1B8F3A]/30'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Food Cards Grid */}
        {filteredMeals.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-[20px] border border-gray-200/80 max-w-lg mx-auto shadow-sm">
            <p className="text-gray-500 font-medium">No meals found matching your filter or search.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 text-xs font-bold text-[#1B8F3A] underline hover:text-[#0B3D2E]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMeals.map((meal) => {
              const isJustAdded = addedItemIds[meal.id];
              return (
                <div
                  key={meal.id}
                  onClick={() => onOpenMealModal(meal)}
                  className="bg-white rounded-[20px] overflow-hidden border border-gray-200/80 hover:border-[#1B8F3A]/40 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col group cursor-pointer relative"
                >
                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden bg-gray-100">
                    <img
                      src={meal.image}
                      alt={meal.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />

                    {/* Popular / Spicy Badge */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
                      {meal.isPopular && (
                        <span className="bg-[#FF7A00] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
                          Popular
                        </span>
                      )}
                      {meal.isSpicy && (
                        <span className="bg-red-600 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-md flex items-center gap-1">
                          <Flame className="w-3 h-3 fill-current" /> Spicy
                        </span>
                      )}
                    </div>

                    {/* Quick View Button on Image */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenMealModal(meal);
                      }}
                      title="Quick View Details"
                      className="absolute top-3 right-3 bg-white/90 hover:bg-white text-gray-700 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    >
                      <Eye className="w-4 h-4 text-[#0B3D2E]" />
                    </button>

                    {/* Nutrition Pills on Bottom of Image */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                      <div className="flex items-center gap-1.5 bg-black/70 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-lg font-medium">
                        <Flame className="w-3.5 h-3.5 text-[#FF7A00]" />
                        <span>{meal.calories} Cal</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-[#1B8F3A]/90 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-lg font-bold">
                        <span>{meal.protein}g Protein</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#0B3D2E] group-hover:text-[#1B8F3A] transition-colors leading-snug">
                        {meal.name}
                      </h3>
                      <p className="text-sm text-[#718096] mt-2 line-clamp-2 font-normal leading-relaxed">
                        {meal.description}
                      </p>
                    </div>

                    {/* Price & Add to Cart Action */}
                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                      <div>
                        <span className="text-xs text-gray-400 font-medium block">Price</span>
                        <span className="text-2xl font-extrabold text-[#0B3D2E]">${meal.price.toFixed(2)}</span>
                      </div>

                      <button
                        onClick={(e) => handleAddClick(meal, e)}
                        className={`px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm flex items-center gap-2 transition-all duration-200 shadow-md ${
                          isJustAdded
                            ? 'bg-[#1B8F3A] text-white scale-105'
                            : 'bg-[#FF7A00] hover:bg-[#e06b00] text-white hover:shadow-orange-500/25 transform active:scale-95'
                        }`}
                      >
                        {isJustAdded ? (
                          <>
                            <Check className="w-4 h-4" />
                            <span>Added!</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-4 h-4" />
                            <span>Add to Cart</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
