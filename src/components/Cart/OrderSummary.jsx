import React, { useState } from 'react';

export const OrderSummary = () => {
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any necessary submission logic here
    const data = new FormData(event.target);
    var requestOptions = {
      method: 'POST',
      
      body: data
    };
   
    fetch("http://localhost:4000/OrderSummary", requestOptions)
      .then(response => response.json())
      .then(result => result && console.log(result))
      .catch(error => console.log('error', error));
    // Set the order placed state to true
    setIsOrderPlaced(true);
  };

  return (
    <section className="order" id="order">
      <h3 className="sub-heading">Order now</h3>

      {isOrderPlaced ? (
        <div className="pop-up">Order placed successfully!</div>
      ) : null}

      <form onSubmit={handleSubmit}>
      <div className="inputBox">
          <div className="input">
            <span>Name</span>
            <input type="text" name="name" placeholder="enter your name" />
          </div>
          <div className="input">
            <span>Phone number</span>
            <input type="number" name="phoneno" placeholder="enter your number" />
          </div>
          <div className="input">
            <span>Pin code</span>
            <input type="number" name="pincode" placeholder="pin code no." />
          </div>
          <div className="input">
            <span>City & State</span>
            <input type="text" name="citystate" placeholder="enter the city and state" />
          </div>
          <div className="input">
            <span>date and time</span>
            <input type="datetime-local" name="date time" />
          </div>
        </div>
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
            <select name="method" id="paymentMode">
              <option value="cash">Cash</option>
              <option value="phonepe">Phonepe</option>
              <option value="gpay">Gpay</option>
            </select>
          </div>
          <br /><br />
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
     
    </section>
  );
};

export default OrderSummary;
