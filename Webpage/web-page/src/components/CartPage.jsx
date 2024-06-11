import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import './CartPage.css'; // Import CSS file for styling

function CartPage() {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchCartItems();
    }, []);

    const fetchCartItems = async () => {
        try {
            const response = await axios.get('http://localhost:7077/api/cart-items');
            setCart(response.data);
        } catch (error) {
            console.error('Error fetching cart items:', error);
        }
    };

    const handleQuantityChange = (itemId, newQuantity) => {
        if (newQuantity === 0) {
            setCart(prevCart => prevCart.filter(item => item.id !== itemId));
            axios.delete(`http://localhost:7077/api/cart-items/${itemId}`)
                .then(response => {
                    console.log('Item removed successfully:', response.data);
                })
                .catch(error => {
                    console.error('Error removing item:', error);
                });
        } else {
            setCart(prevCart =>
                prevCart.map(item => (item.id === itemId ? { ...item, quantity: newQuantity } : item))
            );

            axios.put(`http://localhost:7077/api/cart-items/${itemId}`, { quantity: newQuantity })
                .then(response => {
                    console.log('Quantity updated successfully:', response.data);
                })
                .catch(error => {
                    console.error('Error updating quantity:', error);
                });
        }
    };

    const getTotalQuantity = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + (item.product.price * item.quantity), 0).toFixed(2);
    };

    const handleBuyNow = () => {
        navigate("/payment");
        // Implement the functionality for the "Buy Now" button
        console.log('Proceed to buy');
    };

    return (
        <div className="cart-page">
            <h1>Cart Details</h1>
            <div className="navigation">
                <Link to="/productList">Products</Link>
            </div>
            <div className="cart-items">
                {cart.map(item => (
                    <div key={item.id} className="cart-item">
                        <img src={item.product.imageUrl} alt={item.product.name} className="item-image" />
                        <div className="item-details">
                            <h2>{item.product.name}</h2>
                            <p>{item.product.description}</p>
                            <p>Price: ₹{item.product.price}</p>
                            <div className="quantity-controls">
                                <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                                <span>Quantity: {item.quantity}</span>
                                <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="summary">
                <h2>Summary</h2>
                <p>Total Quantity: {getTotalQuantity()}</p>
                <p>Total Price: ₹{getTotalPrice()}</p>
                <button onClick={handleBuyNow}>Buy Now</button>
            </div>
        </div>
    );
}

export default CartPage;


