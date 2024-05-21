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
    return (
        <Container maxW={'7xl'}>
            <Stack
                align={'center'}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 20, md: 28 }}
                direction={{ base: 'column', md: 'row' }}>
                <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                    <Heading
                        lineHeight={1.1}
                        fontWeight={600}
                        fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}>
                        <Text
                            as={'span'}
                            position={'relative'}
                            _after={{
                                content: "''",
                                width: 'full',
                                height: '20%',
                                position: 'absolute',
                                bottom: 1,
                                left: 0,
                                bg: 'green.500',
                                zIndex: -1,
                            }}>
                            GCSE & A-Level Tuition
                        </Text>
                        <br />
                        <Text as={'span'} color={'green.500'}>
                            with Qualified Doctors!
                        </Text>
                    </Heading>
                    <Text color={'gray.600'} fontSize={'xl'}>
                        Personalised Online Group Classes in <Text as="span" fontWeight="bold">Science & Maths for Year 7 to 13 by top London & Oxbridge Graduates.</Text> Affordable Rates, Small Class Sizes, and Medical School Mentorship.
                    </Text>
                    <Stack
                        spacing={{ base: 4, sm: 6 }}
                        direction={{ base: 'column', sm: 'row' }}>
                        <Stack direction={{ base: 'column-reverse', sm: 'row' }}>
                            <Stack direction={'column'} textAlign="center">
                                <Button as={"a"} href="https://gcsedoctor.co.uk/bookings"
                                    rounded={'full'}
                                    size={'lg'}
                                    fontWeight={'normal'}
                                    px={6}
                                    colorScheme={'green'}
                                    bg={'green.500'}
                                    _hover={{ bg: 'green.600' }}>
                                    Sign Up
                                </Button>
                                <Text fontSize={'lg'}>
                                    <Highlight query={remainingDays === 7 ? 'Next Lesson today! Join now.' : `Next Lesson in ${remainingDays} day${remainingDays !== 1 ? 's' : ''}! Sign up now.`} styles={{ px: '2', rounded: '2', bg: 'rgba(224, 90, 82, 0.4)' }}>
                                        {remainingDays === 7
                                            ? 'Next Lesson today! Join now.'
                                            : `Next Lesson in ${remainingDays} day${remainingDays !== 1 ? 's' : ''}! Sign up now.`}
                                    </Highlight>
                                </Text>
                            </Stack>
                            <Box textAlign={{ base: 'center', sm: 'unset' }}>
                                <Text fontSize={'lg'} transform={'rotate(10deg)'} marginBottom={{ base: 7, sm: 'none' }}>
                                    <Text as="span" fontWeight="bold">£15</Text> per hour
                                </Text>
                                <Icon
                                    as={Arrow}
                                    color={useColorModeValue('gray.800', 'gray.300')}
                                    w={71}
                                    marginTop={{ base: -2, sm: -10 }}
                                    marginBottom={{ base: 5, sm: 'none' }}
                                    transform={{ base: 'rotate(-90deg)', sm: 'none' }} 
                                />
                            </Box>
                        </Stack>
                    </Stack>
                </Stack>
                <Flex
                    flex={1}
                    justify={'center'}
                    align={'center'}
                    position={'relative'}
                    w={'full'}>
                    <Box
                        position={'relative'}
                        height={'full'}
                        rounded={'2xl'}
                        boxShadow={'2xl'}
                        width={'full'}
                        overflow={'hidden'}>
                        <Image
                            alt={'Affordable GCSE Science Tuition'}
                            fit={'cover'}
                            align={'center'}
                            w={'100%'}
                            h={'100%'}
                            src={
                                '/images/lesson.svg'
                            }
                        />
                    </Box>
                </Flex>
            </Stack>
            <Stack align={'center'} mb={6}>
                <Heading mt={6} as="h3" size="lg" textAlign="center">Elite Educators from Leading Universities</Heading>
            </Stack>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={6} alignItems="center" justifyItems="center" mt={6} mb={106}>
                <Image src="/images/icl_logo.png" alt="Imperial College" width="200px" height="55px" />
                <Image src="/images/ucl_logo.png" alt="UCL" width="200px" height="55px" />
                <Image src="/images/cambridge_logo.png" alt="Cambridge" width="200px" height="70px" />
                <Image src="/images/oxford_logo.png" alt="Oxford" width="200px" height="55px" />
            </SimpleGrid>
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
