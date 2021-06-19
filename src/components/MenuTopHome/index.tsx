import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.png';

const MenuTopHome: React.FC = () => {
  return (
    <Container>
      <Link to="/"><img src={Logo} /></Link>
    </Container>
  );
};

export default MenuTopHome;
