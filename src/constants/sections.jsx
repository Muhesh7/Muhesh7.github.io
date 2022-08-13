import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { RiContactsBook2Fill, RiMedal2Fill } from 'react-icons/ri';
import { MdWork, MdSchool } from 'react-icons/md';
import { SiLibrariesdotio } from 'react-icons/si';
import Experience from '../containers/Experience';
import About from '../containers/About';
import Skills from '../containers/Skills';
import Projects from '../containers/Project';
import Contact from '../containers/Contact';
import Education from '../containers/Education';

export const sections = [
  {
    id: 'about',
    component: <About />,
    icon: <AiFillHome />
  },
  {
    id: 'experience',
    component: <Experience />,
    icon: <MdWork />
  },
  {
    id: 'projects',
    component: <Projects />,
    icon: <SiLibrariesdotio />
  },
  {
    id: 'education',
    component: <Education />,
    icon: <MdSchool />
  },
  {
    id: 'skills',
    component: <Skills />,
    icon: <RiMedal2Fill />
  },
  {
    id: 'contact',
    component: <Contact />,
    icon: <RiContactsBook2Fill />
  }
];
