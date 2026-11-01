import { describe, expect, it } from 'vitest';
import { clean, validateContact, validateOrder, validateReservation, validateRewards } from '@/lib/server/validation';

const person = { name: 'Aylin Demir', phone: '+49 151 2345 6789', email: 'aylin@example.de', consent: true };

describe('clean', () => {
  it('strips control characters, trims and caps length', () => {
    expect(clean('  hi\u0000there  ', 100)).toBe('hithere');
    expect(clean('abcdef', 3)).toBe('abc');
    expect(clean(42, 10)).toBe('');
  });
});

describe('validateOrder', () => {
  it('recalculates prices on the server and ignores client totals', () => {
    const r = validateOrder({
      ...person,
      type: 'pickup',
      subtotal: '0,01 €',
      items: [{ name: 'Butter Chicken', qty: 2 }, { name: 'Naan', qty: 3 }],
    });
    expect(r.ok).toBe(true);
    if (r.ok) {
      expect(r.data.subtotal).toBe('26,50 €');
      expect(r.data.lines[0].total).toBe('19,00 €');
    }
  });

  it('rejects unknown dishes, bad quantities and duplicates', () => {
    for (const items of [
      [{ name: 'Free Lobster', qty: 1 }],
      [{ name: 'Naan', qty: 0 }],
      [{ name: 'Naan', qty: 999 }],
      [{ name: 'Naan', qty: 1.5 }],
      [{ name: 'Naan', qty: 1 }, { name: 'Naan', qty: 1 }],
      [],
    ]) {
      const r = validateOrder({ ...person, type: 'pickup', items });
      expect(r.ok).toBe(false);
      if (!r.ok) expect(r.errors.items).toBeDefined();
    }
  });

  it('requires an address only for delivery', () => {
    const base = { ...person, items: [{ name: 'Naan', qty: 1 }] };
    expect(validateOrder({ ...base, type: 'pickup' }).ok).toBe(true);
    const r = validateOrder({ ...base, type: 'delivery' });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.errors.address).toBeDefined();
  });

  it('requires consent', () => {
    const r = validateOrder({ ...person, consent: false, type: 'pickup', items: [{ name: 'Naan', qty: 1 }] });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.errors.consent).toBeDefined();
  });
});

describe('validateReservation', () => {
  const now = new Date('2026-11-01T12:00:00Z');
  const ok = { ...person, date: '2026-11-05', time: '19:00', guests: '4' };

  it('accepts a valid request', () => {
    expect(validateReservation(ok, now).ok).toBe(true);
  });

  it('rejects past dates, far-future dates and times outside opening hours', () => {
    for (const patch of [{ date: '2026-10-31' }, { date: '2027-12-01' }, { date: 'tomorrow' }, { time: '03:00' }, { guests: '40' }]) {
      expect(validateReservation({ ...ok, ...patch }, now).ok).toBe(false);
    }
  });
});

describe('validateContact / validateRewards', () => {
  it('validates emails and required fields', () => {
    expect(validateContact({ ...person, subject: 'general', message: 'Do you have gluten-free naan?' }).ok).toBe(true);
    expect(validateContact({ ...person, email: 'not-an-email', subject: 'general', message: 'Hello there friends' }).ok).toBe(false);
    expect(validateRewards({ ...person, birthday_month: 'March' }).ok).toBe(true);
    expect(validateRewards({ ...person, birthday_month: 'Smarch' }).ok).toBe(false);
  });
});
