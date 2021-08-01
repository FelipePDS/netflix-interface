import React from 'react';
import { Link } from 'react-router-dom';

import { 
  Container, 
  CaretDownIcon, 
  CaretUpIcon,
  NavigationDropdown,
  NavigationDropdownHeader,
  NavigationDropdownBody,
  SubmenuNavigation
} from './styles';

const PrimaryNavigation: React.FC = () => {
  return (
    <Container>
      <li className="dropdownNavigationButton">
        <Link to="/browse"  className='isActive'>Navegar <CaretDownIcon /></Link>

        <NavigationDropdown className="navigationDropdownContainer">
          <NavigationDropdownHeader>
            <CaretUpIcon />
          </NavigationDropdownHeader>

          <NavigationDropdownBody>
            <SubmenuNavigation>
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
            </SubmenuNavigation>
          </NavigationDropdownBody>
        </NavigationDropdown>
      </li>

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
