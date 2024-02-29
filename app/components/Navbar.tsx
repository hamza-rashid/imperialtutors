"use client"

import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    Image,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';

  // Existing imports...

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
      >
        <Flex flex={{ base: 1 }} justify={{ base: 'left', md: 'left' }}>
          <Image
            src="images/logo.svg"
            h="50px"
            marginLeft={2}
            objectFit="contain"
          />
        </Flex>

        <Stack
          spacing={{ base: 0, md: 4 }} // Adjusted spacing based on breakpoints
          align={'center'}
          justify={'flex-end'}
          flex={{ base: 1, md: 'auto' }}
          mr={{ base: -2, md: 0 }}
          direction="row" // Set direction to row
        >
          <Link
            px={2}
            py={1}
            rounded={'md'}
            href={"#about-me"}
            fontSize={'sm'}
            fontWeight={600}
            color={useColorModeValue('gray.600', 'white')}
            _hover={{
              textDecoration: 'none',
              color: '#37A169', // Text color changes on hover
            }}
          >
            About
          </Link>
          <Link
            px={2}
            py={1}
            rounded={'md'}
            href={'#testimonials'}
            fontSize={'sm'}
            fontWeight={600}
            color={useColorModeValue('gray.600', 'white')}
            _hover={{
              textDecoration: 'none',
              color: '#37A169', // Text color changes on hover
            }}
          >
            Reviews
          </Link>
          <Link
            px={2}
            py={1}
            rounded={'md'}
            href={'#fees'}
            fontSize={'sm'}
            fontWeight={600}
            color={useColorModeValue('gray.600', 'white')}
            pr={{ base: 5, md: 5 }} // Apply pr=2 only on mobile
            _hover={{
              textDecoration: 'none',
              color: '#37A169', // Text color changes on hover
            }}
          >
            Fees
          </Link>
          {useBreakpointValue({ base: false, md: true }) && (
            <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'green.500'}
              href={'https://f0bg5c5ixzh.typeform.com/to/SAD6oNmE'}
              target={'_blank'}
              _hover={{
                bg: 'green.600',
              }}
            >
              Join Waitlist
            </Button>
          )}
        </Stack>
      </Flex>
    </Box>
  );
}
