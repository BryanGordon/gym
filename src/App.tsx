import { About } from './components/About'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Collage } from './components/Collage'
import { Habilities } from './components/Habilities'

function App () {
  return (
    <main>
      <Navbar />
      <About />
      <Collage />
      <Habilities />
      <Footer />
    </main>
  )
}

export default App
