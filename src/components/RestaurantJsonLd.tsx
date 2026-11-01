import { site, siteUrl } from '@/lib/site';

/** schema.org Restaurant data so search engines can show hours, address and menu. */
export default function RestaurantJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Taj Mahal Schweinfurt',
    servesCuisine: 'Indian',
    url: siteUrl,
    telephone: site.phone,
    email: site.email,
    menu: `${siteUrl}/menu`,
    acceptsReservations: true,
    image: `${siteUrl}/images/photo-1585937421612-70a008356fbe.jpg`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.street,
      postalCode: site.zip,
      addressLocality: site.city,
      addressCountry: 'DE',
    },
    openingHoursSpecification: site.hours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: h.open,
      closes: h.close,
    })),
  };
  return (
    <script
      type="application/ld+json"
      // Static, server-built data only; "<" is escaped to keep it inert.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\u003c') }}
    />
  );
}
