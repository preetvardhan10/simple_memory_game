import React, { useState, useEffect } from 'react';

const Timer = ({ gameOver, reset }) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setSeconds(0); // Reset when game restarts

    if (gameOver) return;

    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [gameOver, reset]);

  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return (
    <div className="timer">
      Time: {minutes}:{secs < 10 ? '0' : ''}{secs}
    </div>
  );
};

export default Timer;
