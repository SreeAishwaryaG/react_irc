import React, { useState } from 'react';
import './Payment.css';
import { Link } from 'react-router-dom';
const PaymentPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    address: '',
    // Add more fields as needed
  });

  const [isPaymentSuccessful, setPaymentSuccessful] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Add logic for processing payment (integrate with a secure payment gateway)
    console.log('Payment submitted:', formData);

    // Simulate a successful payment
    // In a real application, integrate with a payment gateway and handle success accordingly
    setPaymentSuccessful(true);
  };

 

  const CardField = ({ label, name, required, maxLength, placeholder }) => {
    return (
      <div className="card-field">
        <label htmlFor={name}>{label}</label>
        <input
          type="text"
          name={name}
          value={formData[name]}
          onChange={handleInputChange}
          maxLength={maxLength}
          placeholder={placeholder}
          required={required}
        />
      </div>
    );
  };
  
  
  
  

  return (
    <div>
      <div className={isPaymentSuccessful ? 'paycard success' : 'paycard'}>
        {isPaymentSuccessful ? (
          <div className="success-message">
            <h2>Payment Successful!</h2>
            <p>Thank you for your purchase. Your order details:</p>
            <p>Name: {formData.name}</p>
            <p>Card Number: **** **** **** {formData.cardNumber.slice(-4)}</p>
            <p>Expiration Date: {formData.expirationDate}</p>
            <p>CVV: ***</p>
            <p>Address: {formData.address}</p>
            <Link to='/'>
            <button className='paybutton2'>Continue Shopping</button>
            </Link>

          </div>
        ) : (
          <>
            <h2>Secure Payment</h2>

            <div>
              <h3>Order Summary</h3>
              <p>Product Name - ToyBike</p>
              <p>Subtotal: ₹.755</p>
              <p>Shipping: ₹.70</p>
              <p>Total: ₹.825</p>
            </div>

            <form onSubmit={handlePaymentSubmit}>
              <h3>Personal Information</h3>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="payinput"
                value={formData.name}
                onChange={handleInputChange}
                required
              />

              {/* Use the CardField component for card-related fields */}
              <CardField label="Card Number" name="cardNumber" required maxLength={23}  />
<CardField label="Expiration Date" name="expirationDate" required maxLength={7} placeholder="MM/YYYY" />
<CardField label="CVV" name="cvv" required maxLength={3} placeholder="CVV" />





              {/* Add more form fields for address, etc. */}
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                className="payinput"
                value={formData.address}
                onChange={handleInputChange}
                required
              />

              <button type="submit" className="paybutton">
                Complete Purchase
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
