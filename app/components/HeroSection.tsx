"use client"

import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    Icon,
    createIcon,
    IconProps,
    useColorModeValue,
    Highlight,
    SimpleGrid
} from '@chakra-ui/react';

import { useEffect, useState } from 'react';

const NextLesson = () => {
    const today = new Date();
    const todayDayOfWeek = today.getDay();
    let remainingDays;

    if (todayDayOfWeek === 6) {
        remainingDays = 7;
    } else {
        remainingDays = 6 - todayDayOfWeek;
    }

    return remainingDays;
};
export default function CallToActionWithVideo() {
    const remainingDays = NextLesson();
    useEffect(() => {
        if (!document.getElementById('elfsight-platform-script')) {
            const script = document.createElement('script');
            script.id = 'elfsight-platform-script';
            script.src = 'https://static.elfsight.com/platform/platform.js';
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);
    return (
        <Container maxW={'7xl'} py={{ base: 12, md: 24 }}>
            <Flex direction={{ base: 'column-reverse', md: 'row' }} align="center" justify="center" minH={{ base: '60vh', md: '70vh' }}>
                <Box flex={1} display="flex" flexDirection="column" alignItems={{ base: 'center', md: 'flex-start' }} justifyContent="center" zIndex={2}>
                    <Heading as="h1" fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }} fontWeight="extrabold" color="#1a202c" mb={4} lineHeight="1.1" letterSpacing="-1px" textAlign={{ base: 'center', md: 'left' }}>
                        GCSE Science Tuition <br />
                        <Text as="span" color="#37a169">That Delivers Results</Text>
                    </Heading>
                    <Text fontSize={{ base: 'lg', md: '2xl' }} color="gray.700" mb={6} maxW="lg" textAlign={{ base: 'center', md: 'left' }}>
                        Small groups. World-class tutors. Proven exam strategies.
                        Join 100+ ambitious students who've transformed their grades with GCSE Doctor.
                    </Text>
                    {/* Elfsight Google Reviews Badge */}
                    <Box mb={8} w="100%" display="flex" justifyContent={{ base: 'center', md: 'flex-start' }}>
                        <div className="elfsight-app-d1978448-1896-4951-9a43-f46b4a978a71" data-elfsight-app-lazy></div>
                    </Box>
                    <Stack direction={{ base: 'column', sm: 'row' }} spacing={4} mb={6} w={{ base: '100%', sm: 'auto' }} justify={{ base: 'center', md: 'flex-start' }}>
                        <Button as="a" href="/bookings" size="lg" colorScheme="green" bg="#37a169" _hover={{ bg: '#2e855d' }} fontWeight="bold" borderRadius="xl" px={8} py={6} boxShadow="xl">
                            Book a Place
                        </Button>
                        <Button as="a" href="#how-it-works" size="lg" variant="outline" color="#37a169" borderColor="#37a169" _hover={{ bg: 'gray.50', borderColor: '#2e855d', color: '#2e855d' }} borderRadius="xl" px={8} py={6}>
                            How it Works
                        </Button>
                    </Stack>
                </Box>
                <Box flex={1} display="flex" alignItems="center" justifyContent="center" mt={{ base: 10, md: 0 }}>
                    <Image
                        src="/images/hero image science.png"
                        alt="GCSE Science Hero"
                        w={{ base: '100%', md: '80%' }}
                        maxW={{ base: '320px', md: '340px', lg: '400px' }}
                        objectFit="contain"
                        borderRadius="2xl"
                        boxShadow="none"
                    />
                </Box>
            </Flex>
            <Box mt={12} mb={4} px={{ base: 2, md: 8 }}>
                <Box
                    bg="transparent"
                    borderRadius="none"
                    boxShadow="none"
                    py={{ base: 6, md: 10 }}
                    px={{ base: 4, md: 12 }}
                    textAlign="center"
                    maxW="100%"
                    mx="auto"
                >
                    <Heading as="h2" fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" mb={2} color="#1a202c">
                        Elite Educators from Top UK Universities
                    </Heading>
                    <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.700" mb={6}>
                        Learn from tutors who have studied at the UK's most prestigious universities. Our team brings real expertise and a passion for helping students achieve their best.
                    </Text>
                    <Flex justify="center" align="center" gap={{ base: 8, md: 16 }} wrap="wrap" mt={2}>
                        <Image src="/images/cambridge_logo.png" alt="Cambridge" maxH="64px" maxW="180px" objectFit="contain" />
                        <Image src="/images/oxford_logo.png" alt="Oxford" maxH="64px" maxW="180px" objectFit="contain" />
                        <Image src="/images/ucl_logo.png" alt="UCL" maxH="64px" maxW="180px" objectFit="contain" />
                        <Image src="/images/icl_logo.png" alt="Imperial College London" maxH="64px" maxW="180px" objectFit="contain" />
                    </Flex>
                </Box>
            </Box>
        </Container>
    );
}

const Arrow = createIcon({
    displayName: 'Arrow',
    viewBox: '0 0 72 24',
    path: (
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z"
            fill="currentColor"
        />
    ),
});
