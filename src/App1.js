import React, { useState, useEffect } from "react";

import { Navigationbar, Order, Cart } from "./components";
import "./components/Order/Order.css";
const App1 = () => {
  const [showOrders, setShowOrders] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) 
      isPresent = true;
    })
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    console.log(item);
    setCart([...cart, item]);
  };

 const handleChange = (item, d) =>{
    let ind = -1;
    cart.forEach((data, index)=>{
      if(data.id === item.id)
      ind = index;
    });
   const tempArr = cart;
   tempArr[ind] += d;
   if(tempArr[ind] === 0)
       tempArr[ind].amount = 1;
    setCart([...tempArr])
  }
  /*console.log("cart in app1", cart) */
  return (
    <React.Fragment>
      <Navigationbar size={cart.length} setShowOrders={setShowOrders} />
      {showOrders ? (
        <Order handleClick={handleClick} />
      ) : (
        <Cart
          cart={cart}
          setCart={setCart}
          setShowOrders={setShowOrders}
          handleChange={handleChange}
        />
      )}
      {warning && (
        <div className="warning">Item is already added to your cart</div>
      )}
    </React.Fragment>
  );
};

export default App1;
