import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  List,
  DrawerOverlay
} from '@chakra-ui/react';
import DrawerTop from '../components/Drawer/DrawerTop';
import DrawerBottom from '../components/Drawer/DrawerBottom';
import DrawerDescription from '../components/Drawer/DrawerDescription';

const DrawerHoc = (ChildComponent) => {
  const WrappedComponent = ({
    isOpen, onClose, contents, selected
  }) => (
    <Drawer
      overflowX="hidden"
      w="100%"
      placement="bottom"
      isOpen={isOpen}
      onClose={onClose}
    >
      <DrawerOverlay />
      <DrawerContent color="white" bgColor="gray.800">
        <DrawerTop
          title={contents[selected].role ?? contents[selected].name}
          subtitle={contents[selected].timeline ?? contents[selected].name}
        />
        <DrawerBody my={2}>
          <List>
            <DrawerDescription description={contents[selected].description} />
            {ChildComponent !== null ? (
              <ChildComponent
                stack={contents[selected].stack}
                lang={contents[selected].lang}
              />
            ) : null}
          </List>
        </DrawerBody>
        <DrawerBottom
          link={contents[selected].link}
          img={contents[selected].logo}
          onClose={onClose}
        />
      </DrawerContent>
    </Drawer>
  );

  return WrappedComponent;
};

export default DrawerHoc;
