import React, { cloneElement } from 'react';
import { Text, Wrap, Box } from '@chakra-ui/react';

const ProjectStacks = ({ map, content, title }) => (
  <Wrap>
    <Text
      px={6}
      fontWeight={300}
      py={3}
      fontSize={['10', '12', '13']}
    >
      {title}
      :
    </Text>
    <Wrap spacing={5} justifyContent="start" px={6} pb={2} w="100%">
      {content.map((s) => (
        <Box key={s}>
          {cloneElement(map[s], { size: 35 })}
        </Box>
      ))}
    </Wrap>
  </Wrap>
);

export default ProjectStacks;
