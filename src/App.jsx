import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/Home';
import GlowingPage from './components/GlowingPage';
import ProductsPage from './components/ProductsPage';
import TestimonialPage from './components/TestimonialPage';
import CustomerFavoritePage from './components/CustomerFavoritePage';
import ShopPage from './components/ShopPage'; 
import BlogPage from './components/BlogsPage';
import Footer from './components/footer';
import CartPage from './components/CartPage';
import Login from './components/Login';
import './App.css';

const App = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    const removeFromCart = (product) => {
        setCartItems(cartItems.filter(item => item.id !== product.id));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<>
                        <Home addToCart={addToCart} />
                        <GlowingPage />
                        <TestimonialPage />
                    </>} />
                    <Route path="/glowing" element={<GlowingPage />} />
                    <Route path="/products" element={<ProductsPage addToCart={addToCart} />} />
                    <Route path="/testimonials" element={<TestimonialPage />} />
                    <Route path="/favorites" element={<CustomerFavoritePage addToCart={addToCart} />} />
                    <Route path="/shop" element={<ShopPage addToCart={addToCart} />} />
                    <Route path="/elements" element={<>
                        <ProductsPage addToCart={addToCart} />
                        <CustomerFavoritePage addToCart={addToCart} />
                    </>} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/cart" element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} clearCart={clearCart} />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/Register" element={<Login />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;