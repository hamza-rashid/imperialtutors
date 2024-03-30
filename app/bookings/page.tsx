import { useEffect } from 'react';
import Script from 'next/script';

const BookingPage = () => {
  useEffect(() => {
    // It's important to note that because this page redirects immediately,
    // tracking on this page might be limited or not capture all users if the redirect happens before the script can load and run.
    window.location.replace('https://f0bg5c5ixzh.typeform.com/to/SAD6oNmE');
  }, []);

  return (
    <>
      {/* Google Tag Manager - Global site tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-16477682494"
        strategy="beforeInteractive"
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
      {/* Render nothing else since this is a redirect page */}
    </>
  );
};

export default BookingPage;
