import React from 'react';
import { Link } from 'react-router-dom';

import MenuNavigation from '../MenuNavigation';

import { Container } from './styles';

import Logo from '../../assets/logo.png';

type Props = {
  hasMenuNavigation?: boolean;
};

const MenuTop: React.FC<Props> = ({
  hasMenuNavigation
}) => {
  

  return (
    <Container>
      <Link to="/"><img src={Logo} alt="Netflix Logo" /></Link>

      {
        hasMenuNavigation 
          && (
            <MenuNavigation />
          )
      }
    </Container>
  );
};

export default MenuTop;
