import 'server-only';
import { findMenuItem, formatPrice, parsePrice } from '@/lib/menu-data';
import { CONTACT_TOPICS, GUEST_OPTIONS, MONTHS } from '@/lib/form-options';
import { reservationSlots } from '@/lib/site';

export type FieldErrors = Record<string, string>;
export type Result<T> = { ok: true; data: T } | { ok: false; errors: FieldErrors };

type Raw = Record<string, unknown>;

const EMAIL = /^[^\s@]{1,64}@[^\s@]{1,190}\.[^\s@]{2,24}$/;
const PHONE = /^[0-9+()\s\-/]{6,24}$/;

/** Trim, collapse control characters and cap length. Returns '' for non-strings. */
export function clean(value: unknown, max: number): string {
  if (typeof value !== 'string') return '';
  return value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '').trim().slice(0, max);
}

class Checker {
  errors: FieldErrors = {};
  constructor(private raw: Raw) {}

  text(key: string, label: string, { required = true, min = 1, max = 200 } = {}) {
    const v = clean(this.raw[key], max + 1);
    if (!v) {
      if (required) this.errors[key] = `${label} is required.`;
      return '';
    }
    if (v.length < min) this.errors[key] = `${label} is too short.`;
    else if (v.length > max) this.errors[key] = `${label} is too long.`;
    return v;
  }

  email(key: string, required = true) {
    const v = this.text(key, 'Email', { required, max: 254 });
    if (v && !EMAIL.test(v)) this.errors[key] = 'Enter a valid email address.';
    return v;
  }

  phone(key: string, required = true) {
    const v = this.text(key, 'Phone', { required, max: 24 });
    if (v && !PHONE.test(v)) this.errors[key] = 'Enter a valid phone number.';
    return v;
  }

  oneOf<T extends string>(key: string, label: string, options: readonly T[]): T {
    const v = clean(this.raw[key], 40) as T;
    if (!options.includes(v)) this.errors[key] = `Choose a ${label.toLowerCase()}.`;
    return v;
  }

  consent() {
    if (this.raw.consent !== true && this.raw.consent !== 'on' && this.raw.consent !== 'true') {
      this.errors.consent = 'Please agree to the privacy policy.';
    }
  }

  done<T>(data: T): Result<T> {
    return Object.keys(this.errors).length ? { ok: false, errors: this.errors } : { ok: true, data };
  }
}

/* ---------- Order ---------- */

export type OrderLine = { name: string; qty: number; unit: string; total: string };
export type Order = {
  type: 'pickup' | 'delivery';
  name: string;
  phone: string;
  email: string;
  address: string;
  notes: string;
  lines: OrderLine[];
  subtotal: string;
};

const MAX_QTY = 20;
const MAX_LINES = 30;

export function validateOrder(raw: Raw): Result<Order> {
  const c = new Checker(raw);
  const type = c.oneOf('type', 'Order type', ['pickup', 'delivery'] as const);
  const name = c.text('name', 'Name', { min: 2, max: 80 });
  const phone = c.phone('phone');
  const email = c.email('email', false);
  const address = c.text('address', 'Delivery address', { required: type === 'delivery', min: 5, max: 200 });
  const notes = c.text('notes', 'Notes', { required: false, max: 500 });
  c.consent();

  // Prices are always recalculated on the server from the menu; client totals are ignored.
  const lines: OrderLine[] = [];
  let sum = 0;
  const items = Array.isArray(raw.items) ? raw.items.slice(0, MAX_LINES + 1) : [];
  if (items.length === 0) c.errors.items = 'Add at least one dish.';
  if (items.length > MAX_LINES) c.errors.items = 'Too many different dishes in one order.';
  const seen = new Set<string>();
  for (const it of items) {
    const itemName = clean((it as Raw)?.name, 80);
    const qty = Number((it as Raw)?.qty);
    const menuItem = findMenuItem(itemName);
    if (!menuItem || seen.has(itemName) || !Number.isInteger(qty) || qty < 1 || qty > MAX_QTY) {
      c.errors.items = 'Your order contains an invalid dish or quantity.';
      break;
    }
    seen.add(itemName);
    const unit = parsePrice(menuItem.price);
    sum += unit * qty;
    lines.push({ name: itemName, qty, unit: menuItem.price, total: formatPrice(unit * qty) });
  }

  return c.done({ type, name, phone, email, address: type === 'delivery' ? address : '', notes, lines, subtotal: formatPrice(sum) });
}

/* ---------- Reservation ---------- */

export type Reservation = {
  date: string;
  time: string;
  guests: string;
  name: string;
  phone: string;
  email: string;
  notes: string;
};

const MAX_DAYS_AHEAD = 120;

/** Today's date in Europe/Berlin as YYYY-MM-DD. */
function berlinToday(now = new Date()) {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Berlin' }).format(now);
}

export function validateReservation(raw: Raw, now = new Date()): Result<Reservation> {
  const c = new Checker(raw);
  const date = c.text('date', 'Date', { max: 10 });
  if (date) {
    const today = berlinToday(now);
    const limit = new Date(`${today}T00:00:00Z`);
    limit.setUTCDate(limit.getUTCDate() + MAX_DAYS_AHEAD);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || Number.isNaN(Date.parse(`${date}T00:00:00Z`))) {
      c.errors.date = 'Choose a valid date.';
    } else if (date < today) {
      c.errors.date = 'Choose a date from today onwards.';
    } else if (date > limit.toISOString().slice(0, 10)) {
      c.errors.date = `We take bookings up to ${MAX_DAYS_AHEAD} days ahead.`;
    }
  }
  const time = c.oneOf('time', 'Time', reservationSlots());
  const guests = c.oneOf('guests', 'Number of guests', GUEST_OPTIONS);
  const name = c.text('name', 'Name', { min: 2, max: 80 });
  const phone = c.phone('phone');
  const email = c.email('email');
  const notes = c.text('notes', 'Requests', { required: false, max: 500 });
  c.consent();
  return c.done({ date, time, guests, name, phone, email, notes });
}

/* ---------- Contact ---------- */

export type ContactMessage = { name: string; email: string; phone: string; subject: string; message: string };

export function validateContact(raw: Raw): Result<ContactMessage> {
  const c = new Checker(raw);
  const name = c.text('name', 'Name', { min: 2, max: 80 });
  const email = c.email('email');
  const phone = c.phone('phone', false);
  const subject = c.oneOf('subject', 'Topic', Object.keys(CONTACT_TOPICS) as (keyof typeof CONTACT_TOPICS)[]);
  const message = c.text('message', 'Message', { min: 10, max: 3000 });
  c.consent();
  return c.done({ name, email, phone, subject, message });
}

/* ---------- Rewards ---------- */

export type RewardsSignup = { name: string; email: string; phone: string; birthdayMonth: string };

export function validateRewards(raw: Raw): Result<RewardsSignup> {
  const c = new Checker(raw);
  const name = c.text('name', 'Name', { min: 2, max: 80 });
  const email = c.email('email');
  const phone = c.phone('phone');
  const birthdayMonth = clean(raw.birthday_month, 12);
  if (birthdayMonth && !(MONTHS as readonly string[]).includes(birthdayMonth)) {
    c.errors.birthday_month = 'Choose a month from the list.';
  }
  c.consent();
  return c.done({ name, email, phone, birthdayMonth });
}
