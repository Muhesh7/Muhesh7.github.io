import React from 'react';
import {
  HStack, Text, Wrap, Badge
} from '@chakra-ui/react';

const ExperienceContent = ({ name, type }) => (
  <HStack b={0} px={3} pb={4} w="100%">
    <Text
      isExternal
      fontWeight={900}
      flex={2}
      fontSize={['10', '11', '12']}
    >
      {name}
    </Text>
    <Wrap>
      <Badge
        align="end"
        fontSize={['9', '10', '11']}
      >
        {type}
      </Badge>
    </Wrap>
  </HStack>
);

export default ExperienceContent;
