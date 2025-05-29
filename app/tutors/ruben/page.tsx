"use client"

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Box, Container, Heading, Text, Stack, Link } from '@chakra-ui/react';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <Box bg="#F7F7F7" py={10}>
        <Container maxW={'6xl'}>
            {/* Breadcrumbs */}
            <Text fontSize="sm" color="gray.600" mb={4}>
            <Link href="/" textDecoration="underline">Home</Link> {'>'} <Link href="/tutors" textDecoration="underline">Tutors</Link> {'>'} Ruben
          </Text>
          <Stack direction={{ base: 'column-reverse', md: 'row' }}
            spacing={8}
            alignItems={{ base: 'center', md: 'flex-start' }}
          >
            <Box>
              <Heading as="h1" size="xl" mb={4}>
                Ruben Shergill
              </Heading>
              <Text as="h2" fontSize="lg" fontWeight="bold" mb={4} color={'green.600'}>
                PROFESSIONAL EDUCATOR
              </Text>
              <Text mb={6} fontSize="md" lineHeight='1.8'>
                Ruben is a final year student at the University of Manchester, studying Mathematics and Computer Science. He has a strong academic background, having achieved 4 A*s in Biology, Chemistry, Physics, and Mathematics at A-Level. Ruben is passionate about technology, startups, and consulting, and he brings this enthusiasm into his teaching, helping students to understand complex subjects in a practical and engaging way.
              </Text>
              <Heading as="h3" size="xs" mb={4}>
                Ruben is a professional educator. This means Ruben:
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
                Ruben teaches:
              </Heading>
              <Stack direction='row' spacing={2} wrap='wrap' mb={4}>
                  <Box as='span' bg='gray.200' px={2} py={1} borderRadius='md'>GCSE Mathematics</Box>
                  <Box as='span' bg='gray.200' px={2} py={1} borderRadius='md'>GCSE Computer Science</Box>
                  <Box as='span' bg='gray.200' px={2} py={1} borderRadius='md'>GCSE Physics</Box>
                  <Box as='span' bg='gray.200' px={2} py={1} borderRadius='md'>A-Level Mathematics</Box>
                  <Box as='span' bg='gray.200' px={2} py={1} borderRadius='md'>A-Level Computer Science</Box>
              </Stack>
              <Text as='i' fontSize="sm">Ruben is also interested in providing insights into the tech industry, startups, and consulting, making him an ideal mentor for students considering these career paths.</Text>
            </Box>
            <Box flexShrink={0} mb={{ base: 8, md: 0 }}>
              <Image
                src='/images/ruben_profile.jpeg'
                alt="Ruben - Professional GCSE Doctor Tutor"
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
