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
                Ruben Shergill
              </Heading>
              <Text as="h2" fontSize="lg" fontWeight="bold" mb={4} color={'green.600'}>
                PROFESSIONAL EDUCATOR
              </Text>
              <Text mb={6} fontSize="md" lineHeight='1.8'>
              Patricia is a final-year medical student who completed an intercalated BSc in Oncology at University College London (UCL), where she graduated with First Class Honours. At UCL, she conducted research at the prestigious Swanton Lab within the UCL Cancer Institute, gaining advanced skills in histology, statistics, and cancer biology. Patricia is passionate about education and has taught over 300 A-Level Biology and Chemistry lessons, helping students master complex topics with clarity and confidence.</Text>
              <Heading as="h3" size="xs" mb={4}>
              Patricia is a professional educator. This means Patricia:</Heading>
              <Stack spacing={3} mb={6} fontSize="xs" pl={6}>
                <Text>✔ Holds a First-Class degree from a world-leading university (UCL)</Text>
                <Text>✔ Has over 5 years of teaching experience in GCSE & A-Level science</Text>
                <Text>✔ Delivers consistent, high-quality lessons tailored to each class</Text>
                <Text>✔ Is actively involved in medical education, mentoring, and clinical skills training</Text>
                <Text>✔ Is Fully DBS Checked</Text>
              </Stack>
              <Text fontSize="md" lineHeight='1.8'>
              We are proud to have Patricia on our team, bringing both academic excellence and teaching experience to support every student’s success.</Text>
              <Heading as="h3" size="md" mt={8} mb={4}>
                Patricia teaches:
              </Heading>
              <Stack direction='row' spacing={2} wrap='wrap' mb={4}>
                  <Box as='span' bg='gray.200' px={2} py={1} borderRadius='md'>GCSE Biology</Box>
                  <Box as='span' bg='gray.200' px={2} py={1} borderRadius='md'>GCSE Chemistry</Box>
                  <Box as='span' bg='gray.200' px={2} py={1} borderRadius='md'>A-Level Biology</Box>
                  <Box as='span' bg='gray.200' px={2} py={1} borderRadius='md'>A-Level Chemistry</Box>
              </Stack>
            </Box>
            <Box flexShrink={0} mb={{ base: 8, md: 0 }}>
              <Image
                src='/images/patricia_profile.png'
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
