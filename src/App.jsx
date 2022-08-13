import React, { useEffect } from 'react';
import './App.css';
import { ChakraProvider, VStack, Stack } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { sections } from './constants/sections';
import Nav from './components/Nav';
import { selectSection } from './redux/actions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    function throttle(callbackFn, limit) {
      let wait = false;
      return function cb() {
        if (!wait) {
          callbackFn.call();
          wait = true;
          setTimeout(() => {
            wait = false;
          }, limit);
        }
      };
    }

    const isScrolledIntoView = () => {
      sections.forEach((e, index) => {
        const el = document.getElementById(e.id);
        const rect = el.getBoundingClientRect();
        const elemTop = rect.top;
        const elemBottom = rect.bottom;
        const isVisible = elemTop < window.innerHeight && elemBottom >= 0;
        if (isVisible) {
          dispatch(selectSection(index));
        }
      });
    };

    window.addEventListener('scroll', throttle(isScrolledIntoView, 50));
  }, []);
  return (
    <ChakraProvider>
      <Stack bgColor="gray.800">
        <VStack overflowX="hidden">
          {
            sections.map((e) => (
              <section key={e.id} id={e.id}>
                {e.component}
              </section>
            ))
          }
        </VStack>
        <Nav />
      </Stack>
    </ChakraProvider>
  );
};

export default App;
