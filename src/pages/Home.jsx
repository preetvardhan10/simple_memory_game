import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      <h2>🌟 Welcome to the Memory Card Game! 🌟</h2>
      <p>Test your memory by matching pairs of cards. How fast can you complete each level?</p>
      <div className="level-selection">
        <h3>🎚️ Select Difficulty Level:</h3>
        <div className="level-buttons">
          <Link to="/easy" className="level-btn easy">😊 Easy (2×2)</Link>
          <Link to="/medium" className="level-btn medium">😐 Medium (3×3)</Link>
          <Link to="/hard" className="level-btn hard">😨 Hard (4×4)</Link>
        </div>
      </div>
      <div className="game-instructions">
        <h3>📖 How to Play:</h3>
        <ul>
          <li>🖱️ Click on cards to flip them over</li>
          <li>🔍 Find matching pairs of cards</li>
          <li>⏱️ Complete the game as quickly as possible</li>
          <li>🏆 Try to use the fewest attempts</li>
          <li>🎯 Challenge yourself with higher difficulty levels</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;