import React from 'react';
import {
  Box, Stack, VStack
} from '@chakra-ui/react';
import Content from '../components/About/Content';
import Header, { APPBAR_SIZE } from '../components/About/Header';
import ProfilePic from '../components/About/ProfilePic';

const About = () => (
  <VStack
    bgColor="gray.900"
  >
    <Header flex={1} />
    <Stack
      h="calc(100vh - 70px)"
      p={2}
      spacing={0}
      flexDirection={['column-reverse', 'column-reverse', 'row', 'row']}
    >
      <Content />

      <ProfilePic />
    </Stack>
    <Box h={APPBAR_SIZE} />
  </VStack>
);

export default About;
