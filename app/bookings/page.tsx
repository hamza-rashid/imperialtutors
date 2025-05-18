"use client";

import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BookingPage = () => {
  useEffect(() => {
    if (!document.getElementById('tutorbird-embed-script')) {
      const script = document.createElement('script');
      script.id = 'tutorbird-embed-script';
      script.src =
        'https://app.tutorbird.com/Widget/v4/Widget.ashx?settings=eyJTY2hvb2xJRCI6InNjaF9obENKWiIsIldlYnNpdGVJRCI6Indic196SmhKSyIsIldlYnNpdGVCbG9ja0lEIjoid2JiX2c0NVpKRCJ9';
      script.async = true;
      document.getElementById('tutorbird-widget')?.appendChild(script);
    }
  }, []);

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          backgroundColor: '#37A169',
        }}
      >
        <Navbar />

        <div style={{ height: '40px' }} /> {/* Top spacing */}

        <div id="tutorbird-widget" style={{ flexGrow: 1 }} />

        <div style={{ height: '60px' }} /> {/* Bottom spacing before footer */}

        <Footer />
      </div>

      <style jsx global>{`
        html,
        body {
          margin: 0 !important;
          padding: 0 !important;
          background-color: #37A169 !important;
        }

        #__next {
          background-color: #37A169 !important;
        }

        iframe {
          display: block;
        }
      `}</style>
    </>
  );
};

export default BookingPage;
