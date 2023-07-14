import React from 'react';
import { images } from '../../constants' ;
import './Menu1.css';
//const Menucard = [images.appetizers, images.barmenu];

const Menu1 = () => (
  <div className="Menucard">
    <h1 className="headtext__cormorant">Menu</h1>
    <div className="appetizers">
        <h2>Appetizers</h2>
    <img src={images.appetizers} alt="appetizers" />
    </div>
    <div className="barmenu">
        <h2>Bar Menu</h2>
    <img src={images.barmenu} alt="barmenu" />
    </div>
  </div>
);

export default Menu1;