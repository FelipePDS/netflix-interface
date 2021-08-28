import styled from 'styled-components';

import { AngleRight } from 'styled-icons/fa-solid';
import { ChevronForward } from 'styled-icons/ionicons-sharp';

export const Container = styled.div`
  position: relative;
  margin-bottom: 3.3vw;
  width: 100%;

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
        margin: -2px 0 0 .18rem;
      }
    }

    &:hover {
      color: var(--white);

      .view-all-content {
        margin-left: 1.1rem;

        > strong {
          display: inline;
        }

        svg {
          width: .5vw;
          margin: 0 0 -2px .2rem;
        }

        animation: fadeRight 750ms;

        @keyframes fadeRight {
          from {
            opacity: 0;
            margin-left: -.5rem;
          }

          to {
            opacity: 1;
            margin-left: 1.1rem;
          }
        }
      }
    }
  }
`;

export const AngleRightIcon = styled(AngleRight)`
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  overflow-x: hidden;

  &:hover {
    .paginationIndicator {
      visibility: visible;
    }

    .handleNextIcon {
      visibility: visible;
    }
  }
`;

export const PaginationIndicator = styled.ul`
  visibility: hidden;
  position: absolute;
  right: 62px;
  top: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 1px;

  > li {
    list-style: none;
    width: 12px;
    height: 2px;
    background-color: var(--gray-400);

    &.active {
      background-color: var(--gray-150);
    }
  }
`;

export const SectionContent = styled.section`
  display: flex;
  align-items: center;

  gap: 4px;
`;

export const HandleNext = styled.span`
  position: absolute;
  right: 0;
  z-index: 6;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 10.38rem;
  width: 52px;
  
  background-color: var(--primary-transparent-50);
  color: var(--white);
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  cursor: pointer;

  > svg {
    visibility: hidden;
    width: 40px;
    z-index: 7;

    transform-origin: 45% 50%;
    -webkit-transition: -webkit-transform .1s ease-out 0s;
    transition: -webkit-transform .1s ease-out 0s;
    -o-transition: -o-transform .1s ease-out 0s;
    -moz-transition: transform .1s ease-out 0s,-moz-transform .1s ease-out 0s;
    transition: transform .1s ease-out 0s;
    transition: transform .1s ease-out 0s,-webkit-transform .1s ease-out 0s,-moz-transform .1s ease-out 0s,-o-transform .1s ease-out 0s;
  }
  
  &:hover {
    background-color: var(--primary-transparent-70);

    > svg {
      transform: scale(1.25);
    }
  }
`;

export const ChevronForwardIcon = styled(ChevronForward)`
`;
