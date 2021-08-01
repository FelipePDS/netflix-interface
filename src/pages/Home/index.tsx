import React from 'react';

import { LoadProfileList } from '../../utils/profileUtil';

import { Container } from './styles';

import MenuTop from '../../components/MenuTop/';
import ProfileControl from '../../components/ProfileControl/';

const Home: React.FC = () => {
  LoadProfileList();

  return (
    <Container>
      <MenuTop />

      <ProfileControl />
    </Container>
  );
};

export default Home;
