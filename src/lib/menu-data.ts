export type MenuItem = {
  name: string;
  price: string;
  description: string;
  image: string;
};

export type MenuCategory = {
  id: string;
  label: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: 'starters',
    label: 'Starters',
    items: [
      { name: 'Samosa', price: '6,50 €', description: 'Pastry filled with spiced vegetables', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80' },
      { name: 'Onion Bhaji', price: '6,50 €', description: 'Onion rings in chickpea batter', image: '/Onion Bhaji.webp' },
      { name: 'Vegetable Pakora', price: '6,50 €', description: 'Mixed vegetables in chickpea batter', image: '/Vegetable Pakora.webp' },
      { name: 'Paneer Pakora', price: '6,90 €', description: 'Homemade cheese in chickpea batter', image: '/Paneer Pakora.webp' },
      { name: 'Murg Pakora', price: '6,50 €', description: 'Chicken breast in chickpea batter', image: '/Murg Pakora.webp' },
      { name: 'Chana Chat', price: '4,90 €', description: 'Spiced chickpeas with tomato, onion, cucumber', image: '/Chana Chat.webp' },
      { name: 'Dal Shorba', price: '4,50 €', description: 'Lentil soup', image: '/Dal Shorba.webp' },
      { name: 'Mixed Starters (for 2)', price: '13,50 €', description: 'Assorted vegetables and homemade cheese', image: '/Mixed Starters.webp' },
    ],
  },
  {
    id: 'chicken',
    label: 'Chicken',
    items: [
      { name: 'Butter Chicken', price: '9,50 €', description: 'Grilled chicken breast in tomato-butter cream sauce', image: '/Butter Chicken.webp' },
      { name: 'Chicken Bhagwani', price: '8,90 €', description: 'Chicken breast with mixed vegetables in onion-tomato sauce', image: '/Chicken Bhagwani.webp' },
      { name: 'Chicken Kashmiri (spicy)', price: '8,90 €', description: 'Chicken with ginger, garlic, onion and coriander', image: '/Chicken Kashmiri.webp' },
      { name: 'Chicken Tikka', price: '9,50 €', description: 'Marinated chicken from the tandoor', image: '/Chicken Tikka.webp' },
      { name: 'Chicken Vindaloo (spicy)', price: '9,50 €', description: 'Spicy chicken with potato in Vindaloo sauce', image: '/Chicken Vindaloo.webp' },
      { name: 'Chicken Biryani', price: '10,90 €', description: 'Fragrant rice with chicken and spices', image: '/Chicken Biryani.webp' },
    ],
  },
  {
    id: 'lamb',
    label: 'Lamb',
    items: [
      { name: 'Lamb Korma', price: '9,90 €', description: 'Roasted lamb in coconut sauce, Mughlai style', image: '/Lamb Korma.webp' },
      { name: 'Allu Lamb Curry', price: '9,90 €', description: 'Lamb with potatoes, onions and curry sauce', image: '/Allu Lamb Curry.webp' },
      { name: 'Palak Ghost', price: '9,90 €', description: 'Lamb with creamed spinach', image: '/Palak Ghost.webp' },
      { name: 'Lamb Biryani', price: '11,90 €', description: 'Fragrant rice with lamb and spices', image: '/Lamb Biryani.webp' },
      { name: 'Lamb Tikka', price: '11,50 €', description: 'Marinated lamb from the tandoor', image: '/Lamb Tikka.webp' },
    ],
  },
  {
    id: 'veg',
    label: 'Vegetarian',
    items: [
      { name: 'Shahi Paneer', price: '14,50 €', description: 'Homemade cheese in coconut, almond and cream sauce', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&q=80' },
      { name: 'Alu Matar', price: '7,50 €', description: 'Spiced potatoes and peas in special sauce', image: '/Alu Matar.webp' },
      { name: 'Mango Sabji', price: '7,90 €', description: 'Mixed vegetables with mango sauce', image: '/Mango Sabji.webp' },
      { name: 'Dal Makhani', price: '7,50 €', description: 'Indian lentils with ginger and coriander', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80' },
      { name: 'Palak Paneer', price: '8,90 €', description: 'Homemade cheese with creamed spinach', image: '/Palak Paneer.webp' },
      { name: 'Vegetable Biryani', price: '9,50 €', description: 'Fragrant rice with mixed vegetables', image: '/Vegetable Biryani.webp' },
    ],
  },
  {
    id: 'sides',
    label: 'Sides & Breads',
    items: [
      { name: 'Naan', price: '2,50 €', description: 'Yeast flatbread from the clay oven', image: '/Naan.webp' },
      { name: 'Lasan Naan', price: '2,70 €', description: 'Naan filled with garlic', image: '/Lasan Naan.webp' },
      { name: 'Keema Naan', price: '5,90 €', description: 'Tandoor bread filled with minced meat', image: '/Keema Naan.webp' },
      { name: 'Alu Paratha', price: '4,90 €', description: 'Wholewheat bread filled with spiced potatoes', image: '/Alu Paratha.webp' },
      { name: 'Roti', price: '2,50 €', description: 'Wholewheat flatbread from the clay oven', image: '/Roti.webp' },
      { name: 'Raita', price: '3,50 €', description: 'Indian yogurt with cucumber', image: '/Raita.webp' },
      { name: 'Mango Lassi', price: '3,90 €', description: 'Yogurt drink with mango', image: '/Mango Lassi.webp' },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    items: [
      { name: 'Gulab Jamun', price: '4,90 €', description: 'Fried dough balls in sugar syrup', image: '/Gulab Jamun.webp' },
      { name: 'Mango Cream', price: '4,90 €', description: 'Creamy mango dessert', image: '/Mango Cream.webp' },
      { name: 'Kheer', price: '4,50 €', description: 'Indian rice pudding', image: '/Kheer.webp' },
      { name: 'Ice Cream', price: '3,90 €', description: 'Selection of ice cream', image: '/Ice Cream.webp' },
    ],
  },
];