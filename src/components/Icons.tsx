type P = { className?: string };

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
};

export const ArrowRight = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M4 12h15M13 6l6 6-6 6" />
  </svg>
);

export const ArrowLeft = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M20 12H5M11 6l-6 6 6 6" />
  </svg>
);

export const Close = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const Search = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="M20 20l-4.2-4.2" />
  </svg>
);

export const Check = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
);

export const Alert = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M12 8v5M12 16.5v.01" />
    <circle cx="12" cy="12" r="9" />
  </svg>
);

export const Spark = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18" />
  </svg>
);

export const Bowl = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M3 11h18a9 9 0 0 1-18 0zM8 7c0-1.5 1-2 1-3.5M12 7c0-1.5 1-2 1-3.5M16 7c0-1.5 1-2 1-3.5" />
  </svg>
);

export const Gift = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <rect x="3.5" y="8" width="17" height="12.5" rx="1.5" />
    <path d="M12 8v12.5M3.5 12h17M12 8c-1.5-3.5-5-4-5-1.5S12 8 12 8zm0 0c1.5-3.5 5-4 5-1.5S12 8 12 8z" />
  </svg>
);

export const Key = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <circle cx="8" cy="15" r="4" />
    <path d="M11 12l8-8M16 7l2 2M14 9l1.5 1.5" />
  </svg>
);
