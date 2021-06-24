import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { ProfileContext } from '../../context/ProfileContext';
import { userApi } from '../../services/api';
import { UpdateProfileList } from '../../utils/profileUtil';

import { Container } from './styles';

import MenuTop from '../../components/MenuTop';

const Browse: React.FC = () => {
  const history = useHistory();

  const { 
    profileList,
    wasCaughtProfile,
    getProfile
  } = useContext(ProfileContext);

  UpdateProfileList(profileList);

  useEffect(() => {
    if (!wasCaughtProfile) {
      if (localStorage.SelectedProfileId !== undefined) {

        Promise.all([
          userApi.get('users', {
            params: {
              id: localStorage.SelectedProfileId
            }
          })
        ])
          .then(([{ data }]) => {
            getProfile(data[0]);
          })
          .catch(err => {
            console.log(err);
          });
          
      } else {
        history.push('/');
      }
    }
  }, [history, wasCaughtProfile, getProfile]);

  return (
    <Container>
      <MenuTop />
    </Container>
  );
};

export default Browse;
