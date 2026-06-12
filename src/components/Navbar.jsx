import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/abdul-hamid-timbermart-logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Abdul Hamid Timber Mart Logo" className="logo-img" />

      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/materials">Materials</Link>
        <Link to="/contact">Contact</Link>
      </div>

     <a href="tel:+917977113236">
  <button className="call-btn">
    Call Now
  </button>
</a>
    </nav>
  );
}

export default Navbar;