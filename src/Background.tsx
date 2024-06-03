import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import Game from './Pages/Game';
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
  const navigate = useNavigate();
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState<number | null>(null);

  useEffect(() => {
    // Set the initial page based on the path
    switch (location.pathname) {
      case '/home':
        setCurrentPage(1);
        setShowModal(true);
        break;
      case '/game':
        setCurrentPage(2);
        setShowModal(true);
        break;
      case '/download':
        setCurrentPage(3);
        setShowModal(true);
        break;
      case '/donate':
        setCurrentPage(4);
        setShowModal(true);
        break;
      case '/ranking':
        setCurrentPage(5);
        setShowModal(true);
        break;
      case '/register':
        setCurrentPage(6);
        setShowModal(true);
        break;
      case '/community':
        setCurrentPage(7);
        setShowModal(true);
        break;
      default:
        // If no path matches, default to home
        setCurrentPage(1);
        setShowModal(true);
        navigate('/home');
        break;
    }
  }, [location.pathname, navigate]);

  // Function to handle page change
  const changePage = (page: number, path: string) => {
    setCurrentPage(page);
    setShowModal(true);
    navigate(path);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentPage(null);
    navigate('/'); // Navigate back to home or the main page
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
      {showModal && currentPage && (
        <div className="modal">
          <div className="modal-content">
            {/* Conditional rendering based on current page */}
            {currentPage === 1 && <Home />}
            {currentPage === 2 && <Game />}
            {currentPage === 3 && <Download />}
            {currentPage === 4 && <Donate />}
            {currentPage === 5 && <Ranking />}
            {currentPage === 6 && <Register />}
            {currentPage === 7 && <Community />}
            {/* Add other modal pages as needed */}
            <img src={PaperMiddle} alt="Logo" className="PaperMiddle-img" />
            <button onClick={closeModal}>Close</button> {/* Add a button to close the modal */}
          </div>
        </div>
      )}

      <div className="nav_container">
        <img src={Navbar} alt="Header" className="navbar_img" />
        <div className="btn2">
          <ul className="menu_btn">
            <li> 
              <button onClick={() => changePage(7, '/register')}>REGISTER</button> {/* Use changePage with page number and path */}
            </li>
            <li>
              <button onClick={() => changePage(8, '/community')}>COMMUNITY</button>
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
              <button onClick={() => changePage(1, '/home')}>HOME</button> {/* Add onClick event */}
            </li>
            <li>
              <button onClick={() => changePage(2, '/game')}>GAME</button>
            </li>
            <li>
              <button onClick={() => changePage(4, '/download')}>DOWNLOAD</button>
            </li>
            <li>
              <button onClick={() => changePage(5, '/donate')}>DONATE</button>
              <ul className="sub-menu"></ul>
            </li>
            <li>
              <button onClick={() => changePage(6, '/ranking')}>RANKING</button>
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
