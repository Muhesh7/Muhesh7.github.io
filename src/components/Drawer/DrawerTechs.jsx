import React from 'react';
import { Heading, VStack } from '@chakra-ui/react';
import { languages, techstacks } from '../../constants/skills';
import TechCard from './TechCard';

const DrawerTechs = ({ lang, stack }) => (
  <VStack spacing={5} align="start">
    <Heading size="sm" py={3}>Tech-Stack</Heading>
    <TechCard list={stack} map={techstacks} />
    <TechCard list={lang} map={languages} />
  </VStack>
);

export default DrawerTechs;
