import { createFormHandler } from '@/lib/server/handler';
import { oneLine } from '@/lib/server/notify';
import { validateContact } from '@/lib/server/validation';

export const POST = createFormHandler({
  name: 'contact',
  validate: validateContact,
  toNotification: (m) => ({
    subject: `Contact (${m.subject}) – ${oneLine(m.name)}`,
    replyTo: m.email,
    text: [`Name: ${m.name}`, `Email: ${m.email}`, m.phone ? `Phone: ${m.phone}` : null, `Topic: ${m.subject}`, '', m.message]
      .filter((l) => l !== null)
      .join('\n'),
  }),
});
