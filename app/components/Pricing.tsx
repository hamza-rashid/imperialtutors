"use client"

import {
    Box,
    Center,
    Text,
    Stack,
    List,
    ListItem,
    ListIcon,
    Button,
    useColorModeValue,
    SimpleGrid,
    Tooltip,
  } from '@chakra-ui/react';
  import { CheckIcon, CloseIcon } from '@chakra-ui/icons';
  import Link from 'next/link';
  
  export default function Pricing() {
    return (
      <Center py={6}>
        <SimpleGrid
          columns={{ base: 1, md:2 }}
          spacing={'20'}
          mt={16}
          mb={16}
          mx={'auto'}>
        <Box
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Stack
            textAlign={'center'}
            p={6}
            color={useColorModeValue('gray.800', 'white')}
            align={'center'}>
            <Text
              fontSize={'sm'}
              fontWeight={500}
              bg={useColorModeValue('green.50', 'green.900')}
              p={2}
              px={3}
              color={'green.500'}
              rounded={'full'}>
              Pay per lesson (Year 7 - GCSE)
            </Text>
            <Stack direction={'row'} align={'center'} justify={'center'}>
              <Text fontSize={'3xl'}>£</Text>
              <Text fontSize={'6xl'} fontWeight={800}>
                15
              </Text>
              <Text color={'gray.500'}>/lesson</Text>
            </Stack>
          </Stack>
  
          <Box bg={useColorModeValue('gray.50', 'gray.900')} px={4} py={10}>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                <strong>1 hour</strong> group lesson (Year 7 - GCSE)
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                <strong>1 subject per week</strong>  (choose from Maths, Biology, Chemistry and Physics)
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                <strong>Small class sizes</strong>
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                Covering course <strong>content & exam technique</strong>
              </ListItem>

            </List>
            <Button as={"a"} href="https://gcsedoctor.co.uk/bookings"
              mt={10}
              w={'full'}
              bg={'green.400'}
              color={'white'}
              rounded={'xl'}
              boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
              _hover={{
                bg: 'green.500',
              }}
              _focus={{
                bg: 'green.500',
              }}>
              Book now
            </Button>
          </Box>
        </Box>

        <Box
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Stack
            textAlign={'center'}
            p={6}
            color={useColorModeValue('gray.800', 'white')}
            align={'center'}>
            <Text
              fontSize={'sm'}
              fontWeight={500}
              bg={useColorModeValue('green.50', 'green.900')}
              p={2}
              px={3}
              color={'green.500'}
              rounded={'full'}>
              Pay Monthly (Year 7 - GCSE)
            </Text>
            <Stack direction={'row'} align={'center'} justify={'center'}>
              <Text fontSize={'3xl'}>£</Text>
              <Text fontSize={'6xl'} fontWeight={800}>
                60
              </Text>
              <Text color={'gray.900'}>/month</Text>
            </Stack>
          </Stack>
  
          <Box bg={useColorModeValue('gray.50', 'gray.900')} px={4} py={10}>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                <strong>4 hours</strong> of group lessons per month (Year 7 - GCSE)
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                Covering course <strong>content & exam technique</strong>
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                Confirmed lesson place
                </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                Exclusive access to the <strong>Medicine entry Mentorship</strong> programme
                </ListItem>
            </List>

            <Button as={"a"} href="https://gcsedoctor.co.uk/bookings"
              mt={10}
              w={'full'}
              bg={'green.400'}
              color={'white'}
              rounded={'xl'}
              boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
              _hover={{
                bg: 'green.500',
              }}
              _focus={{
                bg: 'green.500',
              }}>
              Book now
            </Button>
          </Box>
        </Box>
        </SimpleGrid>
      </Center>
    );
  }