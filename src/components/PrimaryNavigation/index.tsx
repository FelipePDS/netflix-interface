import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const PrimaryNavigation: React.FC = () => {
  return (
    <Container>
      <li>
        <Link to="/browse" className='isActive'>Início</Link>
      </li>

      <li>
        <Link to="/browse">Séries</Link>
      </li>

      <li>
        <Link to="/browse">Filmes</Link>
      </li>

      <li>
        <Link to="/browse">Bombando</Link>
      </li>

      <li>
        <Link to="/browse">Minha lista</Link>
      </li>
    </Container>
  );
};

export default PrimaryNavigation;
