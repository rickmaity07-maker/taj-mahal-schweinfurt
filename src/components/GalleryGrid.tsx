'use client';

import { useCallback, useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Close } from './Icons';

export type GalleryImage = { src: string; alt: string };

export default function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (dir: number) => setIndex((i) => (i === null ? i : (i + dir + images.length) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (index === null) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [index, close, step]);

  const current = index !== null ? images[index] : null;

  return (
    <>
      <div className="masonry">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            className="masonry-item"
            onClick={() => setIndex(i)}
            aria-label={`Open photo: ${img.alt}`}
            data-reveal
            style={{ ['--d' as string]: i % 3 }}
          >
            <span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img.src} alt={img.alt} loading="lazy" />
              <span className="masonry-cap">{img.alt}</span>
            </span>
          </button>
        ))}
      </div>

      {current && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={current.alt} onClick={close}>
          <button
            type="button"
            className="lightbox-btn lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous photo"
          >
            <ArrowLeft />
          </button>
          <figure onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={current.src} alt={current.alt} />
            <figcaption>
              {current.alt} · {(index ?? 0) + 1} / {images.length}
            </figcaption>
          </figure>
          <button
            type="button"
            className="lightbox-btn lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next photo"
          >
            <ArrowRight />
          </button>
          <button type="button" className="lightbox-btn lightbox-close" onClick={close} aria-label="Close" autoFocus>
            <Close />
          </button>
        </div>
      )}
    </>
  );
}
