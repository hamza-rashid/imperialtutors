"use client";

import {
  Box,
  Flex,
  IconButton,
  Button,
  Stack,
  Link,
  Image,
  useDisclosure,
  Collapse,
  Divider,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, PhoneIcon, EmailIcon } from '@chakra-ui/icons';

interface NavItemProps {
  label: string;
  href: string;
  isButton?: boolean;
  isMobile?: boolean;
  buttonHoverBg?: string;
}

interface DesktopNavProps {
  buttonHoverBg: string;
}

interface MobileNavProps {
  buttonHoverBg: string;
}

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  // Define static colors instead of using useColorModeValue
  const bgColor = 'white';
  const textColor = 'gray.600';
  const borderColor = 'gray.200';
  const buttonHoverBg = '#F0F0F0';

  return (
    <>
      {/* Contact Number Bar */}
      <Box w="full" bg="#37A169" position="sticky" top="0" zIndex="1000" color="white" py={{ base: 0.5, md: 2 }} textAlign="center" fontSize="xs" lineHeight={{ base: 'normal', md: '1.5' }} display={{ base: 'block', md: 'flex' }} alignItems="center">
        <Flex display={{ base: 'none', md: 'flex' }} justify="center" align="center" flex={1}>
          <Link href="https://wa.me/447404969774" color="white" target="_blank" rel="noopener noreferrer">Contact Us: +44 (0)7404 969 774</Link> <Box as="span" mx={1}>|</Box> <Link href="mailto:info@gcsedoctor.co.uk" color="white" _hover={{ textDecoration: 'underline' }}>info@gcsedoctor.co.uk</Link>
        </Flex>
        <Flex display='flex' align="center" justify="space-between" px={2}>
          <Flex align="center" display={{ base: 'flex', md: 'none' }}>
            <Link href="https://wa.me/447404969774" color="white" target="_blank" rel="noopener noreferrer" mx={2} borderRightWidth={1} borderColor="gray.300" pr={2}>
              <IconButton aria-label="WhatsApp" icon={<PhoneIcon boxSize={5} />} variant="ghost" _hover={{ bg: 'transparent' }} _active={{ bg: 'transparent' }} _focus={{ boxShadow: 'none' }} color="white" fontSize="lg"/>
            </Link>
            <Link href="mailto:info@gcsedoctor.co.uk" color="white" target="_blank" rel="noopener noreferrer" mx={2} borderRightWidth={1} borderColor="gray.300" pr={2}>
              <IconButton aria-label="Email" icon={<EmailIcon boxSize={5} />} variant="ghost" _hover={{ bg: 'transparent' }} _active={{ bg: 'transparent' }} _focus={{ boxShadow: 'none' }} color="white" fontSize="lg"/>
            </Link>
          </Flex>
        </Flex>
      </Box>

      {/* Main Navbar */}
      <Box>
        <Flex
          bg={bgColor}
          color={textColor}
          minH={'50px'} // Reduced height
          py={1} // Reduced vertical padding
          px={4}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={borderColor}
          align={'center'}
          justify={'space-between'}
        >
          <Flex justify="flex-start" flex={1}>
            <a href="/">
              <Image
                src="/images/logo.svg"
                h="45px" // Slightly reduced height for better spacing
                objectFit="contain"
                alt="Logo"
              />
            </a>
          </Flex>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav buttonHoverBg={buttonHoverBg} />
          </Flex>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={5} h={5} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
            display={{ base: 'flex', md: 'none' }}
          />
        </Flex>

        {/* Mobile menu */}
        <Collapse in={isOpen} animateOpacity>
          <Box display={{ base: 'block', md: 'none' }}>
            <MobileNav buttonHoverBg={buttonHoverBg} />
          </Box>
        </Collapse>
      </Box>
    </>
  );
}

const DesktopNav = ({ buttonHoverBg }: DesktopNavProps) => {
  return (
    <Stack fontSize={'sm'} direction={'row'} spacing={1.2} alignItems="center">
      <NavItem label="Tutors" href="/tutors" />
      <NavItem label="Reviews" href="/reviews" />
      <NavItem label="About" href="https://articles.gcsedoctor.co.uk/about/" />
      <Box as='span' mr={4}><NavItem label="Fees" href="https://www.gcsedoctor.co.uk/#pricing" /></Box>
      <NavItem label="📚 Articles" href="https://articles.gcsedoctor.co.uk" isButton buttonHoverBg={buttonHoverBg} />
      <Button as={'a'} fontSize={'sm'} fontWeight={600} color={'white'} bg={'green.500'} px={4} py={2} ml={6} href='/bookings'>Sign Up</Button>
    </Stack>
  );
};

const MobileNav = ({ buttonHoverBg }: MobileNavProps) => {
  return (
    <Stack direction="column" align="flex-start" bg="white" p={3} pt={1} pb={1} spacing={1.5} w="100%" divider={<Divider borderColor='gray.500' />}>
      <NavItem label="Tutors" href="/tutors" />
      <NavItem label="Reviews" href="/reviews" />
      <NavItem label="About" href="https://articles.gcsedoctor.co.uk/about/" />
      <NavItem label="Fees" href="https://www.gcsedoctor.co.uk/#pricing" />
      <NavItem label="Articles" href="https://articles.gcsedoctor.co.uk" isMobile />
    </Stack>
  );
};

const NavItem = ({ label, href, isButton, isMobile, buttonHoverBg }: NavItemProps) => {
  return (
    <Link
      href={href}
      px={4}
      py={2}
      borderRadius={4}
      bg={isButton ? 'white' : 'transparent'}
      color={isButton ? '#37A169' : 'gray.600'}
      border={isButton ? '2px solid #37A169' : 'none'}
      fontWeight={600}
      whiteSpace={'nowrap'}
      textAlign="center"
      _hover={{
        textDecoration: 'none',
        bg: isButton && buttonHoverBg ? buttonHoverBg : 'gray.100',
      }}
      target={isMobile && isButton ? '_blank' : undefined}
      rel={isMobile && isButton ? 'noopener noreferrer' : undefined}
    >
      {label}
    </Link>
  );
};
