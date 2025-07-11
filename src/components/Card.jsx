const Card = ({ card, onClick, flipped, matched }) => {
    return (
      <div 
        className={`card ${flipped ? 'flipped' : ''} ${matched ? 'matched' : ''}`}
        onClick={!flipped && !matched ? onClick : null}
      >
        <div className="card-front">
          <img src={card.image} alt={card.id} />
        </div>
        <div className="card-back">
          <span>?</span>
        </div>
      </div>
    )
  }
  
  export default Card