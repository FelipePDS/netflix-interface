import React from 'react';

import { Container, ProfileManageButton } from './styles';

import ProfileList from '../ProfileList/';

const ProfileControl: React.FC = () => {
  return (
    <Container>
      <ProfileList />

      <ProfileManageButton>
        <button type="button">Gerenciar Perfis</button>
      </ProfileManageButton>
    </Container>
  );
}

export default ProfileControl;
