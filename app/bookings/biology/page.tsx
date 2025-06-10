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
  { text: 'Students entering Year 10 or 11', type: 'tick' as const },
  { text: 'AQA or Edexcel students', type: 'tick' as const },
  { text: 'Triple or Combined Science students', type: 'tick' as const },
  { text: 'Students confident with group learning', type: 'tick' as const },
  { text: 'Foundation Tier students', type: 'cross' as const },
  { text: 'Students working at grade 4 or below', type: 'cross' as const },
  { text: 'Students looking for last-minute or catch-up-only tuition', type: 'cross' as const },
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

  const sections = ['Course Content', 'Curriculum Overview', 'Meet the Tutors', 'Reviews'];

  const renderMobileContent = () => {
    if (selected === 'Course Content') {
      return (
        <>
          <Heading as="h2" fontSize={{ base: 'xl', md: 'lg' }} mb={4}>Course Description</Heading>
          <Text mb={4} fontSize="md" color="#1a202c">
          Our weekly GCSE Biology classes are designed to take your child from confusion to confidence, with a focus on Higher Tier content for both AQA and Edexcel. We cover everything students need for success in Paper 1 and Paper 2 — from tricky topics like cell biology and infection & response, to high-mark areas like photosynthesis, respiration, and required practicals.
          </Text>
          <Text mb={4} fontSize="md" color="#1a202c">
          Lessons are taught in small groups (max 5 students), with a structured approach that blends clear explanations, active recall, and exam technique coaching. Your child won't just memorise facts — they'll learn how to think like an examiner and write answers that score full marks.
          </Text>
          <Text mb={4} fontSize="md" color="#1a202c">
          We support students throughout the week with guided homework, model answers, and access to our Biology Mentorship Group Chat, so they never feel stuck or left behind. Parents are kept in the loop with regular feedback calls and progress reviews.
          </Text>
          <Text mb={4} fontSize="md" color="#1a202c">
          If your child is aiming for a 6–9 in GCSE Biology and wants clarity, structure, and expert guidance, this is the program for them.
          </Text>
          <Divider borderColor="gray.200" mt={8} mb={8} />
          <Heading as="h3" fontSize="xl" mb={4}>Suitable for:</Heading>
          <VStack align="start" spacing={3} mb={6}>
            {suitability.map((item, i) => (
              <HStack key={i} spacing={3}>
                {ticksAndCrosses[item.type]}
                <Text fontSize="md">{item.text}</Text>
              </HStack>
            ))}
          </VStack>
        </>
      );
    }
    if (selected === 'Curriculum Overview') {
      return (
        <VStack align="start" spacing={4} w="100%">
          <Text fontSize="md" color="#1a202c">
          Download the full PDF curriculum for students starting Year 10 or 11 this September. 
          </Text>
          <Text mb={4} fontSize="md" color="#1a202c">
          It includes both AQA and Edexcel class plans, with content fully aligned to Triple Science. For Combined students, we clearly flag which topics apply to them.
          </Text>
          <Button leftIcon={<DownloadIcon />} as="a" href="/biology-year-10-aqa-and-edexcel-curriculums.pdf" target="_blank" rel="noopener noreferrer" bg="#37a169" color="white" _hover={{ bg: '#2e855d' }} w="100%">
            Year 10 Curriculum
          </Button>
          <Button leftIcon={<DownloadIcon />} as="a" href="/biology-year-11-aqa-and-edexcel-curriculums.pdf" target="_blank" rel="noopener noreferrer" bg="#37a169" color="white" _hover={{ bg: '#2e855d' }} w="100%">
            Year 11 Curriculum
          </Button>
        </VStack>
      );
    }
    if (selected === 'Meet the Tutors') {
      return (
        <>
          <Heading as="h3" fontSize="xl" mb={4}>Our Tutors</Heading>
          <Text fontSize="md" color="gray.700" mb={8}>
            Hand-picked for their academic excellence, passion, and engaging teaching styles, our tutors are committed to helping every student thrive. Each tutor brings a unique energy to lessons — combining clear explanations with exam-focused strategies to support top performance.
          </Text>
          <Divider borderColor="gray.200" my={8} />
          {/* Hamza */}
          <Flex direction={{ base: 'column', md: 'row' }} gap={6} mb={10} align={{ base: 'center', md: 'start' }}>
            <Box
              order={{ base: 0, md: 0 }}
              mb={{ base: 4, md: 0 }}
              bgImage="url('/images/hamza_profile3.png')"
              bgSize="125%"
              bgPosition="15% 20%"
              bgRepeat="no-repeat"
              borderRadius="full"
              boxSize="120px"
              transform="scaleX(-1)"
            />
            <Box textAlign={{ base: 'center', md: 'left' }}>
              <Text fontWeight="bold" fontSize="lg" mb={2}>Dr Hamza R.</Text>
              <Text fontSize="md" color="gray.700">
                Hamza is a medical doctor and the founder of GCSE Doctor. A graduate of Imperial College London with a degree in Medicine and a BSc in Healthcare Management, he has over 7 years of experience helping students master science through clear explanations and structured exam technique coaching.
              </Text>
              <Text fontSize="md" color="gray.700" mt={2}>
                Known for his patient, methodical teaching style, Hamza combines active recall, spaced repetition, and real exam strategies to help students consistently achieve grades 7–9. He leads the GCSE Biology program and mentors all students through weekly classes, feedback calls, and personalised support.
              </Text>
            </Box>
          </Flex>

          <Divider borderColor="gray.200" my={8} />

          {/* Maryam */}
          <Flex direction={{ base: 'column', md: 'row' }} gap={6} mb={10} align={{ base: 'center', md: 'start' }}>
            <Box
              order={{ base: 0, md: 1 }}
              mb={{ base: 4, md: 0 }}
              bgImage="url('/images/maryam_profile.jpeg')"
              bgSize="130%"
              bgPosition="center"
              bgRepeat="no-repeat"
              borderRadius="full"
              boxSize="120px"
            />
            <Box textAlign={{ base: 'center', md: 'left' }}>
              <Text fontWeight="bold" fontSize="lg" mb={2}>Dr Maryam A.</Text>
              <Text fontSize="md" color="gray.700">
                Maryam is a medical doctor and experienced educator who graduated from Oxford with a degree in Medicine and an additional degree in Women's Health. Over the past 6 years, she has delivered more than 750 hours of tutoring across GCSE and A-Level, helping students overcome self-doubt and master complex scientific topics with confidence.
              </Text>
              <Text fontSize="md" color="gray.700" mt={2}>
                With a clear, encouraging teaching style, Maryam is known for building strong relationships with her students while pushing them to achieve their best. She leads on resource creation at GCSE Doctor and works closely with families to ensure long-term progress, consistency, and clarity — every step of the way.
              </Text>
            </Box>
          </Flex>
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

          <Heading as="h1" fontSize={{ base: '3xl', sm: '3xl', md: '5xl' }} fontWeight="bold" mb={{ base: 12, md: 10 }} color="#1a202c" lineHeight="short">
          GCSE Biology Success Program – From July 2025 (Online)
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
                                fontSize="xl" // Larger font size for 'Course Information'
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
                                <Box key={item}>
                                  <Flex
                                    align="center"
                                    onClick={() => setSelected(item)}
                                    bg={selected === item ? '#f0f0f0' : 'transparent'} // Stronger but subtle shade
                                    borderRight={selected === item ? '2px solid #37a169' : 'none'}
                                    py={3}
                                    px={4}
                                    fontWeight="bold"
                                    cursor="pointer"
                                    _hover={{
                                      bg: selected === item ? '#f0f0f0' : '#f7f7f7', // Keep a subtle hover effect only if not selected
                                    }}                                    
                                    mt={index === 0 ? 6 : 0}  // Adds extra spacing only for the first item
                                  >
                                    {item}
                                  </Flex>
                                  {index < sections.length - 1 && (
                                    <Divider borderColor="gray.200" />
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
                      <Tab key={tab} whiteSpace="nowrap" _selected={{ fontWeight: 'bold', borderBottom: '2px solid #37a169' }} pb={2} fontSize="md">
                        {tab}
                      </Tab>
                    ))}
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <Heading as="h2"   fontSize="xl" mb={4}>Course Description</Heading>
                      <Text mb={4} fontSize="md" color="#1a202c">
                      Our weekly GCSE Biology classes are designed to take your child from confusion to confidence, with a focus on Higher Tier content for both AQA and Edexcel. We cover everything students need for success in Paper 1 and Paper 2 — from tricky topics like cell biology and infection & response, to high-mark areas like photosynthesis, respiration, and required practicals.
                      </Text>
                      <Text mb={4} fontSize="md" color="#1a202c">
                      Lessons are taught in small groups (max 5 students), with a structured approach that blends clear explanations, active recall, and exam technique coaching. Your child won't just memorise facts — they'll learn how to think like an examiner and write answers that score full marks.
                      </Text>
                      <Text mb={4} fontSize="md" color="#1a202c">
                      We support students throughout the week with guided homework, model answers, and access to our Biology Mentorship Group Chat, so they never feel stuck or left behind. Parents are kept in the loop with regular feedback calls and progress reviews.
                      </Text>
                      <Text mb={4} fontSize="md" color="#1a202c">
                      If your child is aiming for a 6–9 in GCSE Biology and wants clarity, structure, and expert guidance, this is the program for them.
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
                      <Text fontSize="md" mb={4} color="#1a202c">
                      Download the full PDF curriculum for students starting Year 10 or 11 this September. It includes both AQA and Edexcel class plans, with content fully aligned to Triple Science. For Combined students, we clearly flag which topics apply to them.
                      </Text>
                        <Button leftIcon={<DownloadIcon />} as="a" href="/biology-year-10-aqa-and-edexcel-curriculums.pdf" target="_blank" rel="noopener noreferrer" bg="#37a169" color="white" _hover={{ bg: '#2e855d' }} w="100%">
                          Year 10 Curriculum
                        </Button>
                        <Button leftIcon={<DownloadIcon />} as="a" href="/biology-year-11-aqa-and-edexcel-curriculums.pdf" target="_blank" rel="noopener noreferrer" bg="#37a169" color="white" _hover={{ bg: '#2e855d' }} w="100%">
                          Year 11 Curriculum
                        </Button>
                      </VStack>
                    </TabPanel>
                    <TabPanel>
                      <Heading as="h3" fontSize="xl" mb={4}>Our Tutors</Heading>
                      <Text fontSize="md" color="gray.700" mb={8}>
                        Hand-picked for their academic excellence, passion, and engaging teaching styles, our tutors are committed to helping every student thrive. Each tutor brings a unique energy to lessons — combining clear explanations with exam-focused strategies to support top performance.
                      </Text>
                      <Divider borderColor="gray.200" my={8} />  {/* Divider between tutors */}
                        <Flex direction={{ base: 'column', md: 'row' }} gap={6} mb={10} align="start">
                        <Box
                          minW="120px"
                          h="120px"
                          bgImage="url('/images/hamza_profile3.png')"
                          bgSize="125%"
                          bgPosition="15% 20%"
                          bgRepeat="no-repeat"
                          borderRadius="full"
                          transform="scaleX(-1)"
                        />
                        <Box>
                          <Text fontWeight="bold" fontSize="lg" mb={2}>Dr Hamza R.</Text>
                          <Text fontSize="md" color="gray.700">
                            Hamza is a medical doctor and the founder of GCSE Doctor. A graduate of Imperial College London with a degree in Medicine and a BSc in Healthcare Management, he has over 7 years of experience helping students master science through clear explanations and structured exam technique coaching.
                          </Text>
                          <Text fontSize="md" color="gray.700" mt={2}>
                            Known for his patient, methodical teaching style, Hamza combines active recall, spaced repetition, and real exam strategies to help students consistently achieve grades 7–9. He leads the GCSE Biology program and mentors all students through weekly classes, feedback calls, and personalised support.
                          </Text>
                        </Box>
                      </Flex>

                      <Divider borderColor="gray.200" my={8} />  {/* Divider between tutors */}

                    <Flex direction={{ base: 'column', md: 'row' }} gap={6} mb={10} align="start">
                      <Box flex="1">
                        <Text fontWeight="bold" fontSize="lg" mb={2}>Dr Maryam A.</Text>
                        <Text fontSize="md" color="gray.700">
                          Maryam is a medical doctor and experienced educator who graduated from Oxford with a degree in Medicine and an additional degree in Women's Health. Over the past 6 years, she has delivered more than 750 hours of tutoring across GCSE and A-Level, helping students overcome self-doubt and master complex scientific topics with confidence.
                        </Text>
                        <Text fontSize="md" color="gray.700" mt={2}>
                          With a clear, encouraging teaching style, Maryam is known for building strong relationships with her students while pushing them to achieve their best. She leads on resource creation at GCSE Doctor and works closely with families to ensure long-term progress, consistency, and clarity — every step of the way.
                        </Text>
                      </Box>
                      <Box
                        minW="120px"
                        h="120px"
                        bgImage="url('/images/maryam_profile.jpeg')" // update path as needed
                        bgSize="130%"
                        bgPosition="center"
                        bgRepeat="no-repeat"
                        borderRadius="full"
                      />
                    </Flex>




                      {/* Add more tutors here if needed using same layout */}
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
                £20 <Text as="span" fontSize="md" fontWeight="normal">/ per lesson</Text>
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
              <VStack align="start" spacing={4} fontSize="md">
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
                <Text fontWeight="400" fontSize="xl" color="black" mt={4} textAlign="center" mx="auto" maxW="90%">
                See exactly what your child will get in the program — <strong>download the full course guide below:</strong></Text>
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
    fontSize={{ base: '2xl', md: '2xl', lg: '2xl' }}
    fontWeight="bold"
    mb={3}
    mt={{ base: 3, md: -5}}
    px={{ base: 15}}
    lineHeight="short"
    textAlign={{ base: "left", md: "center"}}
  >
    Ready to secure your child's place?
  </Heading>
  <Text fontSize={{ base: 'md', md: 'md' }} lineHeight="relaxed" color="white" maxW="700px" mx="auto" mb={{ base: 10, md: 5}} px={{ base: 15, md: 75}} textAlign={{ base: "left", md: "center"}}


>
  Book your GCSE Biology group class below in just a few clicks. Choose your class, confirm details, and you're all set—resources, feedback, and expert teaching are all included.
</Text>

</Box>

  <div id="tutorbird-widget" style={{ width: '100%' }} />
</Box>


      </Box>
      <Footer />
    </>
  );
}
