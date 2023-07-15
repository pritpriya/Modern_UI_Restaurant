import React from 'react';
import "./Cards.css";


const Cards = ({ item, handleClick, handleChange, quantity }) => {
  const { id, name, price, image } = item;

  // return "hello"
  return (
    <div className="cards">
      <div className="image_box">
        <img src={image} alt="Image" />
      </div>
      <div className="details">
        <p>{id}</p>
        <p>{name}</p>
        <p>Price-${price}</p>
        {quantity == 0 ? <button class="btn btn-primary" onClick={() => handleClick(item)}>Add to Cart</button> :  <><button class="btn btn-primary" onClick={() => handleChange(item, -1)}>-</button>
            <button class="btn btn-primary">{quantity}</button>
            <button  class="btn btn-primary" onClick={() => handleChange(item, 1)}>+</button></>}

      </div>
    </div>
  );
}

export default Cards;

// id, title, price, img