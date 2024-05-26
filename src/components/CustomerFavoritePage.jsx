// src/components/CustomerFavoritePage.jsx
import React from 'react';
import './CustomerFavoritePage.css';
import featureImage1 from '../assets/feature1.jpg'; // Adjust path as necessary
import featureImage2 from '../assets/feature2.jpg'; // Adjust path as necessary
import product1 from '../assets/product-1.jpg'; // Adjust path as necessary
import product2 from '../assets/product-2.jpg'; // Adjust path as necessary
import product3 from '../assets/product-3.jpg'; // Adjust path as necessary
import product4 from '../assets/product-4.jpg'; // Adjust path as necessary
import starRating from '../assets/5stars.png'; // Adjust path as necessary


function CustomerFavoritePage() {
    return (
        <div className="customer-favorite-page">
            <div className="header-section">
                <h1>Customer Favorite Beauty Essentials</h1>
                <p className="description">Made using clean, non-toxic ingredients, our products are designed for everyone.</p>
            </div>
            <div className="favorites-grid">
                <div className="feature-card item-a">
                    <div className="hero-image">
                        <img src={featureImage1} alt="Feature 1" className="main-image" />
                        <div className="info-box">
                            <h2>Empower Yourself</h2>
                            <p>Get the skin you want to feel</p>
                        </div>
                    </div>
                </div>
                <div className="product-card item-b">
                    <img src={product1} alt="Vital Eye Cream" />
                    <h2>Vital Eye Cream</h2>
                    <img src={starRating} alt="5 stars" className="stars" />
                    <p>$24.00</p>
                </div>
                <div className="product-card item-c">
                    <img src={product2} alt="Enriched Hand Wash" />
                    <h2>Enriched Hand Wash</h2>
                    <img src={starRating} alt="5 stars" className="stars" />
                    <p>$90.00</p>
                </div>
                <div className="product-card item-d">
                    <img src={product3} alt="Shield Conditioner" />
                    <h2>Shield Conditioner</h2>
                    <img src={starRating} alt="5 stars" className="stars" />
                    <p>$20.00</p>
                </div>
                <div className="product-card item-e">
                    <img src={product4} alt="Perfecting Facial Oil" />
                    <h2>Perfecting Facial Oil</h2>
                    <img src={starRating} alt="5 stars" className="stars" />
                    <p>$24.00</p>
                </div>
                <div className="feature-card item-f">
                    <div className="hero-image">
                        <img src={featureImage2} alt="Feature 2" className="main-image" />
                        <div className="info-box">
                            <h2>Invest Time On Your Body</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomerFavoritePage;