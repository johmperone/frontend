import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Background from './Background';
import Home from './Pages/Home';
import Game from './Pages/Game';
import Rules from './Pages/Rules';
import Download from './Pages/Download';
import Donate from './Pages/Donate';
import Ranking from './Pages/Ranking';
import Register from './Pages/Register';
import Community from './Pages/Community';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Background />} />
          <Route path="/home" element={<Background />} />
          <Route path="/game" element={<Background />} />
          <Route path="/rules" element={<Background />} />
          <Route path="/download" element={<Background />} />
          <Route path="/donate" element={<Background />} />
          <Route path="/ranking" element={<Background />} />
          <Route path="/register" element={<Background />} />
          <Route path="/community" element={<Background />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
