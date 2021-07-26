import styled from 'styled-components';

import { Props } from '.';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &+div {
    margin-left: 1.75rem;
  }

  > a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  > a:hover {
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

  > a span {
    display: block;
    
    margin: .7rem 0;

    color: var(--gray-200);
    font-size: 1.3vw;

    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const ProfileAvatar = styled.div<Props>`
  position: relative;

  width: 8.5rem;
  height: 8.5rem;

  border-radius: .25rem;

  background: var(--gray-750);
  background-image: url(${props => props.profileAvatar});
  background-size: cover;
`;
