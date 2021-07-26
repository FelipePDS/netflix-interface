import React from 'react';

import { ProfileContextProvider } from './context/ProfileContext';
import { MovieContextProvider } from './context/MovieContext';

import Router from './router';

import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => {
  return (
    <ProfileContextProvider>
      <MovieContextProvider>
        <Router />

        <GlobalStyles />
      </MovieContextProvider>
    </ProfileContextProvider>
  );
};

export default App;
