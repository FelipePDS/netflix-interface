import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import MenuNavigation from '../MenuNavigation';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

type Props = {
  hasMenuNavigation?: boolean;
};

const MenuTop: React.FC<Props> = ({
  hasMenuNavigation
}) => {
  const [currentScrollY, setCurrentScrollY] = useState<number>(
    window.scrollY
  );

  useEffect(() => {
    window.onscroll = () => {
      setCurrentScrollY(window.scrollY);
    }
  }, [currentScrollY]);

  return (
    <Container 
      className={`${currentScrollY > 0 && 'solidBackground'}`}
    >
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
