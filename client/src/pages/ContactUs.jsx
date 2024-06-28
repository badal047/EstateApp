import React from 'react';
import '../styles/ContactUs.css'
import {useState} from 'react'


const ContactUs = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',

    });
    const [message, setMessage] = useState('');
    const onChangeMessage = (e) => {
        setMessage(e.target.value);
    };

    // Function to handle changes in form fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can use the formData object for further processing, such as sending it to a server or performing client-side validation.
        console.log(formData);
        // Reset the form after submission


        const mailtoLink = `mailto:${'2021ugec047@nitjsr.ac.in'}?subject=Regarding ${'Contacting Urban Nest'}&body=${encodeURIComponent(message)}`;

        // Open the default email client when clicking the link
        window.location.href = mailtoLink;


        setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
        });
        setMessage('');
    };


               
    return (
        <section id="contact-1441">
            <div className="cs-container">
                <div className="cs-content">
                    <span className="cs-topper">Contact Us</span>
                    <h2 className="cs-title">We Love to Hear From Our Happy Customers</h2>
                </div>
                <div className="cs-contact-group">
                    <p className="cs-text">
                        Your real estate journey doesn't have to be a solo adventure. Partner with Urban Nest and let's find your perfect urban space together.
                    </p>
                    <ul className="cs-ul">
                        <li className="cs-li">
                            <picture className="cs-icon-wrapper">
                                <img aria-hidden="true" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/phone-yellow.svg" alt="phone icon" className="cs-icon" width="40" height="40" decoding="async" />
                            </picture>
                            <div className="cs-flex-group">
                                <span className="cs-header">Phone</span>
                                <a href="tel:888-4565-789" className="cs-link">+91 888 4565 789</a>
                            </div>
                        </li>
                        <li className="cs-li">
                            <picture className="cs-icon-wrapper">
                                <img aria-hidden="true" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/pin-yellow.svg" alt="address icon" className="cs-icon" width="40" height="40" decoding="async" />
                            </picture>
                            <div className="cs-flex-group">
                                <span className="cs-header">Address</span>
                                <a href="mailto:Email@stitch.com" className="cs-link">121 King St, NewTown, Kolkata</a>
                            </div>
                        </li>
                    </ul>
                    <picture className="cs-background">
                        {/* Mobile Image */}
                        <source media="(max-width: 600px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Landscapes/wind-turbine.jpg" />
                        {/* Tablet and above Image */}
                        <source media="(min-width: 601px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Landscapes/wind-turbine.jpg" />
                        <img loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Landscapes/wind-turbine.jpg" alt="wind turbine" width="650" height="613" />
                    </picture>
                </div>
                {/* Form */}
                <form className="cs-form" id="cs-form-1441" name="Contact Form" method="post" onSubmit={handleSubmit}>
                    <label className="cs-label">
                        Name
                        <input className="cs-input" required type="text" id="name-1441" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
                    </label>
                    <label className="cs-label cs-email">
                        Email
                        <input className="cs-input" required type="email" id="email-1441" name="email" placeholder="Email" value={formData.email} onChange={handleChange}/>
                    </label>
                    <label className="cs-label cs-phone">
                        Phone
                        <input className="cs-input" required type="number" id="phone-1441" name="phone" placeholder="Phone"  value={formData.phone} onChange={handleChange} />
                    </label>
                    <label className="cs-label">
                        Message
                        <textarea className="cs-input cs-textarea" required name="Message" id="message-1441" placeholder="Write message..."   value={message} onChange={onChangeMessage}></textarea>
                    </label>
                    <button className="cs-button-solid cs-submit" type="submit">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default ContactUs;
