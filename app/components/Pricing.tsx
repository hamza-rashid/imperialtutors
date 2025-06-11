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
    <Box
      as="section"
      w={{ base: '100%', md: '100vw' }}
      maxW={{ base: '500px', md: '100vw' }}
      mx={{ base: 'auto', md: 'unset' }}
      position={{ base: 'static', md: 'relative' }}
      left={{ base: 'unset', md: '50%' }}
      right={{ base: 'unset', md: '50%' }}
      ml={{ base: 'unset', md: '-50vw' }}
      mr={{ base: 'unset', md: '-50vw' }}
      bg={{ base: 'linear-gradient(135deg, #d0f5e0 60%, #b2e6c7 100%)', md: 'linear-gradient(135deg, #b7eac7 60%, #7fd8a9 100%)' }}
      py={20}
    >
      <Center px={{ base: 4, md: 0 }}>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={12}
          mt={8}
          mb={8}
          mx={'auto'}>
        {/* Group Classes Section */}
        <Box
          maxW={'370px'}
          w={'full'}
          bg={"white"}
          boxShadow={'0 8px 32px 0 rgba(55,161,105,0.12)'}
          rounded={'2xl'}
          overflow={'hidden'}
          border={"2px solid #37a169"}
          position="relative"
        >
          <Box position="absolute" top={-5} left={0} right={0} mx="auto" w="fit-content" bg="#37a169" color="white" px={4} py={1} borderRadius="full" fontWeight="bold" fontSize="sm" letterSpacing="0.5px" zIndex={2} boxShadow="md" style={{transform: 'translateY(-50%)'}}>
            Most Popular
          </Box>
          <Stack
            textAlign={'center'}
            p={8}
            color={'gray.800'}
            align={'center'}>
            <Text
              fontSize={'md'}
              fontWeight={700}
              color={'#37a169'}
              letterSpacing={1}
              textTransform="uppercase"
              mb={2}
              mt={4}
            >
              Triple Science
            </Text>
            <Stack direction={'row'} align={'baseline'} justify={'center'} mb={2} spacing={1}>
              <Text fontSize={'4xl'} fontWeight={900} color="#1a202c" lineHeight="1">£</Text>
              <Text fontSize={'6xl'} fontWeight={900} color="#1a202c" lineHeight="1">20</Text>
              <Text fontSize={'xl'} color="gray.500" mb={1} lineHeight="1">/hour</Text>
            </Stack>
          </Stack>
          <Box bg="white" px={6} py={8}>
            <List spacing={5}>
              <ListItem fontSize="lg">
                <ListIcon as={CheckIcon} color="#37a169" />
                <b>1 hour</b> of focused group tuition per science
              </ListItem>
              <ListItem fontSize="lg">
                <ListIcon as={CheckIcon} color="#37a169" />
                <b>Small group size</b>: Max 4 students
              </ListItem>
              <ListItem fontSize="lg">
                <ListIcon as={CheckIcon} color="#37a169" />
                <b>WhatsApp group</b> for support & reminders
              </ListItem>
              <ListItem fontSize="lg">
                <ListIcon as={CheckIcon} color="#37a169" />
                <b>Weekly homework</b> & revision booklets
              </ListItem>
            </List>
            <Button as={"a"} href="/bookings"
              mt={10}
              w={'full'}
              size="lg"
              bg={'#37a169'}
              color={'white'}
              rounded={'xl'}
              fontWeight="bold"
              fontSize="xl"
              boxShadow="md"
              _hover={{
                bg: '#2e855d',
                transform: 'translateY(-2px) scale(1.03)',
                boxShadow: 'lg',
              }}
              _focus={{
                bg: '#2e855d',
              }}>
              Book now
            </Button>
          </Box>
        </Box>
        {/* 1-2-1 Tuition Section */}
        <Box
          maxW={'370px'}
          w={'full'}
          bg={"white"}
          boxShadow={'0 8px 32px 0 rgba(55,161,105,0.12)'}
          rounded={'2xl'}
          overflow={'hidden'}
        >
          <Stack
            textAlign={'center'}
            p={8}
            color={'gray.800'}
            align={'center'}>
            <Text
              fontSize={'md'}
              fontWeight={700}
              color={'#37a169'}
              letterSpacing={1}
              textTransform="uppercase"
              mb={2}
              mt={4}
            >
              1-2-1 Tuition
            </Text>
            <Stack direction={'row'} align={'baseline'} justify={'center'} mb={2} spacing={1}>
              <Text fontSize={'4xl'} fontWeight={900} color="#1a202c" lineHeight="1">£</Text>
              <Text fontSize={'6xl'} fontWeight={900} color="#1a202c" lineHeight="1">45</Text>
              <Text fontSize={'xl'} color="gray.500" mb={1} lineHeight="1">/hour</Text>
            </Stack>
          </Stack>
          <Box bg="white" px={6} py={8}>
            <List spacing={5}>
              <ListItem fontSize="lg">
                <ListIcon as={CheckIcon} color="#37a169" />
                <b>1 hour</b> of personalised one-on-one tuition
              </ListItem>
              <ListItem fontSize="lg">
                <ListIcon as={CheckIcon} color="#37a169" />
                <b>Flexible scheduling</b>: Choose your time
              </ListItem>
              <ListItem fontSize="lg">
                <ListIcon as={CheckIcon} color="#37a169" />
                <b>Tailored homework</b> for improvement
              </ListItem>
              <ListItem fontSize="lg">
                <ListIcon as={CheckIcon} color="#37a169" />
                <b>1-2-1 WhatsApp support</b> for direct access
              </ListItem>
            </List>
            <Button as={"a"} href="https://f0bg5c5ixzh.typeform.com/to/WBhpebuF"
              mt={10}
              w={'full'}
              size="lg"
              bg={'#37a169'}
              color={'white'}
              rounded={'xl'}
              fontWeight="bold"
              fontSize="xl"
              boxShadow="md"
              _hover={{
                bg: '#2e855d',
                transform: 'translateY(-2px) scale(1.03)',
                boxShadow: 'lg',
              }}
              _focus={{
                bg: '#2e855d',
              }}>
              Book now
            </Button>
          </Box>
        </Box>
        </SimpleGrid>
      </Center>
    </Box>
  );
}
