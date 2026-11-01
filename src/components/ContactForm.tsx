'use client';

import { Consent, errorProps, FieldError, Honeypot } from './FormBits';
import Modal from './Modal';
import { CONTACT_TOPICS } from '@/lib/form-options';
import { useFormSubmit } from './useFormSubmit';

export default function ContactForm() {
  const { loading, errors, modal, onSubmit, close } = useFormSubmit({
    endpoint: '/api/contact',
    success: { title: 'Message sent', message: 'Thank you for writing. We’ll get back to you within a day.' },
  });

  return (
    <>
      <div className="panel" data-reveal>
        <form onSubmit={onSubmit}>
          <Honeypot />
          <div className="field-row">
            <div className="field">
              <label htmlFor="c-name">Name</label>
              <input id="c-name" name="name" required minLength={2} maxLength={80} autoComplete="name" placeholder="Your full name" {...errorProps('c-name', errors.name)} />
              <FieldError id="c-name" message={errors.name} />
            </div>
            <div className="field">
              <label htmlFor="c-email">Email</label>
              <input id="c-email" name="email" type="email" required maxLength={254} autoComplete="email" placeholder="name@example.de" {...errorProps('c-email', errors.email)} />
              <FieldError id="c-email" message={errors.email} />
            </div>
          </div>
          <div className="field-row">
            <div className="field">
              <label htmlFor="c-phone">
                Phone <span className="opt">(optional)</span>
              </label>
              <input id="c-phone" name="phone" type="tel" maxLength={24} autoComplete="tel" placeholder="+49 151 2345 6789" {...errorProps('c-phone', errors.phone)} />
              <FieldError id="c-phone" message={errors.phone} />
            </div>
            <div className="field">
              <label htmlFor="c-subject">Topic</label>
              <select id="c-subject" name="subject" required defaultValue="" {...errorProps('c-subject', errors.subject)}>
                <option value="" disabled>
                  Choose a topic
                </option>
                {Object.entries(CONTACT_TOPICS).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
              <FieldError id="c-subject" message={errors.subject} />
            </div>
          </div>
          <div className="field">
            <label htmlFor="c-message">Message</label>
            <textarea id="c-message" name="message" rows={5} required minLength={10} maxLength={3000} placeholder="How can we help?" {...errorProps('c-message', errors.message)} />
            <FieldError id="c-message" message={errors.message} />
          </div>
          <Consent id="c-consent" error={errors.consent} />
          <button type="submit" className="btn btn-accent btn-full" disabled={loading}>
            {loading ? 'Sending…' : 'Send message'}
          </button>
        </form>
      </div>
      <Modal {...modal} onClose={close} />
    </>
  );
}
