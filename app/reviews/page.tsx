import Testimonials from '../components/Testimonials'
import HeroSection from '../components/HeroSection'
import Features from '../components/Features'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'


export default function ReviewPage() {
  return (
    <>
          <div id="testimonials"> <Testimonials/> </div>
          <HeroSection />
            <Features />
                <Pricing />
                  <Footer />
    </>
  )
}

