import styled from 'styled-components';

type Props = {
  imageUrl: string;
};

export const Container = styled.div.attrs<Props>(props => ({
  style: {
    backgroundImage: `url(${props.imageUrl})`
  }
}))<Props>`
  width: 15.27vw;
  height: 8.707vw;

  background: var(--gray-750);
  background-size: cover;
  background-position: center;

  border-radius: 4px;

  cursor: pointer;

  &.mobile-card {
    width: 18vw;
    height: 24vw;

    @media (max-width: 599px) {
      width: 22.1vw;
      height: 30vw;
    }

    @media (max-width: 399px) {
      width: 29.8vw;
      height: 42vw;
    }
  }

  &.poster-movie {
    width: 15.27vw;
    height: 30.707vw;
  }

  @media (max-width: 1399px) {
    width: 18vw;
    height: 10.2vw;

    &.poster-movie {
      width: 18.5vw;
      height: 35.8vw;
    }
  }

  @media (max-width: 1099px) {
    width: 23vw;
    height: 12.9vw;

    &.poster-movie {
      width: 23vw;
      height: 45.4vw;
    }
  }

  @media (max-width: 699px) {
    &.poster-movie {
      width: 30vw;
      height: 60.5vw;
    }
  }

  @media (max-width: 399px) {
    &.poster-movie {
      width: 45vw;
      height: 82vw;
    }
  }
`;

export const MovieCardControl = styled.div`

`;
