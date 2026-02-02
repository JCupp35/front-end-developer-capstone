import Nav from '../Nav/Nav';
import logo from '../assets/Logo.svg';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container flex-container">
        <img src={logo} alt="Little lemon logo" />
        <Nav />
      </div>
    </header>
  );
}

export default Header;