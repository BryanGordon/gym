import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Home } from './components/Home'

function App () {
  return (
    <Router>
      <main>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  )
}

export default App
