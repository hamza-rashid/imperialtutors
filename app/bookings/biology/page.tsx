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

export default function BookingPage() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [selected, setSelected] = useState('Course Content');

  useEffect(() => {
    // Load TutorBird script
    if (!document.getElementById('tutorbird-embed-script')) {
      const script = document.createElement('script');
      script.id = 'tutorbird-embed-script';
      script.src = 'https://app.tutorbird.com/Widget/v4/Widget.ashx?settings=eyJTY2hvb2xJRCI6InNjaF9obENKWiIsIldlYnNpdGVJRCI6Indic196SmhKSyIsIldlYnNpdGVCbG9ja0lEIjoid2JiX2c0NVpKRCJ9';
      script.async = true;
      document.getElementById('tutorbird-widget')?.appendChild(script);
    }
  
    // Load Elfsight script
    if (!document.getElementById('elfsight-embed-script')) {
      const elfsightScript = document.createElement('script');
      elfsightScript.id = 'elfsight-embed-script';
      elfsightScript.src = 'https://static.elfsight.com/platform/platform.js';
      elfsightScript.async = true;
      document.body.appendChild(elfsightScript); // Elfsight prefers body append
    }
  }, []);

  const sections = ['Course Content', 'Course Timetable', 'Meet the Tutors', 'Reviews'];

  const renderMobileContent = () => {
    if (selected === 'Course Content') {
      return (
        <>
          <Heading as="h2" fontSize="lg" mb={4}>Course Description</Heading>
          <Text mb={4} fontSize="sm" color="#1a202c">
            Our online Biology GCSE Easter crash courses have been carefully designed to prepare Year 11 students for their final exams.
          </Text>
          <Text mb={4} fontSize="sm" color="#1a202c">
            Courses cover key areas, fill gaps, and improve understanding. Our teachers also coach exam technique to maximise marks.
          </Text>
          <Divider borderColor="gray.200" mt={8} mb={8} />
          <Heading as="h3" fontSize="md" mb={4}>Suitable for:</Heading>
          <VStack align="start" spacing={3} mb={6}>
            {suitability.map((item, i) => (
              <HStack key={i} spacing={3}>
                {ticksAndCrosses[item.type]}
                <Text fontSize="sm">{item.text}</Text>
              </HStack>
            ))}
          </VStack>
        </>
      );
    }
    if (selected === 'Course Timetable') {
      return (
        <VStack align="start" spacing={4} w="100%">
          <Button leftIcon={<DownloadIcon />} as="a" href="/pdfs/aqa-separate.pdf" download bg="#37a169" color="white" _hover={{ bg: '#2e855d' }} w="100%">
            Year 10 Curriculum
          </Button>
          <Button leftIcon={<DownloadIcon />} as="a" href="/pdfs/aqa-combined.pdf" download bg="#37a169" color="white" _hover={{ bg: '#2e855d' }} w="100%">
            Year 11 Curriculum
          </Button>
        </VStack>
      );
    }
    if (selected === 'Meet the Tutors') {
      return (
        <>
          <Heading as="h3" fontSize="md" mb={4}>Our Tutors</Heading>
          <Text fontSize="sm" color="gray.700" mb={6}>
            Hand-picked for academic excellence and inspiring teaching.
          </Text>
        </>
      );
    }
    if (selected === 'Reviews') {
        return (
          <>
            <div className="elfsight-app-f110ac15-8c07-4399-9202-ae018fe3c80f" />
          </>
        );
      }
      return null;
    };

  return (
    <>
      <Navbar />
      <Box as="main" bg="#f7f7f7" py={{ base: 8, md: 12 }}>
        <Box maxW="1200px" mx="auto" px={{ base: 4, md: 6 }}>
          <Text fontSize="sm" color="gray.600" mb={{ base: 4, md: 6 }}>
            <Link href="/" textDecoration="underline">Home</Link> {'>'} <Link href="/bookings" textDecoration="underline">GCSE Classes</Link> {'>'} Biology
          </Text>

          <Heading as="h1" fontSize={{ base: '2xl', sm: '3xl', md: '5xl' }} fontWeight="bold" mb={{ base: 6, md: 10 }} color="#1a202c">
            Biology GCSE Easter Revision Course – Online
          </Heading>

          <Flex direction={{ base: 'column', md: 'row' }} gap={{ base: 8, md: 10 }} align="flex-start" position="relative">
            {/* Left Column */}
            <Box flex="2" bg="white" p={{ base: 4, md: 6 }} borderRadius="md" boxShadow="sm" w="100%">
              {isMobile ? (
                <>
                  <Accordion allowToggle defaultIndex={[0]} w="100%" border="none">
                    <AccordionItem border="none" w="100%">
                        {({ isExpanded }) => (
                        <>
                            <h2>
                            <AccordionButton
                                w="100%"
                                py={3}
                                fontWeight="bold"
                                fontSize="lg" // Larger font size for 'Course Information'
                                pl={0} // Left alignment
                                _hover={{ bg: 'transparent' }}
                            >
                                <Box flex="1" textAlign="left">
                                Course Information
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>

                            {/* Divider under Course Information */}
                            <Box borderBottom="1px solid" borderColor="gray.200" />

                            <AccordionPanel p={0} w="100%">
                            <VStack spacing={0} align="stretch" w="100%">
                                {sections.map((item, index) => (
                                <Box
                                    key={item}
                                    onClick={() => setSelected(item)}
                                    bg={selected === item ? 'gray.50' : 'transparent'}
                                    borderRight={selected === item ? '2px solid #37a169' : 'none'}
                                    py={3}
                                    px={4}
                                    fontWeight="bold"
                                    cursor="pointer"
                                    _hover={{ bg: 'gray.50' }}
                                >
                                    {item}
                                    {/* Divider under each item */}
                                    {index < sections.length && (
                                    <Box borderBottom="1px solid" borderColor="gray.200" mt={3} />
                                    )}

                                </Box>
                                ))}
                            </VStack>
                            </AccordionPanel>
                        </>
                        )}
                    </AccordionItem>
                    </Accordion>

                  <Box mt={6}>{renderMobileContent()}</Box>
                </>
              ) : (
                <Tabs variant="unstyled" isLazy>
                  <TabList mb={6} gap={8} borderBottom="1px solid #E2E8F0">
                    {sections.map((tab) => (
                      <Tab key={tab} _selected={{ fontWeight: 'bold', borderBottom: '2px solid #37a169' }} pb={2} fontSize="md">
                        {tab}
                      </Tab>
                    ))}
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <Heading as="h2" fontSize="lg" mb={4}>Course Description</Heading>
                      <Text mb={4} fontSize="md" color="#1a202c">
                        Our online Biology GCSE Easter crash courses have been carefully designed to prepare Year 11 students for their final exams.
                      </Text>
                      <Text mb={4} fontSize="md" color="#1a202c">
                        Courses cover key areas, fill gaps, and improve understanding. Our teachers also coach exam technique to maximise marks.
                      </Text>
                      <Divider borderColor="gray.200" mb={8} mt={8} />
                      <Heading as="h3" fontSize="md" mb={4}>Suitable for:</Heading>
                      <VStack align="start" spacing={3} mb={6}>
                        {suitability.map((item, i) => (
                          <HStack key={i} spacing={3}>
                            {ticksAndCrosses[item.type]}
                            <Text fontSize="md">{item.text}</Text>
                          </HStack>
                        ))}
                      </VStack>
                    </TabPanel>
                    <TabPanel>
                      <VStack align="start" spacing={4} w="100%">
                        <Button leftIcon={<DownloadIcon />} as="a" href="/pdfs/aqa-separate.pdf" download bg="#37a169" color="white" _hover={{ bg: '#2e855d' }} w="100%">
                          Year 10 Curriculum
                        </Button>
                        <Button leftIcon={<DownloadIcon />} as="a" href="/pdfs/aqa-combined.pdf" download bg="#37a169" color="white" _hover={{ bg: '#2e855d' }} w="100%">
                          Year 11 Curriculum
                        </Button>
                      </VStack>
                    </TabPanel>
                    <TabPanel>
                      <Heading as="h3" fontSize="md" mb={4}>Our Tutors</Heading>
                      <Text fontSize="md" color="gray.700" mb={6}>
                        Hand-picked for academic excellence and inspiring teaching.
                      </Text>
                    </TabPanel>
                    <TabPanel>
                      <div className="elfsight-app-f110ac15-8c07-4399-9202-ae018fe3c80f" />
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              )}
            </Box>

            {/* Right Column */}
            <Box
              flex="1"
              bg="white"
              p={{ base: 4, md: 6 }}
              borderRadius="md"
              boxShadow="lg"
              w={{ base: '100%', md: 'auto' }}
              position="sticky"
              top="120px" // Adjust this to your navbar height + margin
              zIndex="1"
            >              
            <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" mb={4}>
                £20 <Text as="span" fontSize="sm" fontWeight="normal">/ per lesson</Text>
              </Text>
              <Button
                bg="#37a169"
                color="white"
                w="100%"
                _hover={{ bg: "#2e855d" }}
                sx={{ backgroundColor: "#37a169 !important" }}
                onClick={() => {
                    const el = document.getElementById('tutorbird-container');
                    if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                    }
                }}
                >
                Book Now
                </Button>
                <Divider my={6} />
              <VStack align="start" spacing={4} fontSize="sm">
                <HStack>
                  <Image src="/images/tier.svg" alt="Tier" boxSize="20px" />
                  <Text><strong>Tier:</strong> Higher</Text>
                </HStack>
                <Divider borderColor="gray.200" />
                <HStack>
                  <Image src="/images/online.svg" alt="Location" boxSize="20px" />
                  <Text><strong>Location:</strong> Online</Text>
                </HStack>
                <Divider borderColor="gray.200" />
                <HStack>
                  <Image src="/images/exam-board.svg" alt="Exam Boards" boxSize="20px" />
                  <Text><strong>Exam Boards:</strong> AQA, Edexcel</Text>
                </HStack>
                <Divider borderColor="gray.200" />
                <Button
                leftIcon={<DownloadIcon />}
                variant="outline"
                borderColor="#37a169"
                color="#37a169"
                w="100%"
                mt={4}
                _hover={{ bg: 'gray.50', borderColor: '#2e855d', color: '#2e855d' }}
                sx={{ backgroundColor: 'white !important' }}
                >
                Course Guide & FAQs
                </Button>


              </VStack>
            </Box>
          </Flex>

        </Box>
        <Box
  id="tutorbird-container"
  w="100%"
  mt={{ base: 12, md: 12 }}
  mb={{ base: 4, md: 0 }}
  bg="#37A169"
  pt={{ base: 12, md: 20 }}
  pb={{ base: 12, md: 20 }}
>
<Box
  textAlign="center"
  color="white"
  mb={{ base: 6, md: 8 }}
  maxW="800px"
  mx="auto"
  px={4}
>
  <Heading
    as="h2"
    fontSize={{ base: 'xl', md: '2xl', lg: '2xl' }}
    fontWeight="bold"
    mb={3}
    mt={{ base: 3, md: -5}}
    lineHeight="short"
  >
    Ready to secure your child’s place?
  </Heading>
  <Text fontSize={{ base: 'sm', md: 'md' }} lineHeight="relaxed" color="white" maxW="700px" mx="auto" mb={{ base: 10, md: 5}}
>
  Book your GCSE Biology group class below in just a few clicks. Choose your class, confirm details, and you’re all set—resources, feedback, and expert teaching are all included.
</Text>

</Box>

  <div id="tutorbird-widget" style={{ width: '100%' }} />
</Box>


      </Box>
      <Footer />
    </>
  );
}
