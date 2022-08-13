import React, { cloneElement } from 'react';
import {
  VStack, Heading, Divider, SimpleGrid, HStack, Text, Link
} from '@chakra-ui/react';
import ContactIcons from '../components/Contact/ContactIcons';
import { techstacks } from '../constants/skills';

const Contact = () => (
  <>
    <Divider mt={0} />
    <VStack
      color="white"
      spacing={5}
      bgColor="gray.800"
      py={10}
      minH={[320, 315, 310]}
    >
      <Heading px={10} pb={5} alignSelf="start">
        Contact
      </Heading>
      <SimpleGrid
        py={5}
        spacing={3}
        columns={[2, 2, 3]}
        flex={1}
        w="100%"
      >
        <ContactIcons />
      </SimpleGrid>
      <HStack color="white">
        <Text>
          Made with
        </Text>
        <Link
          href="https://muhesh7.github.io"
          animation="spin 4s infinite linear"
          cursor="pointer"

        >
          {cloneElement(techstacks.React, { size: 25, color: 'cyan' })}
        </Link>
        <Text>
          by Muhesh
        </Text>
      </HStack>
    </VStack>
  </>
);

export default Contact;
