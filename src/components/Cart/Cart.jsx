import React, { useState, useEffect } from 'react';
import './Cart.css'; 
import { Link } from 'react-router-dom';


const Cart = ({ cart, setCart }) => {
  const [price, setPrice] = useState(0);
  
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const handlePrice = () => {
    let total = 0;
    cart.forEach((item) => {
      const itemTotal = parseInt(item.price)*parseInt(item.quantity);
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
        
        console.log("item.quantity is "+item.quantity);
        console.log("cartitem.quantity is "+cartItem.quantity);
        if(isNaN(item.quantity)){
           cartItem.quantity=item.quantity=0;
        }
        console.log("item.quantity is "+item.quantity);
        console.log("cartitem.quantity is "+cartItem.quantity);
        let updatedQuantity = cartItem.quantity + d;
        console.log("updated quantity is "+updatedQuantity)
        if (updatedQuantity < 1) {
          updatedQuantity = 1; // Prevent negative values
        }
        return {
          ...cartItem,
          quantity: updatedQuantity,
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
 
 

  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
           {console.log(item)}
          <div className="cart_img">
            <img src={item.image} width="50" height="50" alt={item.title} />
            <p>{item.name}</p>
          </div>
          <div>
         
            <button onClick={() => handleChange(item, -1)}>-</button>
            <button>{item.quantity}</button>
            <button onClick={() => handleChange(item, 1)}>+</button>
          </div>
          <div>
            <span>${item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price of your Cart</span>
        <span>${price}</span>
      </div>
      <div className="buttonClass">
        <Link to="/summary">
          <center>Place Order</center>
        </Link>
      </div>
    </article>
  );
};

export default Cart;
