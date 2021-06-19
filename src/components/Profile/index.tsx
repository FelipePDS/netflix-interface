import React from 'react';
import { Link } from 'react-router-dom';

import { Container, ProfileAvatar } from './styles';

export type Props = {
  profileName: string;
  profileAvatar: string;
}

const ProfileControl: React.FC<Props> = ({
  profileName,
  profileAvatar
}) => {
  return (
    <Container>
      <Link to="/browse">
        <ProfileAvatar 
          className="profileAvatar" 

          profileName={profileName}
          profileAvatar={profileAvatar}
        />

        <span>{profileName}</span>
      </Link>
    </Container>
  );
}

export default ProfileControl;
