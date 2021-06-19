import React, { useState, useEffect } from 'react';

import { Container, ChooseProfile } from './styles';

import Profile from '../Profile';
import { userApi } from '../../services/api';

type ProfileProps = {
  id: string;
  name: string;
  avatar: string;
};

const ProfileList: React.FC = () => {
  const [profiles, setProfiles] = useState<ProfileProps[]>([]);
  
  useEffect(() => {
    if (profiles.length === 0) {
      Promise.all([userApi.get('users')])
        .then(([{ data }]) => {
          setProfiles(data);
        })
          .catch(err => {
            console.log(err);
          });
    }
  }, [profiles]);

  return (
    <Container>
      <h1>Quem está assistindo?</h1>

      <ChooseProfile>

        {profiles.map(profile => {
          return (
            <Profile 
              key={profile.id} 
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
