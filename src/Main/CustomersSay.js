import ratingStar from '../assets/rating-star.svg';
import customerPicture1 from '../assets/customer-1.jpg';
import customerPicture2 from '../assets/customer-2.jpg';
import customerPicture3 from '../assets/customer-3.jpg';
import customerPicture4 from '../assets/customer-4.jpg';

const testimonials = [
  {
    id: 'susan',
    name: 'Susan',
    quote: 'The greek salad was amazing!',
    image: customerPicture1,
  },
  {
    id: 'dan',
    name: 'Dan',
    quote: 'The service was excellent and very fast.',
    image: customerPicture2,
  },
  {
    id: 'janice',
    name: 'Janice',
    quote: 'The Lemon Dessert is delicious!',
    image: customerPicture3,
  },
  {
    id: 'jeffrey',
    name: 'Jeffrey',
    quote: 'My go to place while visiting Chicago.',
    image: customerPicture4,
  },
];

function CustomersSay() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <h2>Testimonials</h2>
        <div className="testimonials-cards">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.id}>
              <div className="rating">
                <img src={ratingStar} alt="5 star rating" />
                <img src={ratingStar} alt="5 star rating" />
                <img src={ratingStar} alt="5 star rating" />
                <img src={ratingStar} alt="5 star rating" />
                <img src={ratingStar} alt="5 star rating" />
              </div>
              <div className="customer-details">
                <img src={testimonial.image} alt={`${testimonial.name} profile`} />
                <h3>{testimonial.name}</h3>
              </div>
              <p>{testimonial.quote}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CustomersSay;
