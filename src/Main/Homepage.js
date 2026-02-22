import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import heroImage from '../assets/hero-image.png';
import CallToAction from './CallToAction';
import Specials from './Specials';
import CustomersSay from './CustomersSay';
import Chicago from './Chicago';

function Homepage() {
  const location = useLocation();
  const [isBookingBannerVisible, setIsBookingBannerVisible] = useState(
    Boolean(location.state?.bookingConfirmed)
  );

  useEffect(() => {
    if (location.state?.bookingConfirmed) {
      setIsBookingBannerVisible(true);
    }
  }, [location.key, location.state]);

  return (
    <>
      {isBookingBannerVisible && (
        <section className="booking-success-banner" role="status" aria-live="polite">
          <div className="container booking-success-banner__content">
            <p>Booking confirmed</p>
            <button
              type="button"
              aria-label="Dismiss booking confirmation banner"
              onClick={() => setIsBookingBannerVisible(false)}
            >
              ×
            </button>
          </div>
        </section>
      )}
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
