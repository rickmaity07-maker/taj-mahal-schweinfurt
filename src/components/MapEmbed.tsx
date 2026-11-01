'use client';

import { useState } from 'react';
import { site } from '@/lib/site';

/**
 * Google Maps embed that only loads after the visitor opts in (GDPR).
 * Until then no request is sent to Google.
 */
export default function MapEmbed({ light = false }: { light?: boolean }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`map-frame${light ? ' light' : ''}`} data-reveal style={{ ['--d' as string]: 1 }}>
      {loaded ? (
        <iframe
          src={site.mapsEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Map showing Taj Mahal at Am Zeughaus 28, Schweinfurt"
          allowFullScreen
        />
      ) : (
        <div className="map-consent">
          <p>
            The map is provided by Google. Loading it sends your IP address to Google. See our{' '}
            <a href="/datenschutz">privacy policy</a>.
          </p>
          <div className="actions">
            <button type="button" className={`btn ${light ? 'btn-ink' : 'btn-light'}`} onClick={() => setLoaded(true)}>
              Load map
            </button>
            <a className={`btn ${light ? 'btn-ghost' : 'btn-light'}`} href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
              Open in Google Maps ↗
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
