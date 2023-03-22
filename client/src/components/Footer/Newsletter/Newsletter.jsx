import React from 'react';
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
} from "react-icons/fa";
import "./Newsletter.scss";

const Newsletter = () => {
    return (
    <div className='newsletter-section'>
        <div className="newsletter-content">
            <span className="small-text">
                Newsletter
            </span>
            <span className="big-text">
                Sign up for latest updateds and offers
            </span>
            <div className="form">
                <input type="text" placeholder='Email Address' />
                <button>Subscribe</button>
            </div> 
            <div className="text"> Will be use in accoundance with our Privicy Policy</div>
            <div className="social-icon">
             <FaFacebookF size={14} />
             <FaTwitter size={14} />
             <FaInstagram size={14} />
             <FaLinkedin size={14} />
            </div>           
        </div>
    </div>    
    );
};

export default Newsletter;
