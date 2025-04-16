"use client";

import { Box, Heading, Text, Stack, Button, useBreakpointValue, Image, Divider } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function AcceleratorPage() {
  const padding = useBreakpointValue({ base: 4, md: 12 });

  return (
    <Box width="100vw" overflowX="hidden" bg="gray.50">
      {/* Navbar */}
      <Box width="100%">
        <Navbar />
      </Box>

      <Box mt={8} />

      {/* Hero Section */}
      <Box bg="green.500" color="white" py={16} px={padding} textAlign="center">
        <Heading as="h1" size="2xl" mb={4}>GCSE Science Accelerator</Heading>
        <Text fontSize="xl">For Year 10 students taking Triple Science — Structured support. Lasting results.</Text>
        <Box mt={6}>
          <Link href="/bookings" passHref>
            <Button size="lg" colorScheme="whiteAlpha">
              Book Your Child’s Place
            </Button>
          </Link>
        </Box>
      </Box>

      {/* What It Is */}
      <Box maxW="6xl" mx="auto" px={padding} py={12}>
        <Stack spacing={6}>
          <Heading as="h2" size="xl" textAlign="center">📘 What It Is</Heading>
          <Text fontSize="lg" textAlign="center">
            The <strong>GCSE Science Accelerator</strong> is a premium group class designed to help Year 10 students stay on track with Triple Science: Biology, Chemistry & Physics.
            Perfect for students who want strong grades and less last-minute stress.
          </Text>
        </Stack>
      </Box>

      <Divider my={8} />

      {/* Features Section */}
      <Box bg="white" py={12} px={padding}>
        <Stack spacing={6} maxW="6xl" mx="auto">
          <Heading as="h2" size="xl" textAlign="center">✅ What’s Included</Heading>
          <Stack spacing={3} fontSize="md">
            <Text>✔️ 3hr weekly group lessons (Bio, Chem & Physics)</Text>
            <Text>✔️ Pre- and post-topic assessments to track progress</Text>
            <Text>✔️ Anki-based flashcards that help key info stick</Text>
            <Text>✔️ Weekly past paper practice with mark schemes</Text>
            <Text>✔️ Access to our Exam Technique Mastery video course</Text>
            <Text>✔️ Weekly office hours + WhatsApp support</Text>
          </Stack>
        </Stack>
      </Box>

      <Divider my={8} />

      {/* Tutor Section */}
      <Box maxW="6xl" mx="auto" px={padding} py={12}>
        <Stack spacing={6} textAlign="center">
          <Heading as="h2" size="xl">🧑‍🏫 Meet Dr. Hamza & the GCSE Doctor Team</Heading>
          <Text fontSize="lg">
            Over 7 years of experience. 4,000+ hours of tutoring delivered. Backed by expert educators from top UK universities.
          </Text>
        </Stack>
      </Box>

      <Divider my={8} />

      {/* Urgency & CTA */}
      <Box bg="yellow.50" py={12} px={padding}>
        <Stack spacing={6} maxW="6xl" mx="auto" textAlign="center">
          <Heading as="h2" size="lg">🟡 Only 5 Spots Left for This Academic Year</Heading>
          <Text fontSize="lg">
            Class sizes are small for a reason — we prioritise attention, engagement, and individual progress.
          </Text>
          <Link href="/bookings" passHref>
            <Button size="lg" colorScheme="green">
              Reserve a Spot Now
            </Button>
          </Link>
        </Stack>
      </Box>

      <Box mt={8} />

      {/* Footer */}
      <Box width="100%">
        <Footer />
      </Box>
    </Box>
  );
}
