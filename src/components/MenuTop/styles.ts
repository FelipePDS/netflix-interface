import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;

  display: flex;
  align-items: center;

  padding: 0 3.63rem;
  gap: 2.8rem;
  height: 4.25rem;
  width: 100%;

  z-index: 3;

  background-image: linear-gradient(to bottom,rgba(0,0,0,.7) 10%,rgba(0,0,0,0));
  background-image: -webkit-gradient(linear,left top,left bottom,color-stop(10%,rgba(0,0,0,.7)),color-stop(10%,rgba(0,0,0,0)));
  background-image: -webkit-linear-gradient(top,rgba(0,0,0,.7) 10%,rgba(0,0,0,0));
  background-image: -moz- oldlinear-gradient(top,rgba(0,0,0,.7) 10%,rgba(0,0,0,0));
  background-image: -o-linear-gradient(top,rgba(0,0,0,.7) 10%,rgba(0,0,0,0));

  > a img {
    margin-top: .3rem;
  }

  @media (max-width: 1100px) {
    padding: 0 2.9rem;
  }

  @media (max-width: 950px) {
    padding: 0 2.6rem;
    height: 3rem;

    & a img {
      width: 65px;
    }
  }

  @media (max-width: 600px) {
    padding: 0 1.8rem;

    & a img {
      width: 55px;
    }
  }

  @media (max-width: 500px) {
    padding: 0 1.2rem;
    height: 2.7rem;

    & a img {
      width: 52px;
    }
  }

  transition: background .3s;

  &.solidBackground {
    background-color: var(--primary);
  }
`;
