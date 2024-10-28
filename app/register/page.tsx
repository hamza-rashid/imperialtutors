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
    if (!document.getElementById('tutorbird-iframe')) {
      const iframeSrc = "/widget.html"; // Replace this with your hosted HTML file path

      const iframe = document.createElement('iframe');
      iframe.id = 'tutorbird-iframe';
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
      document.getElementById('iframe-container')?.appendChild(iframe);

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
      <div style={{ textAlign: 'center', padding: '20px 20px 0', color: '#333', maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="registration-heading">Registration Details</h1>
        <p>
          Parents, <strong>please register for the trial lesson</strong> by entering your child's details below. We will then assign them to their trial lesson of choice for the upcoming session. <strong>You will receive a Zoom link</strong> for this lesson and a reminder the day before.
        </p>
      </div>
      <div id="iframe-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', minHeight: '100vh', position: 'relative', paddingTop: '10px' }}>
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
      <style jsx>{`
        .registration-heading {
          text-align: center;
          padding: 5px;
          font-weight: bold;
          font-size: 2.5rem;
        }

        @media (max-width: 768px) {
          .registration-heading {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </>
  );
}
