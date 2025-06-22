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

const curriculum = {
  'Year 10': {
    AQA: [
      {
        phase: 'Core Principles',
        color: '#37a169',
        border: '#37a169',
        rows: [
          { date: '1 July 2025', topic: 'B1.1: Cell Structure' },
          { date: '8 July', topic: 'B1.2–1.6: Microscopy + Cell Division' },
          { date: '15 July', topic: 'B1.7: Transport in Cells' },
          { date: '22 July', topic: 'B2.1–2.2: Tissues + Organs' },
          { date: '29 July', topic: 'B2.3–2.4: The Heart + Blood Vessels' },
          { date: '5 Aug', topic: 'B2.5–2.6: Blood + Health Issues' },
          { date: '12 Aug', topic: 'B2.7–2.9: Cancer, Lifestyle, Disease' },
          { date: '19 & 26 Aug', topic: 'Summer Break (Progress Reports)', isBreak: true },
          { date: '2 Sep', topic: 'B2.10: Plant Organs & Transport' },
          { date: '9 Sep', topic: 'B3.1–3.3: Pathogens + Bacteria + Viruses' },
          { date: '16 Sep', topic: 'B3.4–3.5: Defence Systems + Vaccination' },
          { date: '23 Sep', topic: 'B3.6–3.7: Antibiotics + Drug Development' },
          { date: '30 Sep', topic: 'B3.8: Monoclonal Antibodies' },
          { date: '7 Oct', topic: 'B3.9: Plant Diseases' },
          { date: '14 Oct', topic: 'B4.1–4.2: Photosynthesis' },
          { date: '21 Oct', topic: 'B4.3–4.4: Factors Affecting Photosynthesis' },
          { date: '28 Oct', topic: 'Half-Term (No Lesson)', isBreak: true },
          { date: '4 Nov', topic: 'B4.5–4.6: Respiration' },
          { date: '11 Nov', topic: 'B4.7: Metabolism' },
          { date: '18 Nov', topic: 'Recap + Required Practicals Review' },
          { date: '25 Nov', topic: 'Low-Stakes Quiz + Diagnostic Test', isHighlight: true },
          { date: '2 Dec', topic: 'DIRT + Gaps Retaught' },
          { date: '9 Dec', topic: 'Paper 1 Mock Test', isHighlight: true },
          { date: '16 & 23 Dec', topic: 'Christmas Break (Progress Reports)', isBreak: true },
        ],
      },
      {
        phase: 'Application',
        color: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
        border: '#059669',
        rows: [
          { date: '30 Dec', topic: 'Cell Biology – Model Answers' },
          { date: '6 Jan 2026', topic: 'Cell Biology – ERQs' },
          { date: '13 Jan', topic: 'Organisation – Model Answers' },
          { date: '20 Jan', topic: 'Organisation – ERQs' },
          { date: '27 Jan', topic: 'Infection & Response – Model Answers' },
          { date: '3 Feb', topic: 'Infection & Response – ERQs' },
          { date: '10 Feb', topic: 'Bioenergetics – Graphs & Data Qs' },
          { date: '17 Feb', topic: 'Half-Term (No Lesson)', isBreak: true },
        ],
      },
      {
        phase: 'Exam Focus',
        color: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
        border: '#dc2626',
        rows: [
          { date: '24 Feb 2026', topic: 'Required Practicals: Qs + MS walkthrough' },
          { date: '3 Mar', topic: 'Interleaved Practice: Cell + Organisation' },
          { date: '10 Mar', topic: 'Interleaved Practice: Infection + Bioenergetics' },
          { date: '17 Mar', topic: 'Full Paper 1 Practice (Timed Conditions)', isHighlight: true },
          { date: '24 Mar', topic: 'Paper 1 Marking + Reflection + Target Setting' },
          { date: '31 Mar & 7 Apr', topic: 'Easter Break (Progress Reports)', isBreak: true },
          { date: '14 Apr', topic: 'Targeted Revision: Low Scoring Areas' },
          { date: '21 Apr', topic: 'Key Diagrams + Definitions Practice' },
          { date: '28 Apr', topic: 'Required Practicals Recap + Flashcards' },
          { date: '5 May', topic: 'Final Paper 1 Warm-Up Exam', isHighlight: true },
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
          { date: '1 July 2025', topic: 'CB1: Cells & Microscopy' },
          { date: '8 July', topic: 'CB1: Enzymes + Practical Skills' },
          { date: '15 July', topic: 'CB2: Mitosis + Cell Cycle' },
          { date: '22 July', topic: 'CB2: Growth in Animals & Plants' },
          { date: '29 July', topic: 'CB5: Health, Disease, Pathogens' },
          { date: '5 Aug', topic: 'CB5: Immune System + Body Defences' },
          { date: '12 Aug', topic: 'CB5: Antibiotics + Drug Development' },
          { date: '19 & 26 Aug', topic: 'Summer Break (Progress Reports)', isBreak: true },
          { date: '2 Sep', topic: 'CB3: Genetics – DNA, Genes, Alleles' },
          { date: '9 Sep', topic: 'CB3: Inheritance + Punnett Squares' },
          { date: '16 Sep', topic: 'CB3: Genetic Variation & Mutations' },
          { date: '23 Sep', topic: 'CB4: Natural Selection + Evolution' },
          { date: '30 Sep', topic: 'CB4: Evidence + Classification' },
          { date: '7 Oct', topic: 'CB5: Non-Communicable Disease' },
          { date: '14 Oct', topic: 'Required Practicals Review' },
          { date: '21 Oct', topic: 'Recap + MCQ + Flashcard Tasks' },
          { date: '28 Oct', topic: 'Half-Term (No lesson)', isBreak: true },
          { date: '4 Nov', topic: 'Low-Stakes Quiz + Diagnostic Test', isHighlight: true },
          { date: '11 Nov', topic: 'DIRT + Gaps Retaught' },
          { date: '18 Nov', topic: 'Paper 1 Mock Preparation' },
          { date: '25 Nov', topic: 'Paper 1 Mock Test', isHighlight: true },
          { date: '2 Dec', topic: 'CB1–CB2: Model Answers' },
          { date: '9 Dec', topic: 'CB1–CB2: ERQs' },
          { date: '16 & 23 Dec', topic: 'Christmas Break (Progress Reports)', isBreak: true },
        ],
      },
      {
        phase: 'Application',
        color: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
        border: '#059669',
        rows: [
          { date: '30 Dec', topic: 'CB3 – Model Answers' },
          { date: '6 Jan 2026', topic: 'CB3 – ERQs' },
          { date: '13 Jan', topic: 'CB4 – Graphs & Data' },
          { date: '20 Jan', topic: 'CB4 – 6-Markers' },
          { date: '27 Jan', topic: 'CB5 – Flashcards + Diagrams' },
          { date: '3 Feb', topic: 'Required Practicals Qs + MS walkthrough' },
          { date: '10 Feb', topic: 'Interleaved Practice: CB1–CB2' },
          { date: '17 Feb', topic: 'Half-Term (No lesson)', isBreak: true },
        ],
      },
      {
        phase: 'Exam Focus',
        color: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
        border: '#dc2626',
        rows: [
          { date: '24 Feb 2026', topic: 'Interleaved Practice: CB3–CB5' },
          { date: '3 Mar', topic: 'Full Paper 1 Practice (Timed)', isHighlight: true },
          { date: '10 Mar', topic: 'Marking + Reflection + Targets' },
          { date: '17 Mar', topic: 'Targeted Revision: Low Scoring Areas' },
          { date: '24 Mar', topic: 'Top 20 Edexcel Mark Scheme Phrases' },
          { date: '31 Mar & 7 Apr', topic: 'Easter Break (Progress Reports)', isBreak: true },
          { date: '14 Apr', topic: 'Key Diagrams + Definitions' },
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
          { date: '1 July 2025', topic: 'B5.1–5.2: Homeostasis & Nervous System' },
          { date: '8 July', topic: 'B5.3–5.5: Synapses + Reflexes' },
          { date: '15 July', topic: 'B5.6–5.8: Endocrine + Blood Glucose' },
          { date: '22 July', topic: 'B5.9–5.10: Diabetes + Negative Feedback' },
          { date: '29 July', topic: 'B6.1–6.3: Reproduction' },
          { date: '5 Aug', topic: 'B6.4–6.6: DNA, Genome, Genetic Inheritance' },
          { date: '12 Aug', topic: 'B6.7–6.9: Genetic Diagrams + Variation' },
          { date: '19 & 26 Aug', topic: 'Summer Break (Progress Reports)', isBreak: true },
          { date: '2 Sep', topic: 'B6.10–6.12: Evolution, Selective Breeding' },
          { date: '9 Sep', topic: 'B6.13–6.14: GM + Cloning' },
          { date: '16 Sep', topic: 'B7.1–7.2: Ecosystems, Adaptations' },
          { date: '23 Sep', topic: 'B7.3–7.4: Interdependence, Abiotic Factors' },
          { date: '30 Sep', topic: 'B7.5–7.7: Waste, Global Warming' },
          { date: '7 Oct', topic: 'B7.8–7.9: Biodiversity + Deforestation' },
          { date: '14 Oct', topic: 'Required Practicals Review' },
          { date: '21 Oct', topic: 'Interleaved Paper 2 Review (Quickfire)' },
          { date: '28 Oct', topic: 'Half-Term (No Lesson)', isBreak: true },
          { date: '4 Nov', topic: 'Low-Stakes Quiz + Diagnostic', isHighlight: true },
          { date: '11 Nov', topic: 'DIRT + Fill Gaps' },
          { date: '18 Nov', topic: 'Paper 2 Mock Preparation' },
          { date: '25 Nov', topic: 'Paper 2 Mock Test', isHighlight: true },
          { date: '2 Dec', topic: 'B5–6: Model Answers' },
          { date: '9 Dec', topic: 'B5–6: ERQs' },
          { date: '16 & 23 Dec', topic: 'Christmas Break (Progress Reports)', isBreak: true },
        ],
      },
      {
        phase: 'Application',
        color: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
        border: '#059669',
        rows: [
          { date: '30 Dec', topic: 'B7 – Graphs & Data Questions' },
          { date: '6 Jan 2026', topic: 'B7 – 6 Markers' },
          { date: '13 Jan', topic: 'Required Practicals + Flashcards' },
          { date: '20 Jan', topic: 'Key Definitions + Diagrams' },
          { date: '27 Jan', topic: 'Interleaved Practice B5–7' },
          { date: '3 Feb', topic: 'Past Paper Qs by Theme' },
          { date: '10 Feb', topic: 'Mastering Mark Schemes' },
          { date: '17 Feb', topic: 'Half-Term (No Lesson)', isBreak: true },
        ],
      },
      {
        phase: 'Exam Focus',
        color: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
        border: '#dc2626',
        rows: [
          { date: '24 Feb 2026', topic: 'Timed Paper 2 Practice' },
          { date: '3 Mar', topic: 'Marking + Feedback + DIRT' },
          { date: '10 Mar', topic: 'Targeted Revision: Weakest Topics' },
          { date: '17 Mar', topic: 'Flashcard Review + Verbal Recap' },
          { date: '24 Mar', topic: 'Final Diagrams + Required Practicals' },
          { date: '31 Mar & 7 Apr', topic: 'Easter Break (Progress Reports)', isBreak: true },
          { date: '14 Apr', topic: 'Final Paper 2 Warm-Up', isHighlight: true },
          { date: '21 Apr', topic: 'Last Exam Board Tricks & Commands' },
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
          { date: '1 July 2025', topic: 'CB6: Photosynthesis' },
          { date: '8 July', topic: 'CB6: Structure + Factors' },
          { date: '15 July', topic: 'CB7: Hormones + Menstrual Cycle' },
          { date: '22 July', topic: 'CB7: Controlling Fertility + Hormones' },
          { date: '29 July', topic: 'CB8: Circulatory System' },
          { date: '5 Aug', topic: 'CB8: Blood + Heart Disease' },
          { date: '12 Aug', topic: 'CB9: Respiration' },
          { date: '19 & 26 Aug', topic: 'Summer Break (Progress Reports)', isBreak: true },
          { date: '2 Sep', topic: 'CB9: Exercise + Metabolism' },
          { date: '9 Sep', topic: 'CB10: Nervous System' },
          { date: '16 Sep', topic: 'CB11: Homeostasis' },
          { date: '23 Sep', topic: 'CB11: Diabetes + Temperature Control' },
          { date: '30 Sep', topic: 'CB12: Reproduction' },
          { date: '7 Oct', topic: 'CB13: Genetic Inheritance' },
          { date: '14 Oct', topic: 'Required Practicals Review' },
          { date: '21 Oct', topic: 'Interleaved Paper 2 Review (Quickfire)' },
          { date: '28 Oct', topic: 'Half-Term (No lesson)', isBreak: true },
          { date: '4 Nov', topic: 'Low-Stakes Quiz + Diagnostic Test', isHighlight: true },
          { date: '11 Nov', topic: 'DIRT + Gaps Retaught' },
          { date: '18 Nov', topic: 'Paper 2 Mock Preparation' },
          { date: '25 Nov', topic: 'Paper 2 Mock Test', isHighlight: true },
          { date: '2 Dec', topic: 'CB6–CB8: Model Answers' },
          { date: '9 Dec', topic: 'CB9–CB10: ERQs' },
          { date: '16 & 23 Dec', topic: 'Christmas Break (Progress Reports)', isBreak: true },
        ],
      },
      {
        phase: 'Application',
        color: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
        border: '#059669',
        rows: [
          { date: '30 Dec', topic: 'CB11–13: Graphs & Data Qs' },
          { date: '6 Jan 2026', topic: 'CB11–13: 6 Markers' },
          { date: '13 Jan', topic: 'Required Practicals Qs' },
          { date: '20 Jan', topic: 'Key Diagrams + Definitions' },
          { date: '27 Jan', topic: 'Interleaved Review: CB6–CB13' },
          { date: '3 Feb', topic: 'Past Paper by Theme' },
          { date: '10 Feb', topic: 'Mark Scheme Practice' },
          { date: '17 Feb', topic: 'Half-Term (No lesson)', isBreak: true },
        ],
      },
      {
        phase: 'Exam Focus',
        color: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
        border: '#dc2626',
        rows: [
          { date: '24 Feb 2026', topic: 'Full Paper 2 Timed Practice' },
          { date: '3 Mar', topic: 'Marking + DIRT' },
          { date: '10 Mar', topic: 'Targeted Revision' },
          { date: '17 Mar', topic: 'Flashcards + Verbal Quizzing' },
          { date: '24 Mar', topic: 'Final Exam Diagrams' },
          { date: '31 Mar & 7 Apr', topic: 'Easter Break (Progress Reports)', isBreak: true },
          { date: '14 Apr', topic: 'Final Paper 2 Warm-Up', isHighlight: true },
          { date: '21 Apr', topic: 'Mark Scheme Phrases & Final Drill' },
          { date: '28 Apr', topic: 'No Lesson – Exam Season Begins', isBreak: true },
        ],
      },
    ],
  },
} as const;
type YearKey = keyof typeof curriculum;
type BoardKey = keyof typeof curriculum[YearKey];

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
  const [yearTab, setYearTab] = useState(0); // 0: Year 10, 1: Year 11
  const [boardTab, setBoardTab] = useState<number>(0); // 0: AQA, 1: Edexcel
  const yearKeys = Object.keys(curriculum) as YearKey[];
  const boardKeys = ['AQA', 'Edexcel'];

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

  function renderCurriculumOverview() {
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
            <Heading as="h3" fontSize="xl" mb={4}>{yearKeys[yearTab]} {boardKeys[boardTab]} Biology Mastery Curriculum</Heading>
            <Text fontSize="md" color="#1a202c" mb={6}>
              Our comprehensive curriculum is designed to take students from confusion to confidence, with a structured approach that covers all essential topics for {boardKeys[boardTab]} in {yearKeys[yearTab]}.
            </Text>
            {curriculum[yearKeys[yearTab]][boardKeys[boardTab] as BoardKey].map((phase: any, idx: number) => (
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
                  {/* Date clarification header */}
                  <Flex
                    borderBottom="1px solid"
                    borderColor="gray.200"
                  >
                    <Box
                      w="160px"
                      p={3}
                      bg="gray.50"
                      color="gray.700"
                      fontWeight="bold"
                      fontSize="sm"
                      borderRight="2px solid"
                      borderColor={phase.border}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      Week Beginning
                    </Box>
                    <Box
                      flex="1"
                      p={3}
                      bg="gray.50"
                      color="gray.700"
                      fontSize="sm"
                      fontWeight="bold"
                      display="flex"
                      alignItems="center"
                    >
                      Topic & Content
                    </Box>
                  </Flex>
                  {phase.rows.map((item: any, i: number) => (
                    <Flex
                      key={i}
                      bg={('isBreak' in item && item.isBreak) ? '#fef3c7' : 'white'}
                      _hover={{ bg: ('isBreak' in item && item.isBreak) ? '#fde68a' : '#f7fafc' }}
                      borderBottom="1px solid"
                      borderColor="gray.200"
                      transition="all 0.2s"
                    >
                      <Box
                        w="160px"
                        p={3}
                        bg={('isBreak' in item && item.isBreak) ? '#fbbf24' : '#b5d9c0'}
                        color={('isBreak' in item && item.isBreak) ? '#92400e' : '#1f2937'}
                        fontWeight="bold"
                        fontSize="sm"
                        borderRight="2px solid"
                        borderColor={phase.border}
                        textAlign="center"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
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
  }

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
                      {renderCurriculumOverview()}
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
                as="a"
                href="/gcse-biology-course-guide.pdf"
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
  Secure your child's GCSE Biology place
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
