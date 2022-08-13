import React, { cloneElement } from 'react';
import { HStack, Tooltip, Box } from '@chakra-ui/react';
import { stackColors } from '../../constants/skills';

const TechCard = ({ list, map }) => (
  <HStack
    spacing={5}
    justifyContent="start"
    px={2}
    pb={2}
  >
    {
      list.map((s) => (
        <Tooltip
          key={s}
          label={s}
          aria-label="A tooltip"
        >
          <Box _hover={{ color: stackColors[s] }}>
            {cloneElement(map[s], { size: 35 })}
          </Box>
        </Tooltip>
      ))
    }
  </HStack>
);

export default TechCard;
