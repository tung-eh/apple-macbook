import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

import Navbar from './Navbar'
import Hero from './Hero'
import ProductViewer from './ProductViewer'
import Showcase from './Showcase'
import Performance from './Performance'
import Features from './Features'

gsap.registerPlugin(ScrollTrigger)

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductViewer />
      <Showcase />
      <Performance />
      <Features />
    </main>
  )
}

export default App
