'use client';

import { FormEvent, useCallback, useState } from 'react';

export type ModalState = { open: boolean; title: string; message: string; error?: boolean };

type Options = {
  /** API route, e.g. "/api/order". */
  endpoint: string;
  success: { title: string; message: string };
  /** Extra fields to add to the JSON payload. */
  extend?: () => Record<string, unknown>;
  onSuccess?: () => void;
};

const FALLBACK = 'Please try again in a moment, or call us on +49 9721 24747.';

/** Submits a form as JSON to one of our API routes and tracks loading, field errors and the result dialog. */
export function useFormSubmit({ endpoint, success, extend, onSuccess }: Options) {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [modal, setModal] = useState<ModalState>({ open: false, title: '', message: '' });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const payload: Record<string, unknown> = Object.fromEntries(new FormData(form).entries());
    payload.consent = (form.elements.namedItem('consent') as HTMLInputElement | null)?.checked ?? false;
    Object.assign(payload, extend?.());

    setLoading(true);
    setErrors({});
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      const body = (await res.json().catch(() => ({}))) as { error?: string; fields?: Record<string, string> };

      if (res.ok) {
        setModal({ open: true, ...success });
        form.reset();
        onSuccess?.();
      } else if (res.status === 422 && body.fields) {
        setErrors(body.fields);
        const first = Object.keys(body.fields)[0];
        form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      } else {
        setModal({ open: true, error: true, title: 'We couldn’t send that', message: body.error ?? FALLBACK });
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

  return { loading, errors, modal, onSubmit, close };
}
