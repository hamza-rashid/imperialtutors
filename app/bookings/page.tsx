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

      {/* Scrollable container that adapts to keyboard and allows interaction */}
      <div style={{
        marginTop: '90px', // adjusts for navbar height
        height: 'calc(100dvh - 90px)', // dynamic height
        overflowY: 'auto',
        WebkitOverflowScrolling: 'touch',
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
