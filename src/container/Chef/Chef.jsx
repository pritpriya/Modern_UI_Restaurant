import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className= "app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="Chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
            <img src={images.quote} alt="quote" />
            <p className="p__opensans">I always had a fantasy of being a chef, because I like kitchen life.</p>
        </div>
        <p className="p__opensans">I think every chef, not just in America, but across the world, has a double-edged sword – two jackets, one that’s driven, a self-confessed perfectionist, thoroughbred, hate incompetence and switch off the stove, take off the jacket and become a family man.”</p>
      </div>
      
      <div className="app__chef-sign">
        <p>Kevin Leo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
