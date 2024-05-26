import React from 'react';
import './ShopPage.css';
import product1 from '../assets/product-1.jpg'; // Adjust path as necessary
import product2 from '../assets/product2.jpg'; // Adjust path as necessary
import product3 from '../assets/product3.jpg'; // Adjust path as necessary
import starRating from '../assets/5stars.png'; // Adjust path as necessary

const categories = [
    {
        name: 'Hair Care',
        products: [
            { id: 1, name: 'Shampoo', price: 20.00, image: product1 },
            { id: 2, name: 'Conditioner', price: 22.00, image: product2 },
            { id: 3, name: 'Hair Oil', price: 18.00, image: product3 },
        ],
    },
    {
        name: 'Face Care',
        products: [
            { id: 4, name: 'Face Wash', price: 25.00, image: product1 },
            { id: 5, name: 'Moisturizer', price: 28.00, image: product2 },
            { id: 6, name: 'Sunscreen', price: 30.00, image: product3 },
        ],
    },
    {
        name: 'Body',
        products: [
            { id: 7, name: 'Body Wash', price: 15.00, image: product1 },
            { id: 8, name: 'Body Lotion', price: 20.00, image: product2 },
            { id: 9, name: 'Body Scrub', price: 22.00, image: product3 },
        ],
    },
    {
        name: 'Men',
        products: [
            { id: 10, name: 'Shaving Cream', price: 18.00, image: product1 },
            { id: 11, name: 'Beard Oil', price: 20.00, image: product2 },
            { id: 12, name: 'Face Wash', price: 25.00, image: product3 },
        ],
    },
    {
        name: 'Vegetable Oil',
        products: [
            { id: 13, name: 'Olive Oil', price: 12.00, image: product1 },
            { id: 14, name: 'Coconut Oil', price: 15.00, image: product2 },
            { id: 15, name: 'Almond Oil', price: 18.00, image: product3 },
        ],
    },
    {
        name: 'Soap',
        products: [
            { id: 16, name: 'Handmade Soap', price: 10.00, image: product1 },
            { id: 17, name: 'Organic Soap', price: 12.00, image: product2 },
            { id: 18, name: 'Aloe Vera Soap', price: 14.00, image: product3 },
        ],
    },
];

function ShopPage({ addToCart }) {
    return (
        <div className="shop-page">
            <h1>Our Shop</h1>
            {categories.map((category, index) => (
                <div key={index} className="category-section">
                    <h2>{category.name}</h2>
                    <div className="products-grid">
                        {category.products.map((product) => (
                            <div key={product.id} className="product-card">
                                <img src={product.image} alt={product.name} />
                                <h3>{product.name}</h3>
                                <img src={starRating} alt="5 stars" className="stars" />
                                <p>${product.price.toFixed(2)}</p>
                                <button className="buy-button" onClick={() => addToCart(product)}>Buy</button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ShopPage;
