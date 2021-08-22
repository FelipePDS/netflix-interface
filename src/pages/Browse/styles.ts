import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  background: var(--primary);
  color: var(--white);
`;

export const SectionMovieListContainer = styled.div`
  position: relative;
  z-index: 2;

  display: flex;
  flex-direction: column;
  
  width: calc(100% - 3.2%);
  margin: -13.1vw 0 3.1rem 3.2%;
`;
