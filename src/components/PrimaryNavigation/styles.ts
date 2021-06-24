import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  
  gap: 1.27rem;

  list-style: none;

  > li a {
    font-size: 14px;
    font-weight: 510;
    color: var(--link);

    transition: filter .4s;

    &.isActive {
      font-weight: 700;
      color: var(--white);

      cursor: default;
    }

    &:hover:not(.isActive) {
      filter: brightness(.75);
    }
  }
`;
