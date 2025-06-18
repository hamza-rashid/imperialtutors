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

// Custom pill toggle component
function PillToggle({ options, value, onChange, size = 'lg', mb = 4 }: { options: string[], value: number, onChange: (idx: number) => void, size?: 'md' | 'lg', mb?: number }) {
  return (
    <HStack spacing={2} mb={mb}>
      {options.map((opt, idx) => (
        <Button
          key={opt}
          onClick={() => onChange(idx)}
          bg={value === idx ? '#d1fae5' : 'white'}
          color={value === idx ? '#1a202c' : '#4B5563'}
          fontWeight={value === idx ? 'bold' : 'normal'}
          borderRadius="full"
          boxShadow={value === idx ? 'md' : 'sm'}
          border={value === idx ? '2px solid #37a169' : '1px solid #E5E7EB'}
          px={size === 'lg' ? 6 : 4}
          py={size === 'lg' ? 2 : 1}
          fontSize={size === 'lg' ? 'lg' : 'md'}
          transition="all 0.15s"
          _hover={{ bg: value === idx ? '#bbf7d0' : '#f3f4f6' }}
          _active={{ bg: '#bbf7d0' }}
          _focus={{ boxShadow: 'outline' }}
          minW={size === 'lg' ? '100px' : '80px'}
        >
          {opt}
        </Button>
      ))}
    </HStack>
  );
}

export default function BookingPage() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [selected, setSelected] = useState('Course Content');

  // Curriculum navigation state (moved to top level)
  const [yearTab, setYearTab] = useState(0); // 0: Year 10, 1: Year 11
  const [boardTab, setBoardTab] = useState(0); // 0: AQA, 1: Edexcel

  useEffect(() => {
    // Load TutorBird script
    if (!document.getElementById('tutorbird-embed-script')) {
      const script = document.createElement('script');
      script.id = 'tutorbird-embed-script';
      script.src = 'https://app.tutorbird.com/Widget/v4/Widget.ashx?settings=eyJTY2hvb2xJRCI6InNjaF9obENKWiIsIldlYnNpdGVJRCI6Indic196SmhKSyIsIldlYnNpdGVCbG9ja0lEIjoid2JiX0Y5SEZKSyJ9';
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

  // Curriculum data and keys (move outside renderMobileContent)
  const curriculum = {
    'Year 10': {
      AQA: [
        {
          phase: 'Core Principles',
          color: '#37a169',
          border: '#37a169',
          rows: [
            { date: '1 July 2025', topic: 'C1.1: Atoms + Elements + Compounds' },
            { date: '8 July', topic: 'C1.2–1.3: Chemical Equations + Mixtures' },
            { date: '15 July', topic: 'C1.4–1.5: Atomic Structure + Periodic Table' },
            { date: '22 July', topic: 'C1.6–1.7: Electronic Structure + Groups' },
            { date: '29 July', topic: 'C2.1–2.2: Ionic Bonding + Properties' },
            { date: '5 Aug', topic: 'C2.3–2.4: Covalent Bonding + Structures' },
            { date: '12 Aug', topic: 'C2.5–2.6: Metallic Bonding + States of Matter' },
            { date: '19 & 26 Aug', topic: 'Summer Break (Progress Reports)', isBreak: true },
            { date: '2 Sep', topic: 'C3.1–3.2: Conservation of Mass + Mr Calculations' },
            { date: '9 Sep', topic: 'C3.3–3.4: Moles + Concentrations' },
            { date: '16 Sep', topic: 'C3.5–3.6: Reacting Masses + Yields' },
            { date: '23 Sep', topic: 'C4.1–4.2: Metal Reactivity + Reactions' },
            { date: '30 Sep', topic: 'C4.3–4.4: Acid Reactions + pH Scale' },
            { date: '7 Oct', topic: 'C4.5–4.6: Neutralisation + Electrolysis' },
            { date: '14 Oct', topic: 'C4.7: Electrolysis Applications' },
            { date: '21 Oct', topic: 'Required Practicals Review' },
            { date: '28 Oct', topic: 'Half-Term (No Lesson)', isBreak: true },
            { date: '4 Nov', topic: 'Recap + Low-Stakes Quiz', isHighlight: true },
            { date: '11 Nov', topic: 'DIRT + Gaps Retaught' },
            { date: '18 Nov', topic: 'Paper 1 Mock Preparation' },
            { date: '25 Nov', topic: 'Paper 1 Mock Test', isHighlight: true },
            { date: '2 Dec', topic: 'Mock Analysis + Target Setting' },
            { date: '9 Dec', topic: 'Atomic Structure & Bonding - Model Answers' },
            { date: '16 & 23 Dec', topic: 'Christmas Break (Progress Reports)', isBreak: true },
          ],
        },
        {
          phase: 'Application',
          color: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
          border: '#059669',
          rows: [
            { date: '30 Dec', topic: 'Atomic Structure & Bonding - ERQs' },
            { date: '6 Jan 2026', topic: 'Quantitative Chemistry - Model Answers' },
            { date: '13 Jan', topic: 'Quantitative Chemistry - ERQs' },
            { date: '20 Jan', topic: 'Chemical Changes - Model Answers' },
            { date: '27 Jan', topic: 'Chemical Changes - ERQs' },
            { date: '3 Feb', topic: 'Calculations & Graphs Practice' },
            { date: '10 Feb', topic: 'Required Practicals: Qs + MS walkthrough' },
            { date: '17 Feb', topic: 'Half-Term (No Lesson)', isBreak: true },
          ],
        },
        {
          phase: 'Exam Focus',
          color: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
          border: '#dc2626',
          rows: [
            { date: '24 Feb 2026', topic: 'Interleaved Practice: Atomic Structure + Bonding' },
            { date: '3 Mar', topic: 'Interleaved Practice: Quantitative + Chemical Changes' },
            { date: '10 Mar', topic: 'Full Paper 1 Practice (Timed Conditions)', isHighlight: true },
            { date: '17 Mar', topic: 'Paper 1 Marking + Reflection + Target Setting' },
            { date: '24 Mar', topic: 'Targeted Revision: Low Scoring Areas' },
            { date: '31 Mar & 7 Apr', topic: 'Easter Break (Progress Reports)', isBreak: true },
            { date: '14 Apr', topic: 'Key Equations + Definitions Practice' },
            { date: '21 Apr', topic: 'Required Practicals Recap + Flashcards' },
            { date: '28 Apr', topic: 'Final Paper 1 Warm-Up Exam', isHighlight: true },
            { date: '5 May', topic: 'Final DIRT + Hard Topics' },
            { date: '12 May', topic: 'No Lesson', isBreak: true },
          ],
        },
      ],
      Edexcel: [
        {
          phase: 'Core Principles',
          color: '#37a169',
          border: '#37a169',
          rows: [
            { date: '1 July 2025', topic: 'CC1: Atomic Structure + Periodic Table' },
            { date: '8 July', topic: 'CC1: Electronic Configuration + Groups' },
            { date: '15 July', topic: 'CC2: Ionic Bonding + Giant Structures' },
            { date: '22 July', topic: 'CC2: Covalent Bonding + Molecular Structures' },
            { date: '29 July', topic: 'CC2: Metallic Bonding + Properties' },
            { date: '5 Aug', topic: 'CC3: Conservation of Mass + Balanced Equations' },
            { date: '12 Aug', topic: 'CC3: Moles + Formula Mass Calculations' },
            { date: '19 & 26 Aug', topic: 'Summer Break (Progress Reports)', isBreak: true },
            { date: '2 Sep', topic: 'CC3: Concentration + Yields' },
            { date: '9 Sep', topic: 'CC4: Acids + Bases + pH' },
            { date: '16 Sep', topic: 'CC4: Neutralisation + Salt Formation' },
            { date: '23 Sep', topic: 'CC4: Electrolysis + Applications' },
            { date: '30 Sep', topic: 'CC5: Metal Extraction + Reactivity' },
            { date: '7 Oct', topic: 'CC5: Corrosion + Alloys' },
            { date: '14 Oct', topic: 'Required Practicals Review' },
            { date: '21 Oct', topic: 'Recap + MCQ + Flashcard Tasks' },
            { date: '28 Oct', topic: 'Half-Term (No lesson)', isBreak: true },
            { date: '4 Nov', topic: 'Low-Stakes Quiz + Diagnostic Test', isHighlight: true },
            { date: '11 Nov', topic: 'DIRT + Gaps Retaught' },
            { date: '18 Nov', topic: 'Paper 1 Mock Preparation' },
            { date: '25 Nov', topic: 'Paper 1 Mock Test', isHighlight: true },
            { date: '2 Dec', topic: 'CC1–CC2: Model Answers' },
            { date: '9 Dec', topic: 'CC1–CC2: ERQs' },
            { date: '16 & 23 Dec', topic: 'Christmas Break (Progress Reports)', isBreak: true },
          ],
        },
        {
          phase: 'Application',
          color: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
          border: '#059669',
          rows: [
            { date: '30 Dec', topic: 'CC3 – Model Answers' },
            { date: '6 Jan 2026', topic: 'CC3 – ERQs' },
            { date: '13 Jan', topic: 'CC4 – Graphs & Data' },
            { date: '20 Jan', topic: 'CC4 – 6-Markers' },
            { date: '27 Jan', topic: 'CC5 – Flashcards + Diagrams' },
            { date: '3 Feb', topic: 'Required Practicals Qs + MS walkthrough' },
            { date: '10 Feb', topic: 'Interleaved Practice: CC1–CC2' },
            { date: '17 Feb', topic: 'Half-Term (No lesson)', isBreak: true },
          ],
        },
        {
          phase: 'Exam Focus',
          color: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
          border: '#dc2626',
          rows: [
            { date: '24 Feb 2026', topic: 'Interleaved Practice: CC3–CC5' },
            { date: '3 Mar', topic: 'Full Paper 1 Practice (Timed)', isHighlight: true },
            { date: '10 Mar', topic: 'Marking + Reflection + Targets' },
            { date: '17 Mar', topic: 'Targeted Revision: Low Scoring Areas' },
            { date: '24 Mar', topic: 'Top 20 Edexcel Mark Scheme Phrases' },
            { date: '31 Mar & 7 Apr', topic: 'Easter Break (Progress Reports)', isBreak: true },
            { date: '14 Apr', topic: 'Key Equations + Definitions' },
            { date: '21 Apr', topic: 'Final Practicals Recap + Flashcards' },
            { date: '28 Apr', topic: 'Final Warm-Up Exam', isHighlight: true },
            { date: '5 May', topic: 'Final DIRT + Hard topics' },
            { date: '12 May', topic: 'No Lesson', isBreak: true },
          ],
        },
      ],
    },
    'Year 11': {
      AQA: [
        {
          phase: 'Core Principles',
          color: '#37a169',
          border: '#37a169',
          rows: [
            { date: '1 July 2025', topic: 'C5.1–5.2: Energy Changes + Exo/Endothermic' },
            { date: '8 July', topic: 'C5.3–5.4: Reaction Profiles + Bond Energies' },
            { date: '15 July', topic: 'C6.1–6.2: Rate of Reaction + Collision Theory' },
            { date: '22 July', topic: 'C6.3–6.4: Factors Affecting Rate + Catalysts' },
            { date: '29 July', topic: 'C6.5: Reversible Reactions + Equilibrium' },
            { date: '5 Aug', topic: 'C6.6: Le Chatelier\'s Principle' },
            { date: '12 Aug', topic: 'C7.1–7.2: Hydrocarbons + Alkanes' },
            { date: '19 & 26 Aug', topic: 'Summer Break (Progress Reports)', isBreak: true },
            { date: '2 Sep', topic: 'C7.3–7.4: Fractional Distillation + Cracking' },
            { date: '9 Sep', topic: 'C7.5: Alkenes + Addition Reactions' },
            { date: '16 Sep', topic: 'C7.6–7.7: Alcohols + Carboxylic Acids' },
            { date: '23 Sep', topic: 'C7.8: Polymers + Addition Polymerisation' },
            { date: '30 Sep', topic: 'C8.1–8.2: Chemical Analysis + Pure Substances' },
            { date: '7 Oct', topic: 'C8.3–8.4: Chromatography + Gas Tests' },
            { date: '14 Oct', topic: 'C8.5: Flame Tests + Metal Ion Tests' },
            { date: '21 Oct', topic: 'Required Practicals Review' },
            { date: '28 Oct', topic: 'Half-Term (No Lesson)', isBreak: true },
            { date: '4 Nov', topic: 'C9.1–9.2: Earth\'s Atmosphere + Greenhouse Effect' },
            { date: '11 Nov', topic: 'C9.3–9.4: Carbon Footprints + Atmospheric Pollutants' },
            { date: '18 Nov', topic: 'C10.1–10.2: Finite Resources + Potable Water' },
            { date: '25 Nov', topic: 'C10.3–10.4: Alternative Methods + Life Cycle Assessment' },
            { date: '2 Dec', topic: 'Interleaved Paper 2 Review (Quickfire)' },
            { date: '9 Dec', topic: 'Low-Stakes Quiz + Diagnostic', isHighlight: true },
            { date: '16 & 23 Dec', topic: 'Christmas Break (Progress Reports)', isBreak: true },
          ],
        },
        {
          phase: 'Application',
          color: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
          border: '#059669',
          rows: [
            { date: '30 Dec', topic: 'DIRT + Fill Gaps' },
            { date: '6 Jan 2026', topic: 'Paper 2 Mock Preparation' },
            { date: '13 Jan', topic: 'Paper 2 Mock Test', isHighlight: true },
            { date: '20 Jan', topic: 'C5–6: Model Answers' },
            { date: '27 Jan', topic: 'C5–6: ERQs' },
            { date: '3 Feb', topic: 'C7–8: Graphs & Data Questions' },
            { date: '10 Feb', topic: 'C9–10: 6 Markers' },
            { date: '17 Feb', topic: 'Half-Term (No Lesson)', isBreak: true },
          ],
        },
        {
          phase: 'Exam Focus',
          color: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
          border: '#dc2626',
          rows: [
            { date: '24 Feb 2026', topic: 'Required Practicals + Flashcards' },
            { date: '3 Mar', topic: 'Key Definitions + Diagrams' },
            { date: '10 Mar', topic: 'Interleaved Practice C5–10' },
            { date: '17 Mar', topic: 'Past Paper Qs by Theme' },
            { date: '24 Mar', topic: 'Mastering Mark Schemes' },
            { date: '31 Mar & 7 Apr', topic: 'Easter Break (Progress Reports)', isBreak: true },
            { date: '14 Apr', topic: 'Timed Paper 2 Practice' },
            { date: '21 Apr', topic: 'Marking + Feedback + DIRT' },
            { date: '28 Apr', topic: 'No Lesson – Exam Season Begins', isBreak: true },
          ],
        },
      ],
      Edexcel: [
        {
          phase: 'Core Principles',
          color: '#37a169',
          border: '#37a169',
          rows: [
            { date: '1 July 2025', topic: 'CC6: Groups in the Periodic Table' },
            { date: '8 July', topic: 'CC6: Group 1 & Group 7 Properties' },
            { date: '15 July', topic: 'CC6: Group 0 Noble Gases' },
            { date: '22 July', topic: 'CC7: Rates of Reaction + Collision Theory' },
            { date: '29 July', topic: 'CC7: Factors Affecting Rate + Catalysts' },
            { date: '5 Aug', topic: 'CC8: Heat Energy Changes' },
            { date: '12 Aug', topic: 'CC8: Exothermic + Endothermic Reactions' },
            { date: '19 & 26 Aug', topic: 'Summer Break (Progress Reports)', isBreak: true },
            { date: '2 Sep', topic: 'CC9: Crude Oil + Hydrocarbons' },
            { date: '9 Sep', topic: 'CC9: Fractional Distillation + Cracking' },
            { date: '16 Sep', topic: 'CC9: Alkenes + Addition Reactions' },
            { date: '23 Sep', topic: 'CC9: Alcohols + Polymers' },
            { date: '30 Sep', topic: 'CC10: Chemical Analysis + Purity' },
            { date: '7 Oct', topic: 'CC10: Chromatography + Gas Tests' },
            { date: '14 Oct', topic: 'CC10: Flame Tests + Chemical Tests' },
            { date: '21 Oct', topic: 'Required Practicals Review' },
            { date: '28 Oct', topic: 'Half-Term (No lesson)', isBreak: true },
            { date: '4 Nov', topic: 'CC11: Earth\'s Atmosphere Evolution' },
            { date: '11 Nov', topic: 'CC11: Greenhouse Effect + Climate Change' },
            { date: '18 Nov', topic: 'CC12: Earth\'s Resources + Sustainability' },
            { date: '25 Nov', topic: 'CC12: Potable Water + Waste Management' },
            { date: '2 Dec', topic: 'Interleaved Paper 2 Review (Quickfire)' },
            { date: '9 Dec', topic: 'Low-Stakes Quiz + Diagnostic Test', isHighlight: true },
            { date: '16 & 23 Dec', topic: 'Christmas Break (Progress Reports)', isBreak: true },
          ],
        },
        {
          phase: 'Application',
          color: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
          border: '#059669',
          rows: [
            { date: '30 Dec', topic: 'DIRT + Gaps Retaught' },
            { date: '6 Jan 2026', topic: 'Paper 2 Mock Preparation' },
            { date: '13 Jan', topic: 'Paper 2 Mock Test', isHighlight: true },
            { date: '20 Jan', topic: 'CC6–CC8: Model Answers' },
            { date: '27 Jan', topic: 'CC9–CC10: ERQs' },
            { date: '3 Feb', topic: 'CC11–12: Graphs & Data Questions' },
            { date: '10 Feb', topic: 'CC11–12: 6 Markers' },
            { date: '17 Feb', topic: 'Half-Term (No lesson)', isBreak: true },
          ],
        },
        {
          phase: 'Exam Focus',
          color: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
          border: '#dc2626',
          rows: [
            { date: '24 Feb 2026', topic: 'Required Practicals + Flashcards' },
            { date: '3 Mar', topic: 'Key Diagrams + Definitions' },
            { date: '10 Mar', topic: 'Interleaved Practice CC6–12' },
            { date: '17 Mar', topic: 'Past Paper Qs by Theme' },
            { date: '24 Mar', topic: 'Mastering Mark Schemes' },
            { date: '31 Mar & 7 Apr', topic: 'Easter Break (Progress Reports)', isBreak: true },
            { date: '14 Apr', topic: 'Timed Paper 2 Practice' },
            { date: '21 Apr', topic: 'Marking + Feedback + DIRT' },
            { date: '28 Apr', topic: 'No Lesson – Exam Season', isBreak: true },
          ],
        },
      ],
    },
  } as const;
  type YearKey = keyof typeof curriculum;
  type BoardKey = keyof typeof curriculum[YearKey];
  const yearKeys = Object.keys(curriculum) as YearKey[];
  const boardKeys = Object.keys(curriculum[yearKeys[yearTab]]) as BoardKey[];

  const renderMobileContent = () => {
    if (selected === 'Course Content') {
      return (
        <>
          <Heading as="h2" fontSize={{ base: 'xl', md: 'lg' }} mb={4}>Course Description</Heading>
          <Text mb={4} fontSize="md" color="#1a202c">
          Our weekly GCSE Chemistry classes are designed to take your child from confusion to confidence, with a focus on Higher Tier content for both AQA and Edexcel. We cover everything students need for success in Paper 1 and Paper 2 — from tricky topics like electrolysis and fuel cells, to high-mark areas like rates of reaction, the periodic table, and required practicals.
          </Text>
          <Text mb={4} fontSize="md" color="#1a202c">
          Lessons are taught in small groups (max 5 students), with a structured approach that blends clear explanations, active recall, and exam technique coaching. Your child won't just memorise facts — they'll learn how to think like an examiner and write answers that score full marks.
          </Text>
          <Text mb={4} fontSize="md" color="#1a202c">
          We support students throughout the week with guided homework, model answers, and access to our Chemistry Mentorship Group Chat, so they never feel stuck or left behind. Parents are kept in the loop with regular feedback calls and progress reviews.
          </Text>
          <Text mb={4} fontSize="md" color="#1a202c">
          If your child is aiming for a 6–9 in GCSE Chemistry and wants clarity, structure, and expert guidance, this is the program for them.
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
      return renderCurriculumOverview();
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
            <Image
              src="/images/hamza_profile3.png"
              alt="Dr Hamza R."
              boxSize={{ base: '120px', md: '150px' }}
              borderRadius="full"
              objectFit="cover"
              mr={{ base: 0, md: 6 }}
              mb={{ base: 4, md: 0 }}
            />
            <Box textAlign={{ base: 'center', md: 'left' }}>
              <Text fontWeight="bold" fontSize="lg" mb={2}>Dr Hamza R.</Text>
              <Text fontSize="md" color="gray.700">
                Hamza is a medical doctor and the founder of GCSE Doctor. A graduate of Imperial College London with a degree in Medicine and a BSc in Healthcare Management, he has over 7 years of experience helping students master science through clear explanations and structured exam technique coaching.
              </Text>
              <Text fontSize="md" color="gray.700" mt={2}>
                Known for his patient, methodical teaching style, Hamza combines active recall, spaced repetition, and real exam strategies to help students consistently achieve grades 7–9. He leads the GCSE Chemistry program and mentors all students through weekly classes, feedback calls, and personalised support.
              </Text>
            </Box>
          </Flex>

          <Divider borderColor="gray.200" my={8} />

          {/* Maryam */}
          <Flex direction={{ base: 'column', md: 'row' }} gap={6} mb={10} align={{ base: 'center', md: 'start' }}>
            <Image
              src="/images/maryam_profile.jpeg"
              alt="Dr Maryam A."
              boxSize={{ base: '120px', md: '150px' }}
              borderRadius="full"
              objectFit="cover"
              mr={{ base: 0, md: 6 }}
              mb={{ base: 4, md: 0 }}
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

  // Update renderCurriculumOverview and desktop curriculum overview to use PillToggle
  const renderCurriculumOverview = () => {
    return (
      <Box w="100%">
        {/* Legend at the top */}
        <Box bg="gray.50" p={4} borderRadius="lg" w="100%" mb={6}>
          <Heading as="h5" fontSize="md" mb={3}>Curriculum Legend</Heading>
          <VStack align="start" spacing={2}>
            <HStack>
              <Box w="4" h="4" bg="#37a169" borderRadius="sm" />
              <Text fontSize="sm">Core Principles Phase</Text>
            </HStack>
            <HStack>
              <Box w="4" h="4" bg="#059669" borderRadius="sm" />
              <Text fontSize="sm">Application Phase</Text>
            </HStack>
            <HStack>
              <Box w="4" h="4" bg="#dc2626" borderRadius="sm" />
              <Text fontSize="sm">Exam Focus Phase</Text>
            </HStack>
            <HStack>
              <Box w="4" h="4" bg="#fbbf24" borderRadius="sm" />
              <Text fontSize="sm">Breaks & Holidays</Text>
            </HStack>
            <HStack>
              <Box w="4" h="4" bg="linear-gradient(120deg, #b5d9c0 0%, #d1fae5 100%)" borderRadius="sm" />
              <Text fontSize="sm">Key Assessment Points</Text>
            </HStack>
          </VStack>
        </Box>
        {/* Year toggle */}
        <PillToggle
          options={yearKeys}
          value={yearTab}
          onChange={idx => {
            setYearTab(idx);
            setBoardTab(0); // Always default to AQA/first board on year change
          }}
          size="lg"
          mb={3}
        />
        {/* Board toggle */}
        <PillToggle
          options={boardKeys}
          value={boardTab}
          onChange={setBoardTab}
          size="md"
          mb={5}
        />
        <Box>
          <VStack align="start" spacing={6} w="100%">
            <Heading as="h3" fontSize="xl" mb={4}>{yearKeys[yearTab]} {boardKeys[boardTab]} Chemistry Mastery Curriculum</Heading>
            <Text fontSize="md" color="#1a202c" mb={6}>
              Our comprehensive curriculum is designed to take students from confusion to confidence, with a structured approach that covers all essential topics for {boardKeys[boardTab]} in {yearKeys[yearTab]}.
            </Text>
            {curriculum[yearKeys[yearTab]][boardKeys[boardTab]].map((phase, idx) => (
              <Box
                key={phase.phase}
                w="100%"
                bg="white"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="lg"
                border="1px solid"
                borderColor="gray.200"
                mt={idx === 0 ? 0 : 8}
              >
                <Box bg={phase.color} color="white" p={4} fontWeight="bold" fontSize="lg">{phase.phase}</Box>
                <VStack spacing={0} align="stretch">
                  {phase.rows.map((item, i) => (
                    <Flex
                      key={i}
                      bg={('isBreak' in item && item.isBreak) ? '#fef3c7' : 'white'}
                      _hover={{ bg: ('isBreak' in item && item.isBreak) ? '#fde68a' : '#f7fafc' }}
                      borderBottom="1px solid"
                      borderColor="gray.200"
                      transition="all 0.2s"
                    >
                      <Box
                        w="120px"
                        p={3}
                        bg={('isBreak' in item && item.isBreak) ? '#fbbf24' : '#b5d9c0'}
                        color={('isBreak' in item && item.isBreak) ? '#92400e' : '#1f2937'}
                        fontWeight="bold"
                        fontSize="sm"
                        borderRight="2px solid"
                        borderColor={phase.border}
                      >
                        {item.date}
                      </Box>
                      <Box
                        flex="1"
                        p={3}
                        color={('isBreak' in item && item.isBreak) ? '#92400e' : '#1e293b'}
                        fontSize="sm"
                        lineHeight="1.4"
                      >
                        {('isHighlight' in item && item.isHighlight) ? (
                          <Text as="span" bg="linear-gradient(120deg, #b5d9c0 0%, #d1fae5 100%)" px={2} py={1} borderRadius="md" fontWeight="500" color="#047857">
                            {item.topic}
                          </Text>
                        ) : (
                          item.topic
                        )}
                      </Box>
                    </Flex>
                  ))}
                </VStack>
              </Box>
            ))}
          </VStack>
        </Box>
      </Box>
    );
  };

  return (
    <>
      <Navbar />
      <Box as="main" bg="#f7f7f7" py={{ base: 8, md: 12 }}>
        <Box maxW="1200px" mx="auto" px={{ base: 4, md: 6 }}>
          <Text fontSize="sm" color="gray.600" mb={{ base: 4, md: 6 }}>
            <Link href="/" textDecoration="underline">Home</Link> {'>'} <Link href="/bookings" textDecoration="underline">GCSE Classes</Link> {'>'} Chemistry
          </Text>

          <Heading as="h1" fontSize={{ base: '3xl', sm: '3xl', md: '5xl' }} fontWeight="bold" mb={{ base: 12, md: 10 }} color="#1a202c" lineHeight="short">
          GCSE Chemistry Success Program – From July 2025 (Online)
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
                      Our weekly GCSE Chemistry classes are designed to take your child from confusion to confidence, with a focus on Higher Tier content for both AQA and Edexcel. We cover everything students need for success in Paper 1 and Paper 2 — from tricky topics like electrolysis and fuel cells, to high-mark areas like rates of reaction, the periodic table, and required practicals.
                      </Text>
                      <Text mb={4} fontSize="md" color="#1a202c">
                      Lessons are taught in small groups (max 5 students), with a structured approach that blends clear explanations, active recall, and exam technique coaching. Your child won't just memorise facts — they'll learn how to think like an examiner and write answers that score full marks.
                      </Text>
                      <Text mb={4} fontSize="md" color="#1a202c">
                      We support students throughout the week with guided homework, model answers, and access to our Chemistry Mentorship Group Chat, so they never feel stuck or left behind. Parents are kept in the loop with regular feedback calls and progress reviews.
                      </Text>
                      <Text mb={4} fontSize="md" color="#1a202c">
                      If your child is aiming for a 6–9 in GCSE Chemistry and wants clarity, structure, and expert guidance, this is the program for them.
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
                      {renderCurriculumOverview()}
                    </TabPanel>
                    <TabPanel>
                      <Heading as="h3" fontSize="xl" mb={4}>Our Tutors</Heading>
                      <Text fontSize="md" color="gray.700" mb={8}>
                        Hand-picked for their academic excellence, passion, and engaging teaching styles, our tutors are committed to helping every student thrive. Each tutor brings a unique energy to lessons — combining clear explanations with exam-focused strategies to support top performance.
                      </Text>
                      <Divider borderColor="gray.200" my={8} />
                      {/* Hamza */}
                      <Flex direction={{ base: 'column', md: 'row' }} gap={6} mb={10} align={{ base: 'center', md: 'start' }}>
                        <Image
                          src="/images/hamza_profile3.png"
                          alt="Dr Hamza R."
                          boxSize={{ base: '120px', md: '150px' }}
                          borderRadius="full"
                          objectFit="cover"
                          mr={{ base: 0, md: 6 }}
                          mb={{ base: 4, md: 0 }}
                        />
                        <Box textAlign={{ base: 'center', md: 'left' }}>
                          <Text fontWeight="bold" fontSize="lg" mb={2}>Dr Hamza R.</Text>
                          <Text fontSize="md" color="gray.700">
                            Hamza is a medical doctor and the founder of GCSE Doctor. A graduate of Imperial College London with a degree in Medicine and a BSc in Healthcare Management, he has over 7 years of experience helping students master science through clear explanations and structured exam technique coaching.
                          </Text>
                          <Text fontSize="md" color="gray.700" mt={2}>
                            Known for his patient, methodical teaching style, Hamza combines active recall, spaced repetition, and real exam strategies to help students consistently achieve grades 7–9. He leads the GCSE Chemistry program and mentors all students through weekly classes, feedback calls, and personalised support.
                          </Text>
                        </Box>
                      </Flex>

                      <Divider borderColor="gray.200" my={8} />

                      {/* Maryam */}
                      <Flex direction={{ base: 'column', md: 'row' }} gap={6} mb={10} align={{ base: 'center', md: 'start' }}>
                        <Image
                          src="/images/maryam_profile.jpeg"
                          alt="Dr Maryam A."
                          boxSize={{ base: '120px', md: '150px' }}
                          borderRadius="full"
                          objectFit="cover"
                          mr={{ base: 0, md: 6 }}
                          mb={{ base: 4, md: 0 }}
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
                as="a"
                href="/gcse-chemistry-course-guide.pdf"
                target="_blank"
                rel="noopener noreferrer"
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
  Secure your child's GCSE Chemistry place
</Heading>
  <Text fontSize={{ base: 'md', md: 'md' }} lineHeight="relaxed" color="white" maxW="700px" mx="auto" mb={{ base: 10, md: 5}} px={{ base: 15, md: 75}} textAlign={{ base: "left", md: "center"}}


>
Choose a lesson slot and pay £20 to reserve the first session. This includes expert tutoring, feedback, and all resources. After the first lesson, decide if you'd like to continue—if so, we'll invoice monthly. If not, you won't be charged again.
</Text>

</Box>

    <div id="tutorbird-widget" style={{ width: '100%' }} />
    <Box px={{ base: 4 }} textAlign="center">
      <Box maxW="700px" mx="auto">
        <Text fontSize="sm" color="white" mt={4}>
          By booking, you agree to our{' '}
          <Link
            href="https://articles.gcsedoctor.co.uk/payment-terms/"
            isExternal
            textDecoration="underline"
            color="white"
          >
            Terms of Payment
          </Link>{' '}
          and{' '}
          <Link
            href="https://articles.gcsedoctor.co.uk/terms-of-service/"
            isExternal
            textDecoration="underline"
            color="white"
          >
            Terms of Service
          </Link>.
        </Text>
      </Box>
    </Box>


  </Box>


      </Box>
      
      <Footer />
    </>
  );
}
