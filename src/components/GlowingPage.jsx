import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GlowingPage.css';
import mainImage from '../assets/main-image.png';  // Adjust path as necessary
import product1 from '../assets/product1.jpg';  // Adjust path as necessary

function GlowingPage() {
    const navigate = useNavigate();

    const handleCategoryClick = () => {
        navigate('/shop');
    };

    return (
        <div className="glowing-page">
            <div className="top-section">
                <div className="text-content">
                    <h1>Glow with Confidence: Discover Your Radiance at Glowing</h1>
                    <div className="paragraphs">
                        <p>Organic cosmetics are beauty products made with natural and organic ingredients that are grown without the use of synthetic fertilizers, pesticides, or other harmful chemicals.</p>
                        <p>These products are often free of harsh additives and are environmentally friendly, making them a popular choice among health-conscious consumers.</p>
                    </div>
                </div>
                <div className="image-content">
                    <img src={mainImage} alt="Glowing Cosmetics" />
                </div>
            </div>
            <div className="products-section">
                <div className="product product1">
                    <img src={product1} alt="Product 1" />
                    <br />
                    <div className="product-details">
                        <h1>"Experience Quality: Discover Our Extensive Range of Premium Products at Glowing."</h1>
                        <br />
                        <div className="product-categories">
                            <span className="category" onClick={handleCategoryClick}>Hair Care</span>
                            <span className="category" onClick={handleCategoryClick}>Face Care</span>
                            <span className="category" onClick={handleCategoryClick}>Body</span>
                            <span className="category" onClick={handleCategoryClick}>Men</span>
                            <span className="category" onClick={handleCategoryClick}>Vegetable Oil</span>
                            <span className="category" onClick={handleCategoryClick}>Soap</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GlowingPage;
