'use client';

import Modal from './Modal';
import { useFormSubmit } from './useFormSubmit';

const ENDPOINT = 'https://formspree.io/f/YOUR_LOYALTY_FORM_ID';

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

export default function LoyaltyForm() {
  const { loading, modal, onSubmit, close } = useFormSubmit({
    endpoint: ENDPOINT,
    success: {
      title: 'Welcome to Taj Mahal Rewards',
      message: 'You’re signed up. Give your phone number when you next order and your points start adding up.',
    },
  });

  return (
    <>
      <div className="panel" data-reveal style={{ ['--d' as string]: 1 }}>
        <div className="panel-head">
          <span className="panel-step">Free to join</span>
          <h2>Become a member</h2>
        </div>
        <form onSubmit={onSubmit}>
          <input type="hidden" name="_subject" value="New rewards member – Taj Mahal Schweinfurt" />
          <div className="field">
            <label htmlFor="loy-name">Name</label>
            <input id="loy-name" name="name" required autoComplete="name" placeholder="Your full name" />
          </div>
          <div className="field">
            <label htmlFor="loy-email">Email</label>
            <input id="loy-email" name="email" type="email" required autoComplete="email" placeholder="name@example.de" />
          </div>
          <div className="field">
            <label htmlFor="loy-phone">Phone</label>
            <input id="loy-phone" name="phone" type="tel" required autoComplete="tel" placeholder="+49 151 2345 6789" />
            <p className="field-hint">We use this to find your points when you order.</p>
          </div>
          <div className="field">
            <label htmlFor="loy-birthday">
              Birthday month <span className="opt">(optional)</span>
            </label>
            <select id="loy-birthday" name="birthday_month" defaultValue="">
              <option value="">Prefer not to say</option>
              {months.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-accent btn-full" disabled={loading}>
            {loading ? 'Sending…' : 'Join for free'}
          </button>
          <p className="form-note">No spam. Unsubscribe any time.</p>
        </form>
      </div>
      <Modal {...modal} onClose={close} />
    </>
  );
}
