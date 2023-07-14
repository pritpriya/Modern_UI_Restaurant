import React,{useEffect, useState} from "react";
import list from "./data1";
import Cards from "./Cards";
import "./Order.css";


const Order = ({handleClick}) => {
    const [menu, setMenu] = useState([])
    // const [cart, setCart] = useState([]);
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
console.log(menu) 

// const handleClick = (item) => {
//     cart.push(item);
//     setCart(cart => [...cart, item])
//     console.log(cart);
// };
return <div>
          <section>
            {   list.map((item)=>{
              return  <Cards key={item.id} item={item} handleClick={handleClick} />
            })}

         </section>
         {/* {menu.map((food) => ( <li>{food.FoodType},${food.Price},{food.Image},{food.FoodID}</li>))} */}
         </div>
};
export default Order;

