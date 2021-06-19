import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: calc(100vh - 8.6rem);
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
  }

  > button:hover {
    color: var(--white);
    border: 1px solid var(--white);
  }
`;
