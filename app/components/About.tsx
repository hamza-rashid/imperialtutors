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
                Founder & Elite Educator
              </Text>
              <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={600}>
                Dr Hamza Rashid
              </Heading>
              <Stack direction={'column'} align={'center'}>
                <Text fontWeight={400} fontSize={'xl'}>
                  MBBS, BSc (1st Class Hons.)
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
                Co-Founder & Elite Educator
              </Text>
              <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={600}>
                Dr Maryam Amer
              </Heading>
              <Stack direction={'column'} align={'center'}>
                <Text fontWeight={400} fontSize={'xl'}>
                  MBBS, BSc (1st Class Hons.)
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
      <Box maxW="7xl" mx={'auto'} pt={8} px={{ base: 2, sm: 12, md: 17 }}>
        <chakra.h1 textAlign={'center'} fontSize={'4xl'} py={2} fontWeight={'bold'}>Meet our Team</chakra.h1>
        <Box maxW="4xl" mx="auto" textAlign={'center'} mt={4}> {/* Increased maxW to make the description wider */}
          <Text fontSize={'md'} color={'black.500'} lineHeight='1.8' >
            <Link href="/tutors" passHref>At GCSE Doctor, we take pride in our team of elite educators, all of whom are graduates or current students of <Text as="span" fontWeight="bold">top UK universities such as Oxford, Cambridge, and London </Text>universities.
            Our tutors are dedicated professionals, fully DBS-checked, and passionate about guiding students to achieve their academic potential. Learn more about our <Text as='u' color='blue.500'> <Text as="span" fontWeight="semibold">full team of educators here.</Text></Text></Link>
          </Text>
        </Box>
        {/* Add margin between the description and the stacks */}
        <Box mt={8} />
        <Stack direction={{ base: 'column', md: 'row' }} spacing={{ base: 4, md: 70 }} justify='center'>
          <ProductHamza />
          <ProductMaryam />
        </Stack>
      </Box>
    );
}
