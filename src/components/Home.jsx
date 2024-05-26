import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import glowingProductImage from '../assets/glowgreen.jpg'; // Adjust path accordingly
import productImage from '../assets/product-image.jpg'; // Adjust path accordingly
import mailIcon from '../assets/FaEnvelope.png'; // Adjust path accordingly
import slideDownIcon from '../assets/FaAngleDown.png'; // Adjust path accordingly

const Home = () => {
    const navigate = useNavigate();

    const handleShopNowClick = () => {
        navigate('/shop');
    };

    const handleExploreClick = () => {
        navigate('/blog');
    };

    const handleExploreProductClick = () => {
        navigate('/shop');
    };

    return (
        <div className="home">
            <div className="hero-section">
                <div className="hero-text">
                    <div className="labels">
                        <span className="label">Non-toxic</span>
                        <span className="label">Ingredients</span>
                    </div>
                    <h1>CARE YOUR <span className="highlight">SKIN</span>, CARE YOUR <span className="highlight">BEAUTY</span></h1>
                    <p>Made using clean, non-toxic ingredients, our products are designed for everyone.</p>
                    <div className="buttons">
                        <button className="shop-now" onClick={handleShopNowClick}>Shop Now</button>
                        <button className="explore" onClick={handleExploreClick}>Explore</button>
                    </div>
                    <div className="hero-icons">
                        <div className="icon-container">
                            <img src={mailIcon} alt="Mail" className="hero-icon" />
                        </div>
                        <div className="icon-container">
                            <img src={slideDownIcon} alt="Slide Down" className="hero-icon" />
                        </div>
                    </div>
                </div>
                <div className="hero-image">
                    <img src={glowingProductImage} alt="Glowing Product" className="main-image"/>
                    <div className="info-box">
                        <p>24K Women face glow through product</p>
                    </div>
                </div>
                <div className="product-highlight-section">
                    <div className="product-highlight">
                        <div className="product-description">
                            <h2>Natural Coconut</h2>
                            <p>Upcoming 2024 New Face Glow Cream</p>
                        </div>
                        <div className="explore-icon" onClick={handleExploreProductClick}>
                            <p>Explore Product</p>
                            <div className="icon-circle">
                                <span className="arrow">→</span>
                            </div>
                        </div>
                    </div>
                    <div className="product-image-container">
                        <img src={productImage} alt="Product" className="product-image" />
                        <div className="product-info">
                            <p className="label">Self Care</p>
                            <div className="info-box">
                                <p>17 Winning Awards & Certificates</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
