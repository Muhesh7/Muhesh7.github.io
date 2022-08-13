import React from 'react';
import {
  ListItem, VStack, Avatar, Heading, Text, HStack, Divider, Box
} from '@chakra-ui/react';

const EducationCard = ({ edu }) => (
  <ListItem
    borderColor="cyan.800"
    borderRadius={5}
    borderWidth={0.5}
    bgColor="gray.800"
    _hover={{
      zIndex: 1,
      transform: 'scale(1.025)',
      boxShadow: '0 0 2px 2px navy'
    }}
    px={5}
    mx={10}
    my={10}
  >
    <VStack py={5} align="start" flex="1" textAlign="left">
      <HStack align="start">
        <Avatar mt={[2, 1, 0]} src={edu.img} />
        <Heading py={2} size={['vs', 'sm', 'md']}>{edu.name}</Heading>
      </HStack>
      <Divider py={1} />
      <Box />
      <Heading size="vs">
        {edu.type}
        {' | '}
        <Text fontWeight={300} as="span">
          {edu.group}
        </Text>
      </Heading>
      <Text fontWeight={600}>
        {edu.standard}
        {' | '}
        <Text fontWeight={200} as="span">
          {edu.year}
        </Text>
      </Text>
      <Text fontWeight={900}>
        Grade:
        {' '}
        <Text fontWeight={300} as="span">
          {edu.grade}
        </Text>
      </Text>

      <Text fontWeight={900}>
        Achivements:
      </Text>
      <Text>
        {edu.achivement}
      </Text>

    </VStack>
  </ListItem>
);

export default EducationCard;
