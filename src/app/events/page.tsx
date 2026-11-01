import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from '@/components/Icons';
import PageHero from '@/components/PageHero';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Events & Private Dining',
  description: 'Birthdays, family dinners and group bookings at Taj Mahal Schweinfurt.',
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events & groups"
        title={
          <>
            Gather <em>round the table</em>
          </>
        }
        text="Birthdays, family gatherings, team dinners and larger groups. Tell us what you're planning and we'll put together a menu that fits."
      />

      <section className="section">
        <div className="container feature-rows">
          <div className="feature-row">
            <div className="feature-media" data-reveal>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/photo-1414235077428-338989a2e8c0.jpg"
                alt="Long table set for a group dinner"
                loading="lazy"
              />
            </div>
            <div data-reveal style={{ ['--d' as string]: 1 }}>
              <span className="eyebrow">Celebrations</span>
              <h2>Birthdays and family dinners</h2>
              <p>
                Bring everyone together over shared plates. We can set up a longer table, plan the
                courses with you, and bring out a dessert at the right moment.
              </p>
              <ul className="check-list">
                <li>Shared menus for the whole table</li>
                <li>Vegetarian options for every course</li>
                <li>Spice level adjusted for children and guests</li>
              </ul>
              <div className="actions">
                <a href={site.phoneHref} className="btn btn-accent">
                  Call {site.phone}
                </a>
                <Link href="/contact" className="btn btn-ghost">
                  Send a message
                </Link>
              </div>
            </div>
          </div>

          <div className="feature-row">
            <div className="feature-media" data-reveal>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/Mixed Starters.webp" alt="Platter of mixed Indian starters" loading="lazy" />
            </div>
            <div data-reveal style={{ ['--d' as string]: 1 }}>
              <span className="eyebrow">Group bookings</span>
              <h2>Larger parties</h2>
              <p>
                For groups of nine or more, get in touch a few days ahead. We&apos;ll suggest a menu,
                confirm the price per person, and have everything ready when you arrive.
              </p>
              <ul className="check-list">
                <li>Team lunches and work dinners</li>
                <li>Mixed starter platters to share</li>
                <li>Tailored offer for your group</li>
              </ul>
              <div className="actions">
                <Link href="/order#reservation" className="btn btn-ink">
                  Request a table <ArrowRight />
                </Link>
              </div>
            </div>
          </div>

          <div className="feature-row">
            <div className="feature-media" data-reveal>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/Chicken Biryani.webp" alt="Chicken biryani ready for pickup" loading="lazy" />
            </div>
            <div data-reveal style={{ ['--d' as string]: 1 }}>
              <span className="eyebrow">At home</span>
              <h2>Bigger orders to take away</h2>
              <p>
                Hosting at home? Order a larger spread for pickup or delivery. Call us earlier in the
                day so the kitchen can plan for it.
              </p>
              <div className="actions">
                <Link href="/order" className="btn btn-ink">
                  Start an order <ArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
