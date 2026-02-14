import heroImage from '../assets/hero-image.png';
import CallToAction from './CallToAction';
import Specials from './Specials';
import CustomersSay from './CustomersSay';
import Chicago from './Chicago';

function Homepage() {
  return (
    <>
      <section className="hero-section">
        <div className="container flex-container">
          <article>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <CallToAction />
          </article>
          <figure>
            <img src={heroImage} alt="Little lemon restaurant food" />
          </figure>
        </div>
      </section>
      <Specials />
      <CustomersSay />
      <Chicago />
    </>
  );
}

export default Homepage;
