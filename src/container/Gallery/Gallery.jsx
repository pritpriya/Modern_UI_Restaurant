import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if(direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }

return (
  <div className="app__gallery flex__center">
    <div className="app__gallery-content">
      <SubHeading title="Instagram" />
      <h1 className="headtext__cormorant">Photo Gallery</h1>
      <p className="p__opensans" style={{ color: '#AAA', marginTop: '2rem' }}>Restaurants hit a low point in sales every now and then. A bar provides extra seating for happy and after hours for customers. Happy hour drink specials are one way to combat slow times. At the maximum, they are a surefire way to attract customers during a slow season. Furthermore, customers who prefer to mixed drinks to wine and beer will likely visit your premise more frequently, especially when you serve hard beverages.


After hours are specials that include beverages and food that is served after the main dinner hour but right before closing time. Besides, serving an original drink that is visually appealing will create buzz and excitement among them. You can work together with an experienced bartender to develop various combinations or come up with your own names and flavors to make them fit your restaurant’s location and motif. You can’t generate sales from happy hours, after hours or from specialty drinks without a bar so adding one to your restaurant is something you should give some thought to.</p>
      <button type="button" className="custom__button">View button</button>
    </div>

    <div className="app__gallery-images">
      <div className="app__gallery-images_container" ref={scrollRef}>
         {galleryImages.map((image, index) => (
           <div className="app__gallery-images_card flex__center" key= {'gallery_image-${index + 1}'}>
            <img src={ image } alt="gallery" />
            <BsInstagram className="gallery__images.icon" />
           </div>
         ))}
      </div>
      <div className="app__gallery-images_arrows">
        <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
        <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
      </div>
    </div>
  </div>
);
}

export default Gallery;
