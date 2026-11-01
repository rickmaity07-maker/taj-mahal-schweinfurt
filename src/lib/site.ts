export const site = {
  name: 'Taj Mahal',
  city: 'Schweinfurt',
  street: 'Am Zeughaus 28',
  zip: '97421',
  phone: '+49 9721 24747',
  phoneHref: 'tel:+49972124747',
  email: 'tajmahal2022@gmail.com',
  rating: '4.3',
  hours: [
    { open: '11:00', close: '14:30' },
    { open: '17:00', close: '22:30' },
  ],
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Am+Zeughaus+28,+97421+Schweinfurt',
  mapsEmbed: 'https://www.google.com/maps?q=Am+Zeughaus+28,+97421+Schweinfurt&output=embed',
};

const toMinutes = (t: string) => {
  const [h, m] = t.split(':').map(Number);
  return h * 60 + m;
};

/** Open/closed status in restaurant local time (Europe/Berlin). */
export function getOpenStatus(now = new Date()) {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Berlin',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).formatToParts(now);
  const h = Number(parts.find((p) => p.type === 'hour')?.value ?? 0) % 24;
  const m = Number(parts.find((p) => p.type === 'minute')?.value ?? 0);
  const current = h * 60 + m;

  for (const slot of site.hours) {
    if (current >= toMinutes(slot.open) && current < toMinutes(slot.close)) {
      return { open: true, label: `Open now · until ${slot.close}` };
    }
  }
  const next = site.hours.find((s) => toMinutes(s.open) > current) ?? site.hours[0];
  const when = toMinutes(next.open) > current ? 'today' : 'tomorrow';
  return { open: false, label: `Closed · opens ${when} at ${next.open}` };
}

/** Reservation time slots every 30 minutes within opening hours (last seating 30 min before close). */
export function reservationSlots() {
  const slots: string[] = [];
  for (const s of site.hours) {
    for (let t = toMinutes(s.open); t <= toMinutes(s.close) - 60; t += 30) {
      slots.push(`${String(Math.floor(t / 60)).padStart(2, '0')}:${String(t % 60).padStart(2, '0')}`);
    }
  }
  return slots;
}
