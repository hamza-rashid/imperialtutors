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
    <Flex
      textAlign={'center'}
      justifyContent={'center'}
      direction={'column'}
      width={'full'}
      overflow={'hidden'}
      px={padding}
      bg="transparent"
      boxShadow="none"
      borderRadius="none"
      m={0}
      p={0}
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
      <Box ref={widgetRef} className="elfsight-app-7e29a44d-74ac-4fc6-8c11-db555d1bc93d" data-elfsight-app-lazy />
    </Flex>
  );
}
