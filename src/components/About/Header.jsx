import React from 'react';
import {
  Button, HStack, Link, Image
} from '@chakra-ui/react';

export const APPBAR_SIZE = 69;

const Header = () => (
  <HStack
    h={APPBAR_SIZE}
    w="100%"
    px={12}
    py={10}
    bgColor="gray.900"
    boxShadow="0 0 1px 1px black"
    color="white"
    spacing={10}
  >
    <HStack>
      <Image h={39} w={39} src="favicon.ico" />
    </HStack>
    <Link flex={2} align="end" download="MuheshK_Resume.pdf" href="MuheshK_Resume.pdf">
      <Button
        colorScheme="cyan"
        variant="outline"
      >
        Resume
      </Button>
    </Link>
  </HStack>
);

export default Header;
