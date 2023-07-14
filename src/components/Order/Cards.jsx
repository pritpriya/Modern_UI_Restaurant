import React from 'react';
import "./Cards.css";


const Cards = ({item, handleClick }) => {
  const {id, title, price, img} = item;
  // return "hello"
  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="Image" />
      </div>
      <div className="details">
        <p>{id}</p>
        <p>{title}</p>
        <p>Price-${price}</p>
        <button onClick={()=>handleClick(item)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Cards;

// id, title, price, img