import styled from 'styled-components';

import { CaretUp, CaretDown } from 'styled-icons/boxicons-regular';

export const Container = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  
  gap: 1.27rem;

  list-style: none;

  > li a {
    font-size: 14px;
    font-weight: 300;
    color: var(--link);

    transition: filter .4s;

    &.isActive {
      font-weight: 700;
      color: var(--white);

      cursor: default;
    }

    &:hover:not(.isActive, .dropdownNavigationButton) {
      filter: brightness(.75);
    }

    @media (max-width: 1200px) {
      font-size: 12.5px;
    }

    @media (max-width: 1050px) {
      font-size: 11px;
    }

    @media (max-width: 950px) {
      font-size: 10px;
    }
  }

  > li.dropdownNavigationButton {
    position: relative;
    display: none;

    &:hover {
      > a svg {
        transform: rotate(180deg);
      }

      > .navigationDropdownContainer {
        display: inline;
        opacity: 1;
      }
    }
  }

  > li.dropdownNavigationButton a {
    display: flex;
    justify-content: center;
    align-items: center;

    gap: .25rem;

    color: white;

    > svg {
      width: 10.5px;

      transition: transform .3s;
    }
  }

  @media (max-width: 830px) {
    > li.dropdownNavigationButton {
      display: flex;
      margin-left: -1rem;

      > a {
        font-size: 11px;
      }

      @media (max-width: 450px) {
        margin-left: -1.7rem;
      }
    }

    > li:not(li.dropdownNavigationButton) {
      display: none;
    }
  }
`;

export const CaretDownIcon = styled(CaretDown)`
  color: white;
`;

export const CaretUpIcon = styled(CaretUp)`
  color: white;
`;

export const NavigationDropdown = styled.div`
  position: absolute;
  top: 1rem;
  right: -3rem;

  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 11.3rem;

  opacity: 0;

  transition: opacity .2s;
`;

export const NavigationDropdownHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: end;

  width: 100%;
  padding: .3rem 4.4rem 0 0;
  margin-bottom: -.4rem;

  > svg {
    width: 1.3rem;
    color: var(--link);
  }
`;

export const NavigationDropdownBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: init;
  align-items: center;

  width: 100%;

  background-color: var(--black-transparent);
  border: 1px solid var(--gray-750);
`;

export const SubmenuNavigation = styled.ul`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: .62rem 0 .31rem 0;

  border-bottom: 1px solid var(--gray-750);

  list-style: none;

  > li {
    padding: .31rem .62rem;
    line-height: 2rem;

    > a {
      display: flex;
      align-items: center;

      gap: .62rem;

      font-size: 13px;
      font-weight: 540;
      color: var(--gray-50) !important;

      &.isActive {
        color: var(--white) !important;
      }

      &:hover {
        text-decoration: underline;
      }

      &:hover:not(.isActive, .dropdownNavigationButton) {
        filter: brightness(.75);
      }
    }
  }
`;
