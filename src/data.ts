import { Meal, Testimonial, Feature, Stat } from './types';

// Real generated and high-quality CDN meal images
import heroBowlImg from './assets/images/fit_feast_hero_bowl_1786102161435.jpg';
import salmonImg from './assets/images/salmon_delight_bowl_1786102176689.jpg';
import jollofImg from './assets/images/nigerian_jollof_bowl_1786102187433.jpg';
import smoothieImg from './assets/images/smoothie_combo_1786102199921.jpg';
import avocadoSaladImg from './assets/images/avocado_salad_bowl_1786102219881.jpg';

export const MEALS_DATA: Meal[] = [
  {
    id: 'meal-1',
    name: 'Grilled Chicken Power Bowl',
    description: 'Juicy tender grilled chicken breast, fluffy quinoa, roasted sweet potatoes, ripe avocado & steamed broccoli.',
    category: 'high-protein',
    calories: 520,
    protein: 45,
    carbs: 48,
    fat: 14,
    price: 14.99,
    image: heroBowlImg,
    isPopular: true,
  },
  {
    id: 'meal-2',
    name: 'Salmon Green Delight',
    description: 'Pan-seared wild Atlantic salmon over tri-color quinoa, roasted asparagus, avocado slices, and baby spinach.',
    category: 'low-carb',
    calories: 480,
    protein: 38,
    carbs: 32,
    fat: 22,
    price: 16.50,
    isPopular: true,
    image: salmonImg,
  },
  {
    id: 'meal-3',
    name: 'Nigerian Veggie Rice Bowl',
    description: 'Herb-seasoned brown rice cooked with bell peppers, sweet plantains, sautéed kale, and roasted spiced chickpeas.',
    category: 'nigerian',
    calories: 410,
    protein: 22,
    carbs: 62,
    fat: 10,
    price: 12.99,
    isVegetarian: true,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'meal-4',
    name: 'Avocado Protein Salad',
    description: 'Crisp organic greens, hard-boiled farm eggs, pumpkin seeds, cherry tomatoes, avocado, and extra-virgin olive oil.',
    category: 'plant-based',
    calories: 360,
    protein: 28,
    carbs: 18,
    fat: 20,
    price: 11.50,
    isVegetarian: true,
    image: avocadoSaladImg,
  },
  {
    id: 'meal-5',
    name: 'Fit Feast Jollof Bowl',
    description: 'Authentic smoky Nigerian Jollof brown rice prepared with olive oil, served with grilled lean turkey breast and baked plantains.',
    category: 'nigerian',
    calories: 490,
    protein: 35,
    carbs: 55,
    fat: 12,
    price: 13.99,
    isPopular: true,
    isSpicy: true,
    image: jollofImg,
  },
  {
    id: 'meal-6',
    name: 'Smoothie Energy Combo',
    description: 'Dual jar set: Organic Kale Spinach Detox Smoothie & Berry Chia Whey Protein Jar.',
    category: 'smoothies',
    calories: 290,
    protein: 18,
    carbs: 38,
    fat: 6,
    price: 8.99,
    isVegetarian: true,
    image: smoothieImg,
  },
  {
    id: 'meal-7',
    name: 'Keto Sirloin Steak Strips',
    description: 'Flame-grilled lean sirloin steak strips paired with garlic zucchini noodles, wild mushrooms, and house chimichurri.',
    category: 'low-carb',
    calories: 510,
    protein: 48,
    carbs: 12,
    fat: 26,
    price: 17.25,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'meal-8',
    name: 'Coconut Lentil Protein Curry',
    description: 'Creamy coconut yellow lentil curry served over cauliflower rice, toasted cashews, and microgreens.',
    category: 'plant-based',
    calories: 380,
    protein: 24,
    carbs: 45,
    fat: 11,
    price: 11.99,
    isVegetarian: true,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
  }
];

export const STATS_DATA: Stat[] = [
  {
    id: 'stat-1',
    value: 5000,
    suffix: '+',
    label: 'Healthy Meals Served',
    iconName: 'UtensilsCrossed',
  },
  {
    id: 'stat-2',
    value: 98,
    suffix: '%',
    label: 'Happy Customers',
    iconName: 'Smile',
  },
  {
    id: 'stat-3',
    value: 100,
    suffix: '%',
    label: 'Fresh Ingredients',
    iconName: 'Leaf',
  },
  {
    id: 'stat-4',
    value: 30,
    suffix: ' Min',
    label: 'Average Delivery Time',
    iconName: 'Clock',
  },
];

export const FEATURES_DATA: Feature[] = [
  {
    id: 'feat-1',
    title: 'Fresh Daily Ingredients',
    description: 'Sourced directly every morning from trusted local organic farms to maintain peak nutrient density.',
    iconName: 'Sparkles',
    accent: 'green',
  },
  {
    id: 'feat-2',
    title: 'Nutritionist Inspired',
    description: 'Every recipe is formulated by sports dietitians with precise macro balances for maximum energy.',
    iconName: 'Activity',
    accent: 'orange',
  },
  {
    id: 'feat-3',
    title: '30-Min Fast Delivery',
    description: 'Insulated thermal eco-packaging ensures your meals arrive hot, fresh, and ready to enjoy.',
    iconName: 'Zap',
    accent: 'green',
  },
  {
    id: 'feat-4',
    title: 'Portion-Controlled Meals',
    description: 'No guessing games or tedious macro logging — clear calorie & protein counts on every box.',
    iconName: 'Target',
    accent: 'orange',
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Dr. Chidi Okafor',
    occupation: 'Orthopedic Surgeon & Marathoner',
    rating: 5,
    text: 'Fit Feast Kitchen completely simplified my meal routine during 14-hour hospital shifts. The Fit Feast Jollof Bowl and Salmon Delight taste like restaurant food while meeting my strict protein targets!',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 'test-2',
    name: 'Sarah Jenkins',
    occupation: 'Senior Tech Lead & Fitness Enthusiast',
    rating: 5,
    text: 'I lost 12 lbs in 8 weeks without feeling starved! The portion sizes are generous, the ingredients taste super crisp, and delivery is consistently under 30 minutes.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 'test-3',
    name: 'Marcus Vance',
    occupation: 'CrossFit Coach',
    rating: 5,
    text: 'As a coach, I recommend Fit Feast Kitchen to all my clients. The macro transparency, high protein content, and lack of heavy oils make it the premier meal prep service in town.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  },
];
