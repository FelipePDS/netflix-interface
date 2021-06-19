import React from 'react';

import { Container } from './styles';

import MenuTopHome from '../../components/MenuTopHome/';
import ProfileControl from '../../components/ProfileControl/';

const Home: React.FC = () => {
  return (
    <Container>
      <MenuTopHome />

      <ProfileControl />
    </Container>
  );
};

export default Home;
