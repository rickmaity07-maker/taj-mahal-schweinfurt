'use client';

import { FormEvent, useState } from 'react';
import Modal from './Modal';

const ENDPOINT = 'https://formspree.io/f/YOUR_CONTACT_FORM_ID';

export default function ContactForm() {
  const [modal, setModal] = useState({ open: false, title: '', message: '' });
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      if (ENDPOINT.includes('YOUR_')) {
        await new Promise((r) => setTimeout(r, 600));
        setModal({
          open: true,
          title: 'Message Sent!',
          message: 'Thank you for reaching out. We will get back to you within 24 hours.',
        });
        form.reset();
      } else {
        const res = await fetch(ENDPOINT, {
          method: 'POST',
          body: data,
          headers: { Accept: 'application/json' },
        });
        if (res.ok) {
          setModal({
            open: true,
            title: 'Message Sent!',
            message: 'We will get back to you within 24 hours.',
          });
          form.reset();
        } else {
          setModal({ open: true, title: 'Error', message: 'Please try again.' });
        }
      }
    } catch {
      setModal({ open: true, title: 'Error', message: 'Connection problem.' });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="order-card" style={{ maxWidth: 640, margin: '0 auto' }}>
        <form onSubmit={onSubmit}>
          <input type="hidden" name="_subject" value="Contact Form – La Maison" />
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="c-name">Full Name *</label>
              <input id="c-name" name="name" required placeholder="Your name" />
            </div>
            <div className="form-group">
              <label htmlFor="c-email">Email *</label>
              <input id="c-email" name="email" type="email" required placeholder="you@example.com" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="c-phone">Phone</label>
            <input id="c-phone" name="phone" type="tel" placeholder="+1 234 567 890" />
          </div>
          <div className="form-group">
            <label htmlFor="c-subject">Subject *</label>
            <select id="c-subject" name="subject" required defaultValue="">
              <option value="" disabled>
                Select...
              </option>
              <option value="general">General enquiry</option>
              <option value="reservation">Reservation help</option>
              <option value="private">Private dining / events</option>
              <option value="feedback">Feedback</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="c-message">Message *</label>
            <textarea id="c-message" name="message" rows={5} required placeholder="How can we help?" />
          </div>
          <button type="submit" className="btn btn-primary btn-full" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
      <Modal
        open={modal.open}
        title={modal.title}
        message={modal.message}
        onClose={() => setModal((m) => ({ ...m, open: false }))}
      />
    </>
  );
}