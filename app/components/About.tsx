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
import Link from 'next/link';
  
const HamzaIMAGE = '/images/hamza_profile.png'
const MaryamIMAGE = '/images/maryam_profile.jpeg'
  
function ProductHamza() {
    return (
      <Center py={12}>
          <Link href="/tutors/hamza" passHref><Box
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
                backgroundImage: `url(${HamzaIMAGE})`,
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
                src={HamzaIMAGE}
                alt="Studied at Imperial College London"
              />
            </Box>
            <Stack pt={10} align={'center'}>
              <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                Founder & Professional Educator
              </Text>
              <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={600}>
                Dr Hamza Rashid
              </Heading>
              <Stack direction={'column'} align={'center'}>
                <Text fontWeight={400} fontSize={'xl'}>
                  MBBS, BSc (1st Class)
                </Text>
                <Text fontWeight={600} fontSize={'xl'}>
                  Imperial College London
                </Text>
              </Stack>
              <Highlight query='2000+ hours tutoring experience' styles={{ px: '2', rounded: '2', bg: 'rgba(210,244,211,1)' , fontWeight:'400', fontSize:'l'}}> 
                  2000+ hours tutoring experience
              </Highlight>
            </Stack>
          </Box>
        </Link>
        </Center>
    );
}

function ProductMaryam() {
    return (
      <Center py={12}>
          <Link href="/tutors/maryam" passHref><Box
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
                backgroundImage: `url(${MaryamIMAGE})`,
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
                src={MaryamIMAGE}
                alt="Maryam Amer - Senior Tutor"
              />
            </Box>
            <Stack pt={10} align={'center'}>
              <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                Founder & Professional Educator
              </Text>
              <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={600}>
                Dr Maryam Amer
              </Heading>
              <Stack direction={'column'} align={'center'}>
                <Text fontWeight={400} fontSize={'xl'}>
                  MBBS, BA
                </Text>
                <Text fontWeight={600} fontSize={'xl'}>
                  University of Oxford
                </Text>
              </Stack>
              <Highlight query='750+ hours tutoring experience' styles={{ px: '2', rounded: '2', bg: 'rgba(210,244,211,1)' , fontWeight:'400', fontSize:'l'}}> 
                  750+ hours tutoring experience
              </Highlight>
            </Stack>
          </Box>
        </Link>
        </Center>
    );
}

export default function BasicStatistics() {
    return (
      <Box maxW="7xl" mx={'auto'} pt={16} pb={16} px={{ base: 2, sm: 12, md: 17 }} bg="transparent">
        <chakra.h1 textAlign={'center'} fontSize={'4xl'} py={2} fontWeight={'bold'}>
          Meet our Team
        </chakra.h1>
        <Box display="flex" justifyContent="center" alignItems="center" mb={6}>
          <Box w="80px" h="6px" bg="#37a169" borderRadius="full" />
        </Box>
        <Box maxW="4xl" mx="auto" textAlign={'center'} mt={4} mb={12}>
          <Text fontSize={'lg'} color={'gray.700'} lineHeight='1.8' >
            <Link href="/tutors" passHref>
              Our tutors are graduates of <Text as="span" fontWeight="bold">top UK universities</Text> and bring real expertise and a passion for teaching to every small group class. <Text as='u' color='blue.500'> <Text as="span" fontWeight="semibold">Meet the full team here.</Text></Text>
            </Link>
          </Text>
        </Box>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={{ base: 8, md: 24 }} justify='center' align='center'>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Image
              src="/images/hamza_profile3.png"
              alt="Dr Hamza Rashid"
              height={320}
              width={260}
              objectFit="cover"
              objectPosition="30% 50%"
              border="4px solid #37a169"
              borderRadius="none"
              mb={4}
            />
            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
              Founder & Professional Educator
            </Text>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={600} mt={2} mb={1}>
              Dr Hamza Rashid
            </Heading>
            <Text fontWeight={400} fontSize={'xl'}>MBBS, BSc (1st Class)</Text>
            <Text fontWeight={600} fontSize={'xl'}>Imperial College London</Text>
            <Text mt={2} fontSize={'md'} color={'gray.700'}>2000+ hours tutoring experience</Text>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Image
              src="/images/maryam_profile.jpeg"
              alt="Dr Maryam Amer"
              height={320}
              width={260}
              objectFit="cover"
              border="4px solid #37a169"
              borderRadius="none"
              mb={4}
            />
            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
              Founder & Professional Educator
            </Text>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={600} mt={2} mb={1}>
              Dr Maryam Amer
            </Heading>
            <Text fontWeight={400} fontSize={'xl'}>MBBS, BA</Text>
            <Text fontWeight={600} fontSize={'xl'}>University of Oxford</Text>
            <Text mt={2} fontSize={'md'} color={'gray.700'}>750+ hours tutoring experience</Text>
          </Box>
        </Stack>
      </Box>
    );
}
