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
                            Finding the perfect apartment in this competitive market felt impossible. Urban Nest changed everything. gaur took the time to understand my needs and budget, and within weeks, I found my dream place. They made the whole process smooth and stress-free.
                        </p>
                        <div className="cs-flex-group">
                            <picture className="cs-picture">
                                <img className="cs-profile" src="https://thumbs.dreamstime.com/b/man-white-14884622.jpg" decoding="async" alt="profile" width="50" height="50" aria-hidden="true" loading="lazy" />
                            </picture>
                            <span className="cs-name">
                                James M.
                                <span className="cs-job">First-Time Renter</span>
                            </span>
                        </div>
                    </li>
                    <li className="cs-item">
                        <p className="cs-review">
                            Selling our condo was a daunting task. Maya and her team at Urban Nest were incredible. Their expertise in marketing and negotiation ensured we received top dollar for our property. They were always available to answer questions and guide us through every step. We couldn't be happier with the service.
                        </p>
                        <div className="cs-flex-group">
                            <picture className="cs-picture">
                                <img className="cs-profile" src="https://th.bing.com/th/id/R.f88157c47572b676a4a098ca618998af?rik=zdOm0hoPZt%2bvnQ&riu=http%3a%2f%2fwww.teamhoffmann.net%2fassets%2fimages%2fnew-home-buyer-familuy-864x576.jpg&ehk=NaxNZ%2bHGjuX9MTdX1kAHACTfJl2X5KDLLvDP4MZuYIE%3d&risl=&pid=ImgRaw&r=0" decoding="async" alt="profile" width="50" height="50" aria-hidden="true" loading="lazy" />
                            </picture>
                            <span className="cs-name">
                                John & Lisa A.
                                <span className="cs-job">Home Sellers</span>
                            </span>
                        </div>
                    </li>
                    <li className="cs-item">
                        <p className="cs-review">
                            I initially felt overwhelmed by the thought of buying a property in the city. Annamalai from Urban Nest was amazing! His knowledge of the local market and meticulous attention to detail were invaluable. He helped me navigate the process with confidence and found me a property that truly ticks all the boxes.
                        </p>
                        <div className="cs-flex-group">
                            <picture className="cs-picture">
                                <img className="cs-profile" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/masonjames.png" decoding="async" alt="profile" width="50" height="50" aria-hidden="true" loading="lazy" />
                            </picture>
                            <span className="cs-name">
                                David L.
                                <span className="cs-job">First-Time Home Buyer</span>
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Testimonials;
