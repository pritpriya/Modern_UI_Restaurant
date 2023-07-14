import React from 'react';

const OrderSummary = () => {
  return (
    <section className="order" id="order">
      <h3 className="sub-heading">Order now</h3>

      <form action="">
        <div className="inputBox">
          <div className="input">
            <span>your name</span>
            <input type="text" placeholder="enter your name" />
          </div>
          <div className="input">
            <span>Phone number</span>
            <input type="number" placeholder="enter your number" />
          </div>
          <div className="input">
            <span>Pin code</span>
            <input type="number" placeholder="pin code no." />
          </div>
          <div className="input">
            <span>City & State</span>
            <input type="text" placeholder="enter the city and state" />
          </div>
          <div className="input">
            <span>date and time</span>
            <input type="datetime-local" />
          </div>
        </div>
        <div className="inputBox">
          <div className="input">
            <span>your address</span>
            <textarea name="" placeholder="enter your address" id="" cols="30" rows="10"></textarea>
          </div>
          <div className="input">
            <span>your message</span>
            <textarea name="" placeholder="enter your message" id="" cols="30" rows="10"></textarea>
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
          <input type="submit" value="Submit" />
        </div>
      </form>
    </section>
  );
}

export default OrderSummary;
