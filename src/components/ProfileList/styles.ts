import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  & h1 {
    margin-bottom: 1rem;
    margin: 1rem .5rem;

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

    @media (max-width: 700px) {
      margin-bottom: .6rem;
    }

    @media (max-width: 600px) {
      margin-bottom: .1rem;
    }


    @media (max-width: 400px) {
      font-size: 25px;
    }

    @media (max-width: 300px) {
      font-size: 23px;
    }

    @media (max-width: 260px) {
      font-size: 21px;
    }
  }
`;

export const ChooseProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  margin: 1.28rem 2.3rem;
`;
