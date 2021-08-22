import styled from 'styled-components';

import { AngleRight } from 'styled-icons/fa-solid';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 3.3vw;

  &:hover {
    .view-all-content {
      display: block;
    }
  }
`;

export const SectionTitle = styled.div`
  display: flex;
  margin-bottom: .6vw;

  a {
    display: flex;
    align-items: center;
    font-size: 1.4vw;
    font-weight: bold;
    color: var(--link);

    > .view-all-content {
      display: none;
      align-items: flex-end;

      > strong {
        display: none;
        font-size: .9vw;
      }

      > svg {
        width: .7vw;
        margin-left: .18rem;

        transition: .3s;
      }
    }

    &:hover {
      color: var(--white);

      .view-all-content {
        margin-left: 1.1rem;

        > strong {
          display: inline;

          animation: fadeRight 750ms;

          @keyframes fadeRight {
            from {
              opacity: 0;
              margin-left: -1rem;
            }

            to {
              opacity: 1;
              margin-left: 0;
            }
          }
        }

        svg {
          width: .5vw;
          margin-left: .2rem;
          margin-bottom: -2px;
        }
      }
    }
  }
`;

export const AngleRightIcon = styled(AngleRight)`
`;

export const SectionContent = styled.section`
  display: flex;
  align-items: center;

  gap: 4px;
`;
