"use client"

import { useEffect, useRef, useState } from 'react';
import {
  Box,
  Flex,
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
    <Flex textAlign={'center'} justifyContent={'center'} direction={'column'} width='full'
      overflow={'hidden'}
      px={padding} // Add responsive padding here
    >
      <Navbar />

      {/* Add margin between the navbar and the main content */}
      <Box mt={8} />

      {!widgetLoaded && (
        // Placeholder content while widget is loading
        <Flex width={{ base: '90%', md: '80%' }} mx='auto'
          justifyContent="center" // Align skeletons center horizontally
          gap={4} // Add gap between skeletons
          flexWrap="wrap" // Allow them to wrap to the next line if there's not enough space
          p={4}
          mt={10} // Add margin at the top of the whole group
        >
          {/* Multiple skeleton containers */}
          {[...Array(6)].map((_, index) => (
            <Box
              key={index}
              width={['100%', '48%', '32%']} // Adjust the width for different breakpoints
              padding='6'
              boxShadow='lg'
              bg='white'
              mb={4} // Add margin between skeletons
              borderRadius="md" // Add border radius to match the appearance
            >
              <SkeletonCircle size='16' /> {/* Increase size of circle */}
              <SkeletonText mt='6' noOfLines={6} spacing='4' /> {/* Increase margin top */}
            </Box>
          ))}
        </Flex>
      )}
      <Box ref={widgetRef} width={{ base: '90%', md: '80%' }} mx='auto' className="elfsight-app-e7dd32eb-f0c7-4871-a82a-2bcfbb7b1bd8" data-elfsight-app-lazy />

      {/* Add margin between the main content and the footer */}
      <Box mt={8} />
      
      <Footer />
    </Flex>
  );
}
