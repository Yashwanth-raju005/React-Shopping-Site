/* eslint-disable no-unused-vars */
import React from 'react';
import { useCart } from './Context/cartContext';
import NavBar from './components/NavBar';

const UserCart = () => {
    const { cartItems, addToCart, removeFromCart } = useCart();

    return (
        <div>
            <NavBar />
            {cartItems.length === 0 ? (
                <div className="empty-cart">
                    <h1 className='ca-head'>Welcome To Cart</h1>
                    <h2 className='ca-head'>Your cart is empty</h2>
                </div>
            ) : (
                cartItems.map((item) => {
                    return (
                        <div className="cart-section" key={item.id}>
                            <div className="cart-img">
                                <img src={item.image} alt="" />
                            </div>
                            <div className="cart-details">
                                <h3>{item.product}</h3>
                                <h2>{item.price}</h2>
                                <h3>{item.model}</h3>
                            </div>
                            <div>
                                <button onClick={() => removeFromCart(item)} className="rembtn">Remove</button>
                            </div>
                        </div>
                    );
                })
            )}
        </div>
    );
};

export default UserCart;