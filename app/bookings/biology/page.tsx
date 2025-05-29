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
import { DownloadIcon } from '@chakra-ui/icons';
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
      document.getElementById('tutorbird-widget')?.appendChild(script);
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
                <Box bg="#f9f9f9" borderRadius="md" p={4} mt={4} boxShadow="md">
                <VStack spacing={2} textAlign="left" mt={2} mb={3} align="start" display={{ base: 'flex', md: 'none' }}>
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

                <Text fontSize={{ base: 'sm', md: 'sm' }} color="gray.700">
                This program is for students aiming for top grades in <strong>GCSE Biology Higher Tier</strong> – whether you're doing <strong>Combined Science</strong> or <strong>Triple Science</strong>:
                </Text>
                

                <List spacing={4} fontSize={{ base: 'sm', md: 'sm' }} textAlign="left" maxW="500px">
                  <ListItem display="flex" alignItems="center" gap={3}>
                    <Circle size="24px" bg="#37A169" color="white" fontWeight="bold" fontSize="sm">✓</Circle>
                    <Text as="span"><strong>Weekly 1-hour live small-group lessons</strong> with a professional educator</Text>
                  </ListItem>
                  <ListItem display="flex" alignItems="center" gap={3}>
                    <Circle size="24px" bg="#37A169" color="white" fontWeight="bold" fontSize="sm">✓</Circle>
                    <Text as="span"><strong>Active Recall Biology Workbook</strong> & resources</Text>
                  </ListItem>
                  <ListItem display="flex" alignItems="center" gap={3}>
                    <Circle size="24px" bg="#37A169" color="white" fontWeight="bold" fontSize="sm">✓</Circle>
                    <Text as="span"><strong>Weekly homework tasks with </strong>Model Answers</Text>
                  </ListItem>
                  <ListItem display="flex" alignItems="center" gap={3}>
                    <Circle size="24px" bg="#37A169" color="white" fontWeight="bold" fontSize="sm">✓</Circle>
                    <Text as="span"><strong>Mentorship group chat</strong> for questions & support</Text>
                  </ListItem>
                  <ListItem display="flex" alignItems="center" gap={3}>
                    <Circle size="24px" bg="#37A169" color="white" fontWeight="bold" fontSize="sm">✓</Circle>
                    <Text as="span"><strong>Termly parent-student feedback calls</strong> (progress updates)</Text>
                  </ListItem>
                  <ListItem display="flex" alignItems="center" gap={3}>
                    <Circle size="24px" bg="#37A169" color="white" fontWeight="bold" fontSize="sm">✓</Circle>
                    <Text as="span"><strong>Optional holiday crash courses</strong> for exam prep</Text>
                  </ListItem>
                </List>

                <Box bg="#f9f9f9" borderRadius="md" p={4} mt={4} boxShadow="md">
                <Text fontSize="sm" color="gray.600" mt={0} fontStyle="italic">
                  Have questions? Download the full curriclum and course details below.
                </Text>
                <Stack direction={{ base: 'column', sm: 'row' }} spacing={4} mt={4}>
                <Link href="/course-info/biology-course-faqs.pdf" isExternal>
                    <Button variant="outline" borderColor="#37A169" color="#37A169" _hover={{ bg: '#37A169', color: 'white' }} leftIcon={<DownloadIcon />} w={{ base: '100%', sm: 'auto' }}>
                      Course Guide & FAQs
                    </Button>
                  </Link>
                  <Link href="/curriculums/Year10BiologyAQA.pdf" isExternal>
                    <Button variant="outline" borderColor="#37A169" color="#37A169" _hover={{ bg: '#37A169', color: 'white' }} leftIcon={<DownloadIcon />} w={{ base: '100%', sm: 'auto' }}>
                      Year 10 Curriculum
                    </Button>
                  </Link>
                  <Link href="/curriculums/Year11BiologyAQA.pdf" isExternal>
                    <Button variant="outline" borderColor="#37A169" color="#37A169" _hover={{ bg: '#37A169', color: 'white' }} leftIcon={<DownloadIcon />} w={{ base: '100%', sm: 'auto' }}>
                      Year 11 Curriculum
                    </Button>
                  </Link>
                </Stack>
                </Box>

              </Flex>
            </Flex>
          </Box>

          {/* Booking Steps Summary */}
          <Box
            textAlign="left"
            color="white"
            fontSize={{ base: 'md', md: 'lg' }}
            mt={2}
            maxW="600px"
            w="100%"
            px={{ base: 6, md: 24 }}
            py={4}
            border="1px dashed rgba(255, 255, 255, 0.7)" // 50% transparency
            borderRadius="md"
          >
            <Text mb={4} fontWeight="bold">Book in 3 Simple Steps 👇</Text>
            <List spacing={4}>
              {['Select your Biology class below', 'Confirm your details and secure your place with a payment', 'Receive your resources and class information!'].map((item, index) => (
                <ListItem key={index} display="flex" alignItems="center" gap={3}>
                  <Circle size="28px" bg="white" color="#37A169" fontWeight="bold" fontSize={{ base: 'sm', md: 'md' }} display="inline-flex" alignItems="center" justifyContent="center">{index + 1}</Circle>
                  <Text>{item}</Text>
                </ListItem>
              ))}
            </List>
          </Box>
        </Flex>

        {/* FULL WIDTH TutorBird Widget - No Flex or Box */}
        <div id="tutorbird-widget" style={{ width: '100%', marginBottom: '80px' }} />

        <Footer />
      </Box>

      {/* Global CSS overrides */}
      <style jsx global>{`
        html,
        body {
          margin: 0 !important;
          padding: 0 !important;
          background-color: #37A169 !important;
        }

        #__next {
          background-color: #37A169 !important;
        }

        iframe {
          display: block;
          width: 100% !important;
          max-width: 100% !important;
          border: none !important;
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}
