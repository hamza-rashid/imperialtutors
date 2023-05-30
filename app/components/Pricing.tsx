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
  import { CheckIcon } from '@chakra-ui/icons';
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
              Pay per lesson
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
                Affordable price
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                1 hour group lesson
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                Capped at 10 students per lesson
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                Free exam questions and marking
              </ListItem>
            </List>
            <Button as={"a"} href="https://calendly.com/gcsedoctor" target='_blank'
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
              Pay Monthly
            </Text>
            <Stack direction={'row'} align={'center'} justify={'center'}>
            <Text fontSize={'larger'} textDecoration={'line-through'} color={'gray.600'} marginTop={-68}>
              £60 
            </Text>
              <Text fontSize={'3xl'}>£</Text>
              <Text fontSize={'6xl'} fontWeight={800}>
                50
              </Text>
              <Text color={'gray.900'}>/month</Text>
            </Stack>
          </Stack>
  
          <Box bg={useColorModeValue('gray.50', 'gray.900')} px={4} py={10}>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                Discounted Price
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                4 x 1 hour group lessons per month
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                Capped at 10 students per lesson
                </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                Free exam questions and marking
                </ListItem>
            </List>

            <Tooltip label="Available Soon">
            <Button isDisabled
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
              Available soon
            </Button>
            </Tooltip>
          </Box>
        </Box>
        </SimpleGrid>
      </Center>
    );
  }