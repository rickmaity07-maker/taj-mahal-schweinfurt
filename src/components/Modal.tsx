'use client';

import { useEffect, useRef } from 'react';
import { Alert, Check } from './Icons';

type ModalProps = {
  open: boolean;
  title: string;
  message: string;
  error?: boolean;
  onClose: () => void;
};

export default function Modal({ open, title, message, error, onClose }: ModalProps) {
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    btnRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <div
      className={`modal${open ? ' open' : ''}`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
      aria-labelledby="modal-title"
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close" tabIndex={open ? 0 : -1}>
          &times;
        </button>
        <div className={`modal-icon${error ? ' err' : ''}`}>{error ? <Alert /> : <Check />}</div>
        <h3 id="modal-title">{title}</h3>
        <p>{message}</p>
        <button ref={btnRef} className="btn btn-ink" onClick={onClose} tabIndex={open ? 0 : -1}>
          Done
        </button>
      </div>
    </div>
  );
}
