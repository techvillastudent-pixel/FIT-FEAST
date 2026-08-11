export interface Meal {
  id: string;
  name: string;
  description: string;
  category: 'all' | 'high-protein' | 'low-carb' | 'nigerian' | 'plant-based' | 'smoothies';
  calories: number;
  protein: number; // in grams
  carbs: number; // in grams
  fat: number; // in grams
  price: number;
  image: string;
  isPopular?: boolean;
  isSpicy?: boolean;
  isVegetarian?: boolean;
}

export interface CartItem {
  meal: Meal;
  quantity: number;
  customization?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  occupation: string;
  rating: number;
  text: string;
  avatar: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
  accent: 'green' | 'orange';
}

export interface Stat {
  id: string;
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  iconName: string;
}
