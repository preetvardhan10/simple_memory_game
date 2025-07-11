import { useState, useEffect } from 'react'

const Timer = ({ gameOver }) => {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    let interval = null
    if (!gameOver) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1)
      }, 1000)
    } else {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [gameOver])

  return (
    <div className="timer">
      Time: {seconds}s
    </div>
  )
}

export default Timer