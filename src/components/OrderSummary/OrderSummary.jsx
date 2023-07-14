import React, { useState } from 'react';

const OrderSummary = () => {
  const [ordersummary, setOrderSummary] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formDataObj = Object.fromEntries(formData.entries());

    var requestOptions = {
      method: 'POST',
      body: JSON.stringify(formDataObj),
      headers: {
        'Content-Type': 'application/json'
      }
    };

    fetch("http://localhost:4000/ordersummary", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result); // Handle the response from the server as needed
        setOrderSummary(result); // Update menu state if required
      })
      .catch(error => console.log('error', error));
  };

  return (
    <section className="order" id="order">
      <h3 className="sub-heading">Order now</h3>

      <form onSubmit={handleSubmit}>
        <div className="inputBox">
          <div className="input">
            <span>your name</span>
            <input type="text" name="name" placeholder="enter your name" />
          </div>
          <div className="input">
            <span>Phone number</span>
            <input type="number" name="phoneNumber" placeholder="enter your number" />
          </div>
          <div className="input">
            <span>Pin code</span>
            <input type="number" name="pinCode" placeholder="pin code no." />
          </div>
          <div className="input">
            <span>City & State</span>
            <input type="text" name="cityState" placeholder="enter the city and state" />
          </div>
          <div className="input">
            <span>date and time</span>
            <input type="datetime-local" name="dateTime" />
          </div>
        </div>
        <div className="inputBox">
          <div className="input">
            <span>your address</span>
            <textarea name="address" placeholder="enter your address" id="" cols="30" rows="10"></textarea>
          </div>
          <div className="input">
            <span>your message</span>
            <textarea name="message" placeholder="enter your message" id="" cols="30" rows="10"></textarea>
          </div>
          <div>
            <label htmlFor="paymentMode">Payment method:</label>
            <select name="paymentMethod" id="paymentMode">
              <option value="cash">Cash</option>
              <option value="phonepe">Phonepe</option>
              <option value="gpay">Gpay</option>
            </select>
          </div>
          <br /><br />
          <input type="submit" value="Submit" />
        </div>
      </form>
    </section>
  );
}

export default OrderSummary;
