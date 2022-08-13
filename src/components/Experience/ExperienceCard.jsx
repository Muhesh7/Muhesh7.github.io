import React from 'react';
import { Image, Heading, Text } from '@chakra-ui/react';
import ExperienceContent from './ExperienceContent';

const ExperienceCard = ({ content }) => (
  <>
    <Image
      w="full"
      h="full"
      bgColor="white"
      borderTopRadius={10}
      src={content.logo}
    />
    <Heading
      h="16"
      px={3}
      pt={3}
      fontSize={['14', '15', '16']}
    >
      {content.role}
    </Heading>
    <Text
      px={3}
      pb={5}
      fontWeight={400}
      fontSize={['10', '12', '13']}
    >
      {content.timeline}
    </Text>
    <ExperienceContent
      name={content.name}
      type={content.type}
      link={content.link}
    />
  </>
);

export default ExperienceCard;
