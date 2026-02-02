import heroImage from '../assets/hero-image.png';
import greekSalad from '../assets/greek-salad.png';
import bruchetta from '../assets/bruchetta.png';
import lemonDessert from '../assets/lemon-dessert.png';
import ratingStar from '../assets/rating-star.svg';
import customerPicture1 from '../assets/customer-1.jpg';
import customerPicture2 from '../assets/customer-2.jpg';
import customerPicture3 from '../assets/customer-3.jpg';
import customerPicture4 from '../assets/customer-4.jpg';
import restaurantChef from '../assets/restaurant-chef-b.png';
import marioAndAdrian from '../assets/mario-and-adrian.png';

import './Main.css';




function Main() {
    return (
        <main>
            <section className="hero-section">
                <article>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <button type="button">Reserve a Table</button>
                </article>
                <figure>
                <img src={heroImage} alt="Little lemon restaurant food" />
                </figure>
            </section>
            <section className="specials-section">
                <header className="specials-header">
                    <h2>This weeks specials!</h2>
                    <button type='button'>Online Menu</button>
                </header>
                <div className="specials-cards">
                    <article className="card">
                        <img src={greekSalad} alt="Fresh greek salad."/>
                        <h3>Greek Salad <span>$12.99</span></h3>
                        <p>The famous greek salad of crispy lettuce,
                         peppers, olives and our Chicago style feta cheese,
                         garnished with crunchy garlic and rosemary croutons. 
                        </p>
                        <a href='#order-online'>Order a delivery</a>
                    </article>
                    <article className="card">
                        <img src={bruchetta} alt="Fresh bruchetta."/>
                        <h3>Bruchetta <span>$5.99</span></h3>
                        <p>Our Bruschetta is made from grilled bread that has
                         been smeared with garlic and seasoned with salt and
                         olive oil.  
                        </p>
                        <a href='#order-online'>Order a delivery</a>
                    </article>
                    <article className="card">
                        <img src={lemonDessert} alt="Fresh lemon desert."/>
                    <h3>Lemon Dessert <span>$5.00</span></h3>
                    <p>This comes straight from grandma’s recipe book,
                     every last ingredient has been sourced and is as
                     authentic as can be imagined.  
                    </p>
                        <a href='#order-online'>Order a delivery</a>
                    </article>
                </div>
            </section>
            <section className="testimonials-section">
                <h2>Testimonials</h2>
                <div className="testimonials-cards">
                    <article className="testimonial-card">
                        <div className="rating">
                            <img src={ratingStar} alt="5 star rating"/>
                            <img src={ratingStar} alt="5 star rating"/>
                            <img src={ratingStar} alt="5 star rating"/>
                            <img src={ratingStar} alt="5 star rating"/>
                            <img src={ratingStar} alt="5 star rating"/>
                        </div>
                        <div className="customer-details">
                            <img src={customerPicture1} alt="Customer photo." />
                            <h3>Susan</h3>
                        </div>
                        <p>The greek salad was amazing!</p>
                    </article>
                    <article className="testimonial-card">
                        <div className="rating">
                            <img src={ratingStar} alt="5 star rating"/>
                            <img src={ratingStar} alt="5 star rating"/>
                            <img src={ratingStar} alt="5 star rating"/>
                            <img src={ratingStar} alt="5 star rating"/>
                            <img src={ratingStar} alt="5 star rating"/>
                        </div>
                        <div className="customer-details">
                            <img src={customerPicture2} alt="Customer photo." />
                            <h3>Dan</h3>
                        </div>
                        <p>The service was excellent and very fast.</p>
                    </article>
                    <article className="testimonial-card">
                        <div className="rating">
                            <img src={ratingStar} alt="5 star rating"/>
                            <img src={ratingStar} alt="5 star rating"/>
                            <img src={ratingStar} alt="5 star rating"/>
                            <img src={ratingStar} alt="5 star rating"/>
                            <img src={ratingStar} alt="5 star rating"/>
                        </div>
                        <div className="customer-details">
                            <img src={customerPicture3} alt="Customer photo." />
                            <h3>Janice</h3>
                        </div>
                        <p>The Lemon Dessert is a delicious!</p>
                    </article>
                    <article className="testimonial-card">
                        <div className="rating">
                            <img src={ratingStar} alt="5 star rating"/>
                            <img src={ratingStar} alt="5 star rating"/>
                            <img src={ratingStar} alt="5 star rating"/>
                            <img src={ratingStar} alt="5 star rating"/>
                            <img src={ratingStar} alt="5 star rating"/>
                        </div>
                        <div className="customer-details">
                            <img src={customerPicture4} alt="Customer photo." />
                            <h3>Jeffrey</h3>
                        </div>
                        <p>My go to place while visiting Chicago.</p>
                    </article>
                </div>
            </section>
            <section className="about-section">
                <article>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                    </p>
                </article>
                <figure>
                    <img src={marioAndAdrian} alt="Mario and Adrian, cofounders of Little Lemon."/>
                    <img src={restaurantChef} alt="Restaurant chef putting the finishing touches on a dish."/>
                </figure>
            </section>
        </main>
    );
}

export default Main;