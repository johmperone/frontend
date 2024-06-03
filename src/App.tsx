import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Background from './Background';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Background />} />
          <Route path="/home" element={<Background />} />
          <Route path="/game" element={<Background />} />
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
