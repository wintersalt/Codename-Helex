import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Hotel from './pages/hotel/Hotel'
import List from './pages/list/List'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hotels' element={<List />} />
        <Route path='/hotel/:id' element={<Hotel />} />
      </Routes>
    </Router>
  )
}

export default App
