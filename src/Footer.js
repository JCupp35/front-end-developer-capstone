import logo from './logo.png';

function Footer() {
    return (
        <footer>
            <img src={logo} alt="Little lemon logo" />

            <section>
                <h2>Doormat Navigation</h2>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#reservations">Reservations</a></li>
                        <li><a href="#order-online">Order Online</a></li>
                        <li><a href="#login">Login</a></li>
                    </ul>
            </section>

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
        </footer>
    );
}

export default Footer;