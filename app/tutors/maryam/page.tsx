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
                Dr Maryam Amer
              </Heading>
              <Text as="h2" fontSize="lg" fontWeight="bold" mb={4} color={'green.600'}>
                CO-FOUNDER AND PROFESSIONAL EDUCATOR
              </Text>
              <Text mb={6} fontSize="md" lineHeight='1.8'>
                Maryam is a highly qualified medical doctor who graduated from Oxford, where she also completed an additional degree in women's health. With over 750 hours of tutoring experience gained over 6 years, Maryam excels at helping students build confidence and thoroughly understand challenging scientific concepts.
              </Text>
              <Heading as="h3" size="xs" mb={4}>
                Maryam is a professional educator. This means Maryam:
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
                Maryam teaches:
              </Heading>
              <Stack direction='row' spacing={2} wrap='wrap' mb={4}>
                  <Box as='span' bg='gray.200' px={2} py={1} borderRadius='md'>GCSE Biology</Box>
                  <Box as='span' bg='gray.200' px={2} py={1} borderRadius='md'>GCSE Chemistry</Box>
                  <Box as='span' bg='gray.200' px={2} py={1} borderRadius='md'>A-Level Biology</Box>
                  <Box as='span' bg='gray.200' px={2} py={1} borderRadius='md'>A-Level Chemistry</Box>
                  <Box as='span' bg='gray.200' px={2} py={1} borderRadius='md'>UCAT Support</Box>
                  <Box as='span' bg='gray.200' px={2} py={1} borderRadius='md'>BMAT Support</Box>
              </Stack>
              <Text as='i' fontSize="sm">Maryam is also skilled in providing tailored interview preparation for university admissions, including medicine and dentistry interviews.</Text>
            </Box>
            <Box flexShrink={0} mb={{ base: 8, md: 0 }}>
              <Image
                src='/images/maryam_profile.jpeg'
                alt="Maryam - Professional GCSE Doctor Tutor"
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
