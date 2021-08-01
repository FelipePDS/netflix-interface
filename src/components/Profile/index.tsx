import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProfileContext } from '../../context/ProfileContext';

import { Container, ProfileAvatar } from './styles';

export type Profile = {
  id: string;
  name?: string;
  avatar: string;
};

const ProfileControl: React.FC<Profile> = ({
  id,
  name,
  avatar
}) => {

  const { toggleSelectedProfileId } = useContext(ProfileContext);
  
  return (
    <Container>
      <li>
        <Link 
          onClick={() => toggleSelectedProfileId(id)}
          to="/browse"
        >
          <ProfileAvatar 
            className="profileAvatar" 

            id={id}
            avatar={avatar}
          />

          <span>{name}</span>
        </Link>
      </li>
    </Container>
  );
}

export default ProfileControl;
