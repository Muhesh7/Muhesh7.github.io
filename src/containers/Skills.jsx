import React from 'react';
import {
  Heading,
  Box
} from '@chakra-ui/react';
import SkillsList from '../components/Skill/SkillsList';

const Skills = () => (
  <Box
    w="100%"
    px={10}
    py={10}
    color="white"
    bgColor="gray.900"
  >
    <Heading py={5} color="white">Skills</Heading>
    <SkillsList />
  </Box>
);

export default Skills;
