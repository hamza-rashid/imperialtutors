import Script from 'next/script';
import dynamic from 'next/dynamic';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Dynamically import the Widget component with SSR disabled
const NoSSRWidget = dynamic(() => import('@typeform/embed-react').then(mod => mod.Widget), {
  ssr: false,
});

const BookingPage = () => {
  return (
    <>
      {/* Google Tag Manager and other scripts */}
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
      {/* Use the dynamically imported widget */}
      <NoSSRWidget id="SAD6oNmE" style={{ width: '100%', height: '100vh' }} inlineOnMobile={true} />
    </>
  );
};

export default BookingPage;
