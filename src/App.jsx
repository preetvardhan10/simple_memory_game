import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import EasyGame from './pages/EasyGame'
import MediumGame from './pages/MediumGame'
import HardGame from './pages/HardGame'
import Header from './components/Header'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/easy" element={<EasyGame />} />
          <Route path="/medium" element={<MediumGame />} />
          <Route path="/hard" element={<HardGame />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App