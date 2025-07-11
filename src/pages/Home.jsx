import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home-page">
      <h2>Welcome to the Memory Card Game!</h2>
      <p>Test your memory by matching pairs of cards.</p>
      <div className="level-selection">
        <h3>Select Difficulty Level:</h3>
        <div className="level-buttons">
          <Link to="/easy" className="level-btn easy">Easy (2x2)</Link>
          <Link to="/medium" className="level-btn medium">Medium (3x3)</Link>
          <Link to="/hard" className="level-btn hard">Hard (4x4)</Link>
        </div>
      </div>
      <div className="game-instructions">
        <h3>How to Play:</h3>
        <ul>
          <li>Click on cards to flip them over</li>
          <li>Match two identical cards to make them disappear</li>
          <li>Complete the game with the fewest attempts and fastest time</li>
        </ul>
      </div>
    </div>
  )
}

export default Home