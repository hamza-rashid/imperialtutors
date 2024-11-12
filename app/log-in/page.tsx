"use client";

import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function SignUpPage() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  useEffect(() => {
    if (!document.querySelector('.tutorbird-iframe')) {
      const iframeSrc = "https://app.tutorbird.com/Widget/v4/index.html?settings=eyJTY2hvb2xJRCI6InNjaF9obENKWiIsIldlYnNpdGVJRCI6Indic196SmhKSyIsIldlYnNpdGVCbG9ja0lEIjoid2JiXzVkSldKayJ9";

      const iframe = document.createElement('iframe');
      iframe.className = 'tutorbird-iframe';
      iframe.src = iframeSrc;
      iframe.style.width = '60%';
      iframe.style.border = 'none';
      iframe.title = 'Sign Up Widget';
      iframe.style.height = '100vh';
      iframe.style.overflow = 'hidden';
      iframe.style.transition = 'width 0.3s ease-in-out';
      iframe.onload = () => {
        console.log('Iframe successfully loaded');
        setTimeout(() => setIframeLoaded(true), 1500); // Add slight delay to ensure seamless transition
      };
      iframe.onerror = () => {
        console.error('Failed to load the iframe');
      };
      document.querySelector('.iframe-container')?.appendChild(iframe);

      const adjustIframeWidth = () => {
        if (window.innerWidth < 768) {
          iframe.style.width = '90%';
        } else {
          iframe.style.width = '60%';
        }
      };

      adjustIframeWidth();
      window.addEventListener('resize', adjustIframeWidth);
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="iframe-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', minHeight: '100vh', position: 'relative', paddingTop: '10px' }}>
        {!iframeLoaded && (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', top: '10%' }}>
            <iframe
              src="https://lottie.host/embed/adf6a5a8-00d3-42ab-8910-0cf7e5e93c08/n7ORx93qMx.json"
              style={{ width: '300px', height: '300px', border: 'none' }}
              title="Loading Animation"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
