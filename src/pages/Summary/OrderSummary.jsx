import React, { useState } from 'react';
import cities from "./cities.json"
export const OrderSummary = ({cart}) => {
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formDataObj = Object.fromEntries(formData.entries());
    console.log("data to send", formDataObj)
    var requestOptions = {
      method: 'POST',
      body: JSON.stringify({...formDataObj, OrderId: Number(localStorage.getItem("order_id")) }),
      headers: {
        'Content-Type': 'application/json'
      }
    };

    fetch("http://localhost:4000/order", requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result); // Handle the response from the server as needed
        setIsOrderPlaced(true); // Update menu state if required
        localStorage.removeItem("order_id")
      })
      .catch(error => console.log('error', error));
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
  
      
         
        </div>
          <div className="input">
            <span>your address</span>
            <textarea name="address" placeholder="enter your address" id="" cols="30" rows="10"></textarea>
          </div>
          <div className="input">
            <span>City & State</span>
            <select name="citystate" id="cities">
              {
                Object.keys(cities).map(state =>  <optgroup label={state}>{cities[state].map((city) => <option value={city + "," + state}>{city}</option>)}</optgroup>)
              } 
</select> 
          </div>
          <div className="input">
            <span>Pin code</span>
            <input type="number" name="pincode" placeholder="pin code no." />
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
