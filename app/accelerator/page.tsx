"use client";

import { Box, Heading, Text, Stack, Button, useBreakpointValue } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function AcceleratorPage() {
  const padding = useBreakpointValue({ base: 4, md: 12 });

  return (
    <Box width="100vw" overflowX="hidden">
      {/* Navbar */}
      <Box width="100%">
        <Navbar />
      </Box>

      {/* Spacer */}
      <Box mt={8} />

      <Box maxW="6xl" mx="auto" px={padding} py={8}>
        <Stack spacing={8}>
          <Heading as="h1" size="2xl" textAlign="center">
            GCSE Science Accelerator
          </Heading>

          <Text fontSize="xl" textAlign="center" color="gray.600">
            For Year 10 students taking Triple Science — Guided by expert tutors. Built for long-term success.
          </Text>

          <Stack spacing={4}>
            <Heading as="h2" size="lg">
              📚 What It Is
            </Heading>
            <Text fontSize="md">
              The <strong>GCSE Science Accelerator</strong> is a premium program inside GCSE Doctor — designed to give Year 10
              students weekly, structured support in <strong>Biology, Chemistry, and Physics</strong>. Perfect for students aiming
              for top grades without last-minute panic in Year 11.
            </Text>
          </Stack>

          <Stack spacing={4}>
            <Heading as="h2" size="lg">
              ✅ What’s Included
            </Heading>
            <Text>✔️ 3hr weekly small group lessons (Bio, Chem & Physics)</Text>
            <Text>✔️ Pre- and post-topic assessments to track progress</Text>
            <Text>✔️ Anki-based flashcards to reinforce key content</Text>
            <Text>✔️ Weekly past paper practice & walkthroughs</Text>
            <Text>✔️ Access to the Exam Technique Mastery course</Text>
            <Text>✔️ WhatsApp support + weekly office hours</Text>
          </Stack>

          <Stack spacing={4}>
            <Heading as="h2" size="lg">
              🧑‍🏫 Taught by Dr. Hamza & GCSE Doctor Tutors
            </Heading>
            <Text>
              Over 7 years of experience. 4,000+ hours of tutoring delivered. Backed by top university graduates and a proven
              revision system.
            </Text>
          </Stack>

          <Stack spacing={4}>
            <Heading as="h2" size="lg">
              🟡 Only 5 Spaces Remaining
            </Heading>
            <Text>
              We keep class sizes small to give every student the attention they need. Enrolment is now open for the upcoming
              academic year.
            </Text>
          </Stack>

          <Box textAlign="center">
            <Link href="/bookings" passHref>
              <Button colorScheme="green" size="lg">
                Book Your Child’s Place
              </Button>
            </Link>
          </Box>
        </Stack>
      </Box>

      {/* Spacer */}
      <Box mt={8} />

      {/* Footer */}
      <Box width="100%">
        <Footer />
      </Box>
    </Box>
  );
}
