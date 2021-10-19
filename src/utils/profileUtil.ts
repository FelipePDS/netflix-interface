import { useEffect } from 'react';

import { useProfileContext } from '../context/ProfileContext';
import { userApi } from '../services/api';

export function LoadProfileList(): void {
  const { 
    profileList,
    updateProfileList 
  } = useProfileContext();

  useEffect(() => {
    if (profileList.length === 0) {
      userApi.get('users')
        .then(({ data }) => {
          updateProfileList(data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [profileList, updateProfileList]);
}

export function UpdateSelectedProfile() {
  const { 
    wasCaughtSelectedProfile,
    selectedProfileId,
    updateProfile
  } = useProfileContext();

  if (!wasCaughtSelectedProfile) {
    userApi.get('users', {
      params: {
        id: selectedProfileId
      }
    })
      .then(({ data }) => {
        updateProfile(data[0]);
      })
      .catch(err => {
        console.log(err);
      });
  }
}
