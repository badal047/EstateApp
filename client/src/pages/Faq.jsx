import React, { useState } from 'react';
import '../styles/Faq.css';

const Faq = () => {
    const [activeItem, setActiveItem] = useState(null);

    const toggleItem = (index) => {
        setActiveItem((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <section id="faq-1263" >
            <div className="cs-container">
                <div className="cs-content">
                    
                    <h2 className="cs-title">Frequently Asked Questions</h2>
                </div>
                <ul className="cs-faq-group">
                    <li className={`cs-faq-item ${activeItem === 0 ? 'active' : ''}`} onClick={() => toggleItem(0)}>
                        <button className="cs-button">
                            <span className="cs-button-text">
                            I'm a first-time homebuyer.  Can Urban Nest help me?
                            </span>
                        </button>
                        <p className="cs-item-p">
                            Absolutely! We specialize in guiding first-time buyers through the entire process.  Our team will explain everything you need to know, connect you with lenders, and help you find your dream home.
                        </p>
                    </li>
                    <li className={`cs-faq-item ${activeItem === 1 ? 'active' : ''}`} onClick={() => toggleItem(1)}>
                        <button className="cs-button">
                            <span className="cs-button-text">
                                What neighborhoods do you specialize in?
                            </span>
                        </button>
                        <p className="cs-item-p">
                            Our agents have a deep understanding of a variety of neighborhoods across the city.  Tell us your preferences, and we'll match you with an agent who can expertly guide you in the right area.
                        </p>
                    </li>
                    <li className={`cs-faq-item ${activeItem === 2 ? 'active' : ''}`} onClick={() => toggleItem(2)}>
                        <button className="cs-button">
                            <span className="cs-button-text">
                                How does your negotiation process work?
                            </span>
                        </button>
                        <p className="cs-item-p">
                            Our skilled negotiators will fight for your best interests, ensuring you get the best possible price on your new home. We'll keep you informed every step of the way.
                        </p>
                    </li>
                    <li className={`cs-faq-item ${activeItem === 3 ? 'active' : ''}`} onClick={() => toggleItem(3)}>
                        <button className="cs-button">
                            <span className="cs-button-text">
                                What's the first step to selling my property?
                            </span>
                        </button>
                        <p className="cs-item-p">
                            Contact Urban Nest for a free consultation! We'll assess your property, discuss current market trends, and create a personalized marketing strategy to get your home sold quickly and for top dollar.
                        </p>
                    </li>
                    <li className={`cs-faq-item ${activeItem === 4 ? 'active' : ''}`} onClick={() => toggleItem(4)}>
                        <button className="cs-button">
                            <span className="cs-button-text">
                                How will you market my property?
                            </span>
                        </button>
                        <p className="cs-item-p">
                            We utilize a comprehensive marketing strategy that includes professional photography, virtual tours, targeted online advertising, and social media promotion. We'll showcase your property to the right audience.
                        </p>
                    </li>
                    <li className={`cs-faq-item ${activeItem === 5 ? 'active' : ''}`} onClick={() => toggleItem(5)}>
                        <button className="cs-button">
                            <span className="cs-button-text">
                                What are your commission rates?
                            </span>
                        </button>
                        <p className="cs-item-p">
                            We offer competitive commission rates that are transparently explained upfront. We're confident you'll find our fees fair and our service exceptional.
                        </p>
                    </li>
                    <li className={`cs-faq-item ${activeItem === 6 ? 'active' : ''}`} onClick={() => toggleItem(6)}>
                        <button className="cs-button">
                            <span className="cs-button-text">
                                What sets Urban Nest apart from other real estate companies?
                            </span>
                        </button>
                        <p className="cs-item-p">
                            We prioritize building genuine relationships with our clients, taking the time to understand your unique needs and aspirations.  We offer personalized guidance and unwavering support throughout your real estate journey.
                        </p>
                    </li>
                    {/* Add more FAQ items similarly */}
                </ul>
            </div>
            {/* SVG Waves */}
            <picture className="cs-background">
                {/* Mobile Image */}
                <source media="(max-width: 600px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/white-waves-m.svg" />
                {/* Tablet and above Image */}
                <source media="(min-width: 601px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/white-waves.svg" />
                <img aria-hidden="true" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/white-waves.svg" loading="lazy" decoding="async" alt="moon" width="1920" height="647" />
            </picture>
        </section>
    );
};

export default Faq;
