import React from 'react';
import { DrawerHeader, Text } from '@chakra-ui/react';

const DrawerTop = ({ title, subtitle }) => (
  <DrawerHeader>
    <>
      {title}
      <Text fontSize={['10', '12', '13']}>
        {' '}
        {subtitle}
      </Text>
    </>
  </DrawerHeader>
);

export default DrawerTop;
