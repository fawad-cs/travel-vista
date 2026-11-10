
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            Travel <span>Vista</span>
          </Link>

          <p>
            Discover beautiful places and make
            every journey unforgettable.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/destinations">Destinations</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="footer-contact">
          <h3>Explore More</h3>
          <p>Discover new places.</p>
          <p>Plan your next adventure.</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 TravelVista. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
