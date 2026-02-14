import marioAndAdrian from '../assets/mario-and-adrian.png';
import restaurantChef from '../assets/restaurant-chef-b.png';

function Chicago() {
  return (
    <section className="about-section">
      <div className="container flex-container">
        <article>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint.
          </p>
        </article>
        <figure>
          <img
            src={marioAndAdrian}
            alt="Mario and Adrian, cofounders of Little Lemon."
          />
          <img
            src={restaurantChef}
            alt="Restaurant chef putting the finishing touches on a dish."
          />
        </figure>
      </div>
    </section>
  );
}

export default Chicago;
