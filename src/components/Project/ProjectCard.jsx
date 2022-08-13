import React from 'react';
import {
  Box, Heading, Text, Divider, VStack
} from '@chakra-ui/react';
import { languages, techstacks } from '../../constants/skills';
import ProjectStacks from './ProjectStacks';

const ProjectCard = ({ content }) => (
  <>
    <Heading
      my={1}
      px={6}
      pt={3}
      fontSize={['18', '20', '22']}
    >
      {content.name}
    </Heading>
    <Text
      px={6}
      py={2}
      fontWeight={400}
      fontSize={['10', '12', '13']}
    >
      {content.timeline}
    </Text>
    <Divider minW="100%" borderColor="cyan.900" borderWidth={1} />
    <VStack align="start" h="100%" justifyContent="space-around">
      <ProjectStacks
        map={techstacks}
        title="TechStacks"
        content={content.stack}
      />
      <ProjectStacks
        map={languages}
        title="Languages"
        content={content.lang}
      />
    </VStack>
    <Box h={3} />
  </>
);

export default ProjectCard;
