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
    IconButton,
    createIcon,
    IconProps,
    useColorModeValue,
    Highlight
  } from '@chakra-ui/react';

  const NextLesson = () => {
      // Calculate remaining days until the next lesson
      const nextLessonDate = new Date('May 20, 2023'); // Replace with your actual next lesson date
      const today = new Date();
      const timeDiff = nextLessonDate.getTime() - today.getTime();
      const remainingDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

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
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
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
                Get GCSE Tuition &
              </Text>
              <br />
              <Text as={'span'} color={'green.500'}>
                we mark your papers for free!
              </Text>
            </Heading>
            <Text color={'gray.500'}>
              Group Science <Text as="span" fontWeight="bold"> GCSE Tuition with Dr Rashid </Text> at a fraction of the cost. After each lesson you will 
              receive a question bank as well as <Text as="span" fontWeight="bold"> marked feedback, at no extra cost to you! </Text>
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: 'column', sm: 'row' }}>
            <Stack direction={{ base: 'column-reverse', sm: 'row' }}>
              <Stack direction={'column'} textAlign="center">
              <Button as={"a"} href="https://calendly.com/imperialtutors" target="_blank"
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                colorScheme={'green'}
                bg={'green.500'}
                _hover={{ bg: 'green.600' }}>
                  Book Now!
              </Button>
              <text fontSize={'sm'}> 
              <Highlight   query={remainingDays === 0 ? 'Next Lesson today!' : `Next Lesson in ${remainingDays} day${remainingDays !== 1 ? 's' : ''}!`} styles={{ px: '2', rounded: '2', bg: 'rgba(224, 90, 82, 0.4)' }}> 
              {remainingDays === 0
                ? 'Next Lesson today!'
                : [`Next Lesson in ${remainingDays} day${remainingDays !== 1 ? 's' : ''}!`].join('')}
              </Highlight>
              </text>
              </Stack>
              <Box textAlign={{ base: 'center', sm: 'unset' }}> 
                <Text fontSize={'lg'} transform={'rotate(10deg)'} marginBottom={{ base: 7, sm: 'none' }}>
                  At £15 per lesson
                </Text>
                <Icon
                  as={Arrow}
                  color={useColorModeValue('gray.800', 'gray.300')}
                  w={71}
                  marginTop={{ base: -2, sm: -10 }}
                  marginBottom={{ base: 5, sm: 'none' }}
                  transform={{ base: 'rotate(-90deg)', sm: 'none' }} // Apply rotation of 90 degrees on smaller screens
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
            w={'full'}
            >
            <Box
              position={'relative'}
              height={'full'}
              rounded={'2xl'}
              boxShadow={'2xl'}
              width={'full'}
              overflow={'hidden'}>
              <Image
                alt={'Hero Image'}
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
  
  export const Blob = (props: IconProps) => {
    return (
      <Icon
        width={'100%'}
        viewBox="0 0 578 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
          fill="currentColor"
        />
      </Icon>
    );
  };