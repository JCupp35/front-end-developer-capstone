import specialsData from './specialsData';

function Specials() {
  return (
    <section className="specials-section">
      <div className="container">
        <header className="specials-header">
          <h2>This weeks specials!</h2>
          <button type="button" aria-label="View online menu">Online Menu</button>
        </header>
        <div className="specials-cards">
          {specialsData.map((special) => (
            <article className="card" key={special.id}>
              <img src={special.image} alt={special.imageAlt} />
              <h3>
                {special.title} <span>{special.price}</span>
              </h3>
              <p>{special.description}</p>
              <a href="#order-online">Order a delivery</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Specials;
