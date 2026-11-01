import type { Metadata } from 'next';
import OrderForms from '@/components/OrderForms';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Order Online & Reservations',
  description: 'Order from Taj Mahal Schweinfurt for pickup or free delivery, or reserve a table.',
};

export default function OrderPage() {
  return (
    <>
      <PageHero
        eyebrow="Order & reserve"
        title={
          <>
            Order <em>&amp; reserve</em>
          </>
        }
        text="Order for pickup or free delivery, or ask us to hold a table for you."
        meta={
          <>
            <span>Pickup ~30 min</span>
            <span>Delivery ~45 min</span>
            <span>Delivery fee 0 €</span>
          </>
        }
      />
      <section className="section-tight">
        <div className="container">
          <OrderForms />
        </div>
      </section>
    </>
  );
}
