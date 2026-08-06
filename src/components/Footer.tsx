import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Link href="/" className="logo">
            Taj Mahal
          </Link>
          <p>Indian specialties in Schweinfurt – fresh, aromatic, welcoming.</p>
        </div>
        <div className="footer-col">
          <h4>Explore</h4>
          <Link href="/menu">Menu</Link>
          <Link href="/order">Order Online</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/events">Events</Link>
        </div>
        <div className="footer-col">
          <h4>More</h4>
          <Link href="/loyalty">Rewards</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/order#reservation">Reservations</Link>
        </div>
        <div className="footer-col">
          <h4>Visit</h4>
          <p>
            Am Zeughaus 28
            <br />
            97421 Schweinfurt
          </p>
          <p>
            <a href="tel:+49972124747">+49 9721 24747</a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Taj Mahal Schweinfurt. All rights reserved.</p>
      </div>
    </footer>
  );
}