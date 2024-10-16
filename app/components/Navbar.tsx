"use client";

import {
  Box,
  Flex,
  IconButton,
  Button,
  Stack,
  Link,
  Image,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Collapse,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const isDesktop = useBreakpointValue({ base: false, md: true });

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
        justify={'space-between'}
      >
        <Flex justify={{ base: 'center', md: 'left' }} flex={{ base: 1 }}>
          <a href="/">
            <Image
              src="images/logo.svg"
              h="50px"
              objectFit="contain"
              alt="Logo"
            />
          </a>
        </Flex>

        {isDesktop ? (
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        ) : (
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={5} h={5} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
            display={{ md: 'none' }}
          />
        )}
      </Flex>

      {/* Mobile menu */}
      {!isDesktop && (
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      )}
    </Box>
  );
}

const DesktopNav = () => {
  return (
    <Stack direction={'row'} spacing={8} alignItems="center">
      <NavItem label="About" href="https://gcsedoctor.co.uk/#about-me" />
      <NavItem label="Reviews" href="https://gcsedoctor.co.uk/#testimonials" />
      <NavItem label="Fees" href="https://gcsedoctor.co.uk/#pricing" />
      <NavItem
        label="📚 Free Revision Guide"
        href="https://gcsedoctor.co.uk/revision"
        isButton
        isDesktop
      />
      <Button
        as={'a'}
        fontSize={'sm'}
        fontWeight={600}
        color={'white'}
        bg={'green.500'}
        href={'https://gcsedoctor.co.uk/bookings'}
        _hover={{
          bg: 'green.600',
        }}
      >
        Sign Up
      </Button>
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Flex
      direction="column"
      align="center"
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      pt={2} // Reduced padding-top to decrease space above
      pb={2} // Reduced padding-bottom to decrease space below
      display={{ md: 'none' }}
    >
      {/* First line with links */}
      <Stack direction={'row'} spacing={4} align="center" justify="center" w="100%" mb={3}>
        <NavItem label="About" href="https://gcsedoctor.co.uk/#about-me" />
        <NavItem label="Reviews" href="https://gcsedoctor.co.uk/#testimonials" />
        <NavItem label="Fees" href="https://gcsedoctor.co.uk/#pricing" />
      </Stack>

      {/* Second line with the centered button */}
      <Flex mt={3} justify="center" w="100%">
        <NavItem label="📚 Free Revision Guide" href="https://gcsedoctor.co.uk/revision" isButton isMobile />
      </Flex>
    </Flex>
  );
};

const NavItem = ({ label, href, isButton, isDesktop, isMobile }) => {
  return (
    <Link
      href={href}
      px={4} // Increase padding for better visual spacing
      py={2}
      rounded={'md'}
      bg={isButton ? (isDesktop ? 'white' : 'white') : 'transparent'}
      color={isButton ? '#37A169' : useColorModeValue('gray.600', 'white')}
      border={isButton ? '2px solid #37A169' : 'none'}
      fontWeight={600}
      whiteSpace={'nowrap'} // Prevent text wrapping
      textAlign="center"
      _hover={{
        textDecoration: 'none',
        bg: isButton ? '#F0F0F0' : useColorModeValue('gray.100', 'gray.700'),
      }}
      target={isMobile && isButton ? '_blank' : undefined}
      rel={isMobile && isButton ? 'noopener noreferrer' : undefined}
    >
      {label}
    </Link>
  );
};
