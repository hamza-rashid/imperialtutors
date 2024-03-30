"use client"

import Script from 'next/script';
import { Widget } from '@typeform/embed-react';
import Navbar from '../components/Navbar';


const BookingPage = () => {
  return (
    <>
      {/* Google Tag Manager - Global site tag (gtag.js) */}
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
      <Widget id="SAD6oNmE" style={{ width: '100%', height: '100vh' }} />
    </>
  );
};

export default BookingPage;
