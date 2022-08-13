import React from 'react';
import {
  SiDart, SiDocker, SiGithub, SiGoogle, SiLinkedin
} from 'react-icons/si';
import { MdCall } from 'react-icons/md';

export const icons = {
  LinkedIn: <SiLinkedin />,
  Gmail: <SiGoogle />,
  Github: <SiGithub />,
  Call: <MdCall />,
  'pub.dev': <SiDart />,
  dockerhub: <SiDocker />
};
export const iconsColors = {
  LinkedIn: '#0072b1',
  Gmail: '#EA4335',
  Github: 'black',
  'pub.dev': '#0075BA',
  dockerhub: '#0db7ed'
};

export const iconsLinks = {
  LinkedIn: 'https://www.linkedin.com/in/muhesh/',
  Gmail: 'mailto:mailmuhesh@gmail.com',
  Github: 'https://www.github.com/Muhesh7',
  'pub.dev': 'https://pub.dev/packages/flutter_dauth',
  dockerhub: 'https://hub.docker.com/r/muhesh7/pyspark-sqldb',
  Call: 'tel:+919790546296'
};
