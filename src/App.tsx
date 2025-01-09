import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Home } from './components/Home'
import { Page404 } from './components/404'
import { Servicios } from './components/Servicios'

function App () {
  return (
    <Router>
      <main>
        <Navbar />
        <Routes>
          <Route path='*' element={<Page404 />} />
          <Route path='/' element={<Home />} />
          <Route path='/servicios' element={<Servicios />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  )
}

export default App
