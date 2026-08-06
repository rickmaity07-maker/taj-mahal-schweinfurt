'use client';

type ModalProps = {
  open: boolean;
  title: string;
  message: string;
  onClose: () => void;
};

export default function Modal({ open, title, message, onClose }: ModalProps) {
  return (
    <div className={`modal${open ? ' open' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          &times;
        </button>
        <h3>{title}</h3>
        <p>{message}</p>
        <button className="btn btn-primary" onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
}