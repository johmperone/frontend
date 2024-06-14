// ModalPage1.tsx
import React from 'react';
import Media from '../img/mediafire.webp'
import Mega from '../img/mega.webp'
import './register.css';
const Download: React.FC = () => {
  
  return (
      <div className="download-container">

      <h2>DOWNLOAD</h2>

      <button onClick={() => window.open("https://www.mediafire.com/file/lh097tzjxlhzx50/Weapons_Of_War_Awakening.exe/file", "_blank")} className="download-button">
            <img src={Media} alt="Mediafire" className="download-image" />
          </button>

        <p>CLIENT SIZE 612MB | 2023/10/14</p>
        <button onClick={() => window.open("https://mega.nz/file/OldQFCjQ#Ko3U3lVXsn6Nhu2auBgJZOkDq0tZZhBiNEMVz_ZKKzE", "_blank")} className="download-button">
            <img src={Mega} alt="Mega" className="download-image" />
          </button>
        <p>CLIENT SIZE 612MB | 2023/10/14</p>
      
      <div className="system-container">
      <h2>Minimum System Requeriments</h2>
          <div className="black-column">
            <p>Operational system:</p>
            <p>Processor:</p>
            <p>RAM memory:</p>
            <p>Video card:</p>
            <p>DirectX version:</p>
            <p>Disk Space:</p>
          </div>
        <div className="red-column">
          <p><span className="red-text">Windows 7 or higher</span></p>
          <p><span className="red-text">Celeron or higher</span></p>
          <p><span className="red-text">2 GB or higher</span></p>
          <p><span className="red-text">On Board or higher</span></p>
          <p><span className="red-text">9.0 / 11</span></p>
          <p><span className="red-text">10 GB disk space or higher</span></p>
        </div>
      </div>
      </div>
  );
}

export default Download;
