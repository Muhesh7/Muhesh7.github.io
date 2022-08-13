import React from 'react';
import {
  SimpleGrid, Heading, ListItem, ListIcon, HStack
} from '@chakra-ui/react';
import { MdOutlineArrowRightAlt } from 'react-icons/md';
import SkillsCard from './SkillsCard';

const SkillsItem = ({ title, content }) => (
  <ListItem>
    <HStack>
      <ListIcon as={MdOutlineArrowRightAlt} color="white" />
      <Heading mb={10} size="md">{title}</Heading>
    </HStack>
    <SimpleGrid py={10} mx={[5, 15, 30]} columns={[1, 2, 3, 4, 5]} spacing={[15, 15, 15, 20]}>
      {
        Object.keys(content).map((k) => (
          <SkillsCard
            key={k}
            name={k}
            icon={content[k]}
          />
        ))
      }
    </SimpleGrid>
  </ListItem>
);

export default SkillsItem;
