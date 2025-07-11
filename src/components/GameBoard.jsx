import { useState, useEffect } from 'react'
import Card from './Card'
import Timer from './Timer'
import axios from 'axios'

const GameBoard = ({ level }) => {
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])
  const [matched, setMatched] = useState([])
  const [attempts, setAttempts] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [loading, setLoading] = useState(true)

  // Helper function to determine grid size
  const getGridSize = () => {
    switch (level) {
      case 'easy': return 2
      case 'medium': return 3
      case 'hard': return 4
      default: return 2
    }
  }

  // Fetch images from API
  const fetchImages = async () => {
    const gridSize = getGridSize()
    const numPairs = Math.floor((gridSize * gridSize) / 2)
    const imageUrls = []

    try {
      // Try Unsplash first
      const unsplashResponse = await axios.get(
        `https://api.unsplash.com/photos/random?count=${numPairs}&client_id=YOUR_UNSPLASH_ACCESS_KEY`
      )
      unsplashResponse.data.forEach(photo => {
        imageUrls.push(photo.urls.thumb)
      })
    } catch (error) {
      console.log("Using Lorem Picsum as fallback")
      // Fallback to Lorem Picsum
      for (let i = 0; i < numPairs; i++) {
        imageUrls.push(`https://picsum.photos/200/300?random=${i}`)
      }
    }

    // Create card pairs
    const cardPairs = []
    imageUrls.forEach((url, index) => {
      cardPairs.push({ id: `${index}a`, image: url })
      cardPairs.push({ id: `${index}b`, image: url })
    })

    // Shuffle cards
    const shuffledCards = cardPairs.sort(() => Math.random() - 0.5)
    setCards(shuffledCards)
    setLoading(false)
  }

  // Initialize game
  useEffect(() => {
    fetchImages()
  }, [level])

  // Check for game completion
  useEffect(() => {
    if (cards.length > 0 && matched.length === cards.length) {
      setGameOver(true)
    }
  }, [matched, cards])

  // Handle card clicks
  const handleCardClick = (index) => {
    // Don't allow more than 2 cards flipped or clicking matched cards
    if (flipped.length === 2 || flipped.includes(index) || matched.includes(cards[index].id)) {
      return
    }

    const newFlipped = [...flipped, index]
    setFlipped(newFlipped)

    // Check for match when two cards are flipped
    if (newFlipped.length === 2) {
      setAttempts(attempts + 1)
      const [firstIndex, secondIndex] = newFlipped
      if (cards[firstIndex].image === cards[secondIndex].image) {
        // Match found
        setMatched([...matched, cards[firstIndex].id, cards[secondIndex].id])
        setFlipped([])
      } else {
        // No match - flip back after delay
        setTimeout(() => setFlipped([]), 1000)
      }
    }
  }

  // Reset game state
  const resetGame = () => {
    setFlipped([])
    setMatched([])
    setAttempts(0)
    setGameOver(false)
    setLoading(true)
    fetchImages()
  }

  if (loading) {
    return <div className="loading">Loading game...</div>
  }

  const gridSize = getGridSize()
  const gridStyle = {
    gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
    gridTemplateRows: `repeat(${gridSize}, 1fr)`,
  }

  return (
    <div className="game-container">
      <div className="game-info">
        <Timer gameOver={gameOver} />
        <div className="attempts">Attempts: {attempts}</div>
        <button onClick={resetGame} className="reset-btn">Reset Game</button>
      </div>
      <div className="game-board" style={gridStyle}>
        {cards.map((card, index) => (
          <Card
            key={index}
            card={card}
            onClick={() => handleCardClick(index)}
            flipped={flipped.includes(index)}
            matched={matched.includes(card.id)}
          />
        ))}
      </div>
      {gameOver && (
        <div className="game-over">
          <h2>Congratulations!</h2>
          <p>You completed the game in {attempts} attempts!</p>
          <button onClick={resetGame}>Play Again</button>
        </div>
      )}
    </div>
  )
}

export default GameBoard