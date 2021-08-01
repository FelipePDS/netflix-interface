import { createContext, ReactNode, useState, useContext } from 'react';

type Profile = {
  id: string;
  name: string;
  avatar: string;
};

type ProfileContextData = {
  profile: Profile;
  profileList: Profile[];
  selectedProfileId: string;
  wasCaughtSelectedProfile: boolean;
  getProfile: (profile: Profile) => void;
  getProfileList: (list: Profile[]) => void;
  toggleSelectedProfileId: (id: string) => void;
};

export const ProfileContext = createContext({} as ProfileContextData);

type ProfileContextProviderProps = {
  children: ReactNode;
};

export function ProfileContextProvider({ children }: ProfileContextProviderProps) {
  const [profile, setProfile] = useState<Profile>({} as Profile);
  const [profileList, setProfileList] = useState<Profile[]>([]);
  const [selectedProfileId, setSelectedProfileId] = useState(localStorage.SelectedProfileId || '1');
  const [wasCaughtSelectedProfile, setWasCaughtSelectedProfile] = useState(false);

  function getProfile(profile: Profile) {
    setProfile(profile);
    setWasCaughtSelectedProfile(true);
  };

  function getProfileList(profileList: Profile[]) {
    setProfileList(profileList);
  };

  function toggleSelectedProfileId(id: string) {
    setSelectedProfileId(id);
    localStorage.setItem('SelectedProfileId', id);
    setWasCaughtSelectedProfile(false);
  };

  return (
    <ProfileContext.Provider value={{
      profile,
      profileList,
      selectedProfileId,
      wasCaughtSelectedProfile,
      getProfile,
      getProfileList,
      toggleSelectedProfileId
    }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfileContext() {
  return useContext(ProfileContext);
};
