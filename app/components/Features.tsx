"use client"

import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
    Box,
  } from '@chakra-ui/react';
  import {
    MdOutlineSchool, 
    MdOutlineQuiz,
  } from 'react-icons/md';
  import { IoCallOutline } from "react-icons/io5";
  import { ReactElement, ReactNode, } from 'react';
  
  interface FeatureProps {
    text: ReactNode;
    iconBg: string;
    icon?: ReactElement;
  }
  
  const Feature = ({text, icon, iconBg }: FeatureProps) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={500}>{text}</Text>
      </Stack>
    );
  };
  
  export default function SplitWithImage() {
    return (
      <Box id="how-it-works" as="section" bg="#37a169" py={{ base: 16, md: 24 }} w="100vw" position="relative" left="50%" right="50%" ml="-50vw" mr="-50vw" zIndex={0}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20} alignItems="center" maxW="7xl" mx="auto" px={{ base: 4, md: 8 }}>
          <Stack spacing={10} color="white" maxW={{ base: '100%', md: '600px' }}>
            <Heading as="h2" fontSize={{ base: '2xl', md: '4xl' }} fontWeight="bold" mb={2} color="white">
              How It Works
            </Heading>
            <Stack spacing={10}>
              <Stack direction="row" align="flex-start" spacing={5}>
                <Box as="span" bg="white" color="#37a169" borderRadius="50%" w={14} h={14} minW={14} minH={14} maxW={14} maxH={14} display="flex" alignItems="center" justifyContent="center" fontSize="2xl" fontWeight="bold" boxShadow="md">1</Box>
                <Box>
                  <Text fontWeight="bold" fontSize="lg" color="white">Book Your Place</Text>
                  <Text color="whiteAlpha.900">Secure your spot in a small, focused group led by an expert tutor.</Text>
                </Box>
              </Stack>
              <Stack direction="row" align="flex-start" spacing={5}>
                <Box as="span" bg="white" color="#37a169" borderRadius="50%" w={14} h={14} minW={14} minH={14} maxW={14} maxH={14} display="flex" alignItems="center" justifyContent="center" fontSize="2xl" fontWeight="bold" boxShadow="md">2</Box>
                <Box>
                  <Text fontWeight="bold" fontSize="lg" color="white">Join Weekly Live Lessons</Text>
                  <Text color="whiteAlpha.900">Learn with world-class tutors, proven strategies, and interactive resources.</Text>
                </Box>
              </Stack>
              <Stack direction="row" align="flex-start" spacing={5}>
                <Box as="span" bg="white" color="#37a169" borderRadius="50%" w={14} h={14} minW={14} minH={14} maxW={14} maxH={14} display="flex" alignItems="center" justifyContent="center" fontSize="2xl" fontWeight="bold" boxShadow="md">3</Box>
                <Box>
                  <Text fontWeight="bold" fontSize="lg" color="white">Get Results</Text>
                  <Text color="whiteAlpha.900">Achieve your target grades with ongoing support, feedback, and motivation.</Text>
                </Box>
              </Stack>
            </Stack>
          </Stack>
          <Box position="relative" w="100%" display="flex" alignItems="center" justifyContent="center">
            <Image
              src="/images/lesson screenshot 5.png"
              alt="Live lesson screenshot"
              w="100%"
              maxH={{ base: '220px', md: '400px', lg: '480px' }}
              objectFit="contain"
              border="4px solid white"
              boxShadow="2xl"
            />
            {/* Gradient overlay for text contrast on desktop */}
            <Box display={{ base: 'none', md: 'block' }} position="absolute" left={0} top={0} bottom={0} w="60px" h="100%" zIndex={2} pointerEvents="none" style={{background: 'linear-gradient(90deg, rgba(55,161,105,0.7) 0%, rgba(55,161,105,0.0) 100%)'}} />
          </Box>
        </SimpleGrid>
      </Box>
    );
  }