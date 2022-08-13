import React from 'react';
import {
  Heading, ListItem, HStack, ListIcon, Text
} from '@chakra-ui/react';
import { MdOutlineArrowRightAlt } from 'react-icons/md';

const DrawerDescription = ({ description }) => (
  <>
    <Heading mb={2} size="sm">Description</Heading>
    {description.map((desc) => (
      <ListItem key={desc}>
        <HStack>
          <ListIcon mt={2} alignSelf="start" as={MdOutlineArrowRightAlt} color="white" />
          <Text key={desc} py={1}>{desc}</Text>
        </HStack>
      </ListItem>
    ))}
  </>
);

export default DrawerDescription;
