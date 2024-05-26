import React from 'react';
import './CartPage.css';

function CartPage({ cartItems, removeFromCart, clearCart }) {
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

    return (
        <div className="cart-page">
            <h1>Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div className="cart-content">
                    <div className="cart-items">
                        {cartItems.map((item, index) => (
                            <div key={index} className="cart-item">
                                <img src={item.image} alt={item.name} />
                                <div className="item-details">
                                    <h2>{item.name}</h2>
                                    <p>${item.price.toFixed(2)}</p>
                                    <button onClick={() => removeFromCart(item)}>Remove</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cart-summary">
                        <h2>Summary</h2>
                        <p>Total: ${totalPrice.toFixed(2)}</p>
                        <button onClick={clearCart}>Clear Cart</button>
                        <button className="checkout-button">Checkout</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CartPage;
