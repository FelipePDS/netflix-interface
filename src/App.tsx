import React from 'react';

import Router from './router';

import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => {
  return (
    <>
      <Router />

      <GlobalStyles />
    </>
  );
};

export default App;
