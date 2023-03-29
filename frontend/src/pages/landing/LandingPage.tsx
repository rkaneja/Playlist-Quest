import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
      <ul>
        <li><Link to="/info">App Info</Link></li>
        <li><Link to="/about">About Us</Link></li>
      </ul>
    </div>
  );
};

export default LandingPage;