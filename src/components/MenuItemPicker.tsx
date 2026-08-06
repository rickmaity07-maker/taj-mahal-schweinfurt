'use client';

import { useMemo, useState } from 'react';
import { menuCategories } from '@/lib/menu-data';

type SelectedItem = {
  name: string;
  qty: number;
};

type Props = {
  onChange: (items: SelectedItem[]) => void;
};

export default function MenuItemPicker({ onChange }: Props) {
  const [query, setQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [selected, setSelected] = useState<SelectedItem[]>([]);

  const allItems = useMemo(
    () => menuCategories.flatMap((cat) => cat.items.map((item) => item.name)),
    []
  );

  const results = useMemo(() => {
    if (!query.trim()) return allItems.slice(0, 8);
    const q = query.toLowerCase();
    return allItems.filter((name) => name.toLowerCase().includes(q)).slice(0, 8);
  }, [query, allItems]);

  function addItem(name: string) {
    setSelected((prev) => {
      const existing = prev.find((i) => i.name === name);
      const next = existing
        ? prev.map((i) => (i.name === name ? { ...i, qty: i.qty + 1 } : i))
        : [...prev, { name, qty: 1 }];
      onChange(next);
      return next;
    });
    setQuery('');
    setShowResults(false);
  }

  function updateQty(name: string, qty: number) {
    setSelected((prev) => {
      const next =
        qty <= 0
          ? prev.filter((i) => i.name !== name)
          : prev.map((i) => (i.name === name ? { ...i, qty } : i));
      onChange(next);
      return next;
    });
  }

  return (
    <div className="menu-picker">
      <div className="menu-picker-search" style={{ position: 'relative' }}>
        <input
          type="text"
          placeholder="Search dishes... (e.g. Chicken Tikka)"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowResults(true);
          }}
          onFocus={() => setShowResults(true)}
          onBlur={() => setTimeout(() => setShowResults(false), 150)}
        />

        {showResults && results.length > 0 && (
          <div
            className="menu-picker-dropdown"
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: '#fff',
              border: '1px solid #ddd',
              borderRadius: 6,
              maxHeight: 220,
              overflowY: 'auto',
              zIndex: 20,
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}
          >
            {results.map((name) => (
              <div
                key={name}
                onMouseDown={() => addItem(name)}
                style={{
                  padding: '10px 14px',
                  cursor: 'pointer',
                  borderBottom: '1px solid #f0f0f0',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#f7f7f7')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#fff')}
              >
                {name}
              </div>
            ))}
          </div>
        )}
      </div>

      {selected.length > 0 && (
        <div className="menu-picker-selected" style={{ marginTop: 12 }}>
          {selected.map((item) => (
            <div
              key={item.name}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '8px 0',
                borderBottom: '1px solid #eee',
              }}
            >
              <span>{item.name}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <button
                  type="button"
                  onClick={() => updateQty(item.name, item.qty - 1)}
                  style={{ width: 28, height: 28, cursor: 'pointer' }}
                >
                  −
                </button>
                <span>{item.qty}</span>
                <button
                  type="button"
                  onClick={() => updateQty(item.name, item.qty + 1)}
                  style={{ width: 28, height: 28, cursor: 'pointer' }}
                >
                  +
                </button>
                <button
                  type="button"
                  onClick={() => updateQty(item.name, 0)}
                  style={{ marginLeft: 8, cursor: 'pointer', color: '#c0392b' }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}