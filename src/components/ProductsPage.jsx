import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductsPage.css';
import product1 from '../assets/product2.jpg';  // Adjust path as necessary
import product2 from '../assets/product3.jpg';  // Adjust path as necessary
import product3 from '../assets/product4.jpg';  // Adjust path as necessary
import product4 from '../assets/product5.jpg';  // Adjust path as necessary
import product5 from '../assets/product6.jpg';  // Adjust path as necessary
import fivestars from '../assets/5stars.png';

function ProductsPage() {
    const navigate = useNavigate();

    const handleViewAllClick = () => {
        navigate('/shop');
    };

    return (
        <div className="products-page">
            <h1>Our Products</h1>
            <div className="view-all" onClick={handleViewAllClick}>
                <span>View All Products</span>
                <div className="view-all-icon">
                    <span>&#8594;</span> {/* Right arrow icon */}
                </div>
            </div>
            <div className="products-grid">
                <div className="product-card">
                    <img src={product1} alt="Product 1" />
                    <h2>Supreme Moisture Mast</h2>
                    <img src={fivestars} alt="5 stars" className="stars" />
                    <p>$18.00</p>
                    <button className="buy-button">Buy</button>
                </div>
                <div className="product-card">
                    <img src={product2} alt="Product 2" />
                    <h2>Scalp Moisturizing Cream</h2>
                    <img src={fivestars} alt="5 stars" className="stars" />
                    <p>$42.00</p>
                    <button className="buy-button">Buy</button>
                </div>
                <div className="product-card">
                    <img src={product3} alt="Product 3" />
                    <h2>Supreme Polishing Treatment</h2>
                    <img src={fivestars} alt="5 stars" className="stars" />
                    <p>$45.00</p>
                    <button className="buy-button">Buy</button>
                </div>
                <div className="product-card">
                    <img src={product4} alt="Product 4" />
                    <h2>Shield Shampoo</h2>
                    <img src={fivestars} alt="5 stars" className="stars" />
                    <p>$45.00</p>
                    <button className="buy-button">Buy</button>
                </div>
            </div>
        </div>
    );
}

export default ProductsPage;
