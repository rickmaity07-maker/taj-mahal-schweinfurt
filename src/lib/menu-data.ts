export type MenuTag = 'veg' | 'spicy' | 'popular';

export type MenuItem = {
  name: string;
  price: string;
  description: string;
  image: string;
  tags?: MenuTag[];
};

export type MenuCategory = {
  id: string;
  label: string;
  intro: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: 'starters',
    label: 'Starters',
    intro: 'Crisp, fried in chickpea batter and served with house chutneys.',
    items: [
      { name: 'Samosa', price: '6,50 €', description: 'Pastry filled with spiced vegetables', image: '/images/photo-1601050690597-df0568f70950.jpg', tags: ['veg'] },
      { name: 'Onion Bhaji', price: '6,50 €', description: 'Onion rings in chickpea batter', image: '/Onion Bhaji.webp', tags: ['veg'] },
      { name: 'Vegetable Pakora', price: '6,50 €', description: 'Mixed vegetables in chickpea batter', image: '/Vegetable Pakora.webp', tags: ['veg'] },
      { name: 'Paneer Pakora', price: '6,90 €', description: 'Homemade cheese in chickpea batter', image: '/Paneer Pakora.webp', tags: ['veg'] },
      { name: 'Murg Pakora', price: '6,50 €', description: 'Chicken breast in chickpea batter', image: '/Murg Pakora.webp' },
      { name: 'Chana Chat', price: '4,90 €', description: 'Spiced chickpeas with tomato, onion, cucumber', image: '/Chana Chat.webp', tags: ['veg'] },
      { name: 'Dal Shorba', price: '4,50 €', description: 'Lentil soup', image: '/Dal Shorba.webp', tags: ['veg'] },
      { name: 'Mixed Starters (for 2)', price: '13,50 €', description: 'Assorted vegetables and homemade cheese', image: '/Mixed Starters.webp', tags: ['veg'] },
    ],
  },
  {
    id: 'chicken',
    label: 'Chicken',
    intro: 'Tender chicken breast, slow-cooked in sauces made fresh each day.',
    items: [
      { name: 'Butter Chicken', price: '9,50 €', description: 'Grilled chicken breast in tomato-butter cream sauce', image: '/Butter Chicken.webp', tags: ['popular'] },
      { name: 'Chicken Bhagwani', price: '8,90 €', description: 'Chicken breast with mixed vegetables in onion-tomato sauce', image: '/Chicken Bhagwani.webp' },
      { name: 'Chicken Kashmiri', price: '8,90 €', description: 'Chicken with ginger, garlic, onion and coriander', image: '/Chicken Kashmiri.webp', tags: ['spicy'] },
      { name: 'Chicken Tikka', price: '9,50 €', description: 'Marinated chicken from the tandoor', image: '/Chicken Tikka.webp' },
      { name: 'Chicken Vindaloo', price: '9,50 €', description: 'Spicy chicken with potato in Vindaloo sauce', image: '/Chicken Vindaloo.webp', tags: ['spicy'] },
      { name: 'Chicken Biryani', price: '10,90 €', description: 'Fragrant rice with chicken and spices', image: '/Chicken Biryani.webp' },
    ],
  },
  {
    id: 'lamb',
    label: 'Lamb',
    intro: 'Roasted lamb, Mughlai-style korma and dishes from the clay oven.',
    items: [
      { name: 'Lamb Korma', price: '9,90 €', description: 'Roasted lamb in coconut sauce, Mughlai style', image: '/Lamb Korma.webp', tags: ['popular'] },
      { name: 'Allu Lamb Curry', price: '9,90 €', description: 'Lamb with potatoes, onions and curry sauce', image: '/Allu Lamb Curry.webp' },
      { name: 'Palak Ghost', price: '9,90 €', description: 'Lamb with creamed spinach', image: '/Palak Ghost.webp' },
      { name: 'Lamb Biryani', price: '11,90 €', description: 'Fragrant rice with lamb and spices', image: '/Lamb Biryani.webp' },
      { name: 'Lamb Tikka', price: '11,50 €', description: 'Marinated lamb from the tandoor', image: '/Lamb Tikka.webp' },
    ],
  },
  {
    id: 'veg',
    label: 'Vegetarian',
    intro: 'Homemade paneer, lentils and seasonal vegetables.',
    items: [
      { name: 'Shahi Paneer', price: '14,50 €', description: 'Homemade cheese in coconut, almond and cream sauce', image: '/images/photo-1631452180519-c014fe946bc7.jpg', tags: ['veg'] },
      { name: 'Alu Matar', price: '7,50 €', description: 'Spiced potatoes and peas in special sauce', image: '/Alu Matar.webp', tags: ['veg'] },
      { name: 'Mango Sabji', price: '7,90 €', description: 'Mixed vegetables with mango sauce', image: '/Mango Sabji.webp', tags: ['veg'] },
      { name: 'Dal Makhani', price: '7,50 €', description: 'Indian lentils with ginger and coriander', image: '/images/photo-1547592166-23ac45744acd.jpg', tags: ['veg'] },
      { name: 'Palak Paneer', price: '8,90 €', description: 'Homemade cheese with creamed spinach', image: '/Palak Paneer.webp', tags: ['veg', 'popular'] },
      { name: 'Vegetable Biryani', price: '9,50 €', description: 'Fragrant rice with mixed vegetables', image: '/Vegetable Biryani.webp', tags: ['veg'] },
    ],
  },
  {
    id: 'sides',
    label: 'Breads & Sides',
    intro: 'Baked to order in the tandoor. Order one more than you think.',
    items: [
      { name: 'Naan', price: '2,50 €', description: 'Yeast flatbread from the clay oven', image: '/Naan.webp', tags: ['veg'] },
      { name: 'Lasan Naan', price: '2,70 €', description: 'Naan filled with garlic', image: '/Lasan Naan.webp', tags: ['veg'] },
      { name: 'Keema Naan', price: '5,90 €', description: 'Tandoor bread filled with minced meat', image: '/Keema Naan.webp' },
      { name: 'Alu Paratha', price: '4,90 €', description: 'Wholewheat bread filled with spiced potatoes', image: '/Alu Paratha.webp', tags: ['veg'] },
      { name: 'Roti', price: '2,50 €', description: 'Wholewheat flatbread from the clay oven', image: '/Roti.webp', tags: ['veg'] },
      { name: 'Raita', price: '3,50 €', description: 'Indian yogurt with cucumber', image: '/Raita.webp', tags: ['veg'] },
      { name: 'Mango Lassi', price: '3,90 €', description: 'Yogurt drink with mango', image: '/Mango Lassi.webp', tags: ['veg'] },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    intro: 'Something sweet to finish.',
    items: [
      { name: 'Gulab Jamun', price: '4,90 €', description: 'Fried dough balls in sugar syrup', image: '/Gulab Jamun.webp', tags: ['veg'] },
      { name: 'Mango Cream', price: '4,90 €', description: 'Creamy mango dessert', image: '/Mango Cream.webp', tags: ['veg'] },
      { name: 'Kheer', price: '4,50 €', description: 'Indian rice pudding', image: '/Kheer.webp', tags: ['veg'] },
      { name: 'Ice Cream', price: '3,90 €', description: 'Selection of ice cream', image: '/Ice Cream.webp', tags: ['veg'] },
    ],
  },
];

export const tagLabels: Record<MenuTag, string> = {
  veg: 'Vegetarian',
  spicy: 'Spicy',
  popular: 'Guest favourite',
};

const allMenuItems = menuCategories.flatMap((c) => c.items);

export function findMenuItem(name: string) {
  return allMenuItems.find((i) => i.name === name);
}

export function parsePrice(price: string) {
  return parseFloat(price.replace('€', '').replace(',', '.').trim()) || 0;
}

export function formatPrice(value: number) {
  return `${value.toFixed(2).replace('.', ',')} €`;
}
