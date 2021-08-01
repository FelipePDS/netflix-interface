import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: calc(100vh - 8.6rem);

  @media (max-height: 740px) {
    height: calc(100vh - 5rem);
  }

  @media (max-height: 650px) {
    height: calc(100vh - 3rem);
  }

  @media (max-height: 600px) {
    height: 100vh;
  }

  @media (max-height: 200px) {
    height: 100%;
  }
`;

export const ProfileManageButton = styled.div`
  > button {
    display: block;

    margin: 2.7rem 0 1rem 0;
    padding: .5rem 1.52rem;

    background: transparent;
    color: var(--gray-200);
    font-size: 1.18vw;
    font-weight: 540;
    letter-spacing: 2.2px;
    text-transform: uppercase;

    border: 1px solid var(--gray-200);

    @media (min-width: 1500px) {
      font-size: 1.25vw !important;
      margin: 3.5rem 0 1rem 0;
      padding: .72rem 1.7rem;
    }

    @media (min-width: 1400px) {
      font-size: 1.25vw !important;
    }

    @media (min-width: 1550px) {
      font-size: 1.17vw !important;
    }

    @media (max-width: 1100px) {
      margin: 1.4rem 0 1rem 0;
    }

    @media (max-width: 800px) {
      font-size: 12px;
    }

    @media (max-width: 700px) {
      margin: .8rem 0 1rem 0;
    }

    @media (max-width: 600px) {
      font-size: 11px;
    }

    @media (max-width: 500px) {
      font-size: 10.5px;
    }

    @media (max-width: 300px) {
      font-size: 7px;
      margin: .2rem 0 1rem 0;
    }
  }

  > button:hover {
    color: var(--white);
    border: 1px solid var(--white);
  }
`;
