'use client'

import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
    Image, // Add Image import
  } from '@chakra-ui/react'
  import { FaInstagram, FaTwitter, FaYoutube, FaTiktok} from 'react-icons/fa'
  import { ReactNode } from 'react'

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode
  label: string
  href: string
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      target="_blank"
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function Footer() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          spacing={4}
          justify={'center'}
          align={'center'}>
          <Image
            src="/images/logo-bg-removed.png" // Provide the correct path to your image
            h="50px"
            marginLeft={2}
            objectFit="contain"
          />
          <Stack direction={'row'} spacing={6}>
            <Box as="a" href={'https://articles.gcsedoctor.co.uk/about/'}>
              About
            </Box>
            <Box as="a" href={'/reviews'}>
              Reviews
            </Box>
            <Box as="a" href={'https://gcsedoctor.co.uk/#pricing'}>
              Fees
            </Box>
            <Box as="a" href={'https://articles.gcsedoctor.co.uk/terms-of-service/'}>
              Terms
            </Box>
          </Stack>
        </Container>
  
        <Box
          borderTopWidth={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}>
          <Container
            as={Stack}
            maxW={'6xl'}
            py={4}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ base: 'center', md: 'space-between' }}
            align={{ base: 'center', md: 'center' }}>
            <Text>Contact: <strong>info@gcsedoctor.co.uk</strong></Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Tiktok'} href={'https://www.tiktok.com/@gcse.doctor'}>
                <FaTiktok />
              </SocialButton>
            </Stack>
          </Container>
        </Box>
      </Box>
    )
  }