




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
            We are a full service construction company offering everything from residential and commercial painting to full home remodels and new home additions.
          </p>
        </div>
        <ul className="cs-card-group">
          <li className="cs-item">
            <a href="" className="cs-link">
              <picture className="cs-picture">
                <img className="cs-icon" src="https://csimg.nyc3.digitaloceanspaces.com/Services/hand.svg" loading="lazy" decoding="async" alt="icon" width="38" height="52" aria-hidden="true" />
              </picture>
              <h3 className="cs-h3">Service Number 1</h3>
              <p className="cs-item-text">
                As our client, you may utilize our in-house design capabilities or work with other contractors and architects of your choice.
              </p>
            </a>
          </li>
          <li className="cs-item">
            <a href="" className="cs-link">
              <picture className="cs-picture">
                <img className="cs-icon" src="https://csimg.nyc3.digitaloceanspaces.com/Services/hand.svg" loading="lazy" decoding="async" alt="icon" width="38" height="52" aria-hidden="true" />
              </picture>
              <h3 className="cs-h3">Service Number 2</h3>
              <p className="cs-item-text">
                As our client, you may utilize our in-house design capabilities or work with other contractors and architects of your choice.
              </p>
            </a>
          </li>
          <li className="cs-item">
            <a href="" className="cs-link">
              <picture className="cs-picture">
                <img className="cs-icon" src="https://csimg.nyc3.digitaloceanspaces.com/Services/paint.svg" loading="lazy" decoding="async" alt="icon" width="38" height="52" aria-hidden="true" />
              </picture>
              <h3 className="cs-h3">Service Number 3</h3>
              <p className="cs-item-text">
                As our client, you may utilize our in-house design capabilities or work with other contractors and architects of your choice.
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
