import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, CheckCircle2, Flame, Sparkles } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (mealId: string, delta: number) => void;
  onRemoveItem: (mealId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.meal.price * item.quantity, 0);
  const totalCalories = cartItems.reduce((acc, item) => acc + item.meal.calories * item.quantity, 0);
  const totalProtein = cartItems.reduce((acc, item) => acc + item.meal.protein * item.quantity, 0);
  const deliveryFee = subtotal > 0 ? 3.99 : 0;
  const grandTotal = subtotal + deliveryFee;

  const handleSimulateCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutComplete(true);
    }, 1500);
  };

  const handleFinish = () => {
    setCheckoutComplete(false);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between z-10 animate-in slide-in-from-right duration-300">
          
          {/* Header */}
          <div className="p-6 bg-[#0B3D2E] text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-6 h-6 text-[#FF7A00]" />
              <div>
                <h3 className="font-heading font-bold text-lg text-white">Your Meal Cart</h3>
                <p className="text-xs text-gray-300">{cartItems.length} items selected</p>
              </div>
            </div>
            <button
              onClick={onClose}
              aria-label="Close cart"
              className="p-2 text-gray-300 hover:text-white rounded-full hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {checkoutComplete ? (
              <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 bg-[#1B8F3A]/10 text-[#1B8F3A] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold text-[#0B3D2E]">Order Confirmed!</h4>
                <p className="text-sm text-[#718096] max-w-xs mx-auto">
                  Your fresh meal prep order is now being crafted in our kitchen. Estimated delivery time: 28–35 minutes!
                </p>
                <div className="p-4 bg-[#F4F7F2] rounded-2xl text-xs text-left space-y-1.5 font-medium border border-gray-200">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Total Macros:</span>
                    <span className="font-bold text-[#1B8F3A]">{totalCalories} Cal • {totalProtein}g Protein</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Amount Paid:</span>
                    <span className="font-bold text-[#0B3D2E]">${grandTotal.toFixed(2)}</span>
                  </div>
                </div>
                <button
                  onClick={handleFinish}
                  className="w-full bg-[#1B8F3A] text-white font-bold py-3.5 rounded-full shadow-md hover:bg-[#0B3D2E] transition-all text-sm"
                >
                  Back to Home
                </button>
              </div>
            ) : cartItems.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 bg-gray-100 text-gray-400 rounded-full flex items-center justify-center mx-auto">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-[#0B3D2E] text-lg">Your cart is empty</h4>
                <p className="text-xs text-[#718096] max-w-xs mx-auto">
                  Explore our high-protein, chef-prepared meals and fuel your body today!
                </p>
                <button
                  onClick={onClose}
                  className="bg-[#FF7A00] text-white font-bold text-xs px-6 py-3 rounded-full shadow-md hover:bg-[#e06b00]"
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              <>
                {/* Macro Summary Pill Bar */}
                <div className="p-3.5 bg-[#E8F5EC] border border-[#1B8F3A]/30 rounded-2xl flex items-center justify-around text-xs font-bold text-[#0B3D2E]">
                  <div className="flex items-center gap-1.5">
                    <Flame className="w-4 h-4 text-[#FF7A00]" />
                    <span>{totalCalories} Cal</span>
                  </div>
                  <div className="h-4 w-px bg-[#1B8F3A]/30" />
                  <div className="flex items-center gap-1.5 text-[#1B8F3A]">
                    <Sparkles className="w-4 h-4" />
                    <span>{totalProtein}g Protein</span>
                  </div>
                </div>

                {/* Items List */}
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.meal.id}
                      className="flex items-center gap-3 p-3 bg-[#F4F7F2] rounded-2xl border border-gray-200/80"
                    >
                      <img
                        src={item.meal.image}
                        alt={item.meal.name}
                        className="w-16 h-16 rounded-xl object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-sm text-[#0B3D2E] truncate">
                          {item.meal.name}
                        </h4>
                        <div className="text-xs text-gray-500 mt-0.5">
                          ${item.meal.price.toFixed(2)} • {item.meal.calories} cal
                        </div>
                        {/* Quantity controls */}
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => onUpdateQuantity(item.meal.id, -1)}
                            className="p-1 rounded-md bg-white text-gray-700 hover:bg-gray-200 shadow-xs"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.meal.id, 1)}
                            className="p-1 rounded-md bg-white text-gray-700 hover:bg-gray-200 shadow-xs"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-sm text-[#0B3D2E]">
                          ${(item.meal.price * item.quantity).toFixed(2)}
                        </div>
                        <button
                          onClick={() => onRemoveItem(item.meal.id)}
                          className="p-1 text-red-500 hover:text-red-700 mt-2 inline-block"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Footer Checkout Summary */}
          {cartItems.length > 0 && !checkoutComplete && (
            <div className="p-6 border-t border-gray-100 bg-white space-y-4">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-semibold text-gray-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Thermal Express Delivery</span>
                  <span className="font-semibold text-gray-900">${deliveryFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-[#0B3D2E] pt-2 border-t border-gray-100">
                  <span>Grand Total</span>
                  <span className="text-lg text-[#1B8F3A]">${grandTotal.toFixed(2)}</span>
                </div>
              </div>

              <button
                disabled={isCheckingOut}
                onClick={handleSimulateCheckout}
                className="w-full bg-[#FF7A00] hover:bg-[#e06b00] text-white font-bold py-4 rounded-full shadow-lg transition-all duration-200 flex items-center justify-center gap-2 text-base"
              >
                {isCheckingOut ? (
                  <span>Processing Order...</span>
                ) : (
                  <>
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
