'use client';

import { Consent, errorProps, FieldError, Honeypot } from './FormBits';
import Modal from './Modal';
import { MONTHS } from '@/lib/form-options';
import { useFormSubmit } from './useFormSubmit';

export default function LoyaltyForm() {
  const { loading, errors, modal, onSubmit, close } = useFormSubmit({
    endpoint: '/api/rewards',
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
          <Honeypot />
          <div className="field">
            <label htmlFor="loy-name">Name</label>
            <input id="loy-name" name="name" required minLength={2} maxLength={80} autoComplete="name" placeholder="Your full name" {...errorProps('loy-name', errors.name)} />
            <FieldError id="loy-name" message={errors.name} />
          </div>
          <div className="field">
            <label htmlFor="loy-email">Email</label>
            <input id="loy-email" name="email" type="email" required maxLength={254} autoComplete="email" placeholder="name@example.de" {...errorProps('loy-email', errors.email)} />
            <FieldError id="loy-email" message={errors.email} />
          </div>
          <div className="field">
            <label htmlFor="loy-phone">Phone</label>
            <input id="loy-phone" name="phone" type="tel" required maxLength={24} autoComplete="tel" placeholder="+49 151 2345 6789" {...errorProps('loy-phone', errors.phone)} />
            <p className="field-hint">We use this to find your points when you order.</p>
            <FieldError id="loy-phone" message={errors.phone} />
          </div>
          <div className="field">
            <label htmlFor="loy-birthday">
              Birthday month <span className="opt">(optional)</span>
            </label>
            <select id="loy-birthday" name="birthday_month" defaultValue="">
              <option value="">Prefer not to say</option>
              {MONTHS.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>
          <Consent id="loy-consent" error={errors.consent}>
            I agree that Taj Mahal stores my details to run my rewards account. I can withdraw this at any time by email.
          </Consent>
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
