import { useEffect } from 'react';

import { useProfileContext } from '../context/ProfileContext';
import { userApi } from '../services/api';

export function LoadProfileList(): void {
  const { 
    profileList,
    getProfileList 
  } = useProfileContext();

  useEffect(() => {
    if (profileList.length === 0) {
      userApi.get('users')
        .then(({ data }) => {
          getProfileList(data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [profileList, getProfileList]);
}

export function UpdateSelectedProfile() {
  const { 
    wasCaughtSelectedProfile,
    selectedProfileId,
    getProfile
  } = useProfileContext();

  if (!wasCaughtSelectedProfile) {
    userApi.get('users', {
      params: {
        id: selectedProfileId
      }
    })
      .then(({ data }) => {
        getProfile(data[0]);
      })
      .catch(err => {
        console.log(err);
      });
  }
}
