import React from 'react';
import '../styles/Testimonials.css'

const Testimonials = () => {
    return (
        <section id="reviews-1455">
            <div className="cs-container">
                <div className="cs-content">
                    {/* <img className="cs-quote" aria-hidden="true" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/quote-yellow.svg" decoding="async" alt="quote icon" width="40" height="33" loading="lazy" /> */}
                    <span className="cs-topper">Testimonials</span>
                    <h2 className="cs-title">Trusted by Thousands of People & Companies</h2>
                    <p className="cs-text">
                        At Stitch Cleaning Service, let us help you solve problems so that you can focus on your mission. We support businesses through periods of expansion, succession.
                    </p>
                </div>
                <ul className="cs-card-group">
                    <li className="cs-item">
                        <p className="cs-review">
                            It’s easy to get overwhelmed by the sheer volume of feedback. With so many more customers and so many ways to connect with their feedback, it’s hard to know to where to start.
                        </p>
                        <div className="cs-flex-group">
                            <picture className="cs-picture">
                                <img className="cs-profile" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/masonjames.png" decoding="async" alt="profile" width="50" height="50" aria-hidden="true" loading="lazy" />
                            </picture>
                            <span className="cs-name">
                                Mason James
                                <span className="cs-job">Senior Gardener Farmer</span>
                            </span>
                        </div>
                    </li>
                    <li className="cs-item">
                        <p className="cs-review">
                            When you think about collecting customer feedback, it’s easy to get overwhelmed by the sheer volume of it. With so many more customers and so many ways to connect with their feedback, it’s hard to know to where to start.
                        </p>
                        <div className="cs-flex-group">
                            <picture className="cs-picture">
                                <img className="cs-profile" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/georgethomas.png" decoding="async" alt="profile" width="50" height="50" aria-hidden="true" loading="lazy" />
                            </picture>
                            <span className="cs-name">
                                George Thomas
                                <span className="cs-job">Founder of Yokoloko</span>
                            </span>
                        </div>
                    </li>
                    <li className="cs-item">
                        <p className="cs-review">
                            It’s easy to get overwhelmed by the sheer volume of it. With so many more customers and so many ways to connect with their feedback, it’s hard to know to where to start.
                        </p>
                        <div className="cs-flex-group">
                            <picture className="cs-picture">
                                <img className="cs-profile" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/masonjames.png" decoding="async" alt="profile" width="50" height="50" aria-hidden="true" loading="lazy" />
                            </picture>
                            <span className="cs-name">
                                Mason James
                                <span className="cs-job">Senior Gardener Farmer</span>
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Testimonials;
