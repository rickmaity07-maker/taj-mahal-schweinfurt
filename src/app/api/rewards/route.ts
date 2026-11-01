import { createFormHandler } from '@/lib/server/handler';
import { oneLine } from '@/lib/server/notify';
import { validateRewards } from '@/lib/server/validation';

export const POST = createFormHandler({
  name: 'rewards',
  validate: validateRewards,
  limit: 3,
  toNotification: (s) => ({
    subject: `New rewards member – ${oneLine(s.name)}`,
    replyTo: s.email,
    text: [
      `Name: ${s.name}`,
      `Email: ${s.email}`,
      `Phone: ${s.phone}`,
      s.birthdayMonth ? `Birthday month: ${s.birthdayMonth}` : null,
      '',
      `Consent to rewards processing given on ${new Date().toISOString()}.`,
    ]
      .filter((l) => l !== null)
      .join('\n'),
  }),
});
