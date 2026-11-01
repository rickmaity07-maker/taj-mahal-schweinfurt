import { createFormHandler } from '@/lib/server/handler';
import { oneLine } from '@/lib/server/notify';
import { validateOrder } from '@/lib/server/validation';

export const POST = createFormHandler({
  name: 'order',
  validate: validateOrder,
  limit: 6,
  toNotification: (o) => ({
    subject: `New ${o.type} order – ${oneLine(o.name)} – ${o.subtotal}`,
    replyTo: o.email || undefined,
    text: [
      `Type: ${o.type}`,
      `Name: ${o.name}`,
      `Phone: ${o.phone}`,
      o.email ? `Email: ${o.email}` : null,
      o.address ? `Address: ${o.address}` : null,
      '',
      ...o.lines.map((l) => `${l.qty} x ${l.name} @ ${l.unit} = ${l.total}`),
      `Subtotal: ${o.subtotal}`,
      o.notes ? `\nNotes: ${o.notes}` : null,
    ]
      .filter((l) => l !== null)
      .join('\n'),
  }),
});
