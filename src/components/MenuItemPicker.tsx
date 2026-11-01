'use client';

import { KeyboardEvent, useMemo, useState } from 'react';
import { findMenuItem, formatPrice, menuCategories, parsePrice } from '@/lib/menu-data';
import { Search } from './Icons';

export type SelectedItem = {
  name: string;
  qty: number;
};

type Props = {
  value: SelectedItem[];
  onChange: (items: SelectedItem[]) => void;
};

export default function MenuItemPicker({ value, onChange }: Props) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [highlight, setHighlight] = useState(0);

  const groups = useMemo(() => {
    const q = query.trim().toLowerCase();
    return menuCategories
      .map((cat) => ({
        ...cat,
        items: q
          ? cat.items.filter(
              (i) => i.name.toLowerCase().includes(q) || i.description.toLowerCase().includes(q)
            )
          : cat.items,
      }))
      .filter((cat) => cat.items.length > 0);
  }, [query]);

  const flat = useMemo(() => groups.flatMap((g) => g.items), [groups]);

  const total = value.reduce((sum, i) => sum + parsePrice(findMenuItem(i.name)?.price ?? '0') * i.qty, 0);

  function add(name: string) {
    const existing = value.find((i) => i.name === name);
    onChange(
      existing
        ? value.map((i) => (i.name === name ? { ...i, qty: i.qty + 1 } : i))
        : [...value, { name, qty: 1 }]
    );
    setQuery('');
    setOpen(false);
    setHighlight(0);
  }

  function setQty(name: string, qty: number) {
    onChange(qty <= 0 ? value.filter((i) => i.name !== name) : value.map((i) => (i.name === name ? { ...i, qty } : i)));
  }

  function onKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setOpen(true);
      setHighlight((h) => Math.min(h + 1, flat.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlight((h) => Math.max(h - 1, 0));
    } else if (e.key === 'Enter') {
      if (open && flat[highlight]) {
        e.preventDefault();
        add(flat[highlight].name);
      }
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  }

  return (
    <div className="picker">
      <div className="picker-search">
        <Search />
        <input
          id="order-search"
          type="text"
          role="combobox"
          aria-expanded={open}
          aria-controls="picker-list"
          aria-autocomplete="list"
          autoComplete="off"
          placeholder="Search dishes, e.g. korma or naan"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
            setHighlight(0);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 150)}
          onKeyDown={onKeyDown}
        />
      </div>

      {open && (
        <div className="picker-dropdown" id="picker-list" role="listbox">
          {groups.length === 0 && <p className="picker-empty">No dishes match “{query}”.</p>}
          {groups.map((cat) => (
            <div key={cat.id}>
              <div className="picker-group">{cat.label}</div>
              {cat.items.map((item) => {
                const i = flat.indexOf(item);
                return (
                  <button
                    type="button"
                    role="option"
                    aria-selected={i === highlight}
                    key={item.name}
                    className={`picker-option${i === highlight ? ' highlight' : ''}`}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      add(item.name);
                    }}
                    onMouseEnter={() => setHighlight(i)}
                  >
                    <span>{item.name}</span>
                    <small>{item.price}</small>
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      )}

      <div className="cart" aria-live="polite">
        {value.length === 0 ? (
          <div className="cart-empty">
            <strong>Your order is empty</strong>
            Search above or open the list to add dishes.
          </div>
        ) : (
          <>
            {value.map((item) => {
              const price = parsePrice(findMenuItem(item.name)?.price ?? '0');
              return (
                <div className="cart-row" key={item.name}>
                  <span className="name">{item.name}</span>
                  <div className="qty">
                    <button type="button" onClick={() => setQty(item.name, item.qty - 1)} aria-label={`One less ${item.name}`}>
                      −
                    </button>
                    <output>{item.qty}</output>
                    <button type="button" onClick={() => setQty(item.name, item.qty + 1)} aria-label={`One more ${item.name}`}>
                      +
                    </button>
                  </div>
                  <span className="line-price">{formatPrice(price * item.qty)}</span>
                </div>
              );
            })}
            <div className="cart-total">
              <span>Subtotal</span>
              <span>{formatPrice(total)}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
