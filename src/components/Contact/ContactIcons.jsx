import React from 'react';
import {
  HStack, Avatar, Link, Text, Wrap
} from '@chakra-ui/react';
import { icons, iconsColors, iconsLinks } from '../../constants/contacts';

const ContactIcons = () => Object.keys(icons).map((icon) => (
  <Wrap
    key={icon}
    justifySelf="center"
    justifyContent="start"
    p={2}
  >
    <HStack w={125}>
      <Link
        flex={1}
        href={iconsLinks[icon]}
        _hover={{ transform: 'scale(1.2)' }}
      >
        <Avatar color="white" bg={iconsColors[icon]} icon={icons[icon]} />
      </Link>
      <Text flex={1} color="white">{icon}</Text>
    </HStack>
  </Wrap>
));

export default ContactIcons;
