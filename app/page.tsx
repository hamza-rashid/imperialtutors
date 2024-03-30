import Script from 'next/script';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      {/* Google Tag Manager - Global site tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-16477682494"
        strategy="afterInteractive"
        async
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-16477682494');
          `,
        }}
      />

      <HeroSection /> 
      <div id="testimonials"> <Testimonials/> </div>
      <Features />
      <div id="about-me"> <About/> </div>
      <div id="pricing"> <Pricing/> </div>
      <Footer />
    </>
  );
}
