"use client";

import {
  Box,
  Heading,
  Text,
  Img,
  Flex,
  SimpleGrid,
  Link as ChakraLink,
  HStack,
  Icon,
  Badge,
} from "@chakra-ui/react";
import { FaTag, FaCalendarAlt, FaLayerGroup } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const subjects = [
  {
    title: "Biology Lessons",
    description:
      "Master the AQA & Edexcel GCSE Biology syllabus with our expert-led group classes.",
    image: "/images/biology lessons.png",
    link: "/bookings/biology",
    price: "£20/hr",
    tier: "Higher",
    start: "1st July 2025",
  },
  {
    title: "Chemistry Lessons",
    description:
      "Learn Chemistry the smart way — interactive lessons designed to boost your exam success.",
    image: "/images/chemistry lessons.png",
    link: "/bookings/chemistry",
    price: "£20/hr",
    tier: "Higher",
    start: "1st July 2025",
  },
  {
    title: "Physics Lessons",
    description:
      "Tackle challenging topics and ace your Physics GCSE with tailored, high-quality support.",
    image: "/images/physics lessons.png",
    link: "/bookings/physics",
    price: "£20/hr",
    tier: "Higher",
    start: "TBC",
  },
];

const BookingPage = () => {
  return (
    <Box bg="#f7f7f7" minH="100vh" display="flex" flexDirection="column">
      <Navbar />

      <Box maxW="1200px" mx="auto" px={{ base: 4, md: 6 }} py={8}>
        <Text fontSize="sm" color="gray.600" mb={{ base: 4, md: 6 }}>
          <ChakraLink href="/" textDecoration="underline">
            Home
          </ChakraLink>{" "}
          &gt; GCSE Classes
        </Text>

        <Box
          bg="white"
          borderRadius="xl"
          boxShadow="sm"
          px={{ base: 4, md: 10 }}
          py={{ base: 7, md: 12 }}
          mb={12}
          textAlign="center"
          border="1px solid #ececec"
          maxW="900px"
          mx="auto"
        >
          <Heading
            as="h1"
            fontSize={{ base: '2xl', md: '4xl' }}
            fontWeight="extrabold"
            color="#1a202c"
            mb={4}
            letterSpacing="-1px"
            lineHeight="1.1"
          >
            GCSE Science Classes That Deliver
          </Heading>
          <Text fontSize={{ base: 'md', md: 'xl' }} color="#374151" maxW="650px" mx="auto" fontWeight="normal" lineHeight="1.6">
            Join students across the UK in our expert-led, high-impact group lessons. Every class is built to boost understanding, confidence, and exam results. With small groups, highly experienced tutors, and a clear, proven curriculum — all online.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {subjects.map((subject, idx) => (
            <Box
              key={idx}
              position="relative"
              bg="rgba(255,255,255,0.85)"
              borderRadius="2xl"
              overflow="hidden"
              boxShadow="0 8px 32px 0 rgba(31, 38, 135, 0.10)"
              border="1.5px solid #e2e8f0"
              transition="all 0.35s cubic-bezier(.4,2,.3,1)"
              _hover={{
                boxShadow: '0 12px 32px 0 rgba(31, 38, 135, 0.18)',
                borderColor: '#37a169',
                transform: 'translateY(-10px) scale(1.025)',
              }}
              _focusWithin={{
                boxShadow: '0 12px 32px 0 rgba(31, 38, 135, 0.18)',
                borderColor: '#37a169',
              }}
              minH={{ base: 'auto', md: '540px' }}
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
            >
              <Box position="relative" h="220px" overflow="hidden">
                <Img
                  src={subject.image}
                  alt={subject.title}
                  objectFit="cover"
                  w="full"
                  h="220px"
                  transition="transform 0.4s cubic-bezier(.4,2,.3,1)"
                  _groupHover={{ transform: 'scale(1.07)' }}
                  borderTopRadius="2xl"
                  zIndex={1}
                />
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  w="100%"
                  h="100%"
                  bgGradient="linear(to-t, #37a169cc 0%, #ffffff00 80%)"
                  opacity={0.7}
                  zIndex={2}
                  pointerEvents="none"
                />
                <Badge
                  position="absolute"
                  top={4}
                  left={4}
                  fontSize="sm"
                  fontWeight="bold"
                  bg="#def7e2"
                  color="#276749"
                  px={3}
                  py={2}
                  borderRadius="md"
                  letterSpacing="wide"
                  zIndex={3}
                  boxShadow="md"
                >
                  GCSE Program
                </Badge>
              </Box>
              <Box p={{ base: 5, md: 7 }} flex="1" display="flex" flexDirection="column" justifyContent="space-between">
                <HStack spacing={3} mb={5} mt={1} flexWrap="wrap">
                  <HStack spacing={2} bg="#e8f5e9" px={3} py={1.5} borderRadius="full">
                    <Icon as={FaTag} boxSize={4} color="#37a169" />
                    <Text fontWeight="semibold" fontSize="sm">{subject.price}</Text>
                  </HStack>
                  <HStack spacing={2} bg="#e8f5e9" px={3} py={1.5} borderRadius="full">
                    <Icon as={FaLayerGroup} boxSize={4} color="#37a169" />
                    <Text fontWeight="semibold" fontSize="sm">{subject.tier}</Text>
                  </HStack>
                  <HStack spacing={2} bg="#e8f5e9" px={3} py={1.5} borderRadius="full">
                    <Icon as={FaCalendarAlt} boxSize={4} color="#37a169" />
                    <Text fontWeight="semibold" fontSize="sm">{subject.start}</Text>
                  </HStack>
                </HStack>
                <Heading
                  fontSize={{ base: 'xl', md: '2xl' }}
                  color="#1a202c"
                  mb={2}
                  fontWeight="extrabold"
                  lineHeight="1.2"
                  bgGradient="linear(to-r, #37a169, #059669)"
                  bgClip="text"
                >
                  {subject.title}
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.700" mb={6} minH={{ md: '60px' }}>
                  {subject.description}
                </Text>
                <ChakraLink
                  href={subject.link}
                  fontWeight="bold"
                  fontSize={{ base: 'md', md: 'lg' }}
                  color="white"
                  borderRadius="full"
                  px={6}
                  py={3}
                  bgGradient="linear(to-r, #37a169, #059669)"
                  boxShadow="md"
                  transition="all 0.2s"
                  display="block"
                  textAlign="center"
                  _hover={{ bgGradient: 'linear(to-r, #059669, #37a169)', color: 'white', boxShadow: 'lg', textDecoration: 'none', transform: 'scale(1.03)' }}
                  _focus={{ boxShadow: 'outline' }}
                  mt="auto"
                  aria-label={`Book ${subject.title}`}
                >
                  Book Now &rarr;
                </ChakraLink>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      <Footer />
    </Box>
  );
};

export default BookingPage;
