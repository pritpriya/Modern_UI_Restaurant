import { useState, useEffect } from "react";



import { Navigationbar } from "../components";
import { Link } from "react-router-dom";
export default function Cart() {
    const [cart, setCart] = useState([])
    useEffect(
        () => {
            const OrderId = localStorage.getItem("order_id")
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            fetch(`http://localhost:4000/cart?OrderId=${OrderId}`, requestOptions)
                .then(response => response.json())
                .then(result => setCart(result))
                .catch(error => console.log('error', error));
        }, [])


    function handleRemove(item) {
        console.log(item, "removing this")
        var requestOptions = {
            method: 'POST',
            body: JSON.stringify({
                OrderId: Number(localStorage.getItem("order_id")),
                menuId: item.MenuId,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        };

        fetch("http://localhost:4000/remove_from_cart", requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result);
                let updatedCart = cart.filter(i => i.id !== item.id)
                console.log("updated", updatedCart)
                setCart(updatedCart)
            })
            .catch(error => console.log('error', error));
    }

    const handleChange = (item, d) => {
        console.log(item, d)
        let ind = -1;
        cart.forEach((data, index) => {
            if (data.id === item.id)
                ind = index;
        });
        let tempArr = [...cart];
        tempArr[ind].quantity += d;
        if (tempArr[ind].quantity === 0) {
            handleRemove(item) 
        } else {
            addItemToCart(item, tempArr[ind].quantity)
        } 
    }



    function addItemToCart(item, quantity) {
        var requestOptions = {
            method: 'POST',
            body: JSON.stringify({
                OrderId: Number(localStorage.getItem("order_id")),
                menuId:   item.MenuId,
                quantity,
                price: item.price
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        };

        fetch("http://localhost:4000/add_to_cart", requestOptions)
            .then(response => response.text())
            .then(result => {
               setCart([
                ...cart.filter(i => i.id !== item.id), {...item, quantity: quantity}
               ])
            })
            .catch(error => console.log('error', error));
    }
    return <div>
        <Navigationbar size={cart.reduce((total, i) => i.quantity + total, 0)} />
        <div className="container">
        {cart && cart.map((item) => (<div className="cart_box" key={item.id}>

            <div className="cart_img">
                <img src={item.Menu.image} width="50" height="50" alt={item.title} />
                <p>{item.Menu.name}</p>
            </div>
            <div>

                <button onClick={() => handleChange(item, -1)}>-</button>
                <button>{item.quantity}</button>
                <button onClick={() => handleChange(item, 1)}>+</button>
            </div>
            <div>
                <span>${item.price}</span>
                <button onClick={() => handleRemove(item)}>Remove</button>
            </div></div>))}
        <div className="total">
            <span>Total Price of your Cart</span>
            <span>${cart.reduce((t, c) => t + c.price * c.quantity, 0)}</span>
        </div>
        <div className="buttonClass">
            <Link to="/summary" style={{
                background: "white",
                border: "1px solid red",
                padding: 10,
                borderRadius: 20
            }}  >
                <center>Place Order</center>
            </Link>
        </div>
        </div>
    </div>
}