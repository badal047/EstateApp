import React from 'react';
import '../styles/Stats.css'

const Statistics = () => {
    return (
        <section id="stats-1361">
            <div className="cs-container">
                <ul className="cs-card-group">
                    <li className="cs-item">
                        <span className="cs-header">Daily Viewers</span>
                        <span className="cs-number">50k+</span>
                    </li>
                    <li className="cs-item">
                        <span className="cs-header">Satisfied Customers</span>
                        <span className="cs-number">2k+</span>
                    </li>
                    <li className="cs-item">
                        <span className="cs-header">Repeat Customers</span>
                        <span className="cs-number">1k+</span>
                    </li>
                    <li className="cs-item">
                        <span className="cs-header">Professional Team</span>
                        <span className="cs-number">37</span>
                    </li>
                </ul>
            </div>
            {/* Background image */}
            <picture className="cs-background">
                {/* Mobile Image */}
                <source media="(max-width: 600px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/meeting6-m.jpg" />
                {/* Tablet and above Image */}
                <source media="(min-width: 601px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/meeting6.jpg" />
                <img loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/meeting6.jpg" alt="meeting" width="1280" height="568" />
            </picture>
        </section>
    );
};

export default Statistics;
