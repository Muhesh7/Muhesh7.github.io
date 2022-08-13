import React from 'react';
import {
  DrawerFooter, HStack, Link, Button, Stack, Wrap, Avatar
} from '@chakra-ui/react';
import { RiExternalLinkFill } from 'react-icons/ri';

const DrawerBottom = ({ link, img, onClose }) => (
  <DrawerFooter>
    <Wrap spacing={5} w="100%" align="start | bottom">
      {img !== undefined ? <Avatar src={img} /> : null}
      {Object.keys(link).map((l) => (
        <HStack key={l} spacing={1}>
          <Link href={link[l]} isExternal>
            {l}
          </Link>
          <RiExternalLinkFill />
        </HStack>
      ))}
      <Stack flex={1} align="end">
        <Button variant="ghost" onClick={onClose}>
          Close
        </Button>
      </Stack>
    </Wrap>
  </DrawerFooter>
);

export default DrawerBottom;
