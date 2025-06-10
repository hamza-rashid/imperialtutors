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
    start: "TBC",
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

        <Box bg="white" borderRadius="2xl" boxShadow="2xl" px={{ base: 4, md: 12 }} py={{ base: 8, md: 12 }} mb={12} textAlign="center">
          <Heading as="h1" fontSize={{ base: '3xl', md: '5xl' }} fontWeight="extrabold" color="#1a202c" mb={4} letterSpacing="-1px">
          GCSE Science Classes That Deliver
          </Heading>
          <Text fontSize={{ base: 'md', md: 'xl' }} color="gray.700" maxW="700px" mx="auto">
          Join students across the UK in our expert-led, high-impact group lessons. Every class is built to boost understanding, confidence, and exam results. With small groups, highly experienced tutors, and a clear, proven curriculum — all online.           </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {subjects.map((subject, idx) => (
            <Box
              key={idx}
              bg="white"
              borderRadius="2xl"
              overflow="hidden"
              boxShadow="2xl"
              transition="all 0.3s"
              _hover={{ boxShadow: '3xl', transform: 'translateY(-8px) scale(1.02)' }}
              border="2px solid #e2e8f0"
            >
              <Img
                src={subject.image}
                alt={subject.title}
                objectFit="cover"
                w="full"
                h="210px"
                borderTopRadius="2xl"
              />
              <Box p={7}>
                <Badge
                  fontSize="sm"
                  fontWeight="bold"
                  bg="#def7e2"
                  color="#276749"
                  px={3}
                  py={2}
                  borderRadius="md"
                  mb={4}
                  letterSpacing="wide"
                >
                  GCSE Program
                </Badge>
                <HStack spacing={4} mb={4} color="gray.700" flexWrap="wrap">
                  <HStack spacing={2}>
                    <Icon as={FaTag} boxSize={5} color="#37a169" />
                    <Text fontWeight="medium" fontSize="md">{subject.price}</Text>
                  </HStack>
                  <HStack spacing={2}>
                    <Icon as={FaLayerGroup} boxSize={5} color="#37a169" />
                    <Text fontWeight="medium" fontSize="md">{subject.tier}</Text>
                  </HStack>
                  <HStack spacing={2}>
                    <Icon as={FaCalendarAlt} boxSize={5} color="#37a169" />
                    <Text fontWeight="medium" fontSize="md">{subject.start}</Text>
                  </HStack>
                </HStack>
                <Heading fontSize="2xl" color="#1a202c" mb={2} fontWeight="bold">
                  {subject.title}
                </Heading>
                <Text fontSize="md" color="gray.600" mb={6}>
                  {subject.description}
                </Text>
                <ChakraLink
                  href={subject.link}
                  fontWeight="bold"
                  fontSize="md"
                  color="#37a169"
                  _hover={{ textDecoration: 'underline', color: '#2e855d' }}
                  borderRadius="md"
                  px={4}
                  py={2}
                  bgGradient="linear(to-r, #e8f5e9, #f7f7f7)"
                  boxShadow="md"
                  transition="all 0.2s"
                  display="inline-block"
                >
                  Book Now →
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
