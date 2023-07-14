import React, { useState, useEffect } from 'react';
import './Cart.css';
import OrderSummary from './OrderSummary';


const Cart = ({ cart, setCart }) => {
  const [price, setPrice] = useState(0);
  
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const handlePrice = () => {
    let total = 0;
    cart.forEach((item) => {
      const itemTotal = parseInt(item.price)*parseInt(item.amount);
      if(!isNaN(itemTotal)) {
      total += itemTotal;
      }
    });
    setPrice(total);
  };

  useEffect(() => {
    handlePrice();
  }, [cart]);

  const handleChange = (item, d) => {
    console.log("d value is "+d);
    console.log(cart)


    const updatedCart = cart.map((cartItem) => {
      if (cartItem.id === item.id) {
        
        console.log("item.amount is "+item.amount);
        console.log("cartitem.amount is "+cartItem.amount);
        if(isNaN(item.amount)){
           cartItem.amount=item.amount=0;
        }
        console.log("item.amount is "+item.amount);
        console.log("cartitem.amount is "+cartItem.amount);
        let updatedAmount = cartItem.amount + d;
        console.log("updated amount is "+updatedAmount)
        if (updatedAmount < 1) {
          updatedAmount = 1; // Prevent negative values
        }
        return {
          ...cartItem,
          amount: updatedAmount,
        };
      }
      return cartItem;
    });
  
    setCart(updatedCart);
  };
  

  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    handlePrice();
  };

  const handleBuyNow = () => {
    setIsOrderPlaced(true);
  };

  if (isOrderPlaced) {
    return <OrderSummary />;
  }

  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
           {console.log(item)}
          <div className="cart_img">
            <img src={item.img} width="50" height="50" alt={item.title} />
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price of your Cart</span>
        <span>${price}</span>
      </div>
      <div className="buttonClass">
        <button onClick={handleBuyNow}>
          <center>Buy Now</center>
        </button>
      </div>
    </article>
  );
};

export default Cart;
