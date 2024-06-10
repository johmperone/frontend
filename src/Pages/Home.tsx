import React, { useState, useEffect } from 'react';
import './Page.css';
import Video from '../video.mp4';
import Divider from '../img/divider.webp';
import Screenshot from '../img/screenshot.webp';
import Monk from '../img/slides/IMG-6529ed54c97105.34486603.png'
import MonkIcon from '../img/icon_monk.webp'
import Assassin from '../img/slides/IMG-6529ede81d42c4.96683351.png'
import AssassinIcon from '../img/icon_assassin.webp'
import Wizard from '../img/slides/IMG-6529edca3997c2.15541302.png'
import WizardIcon from '../img/icon_wizard.webp'
import Tamer from '../img/slides/IMG-6529edda2b04a6.66949376.png'
import TamerIcon from '../img/icon_tamer.webp'
import Fairy from '../img/slides/IMG-6529ed68c5b213.67185382.png'
import FairyIcon from '../img/icon_fairy.webp'

const Home: React.FC = () => {

  const [activeButton, setActiveButton] = useState<string>('button1');

  useEffect(() => {
    handleButtonClick('button1');
  }, []); // Run once when component mounts

  const handleButtonClick = (buttonId: string) => {
    setActiveButton(buttonId);

    // Hide all images
    const images = document.querySelectorAll('.image-container img');
    images.forEach((img: Element) => {
      img.setAttribute('style', 'display: none');
    });

    // Show the corresponding image
    const imageId = buttonId.replace('button', 'image');
    const image = document.getElementById(imageId);
    if (image) {
      image.setAttribute('style', 'display: block');
    }
  };


  return (
    <div className="modal-content">
      
      <div className="video-container">
        <video controls className="video-player">
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div className="about-container">
      <img src={Divider} alt="Logo" className="Divider-img" />
      <h2>ABOUT GAME</h2>
      <p>
        
        A 3D Fantasy MMORPG with 5 balanced classes Assassin, Tamer, Wizard, 
        Monk and 
        Fairy. New Updates, Events and Features bringing back the original 
        Classic low rate 
        WOW PH Gameplay experience. Ready your weapons, The war is not yet 
        over!
      
        </p>
      </div>

      <div className="class-container">

        <div className="image-container">
        <img id="image1" src={Monk} alt="Logo"  className="image-container_img"/>
        <img id="image2" src={Wizard} alt="Logo"  className="image-container_img"/>
        <img id="image3" src={Assassin} alt="Logo"  className="image-container_img"/>
        <img id="image4" src={Fairy} alt="Logo"  className="image-container_img"/>
        <img id="image5" src={Tamer} alt="Logo"  className="image-container_img"/>
      </div>
      <div className="buttons-container">
        <button id="button1"  onClick={() => 
          handleButtonClick('button1')} className={activeButton === 'button1' ? 'active' : ''}>
            <img id="Icon1" src={MonkIcon} alt="Logo" className="buttons-container_img"/>
        </button>
        <button id="button2"  onClick={() => 
          handleButtonClick('button2')} className={activeButton === 'button2' ? 'active' : ''}>
            <img id="Icon1" src={AssassinIcon} alt="Logo" className="buttons-container_img"/>
        </button>
        <button id="button3"  onClick={() => 
          handleButtonClick('button3')} className={activeButton === 'button3' ? 'active' : ''}>
            <img id="Icon1" src={WizardIcon} alt="Logo" className="buttons-container_img"/>
        </button>
        <button id="button4"  onClick={() => 
          handleButtonClick('button4')} className={activeButton === 'button4' ? 'active' : ''}>
            <img id="Icon1" src={FairyIcon} alt="Logo" className="buttons-container_img"/>
        </button>
        <button id="button5"  onClick={() => 
          handleButtonClick('button5')} className={activeButton === 'button5' ? 'active' : ''}>
            <img id="Icon1" src={TamerIcon} alt="Logo" className="buttons-container_img"/>
        </button>
        </div>
      </div>
      
      <div className="screenshot-container">
      <img src={Divider} alt="Logo" className="Divider-img" />
      <h2>SCREENSHOT</h2>
      <img src={Screenshot} alt="Logo" className="Screenshot-img" />
      <h3>VIEW MORE</h3>
      </div>
    </div>
    
  );
}

export default Home;
