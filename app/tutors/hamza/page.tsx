"use client"

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Box, Container, Heading, Text, Stack } from '@chakra-ui/react';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <Box bg="#F7F7F7" py={10}>
        <Container maxW={'6xl'}>
          <Stack direction={{ base: 'column-reverse', md: 'row' }}
            spacing={8}
            alignItems={{ base: 'center', md: 'flex-start' }}
          >
            <Box>
              <Heading as="h1" size="xl" mb={4}>
                Dr Hamza Rashid
              </Heading>
              <Text as="h2" fontSize="lg" fontWeight="bold" mb={4} color={'green.600'}>
                FOUNDER AND ELITE EDUCATOR
              </Text>
              <Text mb={6} fontSize="md" lineHeight='1.8'>
                Hamza holds 2 degrees from Imperial College London, and has over 7 years of experience in tutoring GCSE and A-Level students. He is an expert in the Sciences, and is known for his patient, methodical teaching style that helps students build a solid understanding of complex concepts. Since starting GCSE Doctor in 2017, Hamza has successfully taught over 2,000 hours and supported over 40 families in achieving their academic goals.
              </Text>
              <Heading as="h3" size="xs" mb={4}>
                Hamza is an elite educator. This means Hamza:
              </Heading>
              <Stack spacing={3} mb={6} fontSize="xs" pl={6}>
                <Text>✔ Achieved Top grades at GCSE/A-Level, attended a top university and has extensive tutoring experience</Text>
                <Text>✔ Provides consistent, high-quality tuition, committing to students for the long term to ensure steady progress</Text>
                <Text>✔ Is involved in carefully selecting and curating resources for all GCSE Doctor students at a senior level</Text>
                <Text>✔ Is Fully DBS Checked</Text>
              </Stack>
              <Text fontSize="md" lineHeight='1.8'>
                We believe these factors ensure a level of dedication and quality that is unique to our tutors, providing our students with an exceptional learning experience and consistent, results-driven support.
              </Text>
              <Heading as="h3" size="md" mt={8} mb={4}>
                Hamza teaches:
              </Heading>
              <Stack direction='row' spacing={2} wrap='wrap' mb={4}>
                  <Box as='span' bg='gray.200' px={2} py={1} borderRadius='md'>GCSE Biology</Box>
                  <Box as='span' bg='gray.200' px={2} py={1} borderRadius='md'>GCSE Chemistry</Box>
                  <Box as='span' bg='gray.200' px={2} py={1} borderRadius='md'>GCSE Physics</Box>
                  <Box as='span' bg='gray.200' px={2} py={1} borderRadius='md'>GCSE Mathematics</Box>
                  <Box as='span' bg='gray.200' px={2} py={1} borderRadius='md'>A-Level Biology</Box>
                  <Box as='span' bg='gray.200' px={2} py={1} borderRadius='md'>A-Level Chemistry</Box>
                  <Box as='span' bg='gray.200' px={2} py={1} borderRadius='md'>UCAT Support</Box>
                  <Box as='span' bg='gray.200' px={2} py={1} borderRadius='md'>BMAT Support</Box>
              </Stack>
              <Text as='i' fontSize="sm" >Hamza is also skilled in providing tailored interview preparation for university admissions, including medicine and dentistry interviews.</Text>
            </Box>
            <Box flexShrink={0} mb={{ base: 8, md: 0 }}>
              <Image
                src='/images/hamza_profile.png'
                alt="Hamza - Professional GCSE Doctor Tutor"
                width={300}
                height={300}
                style={{ borderRadius: '16px' }}
              />
            </Box>
          </Stack>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default AboutPage;
