import React, { useContext } from 'react';

import { ProfileContext } from '../../context/ProfileContext';

import Profile from '../Profile';
import { Container, ChooseProfile } from './styles';

const ProfileList: React.FC = () => {
  const { profileList } = useContext(ProfileContext);

  return (
    <Container>
      <h1>Quem está assistindo?</h1>

      <ChooseProfile>

        {profileList.map(profile => {
          return (
            <Profile 
              key={profile.id} 
              profileId={profile.id}
              profileName={profile.name}
              profileAvatar={profile.avatar}
            />
          )
        })}
        
      </ChooseProfile>
    </Container>
  );
};

export default ProfileList;
