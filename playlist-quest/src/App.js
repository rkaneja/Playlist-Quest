import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import InfoPage from './pages/InfoPage';
import LoginPage from './pages/LoginPage';
import GamePage from './pages/GamePage';
import PlaylistPage from './pages/PlaylistPage';
import SpotifyCallback from './components/SpotifyCallback';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/callback" element={<SpotifyCallback />} />
        <Route path="/about" element={<InfoPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/playlist" element={<PlaylistPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}


export default App;
