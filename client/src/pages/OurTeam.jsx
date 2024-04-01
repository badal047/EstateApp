import React from 'react';
import '../styles/OurTeam.css'

const MeetTheTeam = () => {
    return (
        <section id="meet-team-1332">
            <div className="cs-container">
                <div className="cs-content">
                    <span className="cs-topper">Our Expert Team</span>
                    <h2 className="cs-title">Our Awesome Team Members</h2>
                    <p className="cs-text">
                        In the new era of technology we look in the future with certainty and for any post types, or just they are so much great of all to a program.
                    </p>
                </div>
                <ul className="cs-card-group">
                    <li className="cs-item">
                        <picture className="cs-picture">
                            {/* Mobile Image */}
                            <source media="(max-width: 600px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gallery1.jpg" />
                            {/* Tablet and above Image */}
                            <source media="(min-width: 601px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gallery1.jpg" />
                            <img loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gallery1.jpg" alt="person" width="305" height="407" />
                        </picture>
                        <div className="cs-info">
                            <span className="cs-name">Hanna Green</span>
                            <span className="cs-job">Tax Advisor</span>
                        </div>
                    </li>
                    <li className="cs-item">
                        <picture className="cs-picture">
                            {/* Mobile Image */}
                            <source media="(max-width: 600px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gallery1.jpg" />
                            {/* Tablet and above Image */}
                            <source media="(min-width: 601px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gallery1.jpg" />
                            <img loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gallery1.jpg" alt="person" width="305" height="407" />
                        </picture>
                        <div className="cs-info">
                            <span className="cs-name">Hanna Green</span>
                            <span className="cs-job">Tax Advisor</span>
                        </div>
                    </li>
                    <li className="cs-item">
                        <picture className="cs-picture">
                            {/* Mobile Image */}
                            <source media="(max-width: 600px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gallery1.jpg" />
                            {/* Tablet and above Image */}
                            <source media="(min-width: 601px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gallery1.jpg" />
                            <img loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gallery1.jpg" alt="person" width="305" height="407" />
                        </picture>
                        <div className="cs-info">
                            <span className="cs-name">Hanna Green</span>
                            <span className="cs-job">Tax Advisor</span>
                        </div>
                    </li>
                    <li className="cs-item">
                        <picture className="cs-picture">
                            {/* Mobile Image */}
                            <source media="(max-width: 600px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gallery1.jpg" />
                            {/* Tablet and above Image */}
                            <source media="(min-width: 601px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gallery1.jpg" />
                            <img loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gallery1.jpg" alt="person" width="305" height="407" />
                        </picture>
                        <div className="cs-info">
                            <span className="cs-name">Hanna Green</span>
                            <span className="cs-job">Tax Advisor</span>
                        </div>
                    </li>
                    {/* Repeat similar structure for other team members */}
                </ul>
            </div>
        </section>
    );
};

export default MeetTheTeam;
