import React, { cloneElement } from 'react';
import {
  Center, HStack, Link, Text, VStack
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { sections } from '../constants/sections';
import { selectSection } from '../redux/actions';

const Nav = () => {
  const { section } = useSelector((state) => state.sectionReducer);
  const dispatch = useDispatch();

  return (
    <Center
      pos="sticky"
      overflowX="hidden"
      w="100%"
      zIndex={5}
      bottom={5}
      justifyContent="center"
    >
      <HStack
        px={8}
        py={2}
        my={[5, 5, 0]}
        spacing={8}
        justifyContent="space-between"
        backgroundColor="rgba(52, 163, 238, 0.23)"
        borderRadius={16}
      >
        {
          sections.map((e, index) => (
            <VStack key={e.id} spacing={1}>
              <Link
                href={`#${e.id}`}
                onClick={() => {
                  dispatch(selectSection(index));
                }}
                flex={1}
              >
                {cloneElement(e.icon, {
                  color: section === index ? 'cyan' : 'white',
                  size: section === index ? 23 : 20
                }) }
              </Link>
              {section === index ? (
                <Text color="cyan" fontSize={12}>
                  {e.id.charAt(0).toUpperCase() + e.id.slice(1)}
                </Text>
              ) : null}
            </VStack>
          ))
        }
      </HStack>
    </Center>
  );
};

export default Nav;
