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
    image: "/images/biology_lessons_cover_image.png",
    link: "/bookings/biology",
    price: "£20/hr",
    tier: "Higher",
    start: "1st July 2025",
  },
  {
    title: "Chemistry Lessons",
    description:
      "Learn Chemistry the smart way — interactive lessons designed to boost your exam success.",
    image: "/images/chemistry_lessons_cover_image.png",
    link: "/bookings/chemistry",
    price: "£20/hr",
    tier: "Higher",
    start: "1st July 2025",
  },
  {
    title: "Physics Lessons",
    description:
      "Tackle challenging topics and ace your Physics GCSE with tailored, high-quality support.",
    image: "/images/physics_lessons_cover_image.png",
    link: "/bookings/physics",
    price: "£20/hr",
    tier: "Higher",
    start: "1st July 2025",
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

        <Heading
          as="h1"
          fontSize={{ base: "3xl", md: "4xl" }}
          fontWeight="bold"
          color="gray.900"
          mb={10}
        >
          Explore Our GCSE Science Programs
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {subjects.map((subject, idx) => (
            <Box
              key={idx}
              bg="white"
              borderRadius="xl"
              overflow="hidden"
              boxShadow="xl"
              transition="all 0.3s"
              _hover={{ boxShadow: "2xl", transform: "translateY(-6px) scale(1.01)" }}
            >
              <Img
                src={subject.image}
                alt={subject.title}
                objectFit="cover"
                w="full"
                h="190px"
              />
              <Box p={6}>
                <Badge
                  fontSize="xs"
                  fontWeight="semibold"
                  bg="#def7e2"
                  color="#276749"
                  px={2.5}
                  py={1.5}
                  borderRadius="md"
                  mb={3}
                >
                  GCSE Program
                </Badge>

                <HStack spacing={4} mb={3} color="gray.700" flexWrap="wrap">
                  <HStack spacing={2}>
                    <Icon as={FaTag} boxSize={4} color="#37a169" />
                    <Text fontWeight="medium" fontSize="sm">{subject.price}</Text>
                  </HStack>
                  <HStack spacing={2}>
                    <Icon as={FaLayerGroup} boxSize={4} color="#37a169" />
                    <Text fontWeight="medium" fontSize="sm">{subject.tier}</Text>
                  </HStack>
                  <HStack spacing={2}>
                    <Icon as={FaCalendarAlt} boxSize={4} color="#37a169" />
                    <Text fontWeight="medium" fontSize="sm">{subject.start}</Text>
                  </HStack>
                </HStack>

                <Heading fontSize="xl" color="gray.900" mb={2}>
                  {subject.title}
                </Heading>
                <Text fontSize="sm" color="gray.600" mb={4}>
                  {subject.description}
                </Text>

                <ChakraLink
                  href={subject.link}
                  fontWeight="semibold"
                  fontSize="sm"
                  color="#37a169"
                  _hover={{ textDecoration: "underline", color: "#2e855d" }}
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
