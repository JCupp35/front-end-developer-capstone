import logo from '../assets/Logo.svg';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="container footer-content">
        <img src={logo} alt="Little lemon logo" />

        <nav aria-label="Doormat Navigation">
          <h2>Navigation</h2>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservations">Reservations</a></li>
            <li><a href="#order-online">Order Online</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        </nav>

        <section>
          <h2>Contact</h2>
          <ul>
            <li>Address</li>
            <li>Phone number</li>
            <li>Email</li>
          </ul>
        </section>

        <section>
          <h2>Social Media Links</h2>
          <ul>
            <li>Address</li>
            <li>Phone number</li>
            <li>Email</li>
          </ul>
        </section>
      </div>
    </footer>
  );
}

export default Footer;