import React from 'react';
import './footer.css';
import facebookIcon from '../assets/facebook.png'; // Adjust path as necessary
import instagramIcon from '../assets/instagram.png'; // Adjust path as necessary
import youtubeIcon from '../assets/youtibe.png'; // Adjust path as necessary
import twitterIcon from '../assets/twitter.png'; // Adjust path as necessary
import logo from '../assets/logokbir.png'; // Adjust path as necessary
import applePayIcon from '../assets/apple.png'; // Adjust path as necessary
import googlePayIcon from '../assets/google.png'; // Adjust path as necessary
import paypalIcon from '../assets/paypal.png'; // Adjust path as necessary
import visaIcon from '../assets/visa.png'; // Adjust path as necessary

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <h1>Care Your Skin, Care Your Beauty</h1>
          <p>Smile with the reflection of the glow. Let your Skin define your age and not the years</p>
          <button className="find-store-btn">Find a Store</button>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#locations">Store Locations</a></li>
              <li><a href="#blog">Our Blog</a></li>
              <li><a href="#reviews">Reviews</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Useful Links</h3>
            <ul>
              <li><a href="#new-products">New Products</a></li>
              <li><a href="#best-seller">Best Seller</a></li>
              <li><a href="#bundle-save">Bundle & Save</a></li>
              <li><a href="#gift-card">Online Gift Card</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Information</h3>
            <ul>
              <li><a href="#return">Start a Return</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#shipping">Shipping FAQs</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-social">
          <a href="#facebook"><img src={facebookIcon} alt="Facebook" /></a>
          <a href="#instagram"><img src={instagramIcon} alt="Instagram" /></a>
          <a href="#youtube"><img src={youtubeIcon} alt="YouTube" /></a>
          <a href="#twitter"><img src={twitterIcon} alt="Twitter" /></a>
        </div>
        <div className="footer-logo">
          <img src={logo} alt="Glowing Logo" />
        </div>
        <div className="footer-payments">
          <img src={applePayIcon} alt="Apple Pay" />
          <img src={googlePayIcon} alt="Google Pay" />
          <img src={paypalIcon} alt="PayPal" />
          <img src={visaIcon} alt="Visa" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
