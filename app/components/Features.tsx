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
    TbBrandZoom
  } from 'react-icons/tb';
  import {
    MdOutlineQuiz,
    MdOutlineFeedback
  } from 'react-icons/md';
  import { ReactElement } from 'react';
  
  interface FeatureProps {
    text: string;
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
            <Heading>Free personalised feedback</Heading>
            <br />  
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
              <Feature
                icon={<Icon as={TbBrandZoom} color={'green.500'} w={5} h={5} />}
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={'Take part in the interactive zoom lesson with Dr Rashid'}
              />
              <Feature
                icon={
                <Icon as={MdOutlineQuiz} color={'green.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={'Once a month Dr Rashid will test you on a topic with past exam questions'}
              />
              <Feature
                icon={
                  <Icon as={MdOutlineFeedback} color={'green.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={'Send him your answers and get personalised feedback straight to your email'}
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