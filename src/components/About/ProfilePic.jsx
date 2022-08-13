import React from 'react';
import { Image, Box } from '@chakra-ui/react';

const ProfilePic = () => (
  <Box
    justifyContent="center"
    display="flex"
    flex={1}
  >
    <Image
      m="auto"
      borderWidth={10}
      h={['40vh', '40vh', '35vw', '30vw']}
      src="assets/muhesh.jpeg"
      borderRadius="50%"
    />
  </Box>

);

export default ProfilePic;
