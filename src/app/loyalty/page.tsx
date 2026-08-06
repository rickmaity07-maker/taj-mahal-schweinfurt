import type { Metadata } from 'next';
import LoyaltyForm from '@/components/LoyaltyForm';

export const metadata: Metadata = {
  title: 'Rewards',
  description: 'Join Taj Mahal Rewards in Schweinfurt – earn points and free dishes.',
};

export default function LoyaltyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Taj Mahal Rewards</h1>
          <p>Earn points with every visit. Unlock free dishes and exclusive offers.</p>
        </div>
      </section>

      <section className="loyalty section" style={{ paddingTop: '4rem' }}>
        <div className="container">
          <div className="loyalty-perks">
            <div className="perk">
              <div className="perk-icon">★</div>
              <h4>Earn Points</h4>
              <p>1 point for every €1 spent on food &amp; drinks</p>
            </div>
            <div className="perk">
              <div className="perk-icon">🎁</div>
              <h4>Free Dishes</h4>
              <p>Redeem points for complimentary menu items</p>
            </div>
            <div className="perk">
              <div className="perk-icon">🎂</div>
              <h4>Birthday Treat</h4>
              <p>Special dessert during your birthday month</p>
            </div>
            <div className="perk">
              <div className="perk-icon">✦</div>
              <h4>VIP Access</h4>
              <p>Early access to offers and seasonal specials</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">How it works</span>
            <h2 className="section-title">Simple &amp; Rewarding</h2>
          </div>
          <div className="about-grid" style={{ maxWidth: 900, margin: '0 auto' }}>
            <div className="about-text">
              <p>
                <strong>1. Join free</strong> — Fill in the form. You will receive membership
                details by email.
              </p>
              <p>
                <strong>2. Earn</strong> — Give your phone number when you order or dine. Points
                are added automatically.
              </p>
              <p>
                <strong>3. Redeem</strong> — Use points for free items from our rewards menu.
              </p>
            </div>
            <LoyaltyForm />
          </div>
        </div>
      </section>
    </>
  );
}