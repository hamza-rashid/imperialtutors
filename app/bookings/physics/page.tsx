'use client';

import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  Divider,
  Button,
  Link,
  Icon,
  Image,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useBreakpointValue,
} from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const ticksAndCrosses = {
  tick: (
    <Box bg="#37a169" borderRadius="full" w="22px" h="22px" display="flex" alignItems="center" justifyContent="center">
      <Icon viewBox="0 0 24 24" boxSize="12px" color="white">
        <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
      </Icon>
    </Box>
  ),
  cross: (
    <Icon viewBox="0 0 24 24" boxSize="20px" color="#37a169">
      <path fill="none" stroke="currentColor" strokeWidth="2.5" d="M6 6 L18 18 M6 18 L18 6" />
    </Icon>
  ),
};

const suitability = [
  { text: 'Year 11 students', type: 'tick' as const },
  { text: 'Students looking to revise content', type: 'tick' as const },
  { text: 'Students looking to improve exam technique', type: 'tick' as const },
  { text: 'Year 10 students', type: 'cross' as const },
  { text: 'Foundation tier students', type: 'cross' as const },
  { text: 'Students predicted a grade 4 or below', type: 'cross' as const },
];

export default function PhysicsBookingPage() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [selected, setSelected] = useState('Course Content');

  useEffect(() => {
    // Load TutorBird script for Physics
    if (!document.getElementById('tutorbird-embed-script')) {
      const script = document.createElement('script');
      script.id = 'tutorbird-embed-script';
      script.src = 'https://app.tutorbird.com/Widget/v4/Widget.ashx?settings=eyJTY2hvb2xJRCI6InNjaF9obENKWiIsIldlYnNpdGVJRCI6Indic196SmhKSyIsIldlYnNpdGVCbG9ja0lEIjoid2JiX3huZk1KcCJ9';
      script.async = true;
      document.getElementById('tutorbird-widget')?.appendChild(script);
    }
  }, []);

  return (
    <>
      <Navbar />
      <Box as="main" bg="#f7f7f7" py={{ base: 8, md: 12 }} minH="80vh">
        <Box maxW="1200px" mx="auto" px={{ base: 4, md: 6 }}>
          <Text fontSize="sm" color="gray.600" mb={{ base: 4, md: 6 }}>
            <Link href="/" textDecoration="underline">Home</Link> {'>'} <Link href="/bookings" textDecoration="underline">GCSE Classes</Link> {'>'} Physics
          </Text>
          <Box maxW="700px" mx="auto">
            <Box bg="white" borderRadius="2xl" boxShadow="2xl" px={{ base: 4, md: 12 }} py={{ base: 8, md: 12 }} textAlign="center" mb={10}>
              <Heading as="h1" fontSize={{ base: '2xl', md: '4xl' }} fontWeight="extrabold" color="#1a202c" mb={4} letterSpacing="-1px">
                Physics GCSE Group Classes – Coming Soon
              </Heading>
              <Text fontSize={{ base: 'md', md: 'xl' }} color="gray.700" maxW="500px" mx="auto" mb={6}>
                Our Physics group program launches soon! Register your interest below and be the first to know when bookings open. Expect the same elite teaching, small groups, and proven results as our Biology program.
              </Text>
              <VStack spacing={4}>
                <Button
                  as="a"
                  href="#tutorbird-container"
                  bg="#37a169"
                  color="white"
                  size="lg"
                  fontWeight="bold"
                  borderRadius="md"
                  _hover={{ bg: '#2e855d' }}
                  w="100%"
                >
                  Register Interest
                </Button>
              </VStack>
            </Box>
            <Box
              id="tutorbird-container"
              w="100%"
              mt={{ base: 12, md: 12 }}
              mb={{ base: 4, md: 0 }}
              bg="#37A169"
              pt={{ base: 8, md: 20 }}
              pb={{ base: 8, md: 20 }}
              borderRadius="2xl"
              boxShadow="lg"
              px={{ base: 0, md: 0 }}
            >
              <Box
                textAlign="center"
                color="white"
                mb={{ base: 6, md: 8 }}
                maxW="700px"
                mx="auto"
                px={4}
              >
                <Heading
                  as="h2"
                  fontSize={{ base: '2xl', md: '2xl', lg: '2xl' }}
                  fontWeight="bold"
                  mb={3}
                  mt={{ base: 3, md: -5}}
                  px={{ base: 15}}
                  lineHeight="short"
                  textAlign={{ base: "left", md: "center"}}
                >
                  Want to be notified?
                </Heading>
                <Text fontSize={{ base: 'md', md: 'md' }} lineHeight="relaxed" color="white" maxW="600px" mx="auto" mb={{ base: 10, md: 5}} px={{ base: 15, md: 75}} textAlign={{ base: "left", md: "center"}}>
                  Enter your details below and we'll let you know as soon as Physics bookings are live.
                </Text>
              </Box>
              <div id="tutorbird-widget" style={{ width: '100%' }} />
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
} 