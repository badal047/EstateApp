// import React from 'react'

// export default function About() {
//   return (
//     <div className='py-20 px-4 max-w-6xl mx-auto'>
//       <h1 className='text-3xl font-bold mb-4 text-slate-800'>About SarkarEstate</h1>
//       <p className='mb-4 text-slate-700'>SarkarEstate is a leading real estate agency that specializes in helping clients buy, sell, and rent properties in the most desirable neighborhoods. Our team of experienced agents is dedicated to providing exceptional service and making the buying and selling process as smooth as possible.</p>
//       <p className='mb-4 text-slate-700'>
//       Our mission is to help our clients achieve their real estate goals by providing expert advice, personalized service, and a deep understanding of the local market. Whether you are looking to buy, sell, or rent a property, we are here to help you every step of the way.
//       </p>
//       <p className='mb-4 text-slate-700'>Our team of agents has a wealth of experience and knowledge in the real estate industry, and we are committed to providing the highest level of service to our clients. We believe that buying or selling a property should be an exciting and rewarding experience, and we are dedicated to making that a reality for each and every one of our clients.</p>
//     </div>
//   )
// }





import React from 'react';
import '../styles/About.css'


function About() {
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
        <a href="" className="cs-button-solid">View Portfolio</a>
      </div>
    </section>
  );
}

export default About;
