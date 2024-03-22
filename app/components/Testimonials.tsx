"use client"

import { useEffect, useRef } from 'react';
import {
  Box,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';

export default function GridBlurredBackdrop() {
  // Specify the type as HTMLDivElement
  const widgetRef = useRef<HTMLDivElement>(null); 

  useEffect(() => {
    if (widgetRef.current) {
      const script = document.createElement('script');
      script.src = 'https://widget.trustmary.com/O4_62wwqn';
      script.async = true;

      widgetRef.current.innerHTML = ''; // Clear the container
      widgetRef.current.appendChild(script); // Append the script to the container
    }

    return () => {
      if (widgetRef.current) {
        widgetRef.current.innerHTML = ''; // Clear the inner HTML of the container
      }
    };
  }, []); // Ensures this effect runs once when the component mounts

  return (
    <Flex
      textAlign={'center'}
      justifyContent={'center'}
      direction={'column'}
      width={'full'}
      overflow={'hidden'}>
      <Box ref={widgetRef} />
    </Flex>
  );
}
