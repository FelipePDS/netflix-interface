import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ProfileContext } from '../../context/ProfileContext';

import { 
  Container, 
  NavElement,
  SearchIcon,
  NotificationsIcon,
  NavElementDropdown,
  ProfileAvatar,
  CaretDownIcon,
  AccountDropdown,
  HeaderAccountDropdown,
  CaretUpIcon,
  BodyAccountDropdown,
  SubMenuListProfile,
  SubmenuListLinks
} from './styles';

export type Profile = {
  id: string;
  name: string;
  avatar: string;
};

const PrimaryNavigation: React.FC = () => {
  const { profileList, profile } = useContext(ProfileContext);

  const otherProfiles = profileList.filter(
    profile => profile.id !== localStorage.SelectedProfileId
  );

  return (
    <Container>
      <NavElement>
        <SearchIcon />
      </NavElement>

      <NavElement>
        <NotificationsIcon />
      </NavElement>

      <NavElementDropdown>
        <Link to='/browse'>
          <ProfileAvatar 
            id={profile.id}
            name={profile.name}
            avatar={profile.avatar}
          />
        </Link>

        <CaretDownIcon />

        <AccountDropdown className='accountDropdown'>
          <HeaderAccountDropdown>
            <CaretUpIcon />
          </HeaderAccountDropdown>

          <BodyAccountDropdown>
            <SubMenuListProfile>
              {otherProfiles.map(otherProfile => (
                <li key={otherProfile.id}>
                  <Link to='/browse'>
                    <ProfileAvatar 
                      id={otherProfile.id}
                      name={otherProfile.name}
                      avatar={otherProfile.avatar}
                    />

                    <span>{otherProfile.name}</span>
                  </Link>
                </li>
              ))}

              <li>
                <Link to='/'>
                  Gerenciar perfis
                </Link>
              </li>
            </SubMenuListProfile>

            <SubmenuListLinks>
              <li>
                <Link to='/'>
                  Conta
                </Link>
              </li>

              <li>
                <Link to='/'>
                  Centro de ajuda
                </Link>
              </li>

              <li>
                <Link to='/'>
                  Sair da Netflix
                </Link>
              </li>
            </SubmenuListLinks>
          </BodyAccountDropdown>
        </AccountDropdown>
      </NavElementDropdown>
      
    </Container>
  );
};

export default PrimaryNavigation;
