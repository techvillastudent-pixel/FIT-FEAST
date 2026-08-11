import React, { useState, useEffect } from 'react';
import { Meal, CartItem } from './types';

// Components
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatsSection } from './components/StatsSection';
import { FeaturedMenu } from './components/FeaturedMenu';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { NewsletterSection } from './components/NewsletterSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

// Modals & Drawers
import { CartDrawer } from './components/CartDrawer';
import { MealModal } from './components/MealModal';
import { VideoModal } from './components/VideoModal';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('fit_feast_cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('fit_feast_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (meal: Meal, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.meal.id === meal.id);
      if (existing) {
        return prev.map((item) =>
          item.meal.id === meal.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { meal, quantity }];
    });
  };

  const handleUpdateQuantity = (mealId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.meal.id === mealId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (mealId: string) => {
    setCartItems((prev) => prev.filter((item) => item.meal.id !== mealId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7F2] text-[#2D3748] selection:bg-[#FF7A00] selection:text-white">
      {/* 1. Sticky Navigation Bar */}
      <Navbar
        cartItemCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <HeroSection onOpenVideo={() => setIsVideoOpen(true)} />

        {/* 3. Trust / Stats Section */}
        <StatsSection />

        {/* 4. Featured Menu Section */}
        <FeaturedMenu
          onAddToCart={handleAddToCart}
          onOpenMealModal={(meal) => setSelectedMeal(meal)}
        />

        {/* 5. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 6. About Fit Feast Kitchen Section */}
        <AboutSection />

        {/* 7. Customer Testimonials Section */}
        <TestimonialsSection />

        {/* 8. How It Works Section */}
        <HowItWorksSection />

        {/* 9. Newsletter / CTA Banner */}
        <NewsletterSection />

        {/* 10. Contact Section */}
        <ContactSection />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Meal Detail & Customization Modal */}
      <MealModal
        meal={selectedMeal}
        onClose={() => setSelectedMeal(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Video Story Modal */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
      />
    </div>
  );
}
