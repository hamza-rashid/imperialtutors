"use client";

import { useEffect, useRef, useState } from 'react';
import {
  Box,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  useBreakpointValue,
} from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Testimonials() {
  const [widgetLoaded, setWidgetLoaded] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  // Define padding values based on the screen size
  const padding = useBreakpointValue({ base: 4, md: 0 });

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.defer = true;

    script.onload = () => {
      setWidgetLoaded(true);
    };

    document.body.appendChild(script);

    return () => {
      if (widgetRef.current) {
        widgetRef.current.innerHTML = ''; // Clear the inner HTML of the container
      }
      document.body.removeChild(script); // Cleanup script when component unmounts
    };
  }, []);

  return (
    <Box width="100vw" overflowX="hidden"> {/* Main container with full viewport width */}
      <Box width="100%"> {/* Full-width Navbar */}
        <Navbar />
      </Box>

      {/* Spacer Box between Navbar and main content */}
      <Box mt={8} />

      {!widgetLoaded && (
        // Placeholder content while widget is loading
        <Box 
          width={{ base: '100%', md: '80%' }}
          mx="auto"
          p={padding}
          mt={10} // Add margin at the top
          display="grid"
          gridTemplateColumns={{ base: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' }}
          gap={4} // Space between skeleton boxes
        >
          {[...Array(6)].map((_, index) => (
            <Box
              key={index}
              padding="6"
              boxShadow="lg"
              bg="white"
              borderRadius="md"
            >
              <SkeletonCircle size="16" />
              <SkeletonText mt="6" noOfLines={6} spacing="4" />
            </Box>
          ))}
        </Box>
      )}

      <Box 
        ref={widgetRef} 
        width={{ base: '90%', md: '80%' }} // 90% width on smaller screens, 80% on larger screens
        mx="auto" 
        className="elfsight-app-e7dd32eb-f0c7-4871-a82a-2bcfbb7b1bd8" 
        data-elfsight-app-lazy 
      />

      {/* Spacer Box between main content and Footer */}
      <Box mt={8} />

      <Box width="100%"> {/* Full-width Footer */}
        <Footer />
      </Box>
    </Box>
  );
}
