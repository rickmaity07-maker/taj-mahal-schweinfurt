import type { Metadata } from 'next';
import OrderForms from '@/components/OrderForms';

export const metadata: Metadata = {
  title: 'Order Online & Reservations',
  description: 'Order from Taj Mahal Schweinfurt – pickup or delivery, or reserve a table.',
};

export default function OrderPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Order &amp; Reserve</h1>
          <p>Pickup ~30 min · Delivery ~45 min · Delivery fee €0</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <OrderForms />
        </div>
      </section>
    </>
  );
}