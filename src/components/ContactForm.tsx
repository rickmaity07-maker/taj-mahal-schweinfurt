'use client';

import Modal from './Modal';
import { useFormSubmit } from './useFormSubmit';

const ENDPOINT = 'https://formspree.io/f/YOUR_CONTACT_FORM_ID';

export default function ContactForm() {
  const { loading, modal, onSubmit, close } = useFormSubmit({
    endpoint: ENDPOINT,
    success: { title: 'Message sent', message: 'Thank you for writing. We’ll get back to you within a day.' },
  });

  return (
    <>
      <div className="panel" data-reveal>
        <form onSubmit={onSubmit}>
          <input type="hidden" name="_subject" value="Contact form – Taj Mahal Schweinfurt" />
          <div className="field-row">
            <div className="field">
              <label htmlFor="c-name">Name</label>
              <input id="c-name" name="name" required autoComplete="name" placeholder="Your full name" />
            </div>
            <div className="field">
              <label htmlFor="c-email">Email</label>
              <input id="c-email" name="email" type="email" required autoComplete="email" placeholder="name@example.de" />
            </div>
          </div>
          <div className="field-row">
            <div className="field">
              <label htmlFor="c-phone">
                Phone <span className="opt">(optional)</span>
              </label>
              <input id="c-phone" name="phone" type="tel" autoComplete="tel" placeholder="+49 151 2345 6789" />
            </div>
            <div className="field">
              <label htmlFor="c-subject">Topic</label>
              <select id="c-subject" name="subject" required defaultValue="">
                <option value="" disabled>
                  Choose a topic
                </option>
                <option value="general">General question</option>
                <option value="order">An order</option>
                <option value="reservation">A reservation</option>
                <option value="private">Group booking or event</option>
                <option value="allergy">Allergies and ingredients</option>
                <option value="feedback">Feedback</option>
              </select>
            </div>
          </div>
          <div className="field">
            <label htmlFor="c-message">Message</label>
            <textarea id="c-message" name="message" rows={5} required minLength={10} placeholder="How can we help?" />
          </div>
          <button type="submit" className="btn btn-accent btn-full" disabled={loading}>
            {loading ? 'Sending…' : 'Send message'}
          </button>
        </form>
      </div>
      <Modal {...modal} onClose={close} />
    </>
  );
}
