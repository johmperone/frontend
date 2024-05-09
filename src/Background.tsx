import React, { useState } from 'react';
import Home from './Pages/Home';
import Game from './Pages/Game';
import Rules from './Pages/Rules';
import Download from './Pages/Download';
import Donate from './Pages/Donate';
import Ranking from './Pages/Ranking';
import Register from './Pages/Register';
import Community from './Pages/Community';
// Import other modal page components as needed
import './Background.css';
import './navbar.css';
import './Modal.css';
import Header from './img/header.webp'; // Import the logo image
import Middle from './img/logo.webp';
import logoImage from './logo.png'; // Import the logo image
import Nav from './img/nav.webp'
import Navbar from './img/navbar.webp'
import Btnplay from './img/btn_play.webp'
import Btnleft from './img/btn_left.webp'
import Btnright from './img/btn_right.webp'
import Morroleft from './img/morro_left.webp'
import Morroright from './img/morro_right.webp'
import Backgroundp from './img/fundo_06.webp'
import Footer from './img/footer.webp' 
import PaperMiddle from './img/paper_middler.webp' 


const Background: React.FC = () => {
  const [showModal] = useState(true); // State to control modal visibility
  const [currentPage, setCurrentPage] = useState(1);


    // Function to handle page change
    const changePage = (page: number) => {
      setCurrentPage(page);
    };

  return (
    <div className="container">
      <div className="header_container">
        <img src={Header} alt="Header" className="header_img" />
        <div className="header_container_btn">
          <li> 
            Welcome to Weapons of War Awakening
          </li>
        </div>
      </div>
      <div className="middle_container">
        <img src={Middle} alt="Logo" className="middle_img" />
      </div>
      <div className="logo-container">
          <img src={logoImage} alt="Logo" className="logo-img" />
        </div>
           {/* Modal */}
           {showModal && (
          <div className="modal">
            <div className="modal-content">{/* Conditional rendering based on current page */}
            {currentPage === 1 && <Home />}
            {currentPage === 2 && <Game />}
            {currentPage === 3 && <Rules />}
            {currentPage === 4 && <Download />}
            {currentPage === 5 && <Donate />}
            {currentPage === 6 && <Ranking />}
            {currentPage === 7 && <Register />}
            {currentPage === 8 && <Community/>}
            {/* Add other modal pages as needed */}
              <img src={PaperMiddle} alt="Logo" className="PaperMiddle-img" />
            </div>
          </div>
        )} 

    <div className="nav_container">
      <img src={Navbar} alt="Header" className="navbar_img" />
      <div className="btn2">
        <ul className="menu_btn">
          <li> 
            <button onClick={() => changePage(7)}>REGISTER</button>
          </li>
          <li>
          <button onClick={() => changePage(8)}>COMMUNITY</button>
          </li>
        </ul>
      </div>

      <div className="btn">
          <img src={Btnplay} alt="Header" className="btn_play" />
          <img src={Btnleft} alt="Header" className="btn_left" />
          <img src={Btnright} alt="Header" className="btn_right" />
          <img src={Morroleft} alt="Header" className="morro_left" />
          <img src={Morroright} alt="Header" className="morro_right" />
      </div>

        <div className="navbar">

          <ul className="menu">
            <li>
            <button onClick={() => changePage(1)}>HOME</button> {/* Add onClick event */}
            </li>
            <li>
            <button onClick={() => changePage(2)}>GAME</button>
            </li>
            <li>
            <button onClick={() => changePage(4)}>DOWNLOAD</button>
            </li>
            <li>
            <button onClick={() => changePage(5)}>DONATE</button>
              <ul className="sub-menu">
              </ul>
            </li>
            <li>
            <button onClick={() => changePage(6)}>RANKING</button>
            </li>
          </ul>
        </div>
        <img src={Nav} alt="Nav" className="nav_img" />

      </div>
      <div className="backgroundp_container">
        <img src={Backgroundp} alt="BackgroundPage" className="nav_img" />
      </div>
      <div className="footer_container">
      <img src={Footer} alt="Footer" className="footer_img" />
      </div>

    </div>      
  );
}

export default Background;
