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
              How it works
            </Text>
            <Heading>Join today for Tailored GCSE & A-Level Success!</Heading>
            <br />  
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
              <Feature
                icon={<Icon as={IoCallOutline} color={'green.500'} w={5} h={5} />}
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={<span><strong>Quick Start:</strong> Sign up and get a call from us within 48 hours for your initial consultation.</span>}
              />
              <Feature
                icon={
                <Icon as={MdOutlineSchool} color={'green.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={<span><strong>Effective Learning:</strong> Engage in 2-hour weekly group sessions per subject, with 1 hour for content and 1 hour for exam technique.</span>}
              />
              <Feature
                icon={
                  <Icon as={MdOutlineQuiz} color={'green.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={<span><strong>Ongoing Support:</strong> Receive weekly homework and dedicated time in sessions to review any challenges.</span>}
              />
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