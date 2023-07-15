import React,{useState,useEffect} from 'react';
import "./Navigationbar.css";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navigationbar = ({size}) => {
  const [count,setCount] = useState(0)
  useEffect(()=> {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }; 
    fetch(`http://localhost:4000/cart_count?OrderId=${localStorage.getItem("order_id")}`, requestOptions)
      .then(response => response.json())
      .then(result => setCount(result.count))
      .catch(error => console.log('error', error));
  },[])
  return (
    <nav data-bs-theme="dark"  class="navbar navbar-expand-lg bg-body-tertiary">
        <div className="nav_box">
            <Link  className="my_shop" to="/order">My Orders</Link>
            <Link className="cart" to="/cart">
                <span>
                <FaCartPlus />
                </span>
                <span>{size? size : count}</span>
                </Link>
      
        </div>
    </nav>
  );
}

export default Navigationbar;
