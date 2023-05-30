"use client"

import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    chakra,
    Highlight,
  } from '@chakra-ui/react';
  
  const IMAGE ='/images/profile.png'
  
function ProductSimple() {
    return (
      <Center py={12}>
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'340px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${IMAGE})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={340}
              width={282}
              objectFit={'cover'}
              src={IMAGE}
              alt="Studied at Imperial College London"
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
              Founder & Lead Tutor
            </Text>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={600}>
              Dr Hamza Rashid
            </Heading>
            <Stack direction={'column'} align={'center'}>
              <Text fontWeight={400} fontSize={'xl'}>
                MBBS BSc 1st Class Hons.
              </Text>
              <Text fontWeight={600} fontSize={'xl'}>
                Imperial College London
              </Text>
            </Stack>
            <Highlight query='450+ hours tutoring experience' styles={{ px: '2', rounded: '2', bg: 'rgba(210,244,211,1)' , fontWeight:'400', fontSize:'l'}}> 
                450+ hours tutoring experience
            </Highlight>
          </Stack>
        </Box>
      </Center>
    );
  }

  export default function BasicStatistics() {
    return (
      <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        <chakra.h1
          textAlign={'center'}
          fontSize={'4xl'}
          py={10}
          fontWeight={'bold'}>
          About Me
        </chakra.h1>
        <ProductSimple /> 
      </Box>
    );
  }