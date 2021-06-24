import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import MenuNavigation from '../MenuNavigation';

import { Container } from './styles';

import Logo from '../../assets/logo.png';

const MenuTop: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
      <Link to="/"><img src={Logo} alt="Netflix Logo" /></Link>

      {
        history.location.pathname !== '/' 
          && (
            <MenuNavigation />
          )
      }
    </Container>
  );
};

export default MenuTop;
