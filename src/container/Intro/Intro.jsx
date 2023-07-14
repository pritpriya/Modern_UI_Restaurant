import React from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  const [playing, setPlaying] = React.useState(false);
  const vidRef = React.useRef();
  
  const handleVideo = () => {
    if(vidRef.current) {
      if(playing === false) {
      vidRef.current.play()
      setPlaying(true)
      } else {
        vidRef.current.pause()
        setPlaying(false)
      }
    } 
  }
  return (
  <div className="app__video">
    <video 
      src={meal}
      ref={vidRef}
      type="video/mp4"
      loop
      controls={false}
      muted
    />

    <div className="app__video.overlay flex__center">
       <div 
         className="app__video.overlay_circle flex__center"
         onClick={handleVideo} 
         >
          { playing ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : <BsFillPlayFill color="#fff" fontSize={30} />}

       </div>
    </div>
  </div>
  )
  };

export default Intro;
