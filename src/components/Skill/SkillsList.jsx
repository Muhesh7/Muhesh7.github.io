import React from 'react';
import { List } from '@chakra-ui/react';
import { languages, techstacks } from '../../constants/skills';
import SkillsItem from './SkillsItem';

const SkillsList = () => (
  <List>
    <SkillsItem title="Languages" content={languages} />
    <SkillsItem title="Tech-Stacks" content={techstacks} />
  </List>
);

export default SkillsList;
