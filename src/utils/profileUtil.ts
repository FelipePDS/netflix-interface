import { useContext } from 'react';

import { ProfileContext } from '../context/ProfileContext';
import { userApi } from '../services/api';

type Profile = {
  id: string;
  name: string;
  avatar: string;
};

export function UpdateProfileList(profileList: Profile[]) {
  const { getProfileList } = useContext(ProfileContext);
  
  if (profileList.length === 0) {
    Promise.all([userApi.get('users')])
      .then(([{ data }]) => {
        getProfileList(data);
      })
      .catch(err => {
        console.log(err)
      });
  }
}
