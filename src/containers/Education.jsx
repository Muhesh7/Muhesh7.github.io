import {
  Box, Heading, List
} from '@chakra-ui/react';
import React from 'react';
import EducationCard from '../components/Education/EducationCard';
import { educations } from '../constants/educations';

const Education = () => (
  <Box
    w="100%"
    px={10}
    py={10}
    color="white"
    bgColor="gray.900"
  >
    <Heading py={5} color="white">Education</Heading>
    <List color="white">
      {educations.map((edu) => (
        <EducationCard edu={edu} />
      ))}
    </List>
  </Box>
);

export default Education;
