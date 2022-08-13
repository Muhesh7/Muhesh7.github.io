import React from 'react';
import { Box } from '@chakra-ui/react';
import { experiences } from '../constants/experiences';
import SectionHoc from '../hocs/SectionHoc';
import ExperienceCard from '../components/Experience/ExperienceCard';

const Experience = () => {
  const ExperienceSection = SectionHoc(ExperienceCard);
  return (
    <ExperienceSection
      title="Experiences"
      stackComponent={Box}
      contents={experiences}
    />
  );
};

export default Experience;
