"use client"

import Script from 'next/script';
import { Widget } from '@typeform/embed-react';
import Navbar from '../components/Navbar';

const BookingPage = () => {
  return (
    <>
      {/* Google Tag Manager */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-16477682494"
        strategy="afterInteractive"
        async
      />
      <Script
        id="google-analytics-setup-redirect-page"
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
      
      <Navbar />

      {/* Fixed container for the Typeform embed */}
      <div style={{
        position: 'fixed',
        top: '90px', // adjust to your Navbar height
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'auto',
        zIndex: 10,
      }}>
        <Widget 
          id="Piqnx8xL" 
          style={{ width: '100%', height: '100%' }} 
          inlineOnMobile={true} 
        />
      </div>
    </>
  );
};

export default BookingPage;
