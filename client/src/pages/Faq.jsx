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
                    <span className="cs-topper">Asked questions</span>
                    <h2 className="cs-title">Frequently Asked Questions</h2>
                </div>
                <ul className="cs-faq-group">
                    <li className={`cs-faq-item ${activeItem === 0 ? 'active' : ''}`} onClick={() => toggleItem(0)}>
                        <button className="cs-button">
                            <span className="cs-button-text">
                                What are your prices for brake replacement?
                            </span>
                        </button>
                        <p className="cs-item-p">
                            Some cleaning plans require a minimum commitment term. Cancelling your plan before the minimum term is complete will result in a $99 fee. If you want to learn more information about how to cancel, please inbox us.
                        </p>
                    </li>
                    <li className={`cs-faq-item ${activeItem === 1 ? 'active' : ''}`} onClick={() => toggleItem(1)}>
                        <button className="cs-button">
                            <span className="cs-button-text">
                                What is your plan cancellation policy?
                            </span>
                        </button>
                        <p className="cs-item-p">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit convallis nunc neque, bibendum pulvinar vitae commodo velit. Proin diam tortor sed malesuada nunc, habitant. Dignissim ipsum porta enim, magna urna, quam.
                        </p>
                    </li>
                    <li className={`cs-faq-item ${activeItem === 2 ? 'active' : ''}`} onClick={() => toggleItem(2)}>
                        <button className="cs-button">
                            <span className="cs-button-text">
                                What is your plan cancellation policy?
                            </span>
                        </button>
                        <p className="cs-item-p">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit convallis nunc neque, bibendum pulvinar vitae commodo velit. Proin diam tortor sed malesuada nunc, habitant. Dignissim ipsum porta enim, magna urna, quam.
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
