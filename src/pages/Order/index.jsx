import React,{useEffect, useState} from "react";
import list from "./data1";
import Cards from "./Cards";
import "./Order.css";
import Navigationbar from "../../components/Navigationbar/Navigationbar"

const Order = ({}) => {
    const [menu, setMenu] = useState([])
    const [cart, setCart] = useState([]);
        useEffect(() => {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
              };
             
              fetch("http://localhost:4000/menu", requestOptions)
                .then(response => response.json())
                .then(result => result && setMenu(result))
                .catch(error => console.log('error', error));
        },[]) 


        useEffect(()=> {
            if(!localStorage.getItem("order_id")) {
              const requestOptions = {
                method: 'GET',
                redirect: 'follow'
              };
             
              fetch("http://localhost:4000/start_order", requestOptions)
                .then(response => response.json())
                .then(result => result && localStorage.setItem("order_id",result.id))
                .catch(error => console.log('error', error));
            } else {
              const OrderId = localStorage.getItem("order_id")
              const requestOptions = {
                  method: 'GET',
                  redirect: 'follow'
              };
  
              fetch(`http://localhost:4000/cart?OrderId=${OrderId}`, requestOptions)
                  .then(response => response.json())
                  .then(result => setCart(result))
                  .catch(error => console.log('error', error));
            }
        },[]) 

        const handleClick = (item) => {
          console.log(item)
         
          let isPresent = false
          let updatedCart = cart.length > 0 ? cart.map((product) => {
            if (item.id === product.id) {
              product.quantity += 1
              addItemToCart(item, product.quantity)
              isPresent = true
            }
            console.log(product)
            return product
          }) : []
         
          if (!isPresent) {
            updatedCart = [...updatedCart, { ...item, quantity: 1 }]
            addItemToCart(item, 1)
          }
          
          setCart(updatedCart);
        };

        
    function handleRemove(item) {
      console.log(item, "removing this")
      var requestOptions = {
          method: 'POST',
          body: JSON.stringify({
              OrderId: Number(localStorage.getItem("order_id")),
              menuId: item.id,
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
          console.log(item,d)
          let ind = -1;
          cart.forEach((data, index) => {
            if (data.id === item.id)
              ind = index;
          });
          let tempArr = [...cart];
          tempArr[ind].quantity += d;
          if (tempArr[ind].quantity === 0){
            handleRemove(item)
             } else {
          addItemToCart(item,  tempArr[ind].quantity)
      
             }
          setCart([...tempArr])
        }

  function addItemToCart(item, quantity) {   
    var requestOptions = {
      method: 'POST',
      body: JSON.stringify({
        OrderId: Number(localStorage.getItem("order_id")),
        menuId: item.id,
        quantity,
        price: item.price
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    };

    fetch("http://localhost:4000/add_to_cart", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);  
      })
      .catch(error => console.log('error', error));
  }
return <div>
     <Navigationbar  size={cart.reduce((total, i) => i.quantity + total, 0)} />
          <section>
            {   menu.map((item)=>{
              const cartItem = cart.find(i => i.id === item.id)
              return  <Cards key={item.id} quantity={cartItem ? cartItem.quantity: 0}  item={item}
              handleChange={handleChange}
              handleClick={handleClick} />
            })}

         </section>
         {/* {menu.map((food) => ( <li>{food.FoodType},${food.Price},{food.Image},{food.FoodID}</li>))} */}
         </div>
};
export default Order;

