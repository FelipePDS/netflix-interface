import styled from 'styled-components';

type Props = {
  imageUrl: string;
};

export const Container = styled.div<Props>`
  width: 18.4rem;
  height: 10.38rem;

  background: var(--gray-750);
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;

  border-radius: 4px;

  cursor: pointer;
`;
