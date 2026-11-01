import type { ReactNode } from 'react';

type Props = {
  eyebrow: string;
  title: ReactNode;
  text?: ReactNode;
  meta?: ReactNode;
};

export default function PageHero({ eyebrow, title, text, meta }: Props) {
  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        <div data-reveal>
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
        </div>
        {(text || meta) && (
          <div data-reveal style={{ ['--d' as string]: 1 }}>
            {text && <p>{text}</p>}
            {meta && <div className="meta">{meta}</div>}
          </div>
        )}
      </div>
    </section>
  );
}
