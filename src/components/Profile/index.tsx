import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProfileContext } from '../../context/ProfileContext';

import { Container, ProfileAvatar } from './styles';

export type Props = {
  profileId: string;
  profileName: string;
  profileAvatar: string;
}

const ProfileControl: React.FC<Props> = ({
  profileId,
  profileName,
  profileAvatar
}) => {

  const { toggleSelectedProfileId } = useContext(ProfileContext);
  
  return (
    <Container>
      <Link 
        onClick={() => toggleSelectedProfileId(profileId)}
        to="/browse"
      >
        <ProfileAvatar 
          className="profileAvatar" 

          profileId={profileId}
          profileName={profileName}
          profileAvatar={profileAvatar}
        />

        <span>{profileName}</span>
      </Link>
    </Container>
  );
}

export default ProfileControl;
