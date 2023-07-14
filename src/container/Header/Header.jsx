import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants' ;
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className="p__opensans" style={{ margin:'2rem 0'}}>“There is no love sincerer than the love of food.”</p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
    
    <div className="dialogflow_chatbot">
     <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
      <df-messenger
       intent="WELCOME"
       chat-title="Restaurant-Booking"
       agent-id="069a091d-a79a-418c-9e51-4417f80a439e"
       language-code="en"
      ></df-messenger>
    </div>
  </div>

);

export default Header;
