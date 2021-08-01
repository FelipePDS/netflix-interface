import styled from 'styled-components';

import { Profile } from '.';

export const Container = styled.ul`
  display: block;
  justify-content: center;
  align-items: center;

  list-style: none;

  &+ul {
    margin-left: 1.75rem;

    @media (max-width: 900px) {
      margin-left: 1.3rem;
    }

    @media (max-width: 700px) {
      margin-left: 1rem;
    }

    @media (max-width: 600px) {
      margin-left: .7rem;
    }
  }

  > li a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  > li a:hover {
    > .profileAvatar::before {
      content: '';

      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;

      display: block;

      border-radius: .25rem;
      border: .2em solid var(--white);
    }

    > span {
      color: var(--white);
    }
  }

  > li a span {
    display: block;
    
    max-width: 10vw;
    margin: .7rem 0;

    color: var(--gray-200);
    font-size: 1.3vw;

    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

    @media (min-width: 1500px) {
      font-size: 19.5px;
    }

    @media (max-width: 890px) {
      font-size: 12px;
    }

    @media (max-width: 700px) {
      max-width: 5rem;
    }
  
    @media (max-width: 600px) {
      max-width: 4.5rem;
    }
  
    @media (max-width: 400px) {
      max-width: 4rem;
    }

    @media (max-width: 250px) {
      max-width: 3.2rem;
    }
  }
`;

export const ProfileAvatar = styled.div<Profile>`
  position: relative;

  width: 10vw;
  height: 10vw;
  max-width: 10.07rem;
  max-height: 10.07rem;
  min-width: 5.9rem;
  min-height: 5.9rem;

  border-radius: .25rem;

  background: var(--gray-750);
  background-image: url(${profile => profile.avatar});
  background-size: cover;

  @media (max-width: 700px) {
    min-width: 5rem;
    min-height: 5rem;
  }

  @media (max-width: 600px) {
    min-width: 4.5rem;
    min-height: 4.5rem;
  }

  @media (max-width: 400px) {
    min-width: 4rem;
    min-height: 4rem;
  }

  @media (max-width: 250px) {
    min-width: 3.2rem;
    min-height: 3.2rem;
  }
`;
