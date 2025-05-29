"use client";

import {
  Box,
  Heading,
  Text,
  Img,
  Flex,
  Center,
  SimpleGrid,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const subjects = [
  {
    title: "Biology Lessons",
    description:
      "Master the AQA & Edexcel GCSE Biology syllabus with our expert-led group classes.",
    image: "/images/biology_lessons_cover_image.png",
    link: "/bookings/biology",
  },
  {
    title: "Chemistry Lessons",
    description:
      "Learn Chemistry the smart way — interactive lessons designed to boost your exam success.",
    image: "/images/chemistry_lessons_cover_image.png",
    link: "/bookings/chemistry",
  },
  {
    title: "Physics Lessons",
    description:
      "Tackle challenging topics and ace your Physics GCSE with tailored, high-quality support.",
    image: "/images/physics_lessons_cover_image.png",
    link: "/bookings/physics",
  },
];

const BookingPage = () => {
  return (
    <Box bg="white" minHeight="100vh" display="flex" flexDirection="column">
      <Navbar />

      <Box maxW="1200px" mx="auto" px={{ base: 4, md: 6 }} py={8}>
        {/* Breadcrumbs */}
        <Text fontSize="sm" color="gray.600" mb={6}>
          <ChakraLink href="/" textDecoration="underline">
            Home
          </ChakraLink>{" "}
          &gt; GCSE Classes
        </Text>

        <Center>
          <SimpleGrid columns={[1, null, 3]} spacing={8} maxW="6xl" w="full">
            {subjects.map((subject, idx) => (
              <Box
                key={idx}
                bg="white"
                border="1px solid black"
                rounded="md"
                overflow="hidden"
                boxShadow="6px 6px 0 black"
              >
                <Img
                  src={subject.image}
                  alt={subject.title}
                  objectFit="cover"
                  w="full"
                  h="200px"
                  borderBottom="1px solid black"
                />
                <Box p={4}>
                  <Box
                    bg="black"
                    color="white"
                    display="inline-block"
                    px={2}
                    py={1}
                    mb={2}
                  >
                    <Text fontSize="xs" fontWeight="medium">
                      GCSE
                    </Text>
                  </Box>
                  <Heading fontSize="2xl" mb={2} color="black">
                    {subject.title}
                  </Heading>
                  <Text fontSize="sm" color="gray.600" mb={4}>
                    {subject.description}
                  </Text>
                  <ChakraLink
                    href={subject.link}
                    color="black"
                    fontWeight="semibold"
                    textDecoration="underline"
                  >
                    Book Now →
                  </ChakraLink>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Center>
      </Box>

      <Footer />
    </Box>
  );
};

export default BookingPage;
