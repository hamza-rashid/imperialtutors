"use client"

import { useEffect, useRef } from 'react';
import {
  Box,
  chakra,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';

export default function GridBlurredBackdrop() {
  const widgetRef = useRef(null); // Create a ref for the container

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widget.trustmary.com/O4_62wwqn';
    script.async = true;

    widgetRef.current.innerHTML = ''; // Clear the container
    widgetRef.current.appendChild(script); // Append the script to the container

    return () => {
      // Cleanup the script when the component unmounts
      if (widgetRef.current) {
        widgetRef.current.innerHTML = '';
      }
    };
  }, []); // The empty array ensures this effect runs once when the component mounts

  return (
    <Flex
      textAlign={'center'}
      justifyContent={'center'}
      direction={'column'}
      width={'full'}
      overflow={'hidden'}>
      {/* Create a specific container for the widget */}
      <Box ref={widgetRef} />
    </Flex>
  );
}
