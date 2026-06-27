import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Preloader from './components/Preloader';

import './App.css';

function App() {
  const [loading, setLoading] = useState(() => {
    return sessionStorage.getItem('hasSeenPreloader') !== 'true';
  });

  useEffect(() => {
    if (loading) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [loading]);

  return (
    <Router>
      <div className="App">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;