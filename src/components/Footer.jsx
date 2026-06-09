import { Link } from "react-router-dom";
import "../styles/Footer.css";
import logo from "../assets/abdul-hamid-timbermart-logo.png";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-col">

          <img
  src={logo}
  alt="Abdul Hamid Timber Mart Logo"
  className="footer-logo"
/>

          <p>
            Premium timber, plywood, bamboo, GI sheets and
            construction materials supplier serving builders,
            contractors and homeowners since 1984.
          </p>

        </div>

        <div className="footer-col">

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <Link to="/materials">Materials</Link>

          <Link to="/contact">Contact</Link>

        </div>

        <div className="footer-col">

          <h3>Materials</h3>

          <a href="#">Shuttering Plywood</a>

          <a href="#">Silver Wood</a>

          <a href="#">Saru Munda</a>

          <a href="#">Bamboo</a>

          <a href="#">GI Sheets</a>

        </div>

        <div className="footer-col">

          <h3>Contact</h3>

          <p>📍 Suchak Naka Bus Stop, Kalyan–Shilphata Road,
Nandivali Gaon, Kalyan, Maharashtra 421306</p>

           <p>📞Telephone: 0251-235-3116</p>
<p>Sarfraz: 8108729945 / 7977848196 </p>
<p>Shahnawaz: 7021416059</p>
 <p>🕒 Mon - Sun : 9 AM - 7 PM
          Friday - closed </p>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Abdul Hamid Timber Mart. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;