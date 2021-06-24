import React from 'react';
import { ProfileContextProvider } from './context/ProfileContext';

import Router from './router';

import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => {
  return (
    <ProfileContextProvider>
      <Router />

      <GlobalStyles />
    </ProfileContextProvider>
  );
};

export default App;
