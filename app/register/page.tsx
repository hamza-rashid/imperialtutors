"use client";

import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function SignUpPage() {
  useEffect(() => {
    if (!document.getElementById('tutorbird-iframe')) {
      const iframeDoc = `<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Sign Up Widget</title>
        </head>
        <body>
          <div id="widget-container"></div>
          <script>
            (function() {
              var script = document.createElement('script');
              script.src = "https://app.tutorbird.com/Widget/v4/Widget.ashx?settings=eyJTY2hvb2xJRCI6InNjaF9obENKWiIsIldlYnNpdGVJRCI6Indic196SmhKSyIsIldlYnNpdGVCbG9ja0lEIjoid2JiXzVkSnJKRyJ9";
              script.async = true;
              document.getElementById('widget-container').appendChild(script);
            })();
          </script>
        </body>
        </html>`;

      const iframe = document.createElement('iframe');
      iframe.id = 'tutorbird-iframe';
      iframe.style.width = '60%';
      iframe.style.border = 'none';
      iframe.title = 'Sign Up Widget';
      iframe.style.height = '100vh';
      iframe.style.overflow = 'hidden';
      iframe.style.transition = 'width 0.3s ease-in-out';
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

      iframe.onload = () => {
        if (iframe.contentWindow?.document) {
          iframe.contentWindow.document.open();
          iframe.contentWindow.document.write(iframeDoc);
          iframe.contentWindow.document.close();
        }
      };
    }
  }, []);

  return (
    <>
      <Navbar />
      <h1 style={{ textAlign: 'center', fontSize: window.innerWidth < 768 ? '1.8rem' : '2.5rem', padding: '10px', fontWeight: 'bold' }}>Registration Details</h1>
      <div style={{ textAlign: 'center', padding: '20px', color: '#333', maxWidth: '800px', margin: '0 auto' }}>
        <p>
          Parents, <strong>please register for the trial lesson</strong> by entering your child's details below. We will then assign them to their trial lesson of choice for the upcoming session. <strong>You will receive a Zoom link</strong> for this lesson and a reminder the day before.
        </p>
      </div>
      <div id="iframe-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', position: 'relative' }}>
      </div>
      <Footer />
    </>
  );
}
