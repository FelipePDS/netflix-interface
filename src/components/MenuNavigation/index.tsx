import React from 'react';

import PrimaryNavigation from '../PrimaryNavigation';
import SecondaryNavigation from '../SecondaryNavigation';

import { Container } from './styles';

const MenuNavigation: React.FC = () => {
  return (
    <Container>
      <PrimaryNavigation />

      <SecondaryNavigation />
    </Container>
  );
};

export default MenuNavigation;
