import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & h1 {
    margin-bottom: 1rem;

    font-size: 3.5vw;
    font-weight: 510;
    color: var(--white);

    cursor: default;

    @media (min-width: 2300px) {
      font-size: 2.7vw !important;
    }

    @media (min-width: 1800px) {
      font-size: 3vw !important;
    }

    @media (max-width: 1400px) {
      font-size: 3.35vw;
    }

    @media (max-width: 1100px) {
      font-size: 3.5vw;
    }

    @media (max-width: 900px) {
      font-size: 3.65vw;
    }

    @media (max-width: 800px) {
      font-size: 30px;
    }

    @media (max-width: 400px) {
      font-size: 25px;
    }

    @media (max-width: 250px) {
      font-size: 22px;
    }
  }
`;

export const ChooseProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 1.28rem 0;
`;
