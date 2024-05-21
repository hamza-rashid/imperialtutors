"use client"

import { useEffect, useRef, useState } from 'react';
import {
  Box,
  Flex,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from '@chakra-ui/react';

export default function Testimonials() {
  const [widgetLoaded, setWidgetLoaded] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widget.trustmary.com/RifRScI9A';
    script.async = true;

    script.onload = () => {
      console.log('Trustmary widget script loaded.');
      setWidgetLoaded(true);
    };

    script.onerror = () => {
      console.error('Error loading Trustmary widget script.');
    };

    if (widgetRef.current) {
      widgetRef.current.appendChild(script);
      console.log('Trustmary widget script appended to widgetRef.');
    } else {
      console.error('widgetRef.current is null.');
    }

    // Cleanup function to remove the script if the component is unmounted
    return () => {
      if (widgetRef.current) {
        // widgetRef.current.innerHTML = ''; // This line is removed to avoid potential issues with the widget
      }
    };
  }, []);

  return (
    <Flex
      textAlign={'center'}
      justifyContent={'center'}
      direction={'column'}
      width={'full'}
      overflow={'hidden'}
    >
      {!widgetLoaded && (
        // Placeholder content while widget is loading
        <Flex
          width="100%"
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
              width={['45%', '45%', '30%', '30%']} // Adjust the width for different breakpoints
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
      <Box ref={widgetRef} />
    </Flex>
  );
}
