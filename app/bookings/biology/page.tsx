"use client";

import { useEffect } from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  VStack,
  HStack,
  Avatar,
  List,
  ListItem,
  Circle,
} from '@chakra-ui/react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function BookingPage() {
  useEffect(() => {
    if (!document.getElementById('tutorbird-embed-script')) {
      const script = document.createElement('script');
      script.id = 'tutorbird-embed-script';
      script.src =
        'https://app.tutorbird.com/Widget/v4/Widget.ashx?settings=eyJTY2hvb2xJRCI6InNjaF9obENKWiIsIldlYnNpdGVJRCI6Indic196SmhKSyIsIldlYnNpdGVCbG9ja0lEIjoid2JiX2c0NVpKRCJ9';
      script.async = true;
      document.getElementById('tutorbird-widget-container')?.appendChild(script);
    }
  }, []);

  return (
    <>
      <Box bg="#37A169" color="white" fontFamily="Inter, sans-serif">
        <Navbar />

        <Flex direction="column" justify="center" align="center" py={10} px={6} gap={10} maxW="1200px" mx="auto">
          <Box bg="white" color="black" borderRadius="md" p={{ base: 6, md: 12 }} px={{ base: 6, md: 20, lg: 40 }} w="100%" maxW="1000px">
            <Flex direction={{ base: 'column', md: 'row' }} align="flex-start" justify="center" gap={10}>
              
              {/* Image Box - always first */}
              <Box flex="1" minW="220px" maxW="300px" textAlign="left" order={{ base: 1, md: 1 }}>
                <Image
                  src="/images/biology_lessons_cover_image.png"
                  alt="Biology Lessons Cover"
                  objectFit="contain"
                  w="100%"
                  borderRadius="md"
                />

                {/* Team for desktop */}
                <VStack spacing={2} textAlign="left" mt={4} align="start" display={{ base: 'none', md: 'flex' }}>
                  <Text fontSize="md" fontWeight="bold">Team</Text>
                  <Stack direction="column" spacing={2} align="start">
                    <HStack>
                      <Avatar size="sm" src="/images/hamza_profile3.png" name="Dr. Hamza Rashid" bg="gray.300" />
                      <Link href="/tutors/hamza" color="gray.700" fontSize="sm" fontWeight="medium">Dr. Hamza Rashid</Link>
                    </HStack>
                    <HStack>
                      <Avatar size="sm" src="/images/maryam_profile.jpeg" name="Dr. Maryam Amer" bg="gray.300" />
                      <Link href="/tutors/maryam" color="gray.700" fontSize="sm" fontWeight="medium">Dr. Maryam Amer</Link>
                    </HStack>
                  </Stack>
                </VStack>
              </Box>

              {/* Right Column */}
              <Flex direction="column" flex="2" textAlign="left" justify="center" align="flex-start" gap={4} order={{ base: 2, md: 2 }}>
                <Heading fontSize={{ base: '2xl', md: '3xl' }} mb={2} textAlign="left">
                  GCSE Biology Group Tuition – AQA & Edexcel (Higher Tier)
                </Heading>

                {/* Team for mobile */}
                <VStack spacing={2} textAlign="left" mt={4} align="start" display={{ base: 'flex', md: 'none' }}>
                  <Text fontSize="md" fontWeight="bold">Team</Text>
                  <Stack direction="column" spacing={2} align="start">
                    <HStack>
                      <Avatar size="sm" src="/images/hamza_profile3.png" name="Dr. Hamza Rashid" bg="gray.300" />
                      <Link href="/tutors/hamza" color="gray.700" fontSize="sm" fontWeight="medium">Dr. Hamza Rashid</Link>
                    </HStack>
                    <HStack>
                      <Avatar size="sm" src="/images/maryam_profile.jpeg" name="Dr. Maryam Amer" bg="gray.300" />
                      <Link href="/tutors/maryam" color="gray.700" fontSize="sm" fontWeight="medium">Dr. Maryam Amer</Link>
                    </HStack>
                  </Stack>
                </VStack>

                <Text fontSize={{ base: 'sm', md: 'sm' }} color="gray.700">
                  Our program helps students build knowledge, confidence, and exam technique for top grades. Here’s what’s included:
                </Text>

                <List spacing={4} fontSize={{ base: 'sm', md: 'sm' }} textAlign="left" maxW="500px">
                  {[
                    'Weekly 1-hour live small-group lesson',
                    'Active Recall Biology Workbook & resources',
                    'Weekly homework tasks with feedback',
                    'Mentorship group chat for questions & support',
                    'Termly parent-student feedback calls',
                    'Optional holiday crash courses for exam prep',
                  ].map((item, index) => (
                    <ListItem key={index} display="flex" alignItems="center" gap={3}>
                      <Circle size="24px" bg="#37A169" color="white" fontWeight="bold" fontSize="sm">✓</Circle>
                      {item}
                    </ListItem>
                  ))}
                </List>

                <Stack direction={{ base: 'column', sm: 'row' }} spacing={4} mt={6}>
                  <Link href="/curriculums/Year10BiologyAQA.pdf" isExternal>
                    <Button variant="outline" borderColor="#37A169" color="#37A169" _hover={{ bg: '#37A169', color: 'white' }}>
                      Year 10 Curriculum (AQA)
                    </Button>
                  </Link>
                  <Link href="/curriculums/Year11BiologyAQA.pdf" isExternal>
                    <Button variant="outline" borderColor="#37A169" color="#37A169" _hover={{ bg: '#37A169', color: 'white' }}>
                      Year 11 Curriculum (AQA)
                    </Button>
                  </Link>
                  <Link href="/course-info/biology-course-faqs.pdf" isExternal>
                    <Button variant="outline" borderColor="#37A169" color="#37A169" _hover={{ bg: '#37A169', color: 'white' }}>
                      Course Guide & FAQs
                    </Button>
                  </Link>
                </Stack>
              </Flex>
            </Flex>
          </Box>

          {/* Booking Steps Summary */}
          <Box textAlign="left" color="white" fontSize={{ base: 'md', md: 'lg' }} mt={2} maxW="600px" w="100%" px={{ base: 6, md: 24 }}>
            <Text mb={4} fontWeight="bold">Booking in 3 Simple Steps 👇</Text>
            <List spacing={4}>
              {['Select your Biology class below', 'Confirm your details and secure your place', 'Start learning and receive your resources!'].map((item, index) => (
                <ListItem key={index} display="flex" alignItems="center" gap={4}>
                  <Circle size="28px" bg="white" color="#37A169" fontWeight="bold" fontSize="md" display="inline-flex" alignItems="center" justifyContent="center">{index + 1}</Circle>
                  <Text>{item}</Text>
                </ListItem>
              ))}
            </List>
          </Box>

          <Box id="tutorbird-widget-container" w="100%" maxW="800px" p={0} m={0} />
        </Flex>

        <Footer />
      </Box>
    </>
  );
}
