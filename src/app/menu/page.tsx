import Link from 'next/link';

const tabs = [
  {
    id: 'starters',
    label: 'Starters',
    items: [
      {
        name: 'Samosa',
        price: '6,50 €',
        desc: 'Pastry filled with spiced vegetables',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80',
      },
      {
        name: 'Onion Bhaji',
        price: '6,50 €',
        desc: 'Onion rings in chickpea batter',
        image: 'https://images.unsplash.com/photo-1628294896083-895d8c0c0b0c?w=400&q=80',
      },
      {
        name: 'Vegetable Pakora',
        price: '6,50 €',
        desc: 'Mixed vegetables in chickpea batter',
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880067?w=400&q=80',
      },
      {
        name: 'Paneer Pakora',
        price: '6,90 €',
        desc: 'Homemade cheese in chickpea batter',
        image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&q=80',
      },
      {
        name: 'Murg Pakora',
        price: '6,50 €',
        desc: 'Chicken breast in chickpea batter',
        image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f3?w=400&q=80',
      },
      {
        name: 'Chana Chat',
        price: '4,90 €',
        desc: 'Spiced chickpeas with tomato, onion, cucumber',
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80',
      },
      {
        name: 'Dal Shorba',
        price: '4,50 €',
        desc: 'Lentil soup',
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80',
      },
      {
        name: 'Mixed Starters (for 2)',
        price: '13,50 €',
        desc: 'Assorted vegetables and homemade cheese',
        image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&q=80',
      },
    ],
  },
  {
    id: 'chicken',
    label: 'Chicken',
    items: [
      {
        name: 'Butter Chicken',
        price: '9,50 €',
        desc: 'Grilled chicken breast in tomato-butter cream sauce',
        image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae958?w=400&q=80',
      },
      {
        name: 'Chicken Bhagwani',
        price: '8,90 €',
        desc: 'Chicken breast with mixed vegetables in onion-tomato sauce',
        image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80',
      },
      {
        name: 'Chicken Kashmiri (spicy)',
        price: '8,90 €',
        desc: 'Chicken with ginger, garlic, onion and coriander, Kashmiri style',
        image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f3?w=400&q=80',
      },
      {
        name: 'Chicken Tikka',
        price: '9,50 €',
        desc: 'Marinated chicken from the tandoor',
        image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f3?w=400&q=80',
      },
      {
        name: 'Chicken Vindaloo (spicy)',
        price: '9,50 €',
        desc: 'Spicy chicken with potato in Vindaloo sauce',
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80',
      },
      {
        name: 'Chicken Biryani',
        price: '10,90 €',
        desc: 'Fragrant rice with chicken and spices',
        image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80',
      },
    ],
  },
  {
    id: 'lamb',
    label: 'Lamb',
    items: [
      {
        name: 'Lamb Korma',
        price: '9,90 €',
        desc: 'Roasted lamb in coconut sauce, Mughlai style',
        image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80',
      },
      {
        name: 'Allu Lamb Curry',
        price: '9,90 €',
        desc: 'Lamb with potatoes, onions and curry sauce',
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80',
      },
      {
        name: 'Palak Ghost',
        price: '9,90 €',
        desc: 'Lamb with creamed spinach',
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&q=80',
      },
      {
        name: 'Lamb Biryani',
        price: '11,90 €',
        desc: 'Fragrant rice with lamb and spices',
        image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80',
      },
      {
        name: 'Lamb Tikka',
        price: '11,50 €',
        desc: 'Marinated lamb from the tandoor',
        image: 'https://images.unsplash.com/photo-1529042410759-befb1204bacc?w=400&q=80',
      },
    ],
  },
  {
    id: 'veg',
    label: 'Vegetarian',
    items: [
      {
        name: 'Shahi Paneer',
        price: '14,50 €',
        desc: 'Homemade cheese in coconut, almond and cream sauce',
        image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&q=80',
      },
      {
        name: 'Alu Matar',
        price: '7,50 €',
        desc: 'Spiced potatoes and peas in special sauce',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80',
      },
      {
        name: 'Mango Sabji',
        price: '7,90 €',
        desc: 'Mixed vegetables with mango sauce',
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&q=80',
      },
      {
        name: 'Dal Makhani',
        price: '7,50 €',
        desc: 'Indian lentils with ginger and coriander',
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80',
      },
      {
        name: 'Palak Paneer',
        price: '8,90 €',
        desc: 'Homemade cheese with creamed spinach',
        image: 'https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?w=400&q=80',
      },
      {
        name: 'Vegetable Biryani',
        price: '9,50 €',
        desc: 'Fragrant rice with mixed vegetables',
        image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80',
      },
    ],
  },
  {
    id: 'sides',
    label: 'Sides & Breads',
    items: [
      {
        name: 'Naan',
        price: '2,50 €',
        desc: 'Yeast flatbread from the clay oven',
        image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80',
      },
      {
        name: 'Lasan Naan',
        price: '2,70 €',
        desc: 'Naan filled with garlic',
        image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?w=400&q=80',
      },
      {
        name: 'Keema Naan',
        price: '5,90 €',
        desc: 'Tandoor bread filled with minced meat',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80',
      },
      {
        name: 'Alu Paratha',
        price: '4,90 €',
        desc: 'Wholewheat bread filled with spiced potatoes',
        image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?w=400&q=80',
      },
      {
        name: 'Roti',
        price: '2,50 €',
        desc: 'Wholewheat flatbread from the clay oven',
        image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&q=80',
      },
      {
        name: 'Raita',
        price: '3,50 €',
        desc: 'Indian yogurt with cucumber',
        image: 'https://images.unsplash.com/photo-1576506295286-5cda18df43e7?w=400&q=80',
      },
      {
        name: 'Mango Lassi',
        price: '3,90 €',
        desc: 'Yogurt drink with mango',
        image: 'https://images.unsplash.com/photo-1623065426068-4d0d5c5f0f5a?w=400&q=80',
      },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    items: [
      {
        name: 'Gulab Jamun',
        price: '4,90 €',
        desc: 'Fried dough balls in sugar syrup',
        image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=400&q=80',
      },
      {
        name: 'Mango Cream',
        price: '4,90 €',
        desc: 'Creamy mango dessert',
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80',
      },
      {
        name: 'Kheer',
        price: '4,50 €',
        desc: 'Indian rice pudding',
        image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&q=80',
      },
      {
        name: 'Ice Cream',
        price: '3,90 €',
        desc: 'Selection of ice cream',
        image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cd?w=400&q=80',
      },
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
                      <div className="menu-item-img">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={item.image} alt={item.name} />
                      </div>
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