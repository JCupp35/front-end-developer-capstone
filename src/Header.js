import Nav from './Nav';
import logo from './logo.png';

function Header() {
  return (
    <header>
      <img src={logo} alt="Little lemon logo" />
      <Nav />
    </header>
  );
}

export default Header;