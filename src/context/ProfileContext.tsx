import { createContext, ReactNode, useState } from 'react';

type Profile = {
  id: string;
  name: string;
  avatar: string;
};

type ProfileContextData = {
  profile: Profile;
  profileList: Profile[];
  selectedProfileId: string;
  wasCaughtProfile: boolean;
  getProfile: (profile: Profile) => void;
  getProfileList: (list: Profile[]) => void;
  toggleSelectedProfileId: (id: string) => void;
  toggleWasCaughtProfile: (condition: boolean) => void;
};

export const ProfileContext = createContext({} as ProfileContextData);

type ProfileContextProviderProps = {
  children: ReactNode;
};

export function ProfileContextProvider({ children }: ProfileContextProviderProps) {
  const [profile, setProfile] = useState<Profile>({} as Profile);
  const [profileList, setProfileList] = useState<Profile[]>([]);
  const [selectedProfileId, setSelectedProfileId] = useState('');
  const [wasCaughtProfile, setWasCaughtProfile] = useState(false);

  function getProfile(profile: Profile) {
    setProfile(profile);
    setWasCaughtProfile(true);
  };

  function getProfileList(list: Profile[]) {
    setProfileList(list);
  };

  function toggleSelectedProfileId(id: string) {
    setSelectedProfileId(id);
    localStorage.setItem('SelectedProfileId', id);
    setWasCaughtProfile(false);
  };

  function toggleWasCaughtProfile(condition: boolean) {
    setWasCaughtProfile(condition);
  };

  return (
    <ProfileContext.Provider value={{
      profile,
      profileList,
      selectedProfileId,
      wasCaughtProfile,
      getProfile,
      getProfileList,
      toggleSelectedProfileId,
      toggleWasCaughtProfile
    }}>
      {children}
    </ProfileContext.Provider>
  );
}
