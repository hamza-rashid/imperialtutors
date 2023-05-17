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
          align={'center'}>
          <Flex flex={{ base: 1 }} justify={{ base: 'left', md: 'left' }}>
            <Image
            src="images/logo.svg"
            h="50px"
            objectFit="contain" // Maintain the aspect ratio of the image while fitting within the height
            />
          </Flex>
  
          <Stack
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'green.500'}
              href={'https://calendly.com/imperialtutors'}
              target={'_blank'}
              _hover={{
                bg: 'green.600',
              }}>
              Book Now!
            </Button>
          </Stack>
        </Flex>
      </Box>
    );
  }
  
