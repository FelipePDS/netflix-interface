import styled from 'styled-components';

import { PlayFill } from 'styled-icons/bootstrap';
import { Like, Dislike } from 'styled-icons/boxicons-regular';
import { Plus, ChevronDown } from 'styled-icons/heroicons-outline';

type Props = {
  imageUrl: string;
};

export const Container = styled.div`
  position: absolute;
  width: 15.27vw;
  
  > .preview-modal {
    height: 8.707vw;
  }

  border-radius: 4px;
  cursor: pointer;

  transform-origin: 50% 150%;
  transform: none;
  transition: all .2s ease-in-out .35s;

  &:not(:hover) {
    animation: zIndexOut .6s;

    @keyframes zIndexOut {
      from {
        z-index: 9999;
      }

      to {
        z-index: 0;
      }
    }
  }

  &:hover {
    z-index: 9999;
    transform: scale(1.5);

    animation: zIndexIn 4s;

    @keyframes zIndexIn {
      from {
        z-index: 0;
      }

      to {
        z-index: 9999;
      }
    }

    > .preview-modal {
      border-radius: 4px 4px 0 0;
      box-shadow: rgba(0 0 0 / 75%) 0 3px 10px;
    }

    > .mini-modal {
      opacity: 1;
      visibility: visible;
      box-shadow: rgba(0 0 0 / 75%) 0 3px 10px;
    }
  }

  &.poster-movie {
    width: 15.27vw;

    > .preview-modal {
      height: 30.707vw;
    }
  }

  &.mobile-card {
    width: 18vw;

    > .preview-modal {
      height: 24vw;
    }

    @media (max-width: 599px) {
      width: 22.1vw;

      > .preview-modal {
        height: 30vw;
      }
    }

    @media (max-width: 399px) {
      width: 29.8vw;

      > .preview-modal {
        height: 42vw;
      }
    }
  }

  @media (max-width: 1399px) {
    width: 18.25vw;

    > .preview-modal {
      height: 10.2vw;
    }

    &.poster-movie {
      width: 18.25vw;

      > .preview-modal {
        height: 35.8vw;
      }
    }
  }

  @media (max-width: 1099px) {
    width: 22.8vw;

    > .preview-modal {
      height: 12.9vw;
    }

    &.poster-movie {
      width: 22.8vw;

      > .preview-modal {
        height: 45.4vw;
      }
    }
  }

  @media (max-width: 699px) {
    &.poster-movie {
      width: 30vw;

      > .preview-modal {
        height: 60.5vw;
      }
    }
  }

  @media (max-width: 399px) {
    &.poster-movie {
      width: 45.1vw;

      > .preview-modal {
        height: 82vw;
      }
    }
  }
`;

export const PreviewModal = styled.div.attrs<Props>(props => ({
  style: {
    backgroundImage: `url(${props.imageUrl})`
  }
}))<Props>`
  width: 100%;

  background: var(--gray-750);
  background-size: cover;
  background-position: center;
  border-radius: 4px;

  transition: all .2s ease-in-out .35s;
`;

export const MiniModal = styled.div`
  position: absolute;
  z-index: 99;

  visibility: hidden;
  opacity: 0;

  box-sizing: inherit;
  border-radius: 0 0 4px 4px;

  > * {
    box-sizing: inherit;
  }

  width: 100%;
  padding: 16px;

  background: var(--primary);

  transition: all .2s ease-in-out .35s;
`;

export const ButtonControls = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 12px;

  > div {
    margin: 4px;
    border-radius: 50%;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-left: auto;
    }

    > button {
      display: flex;
      justify-content: center;
      align-items: center;

      padding: 4px;

      border: 1px solid var(--gray-50);
      border-radius: 50%;
      background-color: var(--gray-750);

      &.play-button {
        border: none;
        background-color: var(--white);
        
        transition: .2s;

        &:hover {
          filter: brightness(.9);
        }

        > svg {
          color: var(--black);
        }
      }

      &:hover:not(.play-button) {
        border-color: var(--white);
      }

      > svg {
        width: 16.5px;
        height: 16.5px;
        color: var(--white);
      }
    }
  }
`;

export const PlayIcon = styled(PlayFill)`
`;

export const PlusIcon = styled(Plus)`
`;

export const LikeIcon = styled(Like)`
`;

export const DislikeIcon = styled(Dislike)`
`;

export const ChevronDownIcon = styled(ChevronDown)`
`;

export const VideoMetadata = styled.div`
  display: flex;
  align-items: center;

  font-size: .55vw;
	font-weight: 100;
	color: var(--white);
	word-spacing: -0.09em;
	text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);

	margin-bottom: 16px;

	> span+span {
		margin-left: 6px;
	}

	> span strong {
		color: var(--green-darker);
	}

  > .feature-badge {
    padding: 1px 4px;

    border: 1px solid var(--gray-09);
    border-radius: 3px;

    font-size: .35vw;
  }
`;

export const TagList = styled.div`
  display: flex;
  margin-bottom: 6px;
  
  font-size: .55vw;
	font-weight: 100;
	color: var(--white);
	word-spacing: -0.09em;
	text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);

  > div {
    display: flex;
    margin-right: 8px;

    > span {
      white-space: nowrap;
    }

    > .separator {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;

      width: 3.5px;
      height: 100%;
      margin-right: 8px;

      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);

        width: 3.5px;
        height: 3px;

        background-color: var(--gray-300);

        border-radius: 50%;
      }
    }
  }
`;
