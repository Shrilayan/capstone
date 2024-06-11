import React from 'react';
import './Contact.css'; 

const Contact = () => {
    return (
        <div className="container contact-container">
            <div className="row">
                <div className="col-md-6">
                    <div className="contact-info">
                        <div className="contact-item">
                            <i className="bi bi-envelope"></i>
                            <p>iamshrilayan@gmail.com</p>
                        </div>
                        <div className="contact-item">
                            <i className="bi bi-telephone-fill"></i>
                            <p>+91 8336057603</p>
                        </div>
                        <div className="contact-item">
                            <i className="bi bi-house"></i>
                            <p>AC-100, Salt Lake City, Kolkata-700102</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="social-media">
                        <div className="social-item">
                            <i className="bi bi-instagram"></i>
                            <p>FoodMood</p>
                        </div>
                        <div className="social-item">
                            <i className="bi bi-facebook"></i>
                            <p>Food For Happiness</p>
                        </div>
                        <div className="social-item">
                            <i className="bi bi-twitter"></i>
                            <p>Food-Tastic</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
