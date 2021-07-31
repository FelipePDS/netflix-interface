import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;

  display: flex;
  align-items: center;

  padding: 0 4.5rem 0 3.63rem;
  gap: 2.8rem;
  height: 4.25rem;
  width: 100%;

  background-image: linear-gradient(to bottom,rgba(0,0,0,.7) 10%,rgba(0,0,0,0));
  background-image: -webkit-gradient(linear,left top,left bottom,color-stop(10%,rgba(0,0,0,.7)),color-stop(10%,rgba(0,0,0,0)));
  background-image: -webkit-linear-gradient(top,rgba(0,0,0,.7) 10%,rgba(0,0,0,0));
  background-image: -moz- oldlinear-gradient(top,rgba(0,0,0,.7) 10%,rgba(0,0,0,0));
  background-image: -o-linear-gradient(top,rgba(0,0,0,.7) 10%,rgba(0,0,0,0));

  & a img {
    margin-top: .3rem;
  }

  transition: background .3s;

  &.solidBackground {
    background-color: var(--primary);
  }
`;
