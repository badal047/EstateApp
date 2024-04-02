import React from 'react';
import '../styles/Footer.css'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      {/* FONT AWESOME */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />

      {/* GOOGLE FONTS */}
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Play&display=swap"
        rel="stylesheet"
      />

      <div className="footer">
        <div className="row">
          <a href='https://www.facebook.com' ><i className="fa fa-facebook"></i></a>
          <a href="https://www.instagram.com"><i className="fa fa-instagram"></i></a>
          <a href="https://www.youtube.com"><i className="fa fa-youtube"></i></a>
          <a href="https://www.twitter.com"><i className="fa fa-twitter"></i></a>
        </div>

        <div className="row">
          <ul>
            <li><a href="contact-us">Contact us</a></li>
            <li><a href="our-services">Our Services</a></li>
            <li><a href="privacy-policy">Privacy Policy</a></li>
            <li><a href="termsandconditions">Terms & Conditions</a></li>
            <li><a href="career">Career</a></li>
          </ul>
        </div>

        <div className="row">
          Copyright © 2024 JAMSHEDPUR - All rights reserved || Designed By: Badal Sarkar
        </div>
      </div>
    </footer>
  );
}

export default Footer;
