import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

import Navbar from './Navbar'
import Hero from './Hero'
import ProductViewer from './ProductViewer'

gsap.registerPlugin(ScrollTrigger)

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductViewer />
    </main>
  )
}

export default App
