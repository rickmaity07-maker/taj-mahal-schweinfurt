import Link from 'next/link';

const tabs = [
  {
    id: 'starters',
    label: 'Starters',
    items: [
      { name: 'Samosa', price: '6,50 €', desc: 'Pastry filled with spiced vegetables' },
      { name: 'Onion Bhaji', price: '6,50 €', desc: 'Onion rings in chickpea batter' },
      { name: 'Vegetable Pakora', price: '6,50 €', desc: 'Mixed vegetables in chickpea batter' },
      { name: 'Paneer Pakora', price: '6,90 €', desc: 'Homemade cheese in chickpea batter' },
      { name: 'Murg Pakora', price: '6,50 €', desc: 'Chicken breast in chickpea batter' },
      { name: 'Chana Chat', price: '4,90 €', desc: 'Spiced chickpeas with tomato, onion, cucumber' },
      { name: 'Dal Shorba', price: '4,50 €', desc: 'Lentil soup' },
      { name: 'Mixed Starters (for 2)', price: '13,50 €', desc: 'Assorted vegetables and homemade cheese' },
    ],
  },
  {
    id: 'chicken',
    label: 'Chicken',
    items: [
      { name: 'Butter Chicken', price: '9,50 €', desc: 'Grilled chicken breast in tomato-butter cream sauce' },
      { name: 'Chicken Bhagwani', price: '8,90 €', desc: 'Chicken breast with mixed vegetables in onion-tomato sauce' },
      { name: 'Chicken Kashmiri (spicy)', price: '8,90 €', desc: 'Chicken with ginger, garlic, onion and coriander, Kashmiri style' },
      { name: 'Chicken Tikka', price: '9,50 €', desc: 'Marinated chicken from the tandoor' },
      { name: 'Chicken Vindaloo (spicy)', price: '9,50 €', desc: 'Spicy chicken with potato in Vindaloo sauce' },
      { name: 'Chicken Biryani', price: '10,90 €', desc: 'Fragrant rice with chicken and spices' },
    ],
  },
  {
    id: 'lamb',
    label: 'Lamb',
    items: [
      { name: 'Lamb Korma', price: '9,90 €', desc: 'Roasted lamb in coconut sauce, Mughlai style' },
      { name: 'Allu Lamb Curry', price: '9,90 €', desc: 'Lamb with potatoes, onions and curry sauce' },
      { name: 'Palak Ghost', price: '9,90 €', desc: 'Lamb with creamed spinach' },
      { name: 'Lamb Biryani', price: '11,90 €', desc: 'Fragrant rice with lamb and spices' },
      { name: 'Lamb Tikka', price: '11,50 €', desc: 'Marinated lamb from the tandoor' },
    ],
  },
  {
    id: 'veg',
    label: 'Vegetarian',
    items: [
      { name: 'Shahi Paneer', price: '14,50 €', desc: 'Homemade cheese in coconut, almond and cream sauce' },
      { name: 'Alu Matar', price: '7,50 €', desc: 'Spiced potatoes and peas in special sauce' },
      { name: 'Mango Sabji', price: '7,90 €', desc: 'Mixed vegetables with mango sauce' },
      { name: 'Dal Makhani', price: '7,50 €', desc: 'Indian lentils with ginger and coriander' },
      { name: 'Palak Paneer', price: '8,90 €', desc: 'Homemade cheese with creamed spinach' },
      { name: 'Vegetable Biryani', price: '9,50 €', desc: 'Fragrant rice with mixed vegetables' },
    ],
  },
  {
    id: 'sides',
    label: 'Sides & Breads',
    items: [
      { name: 'Naan', price: '2,50 €', desc: 'Yeast flatbread from the clay oven' },
      { name: 'Lasan Naan', price: '2,70 €', desc: 'Naan filled with garlic' },
      { name: 'Keema Naan', price: '5,90 €', desc: 'Tandoor bread filled with minced meat' },
      { name: 'Alu Paratha', price: '4,90 €', desc: 'Wholewheat bread filled with spiced potatoes' },
      { name: 'Roti', price: '2,50 €', desc: 'Wholewheat flatbread from the clay oven' },
      { name: 'Raita', price: '3,50 €', desc: 'Indian yogurt with cucumber' },
      { name: 'Mango Lassi', price: '3,90 €', desc: 'Yogurt drink with mango' },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    items: [
      { name: 'Gulab Jamun', price: '4,90 €', desc: 'Fried dough balls in sugar syrup' },
      { name: 'Mango Cream', price: '4,90 €', desc: 'Creamy mango dessert' },
      { name: 'Kheer', price: '4,50 €', desc: 'Indian rice pudding' },
      { name: 'Ice Cream', price: '3,90 €', desc: 'Selection of ice cream' },
    ],
  },
];

export default function MenuPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Our Menu</h1>
          <p>Fresh ingredients · Indian spices · Prepared daily</p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--cream-dark)' }}>
        <div className="container">
          <div className="css-tabs">
            {tabs.map((tab, i) => (
              <input
                key={tab.id}
                type="radio"
                name="menu-tab"
                id={`tab-${tab.id}`}
                className="css-tab-input"
                defaultChecked={i === 0}
              />
            ))}

            <div className="menu-tabs">
              {tabs.map((tab) => (
                <label key={tab.id} htmlFor={`tab-${tab.id}`} className="menu-tab css-tab-label">
                  {tab.label}
                </label>
              ))}
            </div>

            {tabs.map((tab) => (
              <div key={tab.id} className={`css-tab-panel panel-${tab.id}`}>
                <div className="menu-grid">
                  {tab.items.map((item) => (
                    <article key={item.name} className="menu-item">
                      <div className="menu-item-body">
                        <div className="menu-item-header">
                          <h3>{item.name}</h3>
                          <span className="price">{item.price}</span>
                        </div>
                        <p>{item.desc}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/order" className="btn btn-primary">
              Order Online / Reserve
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}