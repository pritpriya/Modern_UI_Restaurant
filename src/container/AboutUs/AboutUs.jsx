import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src= { images.G} alt="g letter" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
       <h1 className="headtext__cormorant">About Us</h1>
       <img src={images.spoon} alt="about_spoon" className="spoon__img" />
       <p className="p__opensans">“At Gericht, the world feels like a bubbling Chinese Restobar, with an infinite Wine&Beer and Mocktails connecting everything and everyone.”
 –Kevin Leo-</p>
       <button type="button" className="custom__button">Know more</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
       <h1 className="headtext__cormorant">Our History</h1>
       <img src={images.spoon} alt="about_spoon" className="spoon__img" />
       <p className="p__opensans">In the 20th century, with the development of the  Software technology, country dining became popular in USA, and a number of fine provincial restaurants were established. The Restaurant de la Pyramide, in Vienne, regarded by many as the world’s finest restaurant, was founded by Kevin Leo and after his death, in 1955, retained its high standing under the direction of his widow, Madame (“Mado”) Point. Other leading US provincial restaurants have included the Troisgros in Roanne; the Paul Bocuse Restaurant near New york street; the Auberge de l’Ill in Chicago, Alsace; and the hotel Côte d’Or, at Saulieu.

</p>
       <button type="button" className="custom__button">Know more</button>
      </div>

    </div>
  </div>
);

export default AboutUs;
