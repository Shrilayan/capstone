import React, { useState } from 'react';
import './PaymentPage.css'; // Import CSS file for styling

function PaymentPage() {
    const [formData, setFormData] = useState({
        cardNumber: '',
        expirationDate: '',
        cvv: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can add logic to handle the form submission, such as sending payment details to a server.
        console.log('Form submitted:', formData);
    };

    return (
        <div className="payment-page">
            <h2 className="payment-heading">Payment Details</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="cardNumber">Card Number</label>
                    <input type="text" id="cardNumber" name="cardNumber" value={formData.cardNumber} onChange={handleInputChange} placeholder="Enter card number" />
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="expirationDate">Expiration Date</label>
                        <input type="text" id="expirationDate" name="expirationDate" value={formData.expirationDate} onChange={handleInputChange} placeholder="MM/YYYY" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cvv">CVV</label>
                        <input type="text" id="cvv" name="cvv" value={formData.cvv} onChange={handleInputChange} placeholder="CVV" />
                    </div>
                </div>
                <button type="submit" className="pay-button">Pay Now</button>
            </form>
        </div>
    );
}

export default PaymentPage;