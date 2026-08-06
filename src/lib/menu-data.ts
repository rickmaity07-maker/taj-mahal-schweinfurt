
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
    id: 'breakfast',
    label: 'Breakfast',
    items: [
      { name: 'Avocado Toast', price: '$12', description: 'Sourdough, smashed avocado, poached egg, chili flakes, microgreens', image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&q=80' },
      { name: 'Eggs Benedict', price: '$16', description: 'English muffin, smoked salmon, poached eggs, hollandaise', image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=400&q=80' },
      { name: 'Buttermilk Pancakes', price: '$14', description: 'Stack of three, maple syrup, seasonal berries, whipped cream', image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=400&q=80' },
      { name: 'Sunrise Bowl', price: '$15', description: 'Greek yogurt, granola, honey, fresh fruit, chia seeds', image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&q=80' },
      { name: 'Brioche French Toast', price: '$15', description: 'Thick-cut brioche, vanilla, cinnamon, berry compote', image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&q=80' },
      { name: 'Garden Omelette', price: '$14', description: 'Three eggs, spinach, tomato, goat cheese, herbs, toast', image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=400&q=80' },
      { name: 'Shakshuka', price: '$16', description: 'Eggs poached in spiced tomato sauce, feta, warm pita', image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&q=80' },
      { name: 'Seasonal Fruit Plate', price: '$11', description: 'Market fruit, honey yogurt, toasted almonds', image: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=400&q=80' },
    ],
  },
  {
    id: 'lunch',
    label: 'Lunch',
    items: [
      { name: 'Garden Salad', price: '$13', description: 'Mixed greens, cherry tomatoes, cucumber, feta, lemon vinaigrette', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80' },
      { name: 'Margherita Pizza', price: '$18', description: 'San Marzano tomato, fresh mozzarella, basil, olive oil', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80' },
      { name: 'Maison Burger', price: '$19', description: 'Angus beef, aged cheddar, caramelized onion, house sauce, fries', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80' },
      { name: 'Truffle Tagliatelle', price: '$22', description: 'Fresh pasta, black truffle, Parmesan, wild mushrooms', image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&q=80' },
      { name: 'Grilled Chicken Salad', price: '$17', description: 'Herb-marinated chicken, mixed leaves, avocado, citrus dressing', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&q=80' },
      { name: 'Fish Tacos', price: '$18', description: 'Crispy fish, cabbage slaw, chipotle mayo, lime (3 pcs)', image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&q=80' },
      { name: 'Wild Mushroom Risotto', price: '$20', description: 'Arborio rice, mixed forest mushrooms, Parmesan, truffle oil', image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&q=80' },
      { name: 'Classic Club', price: '$16', description: 'Turkey, bacon, lettuce, tomato, mayo, toasted bread, fries', image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&q=80' },
    ],
  },
  {
    id: 'dinner',
    label: 'Dinner',
    items: [
      { name: 'Dry-Aged Ribeye', price: '$42', description: '12oz, roasted garlic butter, seasonal vegetables, potato purée', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80' },
      { name: 'Pan-Seared Salmon', price: '$28', description: 'Atlantic salmon, citrus beurre blanc, asparagus, quinoa', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&q=80' },
      { name: 'Herb-Roasted Chicken', price: '$26', description: 'Free-range chicken, thyme jus, root vegetables, crispy skin', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&q=80' },
      { name: 'Wild Mushroom Risotto', price: '$24', description: 'Arborio rice, mixed forest mushrooms, Parmesan, truffle oil', image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&q=80' },
      { name: 'Lamb Rack', price: '$38', description: 'Herb-crusted, red wine jus, roasted vegetables, potato gratin', image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=400&q=80' },
      { name: 'Lobster Linguine', price: '$36', description: 'Fresh lobster, chili, garlic, white wine, parsley', image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&q=80' },
      { name: 'Duck Confit', price: '$32', description: 'Slow-cooked duck leg, cherry sauce, confit potatoes', image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&q=80' },
      { name: 'Mediterranean Sea Bass', price: '$30', description: 'Whole roasted, olives, tomatoes, fennel, lemon', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&q=80' },
    ],
  },
  {
    id: 'drinks',
    label: 'Drinks',
    items: [
      { name: 'Signature Negroni', price: '$14', description: 'Gin, Campari, sweet vermouth, orange twist', image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&q=80' },
      { name: 'House Red / White', price: '$9 / $11', description: 'Carefully selected local and international wines by the glass', image: 'https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=400&q=80' },
      { name: 'Artisan Coffee', price: '$4.5', description: 'Espresso, Americano, Cappuccino, Flat White', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80' },
      { name: 'Garden Mocktail', price: '$8', description: 'Cucumber, mint, lime, elderflower, soda', image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&q=80' },
      { name: 'Classic Martini', price: '$15', description: 'Gin or vodka, dry vermouth, lemon twist or olives', image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&q=80' },
      { name: 'Champagne Glass', price: '$16', description: 'Selected French Champagne by the glass', image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=400&q=80' },
      { name: 'Craft Beer Selection', price: '$7–9', description: 'Local IPA, lager, and seasonal rotations', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&q=80' },
      { name: 'Premium Teas', price: '$5', description: 'Earl Grey, green, chamomile, fresh mint', image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&q=80' },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    items: [
      { name: 'Dark Chocolate Fondant', price: '$12', description: 'Warm molten center, vanilla ice cream, berry coulis', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80' },
      { name: 'Lemon Cheesecake', price: '$11', description: 'Creamy baked cheesecake, lemon curd, shortbread base', image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80' },
      { name: 'Classic Tiramisu', price: '$11', description: 'Espresso-soaked ladyfingers, mascarpone, cocoa', image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&q=80' },
      { name: 'Seasonal Fruit Tart', price: '$10', description: 'Buttery pastry, vanilla cream, fresh market fruit', image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&q=80' },
      { name: 'Artisan Ice Cream', price: '$8', description: 'Three scoops: vanilla, chocolate, seasonal flavor', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cd?w=400&q=80' },
      { name: 'Crème Brûlée', price: '$11', description: 'Classic vanilla custard, caramelized sugar crust', image: 'https://images.unsplash.com/photo-1501443762649-9f1e15bf591f?w=400&q=80' },
      { name: 'Vanilla Panna Cotta', price: '$10', description: 'Silky cream, passion fruit coulis, shortbread crumb', image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&q=80' },
      { name: 'Affogato', price: '$9', description: 'Vanilla gelato drowned in a shot of espresso', image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=400&q=80' },
    ],
  },
];