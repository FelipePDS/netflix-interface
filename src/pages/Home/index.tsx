import React, { useContext } from 'react';

import { ProfileContext } from '../../context/ProfileContext';
import { UpdateProfileList } from '../../utils/profileUtil';

import { Container } from './styles';

import MenuTop from '../../components/MenuTop/';
import ProfileControl from '../../components/ProfileControl/';

const Home: React.FC = () => {
  const { profileList } = useContext(ProfileContext);

  UpdateProfileList(profileList);

  return (
    <Container>
      <MenuTop />

      <ProfileControl />
    </Container>
  );
};

export default Home;
