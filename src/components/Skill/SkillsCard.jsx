import React, { cloneElement } from 'react';
import { Box, Text, VStack } from '@chakra-ui/react';
import { stackColors } from '../../constants/skills';

const SkillsCard = ({ name, icon }) => (
  <VStack
    spacing={5}
    p={5}
    bgColor="gray.800"
    _hover={{
      transform: 'scale(1.08)',
      color: stackColors[name]
    }}
    borderRadius={8}
    minW={[20, 50, 70]}
  >
    <Box>
      {cloneElement(icon, { size: 45 }) }
    </Box>
    <Text>{name}</Text>
  </VStack>
);

export default SkillsCard;
