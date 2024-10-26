"use client"

import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
  } from '@chakra-ui/react';
  import {
    MdOutlineSchool, 
    MdOutlineQuiz,
  } from 'react-icons/md';
  import { IoCallOutline } from "react-icons/io5";
  import { ReactElement, ReactNode, } from 'react';
  
  interface FeatureProps {
    text: ReactNode;
    iconBg: string;
    icon?: ReactElement;
  }
  
  const Feature = ({text, icon, iconBg }: FeatureProps) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={500}>{text}</Text>
      </Stack>
    );
  };
  
  export default function SplitWithImage() {
    return (
      <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={'uppercase'}
              color={'green.600'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('green.100', 'green.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              Our strategy
            </Text>
            <Heading>Join today for Tailored GCSE Success!</Heading>
            <br />  
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
              <Feature
                icon={<Icon as={IoCallOutline} color={'green.500'} w={7} h={5} />}
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={
                  <Text fontSize="md" fontWeight="normal" color={useColorModeValue('gray.700', 'gray.300')} lineHeight='1.8'>
                    <strong>Quick Start:</strong> <a href="/bookings"><Text as="u" fontWeight="semibold" color="blue.500">Sign up</Text></a> for a consultation within 48 hours to match you with the right tutor and study group.
                  </Text>
                }
                
                
                   
                />
              <Feature
                icon={
                <Icon as={MdOutlineSchool} color={'green.500'} w={7} h={5} />
                }
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={
                  <Text fontSize="md" fontWeight="normal" color={useColorModeValue('gray.700', 'gray.300')} lineHeight='1.8'>
                    <strong>Effective Learning:</strong> Weekly one-hour group sessions, even during half-term, with extra exam technique guidance during revision periods.
                  </Text>
                }              />
              <Feature
                icon={
                  <Icon as={MdOutlineQuiz} color={'green.500'} w={7} h={5} />
                }
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={
                  <Text fontSize="md" fontWeight="normal" color={useColorModeValue('gray.700', 'gray.300')} lineHeight='1.8'>
                    <strong>Ongoing Support:</strong> Stay connected through a dedicated WhatsApp group. Weekly homework reinforces learning, with challenges reviewed in lessons.
                  </Text>
                }                 />
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={'md'}
              alt={'free paper marking'}
              src={
                '/images/feedback.png'
              }
              objectFit={'cover'}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    );
  }