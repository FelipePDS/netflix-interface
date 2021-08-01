import { useContext } from 'react';

import { ProfileContext } from '../context/ProfileContext';
import { userApi } from '../services/api';

export function LoadProfileList(): void {
  const { 
    profileList,
    getProfileList 
  } = useContext(ProfileContext);

  if (profileList.length === 0) {
    userApi.get('users')
      .then(({ data }) => {
        getProfileList(data);
      })
      .catch(err => {
        console.log(err);
      });
  }
}
