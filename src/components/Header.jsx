import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h1>🎮 Memory Card Game</h1>
      <nav>
        <Link to="/">🏠 Home</Link>
        <Link to="/easy">😊 Easy</Link>
        <Link to="/medium">😐 Medium</Link>
        <Link to="/hard">😨 Hard</Link>
      </nav>
    </header>
  );
};

export default Header;