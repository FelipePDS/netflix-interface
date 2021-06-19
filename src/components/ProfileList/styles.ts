import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & h1 {
    font-size: 3.5vw;
    font-weight: 510;
    color: var(--white);

    cursor: default;
  }
`;

export const ChooseProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 1.28rem 0;
`;
