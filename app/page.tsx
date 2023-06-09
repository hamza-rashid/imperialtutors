import HeroSection from './components/HeroSection'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Pricing from './components/Pricing'


export default function Home() {
  return (
    <>
    <HeroSection /> 
      <Features />
        <About />
          <Testimonials />
            <Pricing />

    </>
  )
}
