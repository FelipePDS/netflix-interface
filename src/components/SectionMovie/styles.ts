import styled from 'styled-components';

import { AngleRight } from 'styled-icons/fa-solid';
import { 
  ChevronForward,
  ChevronBack
} from 'styled-icons/ionicons-sharp';

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
      position: relative;
      display: none;
      align-items: flex-end;

      > strong {
        display: none;
        font-size: .9vw;
      }

      > svg {
        position: absolute;
        top: -.72vw;
        left: .21rem;

        width: .7vw;
      }
    }

    &:hover {
      color: var(--white);

      .view-all-content {
        margin-left: 1.01vw;

        > strong {
          display: inline;
          margin-left: .15vw;

          animation: textFadeRight 850ms;

          @keyframes textFadeRight {
            from {
              opacity: 0;
              margin-left: -.8vw;
            }

            to {
              opacity: 1;
              margin-left: .15vw;
            }
          }
        }

        svg {
          top: .5vw;
          right: -.69vw;
          left: unset;

          width: .5vw;

          animation: iconFadeRight 250ms linear;

          @keyframes iconFadeRight {
            from {
              transform: translateX(-3vw);
            }

            to {
              transform: translateX(0);
            }
          }
        }
      }
    }

    @media (max-width: 799px) {
      font-size: 12px;

      > .view-all-content {
        > strong {
          font-size: 1.04vw;
        }

        > svg {
          width: .9vw;
        }
      }

      &:hover {
        > .view-all-content svg {
          width: .62vw;
        }
      }
    }

    @media (max-width: 799px) {
      &:hover {
        > .view-all-content svg {
          width: .66vw;
        }
      }
    }
    
    @media (max-width: 599px) {
      font-size: 10px;

      > .view-all-content {
        > strong {
          font-size: 1.2vw;
        }

        > svg {
          width: 1vw;
        }
      }

      &:hover {
        > .view-all-content svg {
          width: .7vw;
        }
      }
    }

    @media (max-width: 499px) {
      &:hover {
        > .view-all-content svg {
          top: 1vw;
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

  transition: all .2s;

  &.section-wrapper-expanded {
    width: 103.3%;
    margin-left: -3.3%;
  }

  &:hover {
    .paginationIndicator {
      visibility: visible;
    }

    .handlePreviousIcon {
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
  right: 3.5vw;
  top: 1.7vw;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 1px;

  > li {
    list-style: none;
    width: 12px;
    height: 2.1px;
    background-color: var(--gray-400);

    &.active {
      background-color: var(--gray-150);
    }
  }
`;

export const HandlePagination = styled.span`
  position: absolute;
  z-index: 6;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 2.951vw;
  height: 8.707vw;
  
  background-color: var(--primary-transparent-50);
  color: var(--white);

  cursor: pointer;

  &.handlePrevious {
    left: -3.3%;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;

    &.disabled {
      visibility: hidden !important;
      
      .handlePreviousIcon {
        visibility: hidden !important;
      }
    }
  }

  &.handleNext {
    right: 0;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  > svg {
    visibility: hidden;
    width: 40px;
    z-index: 7;

    transform-origin: 45% 50%;
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

export const ChevronBackIcon = styled(ChevronBack)`
`;

export const SectionContent = styled.section`
  display: flex;
  align-items: center;

  gap: 4px;
`;
