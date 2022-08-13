import React from 'react';
import {
  Container, Divider, Heading, VStack
} from '@chakra-ui/react';

const Content = () => (
  <VStack
    flex={1}
    spacing={3}
    align="start"
    justifyContent={['top', 'top', 'top', 'center']}
    my="auto"
    mx="auto"
    py={10}
    px="20"
  >
    <Heading color="cyan.600" size={['12', '11', '10', '18']}>Hello Everyone, I am</Heading>
    <Heading color="white" size={['2xl', '2xl', '2xl', '4xl']}>Muhesh K</Heading>
    <Divider w={['80%', '80%', '50%', 500]} />
    <Heading color="gray.200" size={['lg', 'lg', 'lg', '2xl']} fontWeight={400}>Software Developer</Heading>
    <Container px={0} fontSize={['13', '14', '15', '18']} textColor="cyan.200">
      Just a kid who loves coding, problem-solving, and exploring
      new technologies with a daily goal of self-improvement
      from what I was yesterday by at least one percent.
    </Container>
  </VStack>
);

export default Content;
