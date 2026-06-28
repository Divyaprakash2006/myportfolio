import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import BGMPlayer from './components/BGMPlayer';
import IntroVideo from './components/IntroVideo';

import './App.css';

function App() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <>
      {/* Fullscreen intro video — shown only once on first load */}
      {!introFinished && (
        <IntroVideo onFinished={() => setIntroFinished(true)} />
      )}

      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <div className="App">
          <Navbar />
          <BGMPlayer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;