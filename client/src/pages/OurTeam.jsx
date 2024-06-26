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
                            <source media="(max-width: 600px)" srcSet="https://thumbs.dreamstime.com/b/cheerful-business-lady-holding-beverage-smiling-relaxed-businesswoman-36427323.jpg" />
                            {/* Tablet and above Image */}
                            <source media="(min-width: 601px)" srcSet="https://thumbs.dreamstime.com/b/cheerful-business-lady-holding-beverage-smiling-relaxed-businesswoman-36427323.jpg" />
                            <img loading="lazy" decoding="async" src="https://thumbs.dreamstime.com/b/cheerful-business-lady-holding-beverage-smiling-relaxed-businesswoman-36427323.jpg" alt="person" width="305" height="407" />
                        </picture>
                        <div className="cs-info">
                            <span className="cs-name">Maya Patel </span>
                            <span className="cs-job">CEO(Chief Enthusiasm Officer)</span>
                        </div>
                    </li>
                    <li className="cs-item">
                        <picture className="cs-picture">
                            {/* Mobile Image */}
                            <source media="(max-width: 600px)" srcSet="https://wallpapercave.com/wp/wp7047913.jpg" />
                            {/* Tablet and above Image */}
                            <source media="(min-width: 601px)" srcSet="https://wallpapercave.com/wp/wp7047913.jpg" />
                            <img loading="lazy" decoding="async" src="https://wallpapercave.com/wp/wp7047913.jpg" alt="person" width="305" height="407" />
                        </picture>
                        <div className="cs-info">
                            <span className="cs-name">Gaur Gopal</span>
                            <span className="cs-job">Head of Client Relations  </span>
                        </div>
                    </li>
                    <li className="cs-item">
                        <picture className="cs-picture">
                            {/* Mobile Image */}
                            <source media="(max-width: 600px)" srcSet="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202306/annamalai-sixteen_nine.jpg?VersionId=nXjrjycrjP3fJ5T5aFKZVyvS6K1yunl_" />
                            {/* Tablet and above Image */}
                            <source media="(min-width: 601px)" srcSet="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202306/annamalai-sixteen_nine.jpg?VersionId=nXjrjycrjP3fJ5T5aFKZVyvS6K1yunl_" />
                            <img loading="lazy" decoding="async" src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202306/annamalai-sixteen_nine.jpg?VersionId=nXjrjycrjP3fJ5T5aFKZVyvS6K1yunl_" alt="person" width="305" height="407" />
                        </picture>
                        <div className="cs-info">
                            <span className="cs-name">Annamalai</span>
                            <span className="cs-job">Negotiation Specialist (Master of the Deal)</span>
                        </div>
                    </li>
                    <li className="cs-item">
                        <picture className="cs-picture">
                            {/* Mobile Image */}
                            <source media="(max-width: 600px)" srcSet="https://i1.sndcdn.com/artworks-000107664907-cja6vv-t500x500.jpg" />
                            {/* Tablet and above Image */}
                            <source media="(min-width: 601px)" srcSet="https://i1.sndcdn.com/artworks-000107664907-cja6vv-t500x500.jpg" />
                            <img loading="lazy" decoding="async" src="https://i1.sndcdn.com/artworks-000107664907-cja6vv-t500x500.jpg" alt="person" width="305" height="407" />
                        </picture>
                        <div className="cs-info">
                            <span className="cs-name">Keshav Goswami </span>
                            <span className="cs-job">Marketing Specialist</span>
                        </div>
                    </li>
                    {/* Repeat similar structure for other team members */}
                </ul>
            </div>
        </section>
    );
};

export default MeetTheTeam;
