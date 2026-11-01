import type { Metadata } from 'next';
import { Bowl, Gift, Key, Spark } from '@/components/Icons';
import LoyaltyForm from '@/components/LoyaltyForm';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Rewards',
  description: 'Join Taj Mahal Rewards in Schweinfurt – earn points on every order and redeem them for free dishes.',
};

export default function LoyaltyPage() {
  return (
    <>
      <PageHero
        eyebrow="Taj Mahal Rewards"
        title={
          <>
            Eat well, <em>earn more</em>
          </>
        }
        text="One point for every euro you spend, whether you eat in, pick up or order delivery."
      />

      <section className="section-tight">
        <div className="container">
          <div className="rewards-band" data-reveal>
            <div>
              <h2 className="h2">
                What members <em>get</em>
              </h2>
              <p className="lede">Free to join. Points never expire.</p>
            </div>
            <div className="perks">
              <div className="perk">
                <h4>
                  <Spark /> Earn points
                </h4>
                <p>1 point per €1 on food and drinks.</p>
              </div>
              <div className="perk">
                <h4>
                  <Bowl /> Free dishes
                </h4>
                <p>Redeem points for dishes from the rewards menu.</p>
              </div>
              <div className="perk">
                <h4>
                  <Gift /> Birthday dessert
                </h4>
                <p>A sweet on us during your birthday month.</p>
              </div>
              <div className="perk">
                <h4>
                  <Key /> Early access
                </h4>
                <p>Hear about seasonal specials first.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container form-layout" style={{ alignItems: 'start' }}>
          <div data-reveal>
            <span className="eyebrow">How it works</span>
            <h2 className="h2">
              Three steps, <em>no card.</em>
            </h2>
            <ol className="steps">
              <li>
                <div>
                  <h3>Sign up</h3>
                  <p>Fill in the form. It takes under a minute.</p>
                </div>
              </li>
              <li>
                <div>
                  <h3>Give your number</h3>
                  <p>Mention your phone number when you order or pay, and we add your points.</p>
                </div>
              </li>
              <li>
                <div>
                  <h3>Redeem</h3>
                  <p>Swap points for free dishes whenever you like.</p>
                </div>
              </li>
            </ol>
          </div>
          <LoyaltyForm />
        </div>
      </section>
    </>
  );
}
