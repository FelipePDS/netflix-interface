import styled from 'styled-components';

import { Profile } from '.';

import { Search } from 'styled-icons/fa-solid';
import { Notifications } from 'styled-icons/zondicons';
import { CaretDown, CaretUp } from 'styled-icons/boxicons-regular';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavElement = styled.div`
  margin: 0 .95rem;
  cursor: pointer;

  > svg {
    color: white;
  }
`;

export const SearchIcon = styled(Search)`
  width: 1.2rem;
`;

export const NotificationsIcon = styled(Notifications)`
  width: 1.3rem;
`;

export const NavElementDropdown = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: .5rem;
  gap: .4rem;

  cursor: pointer;  

  > svg {
    color: white;
    transition: transform .3s;
  }

  &:hover {
    > svg {
      transform: rotate(180deg);
    }

    > .accountDropdown {
      display: flex;
      opacity: 1;
    }
  }
`;

export const ProfileAvatar = styled.div<Profile>`
  width: 2rem;
  height: 2rem;

  border-radius: .2rem;

  background: var(--gray-750);
  background-image: url(${profile => profile.avatar});
  background-size: cover;
`;

export const CaretDownIcon = styled(CaretDown)`
  width: 1.05rem;
`;

export const AccountDropdown = styled.div`
  position: absolute;
  top: 2rem;
  right: 0;

  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 11.3rem;

  opacity: 0;
  cursor: default;

  transition: opacity .2s;
`;

export const HeaderAccountDropdown = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: end;

  width: 100%;
  padding: .3rem 1.72rem 0 0;
  margin-bottom: -.5rem;
`;

export const CaretUpIcon = styled(CaretUp)`
  width: 1.5rem;
  color: var(--link);
`;

export const BodyAccountDropdown = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: init;
  align-items: center;

  width: 100%;

  background-color: var(--black-transparent);
  border: 1px solid var(--gray-750);
`;

export const SubMenuListProfile = styled.ul`
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
      color: var(--link);

      > span {
        max-width: 85%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    > a:hover {
      text-decoration: underline;
    }
  }
`;

export const SubmenuListLinks = styled.ul`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: .62rem 0;

  list-style: none;

  > li {
    padding: .31rem .62rem;

    > a {
      display: flex;
      align-items: center;

      font-size: 13px;
      font-weight: 700;
      color: var(--white);
    }

    > a:hover {
      text-decoration: underline;
    }
  }
`;
