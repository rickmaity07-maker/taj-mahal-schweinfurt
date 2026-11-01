import { createFormHandler } from '@/lib/server/handler';
import { oneLine } from '@/lib/server/notify';
import { validateReservation } from '@/lib/server/validation';

export const POST = createFormHandler({
  name: 'reservation',
  validate: (raw) => validateReservation(raw),
  toNotification: (r) => ({
    subject: `Table request – ${r.date} ${r.time} – ${r.guests} guests – ${oneLine(r.name)}`,
    replyTo: r.email,
    text: [
      `Date: ${r.date}`,
      `Time: ${r.time}`,
      `Guests: ${r.guests}`,
      `Name: ${r.name}`,
      `Phone: ${r.phone}`,
      `Email: ${r.email}`,
      r.notes ? `\nRequests: ${r.notes}` : null,
    ]
      .filter((l) => l !== null)
      .join('\n'),
  }),
});
