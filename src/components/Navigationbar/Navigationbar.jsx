import React from 'react';
import "./Navigationbar.css";
import { FaCartPlus } from "react-icons/fa";

const Navigationbar = ({size, setShowOrders}) => {
  return (
    <nav>
        <div className="nav_box">
            <span className="my_shop" onClick={() => setShowOrders(true)}>My Orders</span>
            <div className="cart" onClick = {() => setShowOrders(false)}>
                <span>
                <FaCartPlus />
                </span>
                <span>{size}</span>
            </div>
      
        </div>
    </nav>
  );
}

export default Navigationbar;
