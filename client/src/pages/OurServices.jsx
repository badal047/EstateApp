




import React from 'react';
import '../styles/OurServices.css'


function OurServices() {
  return (
    <section id="services-285">
      <div className="cs-container">
        <div className="cs-content">
          <span className="cs-topper">Best-In-Class</span>
          <h2 className="cs-title">What We Do</h2>
          <p className="cs-text">
          Urban Nest isn't just a real estate brokerage firm, it's your trusted partner in navigating the exciting and ever-evolving urban landscape.
          </p>
        </div>
        <ul className="cs-card-group">
          <li className="cs-item">
            <a href="" className="cs-link">
              <picture className="cs-picture">
                <img className="cs-icon" src="https://img.icons8.com/?size=100&id=0sTmBjAQDKfi&format=png&color=000000" loading="lazy" decoding="async" alt="icon" width="38" height="52" aria-hidden="true" />
              </picture>
              <h3 className="cs-h3">Deep Local Expertise:</h3>
              <p className="cs-item-text">
               We're deeply rooted in the communities we serve. Our agents possess a comprehensive understanding of local neighborhoods, market trends, and hidden gems, ensuring you make informed decisions.
              </p>
            </a>
          </li>
          <li className="cs-item">
            <a href="" className="cs-link">
              <picture className="cs-picture">
                <img className="cs-icon" src="https://img.icons8.com/?size=100&id=60394&format=png&color=000000" loading="lazy" decoding="async" alt="icon" width="38" height="52" aria-hidden="true" />
              </picture>
              <h3 className="cs-h3">Focus on You: </h3>
              <p className="cs-item-text">
              We prioritize understanding your unique needs and aspirations. Whether you're a first-time homebuyer, a seasoned investor, or looking for the perfect rental property, we provide personalized guidance and support throughout your journey.
              </p>
            </a>
          </li>
          <li className="cs-item">
            <a href="" className="cs-link">
              <picture className="cs-picture">
                <img className="cs-icon" src="https://img.icons8.com/?size=100&id=jov7rmAm6Eae&format=png&color=000000" loading="lazy" decoding="async" alt="icon" width="38" height="52" aria-hidden="true" />
              </picture>
              <h3 className="cs-h3">Tech-Savvy Approach: </h3>
              <p className="cs-item-text">
              We leverage cutting-edge technology to streamline the process and provide you with the most up-to-date market information. From interactive listings to virtual tours, we empower you to make informed decisions at your own pace.
              </p>
            </a>
          </li>
        </ul>
        {/* <a href="" className="cs-button-solid">View Portfolio</a> */}
      </div>
    </section>
  );
}

export default OurServices;
