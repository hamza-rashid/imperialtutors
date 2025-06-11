'use client';
import Script from 'next/script';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import { Box, Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export default function Home() {
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 700) {
        setShowFloatingCTA(true);
      } else {
        setShowFloatingCTA(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      <main style={{ background: 'linear-gradient(135deg, #f7f7f7 60%, #e8f5e9 100%)', minHeight: '100vh' }}>
        <Navbar />
        <Box as="section" pt={{ base: 0, md: 4 }} pb={{ base: 0, md: 0 }}>
          <HeroSection />
        </Box>
        <Features />
        <Box as="section" maxW="7xl" mx="auto" mb={12} px={{ base: 2, md: 8 }} mt={{ base: 16, md: 20 }}>
          <Testimonials />
        </Box>
        <Box as="section" maxW="7xl" mx="auto" mb={12} px={{ base: 2, md: 8 }}>
          <About />
        </Box>
        <Pricing />
        <Footer />
        {/* Sticky CTA for mobile */}
        <Box
          display={{ base: 'block', md: 'none' }}
          position="fixed"
          bottom={4}
          left={0}
          w="100%"
          zIndex={1000}
          px={4}
          style={{
            opacity: showFloatingCTA ? 1 : 0,
            pointerEvents: showFloatingCTA ? 'auto' : 'none',
            transition: 'opacity 0.4s',
          }}
        >
          <Button as="a" href="/bookings" w="100%" size="lg" colorScheme="green" bg="#37a169" _hover={{ bg: '#2e855d' }} borderRadius="xl" boxShadow="2xl">
            Book a Place
          </Button>
        </Box>
      </main>
    </>
  );
}
