import React, { useState } from 'react';
import {
  useDisclosure, Box, Heading, SimpleGrid, VStack
} from '@chakra-ui/react';

import DrawerHoc from './DrawerHoc';

const SectionHoc = (ChildComponent) => {
  const WrappedComponent = ({ title, contents, stackComponent }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selected, setSelected] = useState(0);
    const DetailsDrawer = DrawerHoc(stackComponent);
    return (
      <>
        <Box
          px={10}
          py={10}
          bgColor="gray.900"
        >
          <Heading py={5} color="white">{title}</Heading>
          <SimpleGrid
            minChildWidth={230}
            spacing={20}
            mx={[0, 0, 50, 50]}
            px="auto"
            py={10}
            color="white"
          >
            {contents.map((content, index) => (
              <VStack
                key={content.name}
                bgColor="gray.800"
                boxShadow="dark-lg"
                borderRadius={10}
                borderWidth={1.75}
                onClick={() => { setSelected(index); onOpen(); }}
                zIndex={0}
                cursor="pointer"
                justifyContent="space-betwenn"
                spacing={1}
                h="full"
                w={255}
                align="start"
                _hover={{
                  zIndex: 1,
                  transform: 'scale(1.025)',
                  boxShadow: '0 0 2px 2px navy'
                }}
                mx="auto"
                borderColor="cyan.900"
              >
                <ChildComponent content={content} />
              </VStack>
            ))}
          </SimpleGrid>
        </Box>
        <DetailsDrawer
          contents={contents}
          selected={selected}
          onClose={onClose}
          isOpen={isOpen}
        />
      </>
    );
  };

  return WrappedComponent;
};

export default SectionHoc;
