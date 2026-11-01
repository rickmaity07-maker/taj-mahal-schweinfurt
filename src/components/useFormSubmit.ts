'use client';

import { FormEvent, useCallback, useState } from 'react';

export type ModalState = { open: boolean; title: string; message: string; error?: boolean };

type Options = {
  endpoint: string;
  success: { title: string; message: string };
  /** Extra fields to add before sending. */
  extend?: (data: FormData) => void;
  onSuccess?: () => void;
};

/**
 * Shared submit logic for Formspree-style endpoints.
 * While the endpoint still contains "YOUR_", submissions are simulated so the site works in demo mode.
 */
export function useFormSubmit({ endpoint, success, extend, onSuccess }: Options) {
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState<ModalState>({ open: false, title: '', message: '' });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    extend?.(data);
    setLoading(true);
    try {
      let ok = true;
      if (endpoint.includes('YOUR_')) {
        await new Promise((r) => setTimeout(r, 700));
      } else {
        const res = await fetch(endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
        ok = res.ok;
      }
      if (ok) {
        setModal({ open: true, ...success });
        form.reset();
        onSuccess?.();
      } else {
        setModal({
          open: true,
          error: true,
          title: 'We couldn’t send that',
          message: 'Please try again in a moment, or call us on +49 9721 24747.',
        });
      }
    } catch {
      setModal({
        open: true,
        error: true,
        title: 'Connection failed',
        message: 'Check your internet connection and try again, or call us on +49 9721 24747.',
      });
    } finally {
      setLoading(false);
    }
  };

  const close = useCallback(() => setModal((m) => ({ ...m, open: false })), []);

  return { loading, modal, onSubmit, close };
}
