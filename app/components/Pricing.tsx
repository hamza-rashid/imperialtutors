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
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

export default function Pricing() {
  return (
    <Center py={6}>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={'20'}
        mt={16}
        mb={16}
        mx={'auto'}>
      
      {/* Group Classes Section */}
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
            Group Classes
          </Text>
          <Stack direction={'row'} align={'center'} justify={'center'}>
            <Text fontSize={'3xl'}>£</Text>
            <Text fontSize={'6xl'} fontWeight={800}>20</Text>
            <Text>/hour</Text>
          </Stack>
        </Stack>

        <Box bg={useColorModeValue('gray.50', 'gray.900')} px={4} py={10}>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              <strong>1 hour</strong> of focused group tuition per subject
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              <strong>Small group size</strong>: Limited to 5 students
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              <strong>Dedicated WhatsApp group</strong> for interaction
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              <strong>Regular homework assignments</strong> to track progress
            </ListItem>
          </List>
          <Button as={"a"} href="https://f0bg5c5ixzh.typeform.com/to/Piqnx8xL"
            mt={10}
            w={'full'}
            bg={'green.400'}
            color={'white'}
            rounded={'xl'}
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

      {/* 1-2-1 Tuition Section */}
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
            1-2-1 Tuition
          </Text>
          <Stack direction={'row'} align={'center'} justify={'center'}>
            <Text fontSize={'3xl'}>£</Text>
            <Text fontSize={'6xl'} fontWeight={800}>60</Text>
            <Text>/hour</Text>
          </Stack>
        </Stack>

        <Box bg={useColorModeValue('gray.50', 'gray.900')} px={4} py={10}>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              <strong>1 hour of personalised one-on-one tuition</strong>
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              <strong>Flexible scheduling</strong>: Choose your time
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              <strong>Regular, tailored homework</strong> for improvement
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              <strong>1-2-1 WhatsApp support</strong> for direct access
            </ListItem>
          </List>

          <Button as={"a"} href="https://f0bg5c5ixzh.typeform.com/to/Piqnx8xL"
            mt={10}
            w={'full'}
            bg={'green.400'}
            color={'white'}
            rounded={'xl'}
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
