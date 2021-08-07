import styled from 'styled-components';

import { Play, InfoCircle } from 'styled-icons/boxicons-regular';

type FeaturedMovieContainerProps = {
    imageUrl: string;
};

type MaturityRatingProps = {
    adult: boolean;
};

export const Container = styled.div<FeaturedMovieContainerProps>`
    position: relative;

    display: block;

    width: 100%;
    height: 100%;

    font-size: 50px;

    background-image: url(${({ imageUrl }) => imageUrl});
    background-size: 100%;
    background-repeat: no-repeat;
    
    &::after {
        position: absolute;
        top: 0;
        right: 26.09%;
        bottom: 0;
        left: 0;

        width: 100%;
        height: 100%;

        background: linear-gradient(
            77deg,
            rgba(0,0,0,.6) 0,
            rgba(0,0,0,0) 85%
        );

        content: '';
    }
`;

export const FeaturedMovieInfo = styled.div`
    position: absolute;
    left: 3.75rem;
    bottom: 29%;
    z-index: 2;
    max-width: 41rem;
`;

export const TitleWrapper = styled.h1`
    font-size: 3.8vw;
    font-weight: 700;

    color: var(--white);
    text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);

    margin-bottom: 1.2rem;
`;

export const DetailsWrapper = styled.div`
    font-size: .9vw;
    font-weight: 100;
    color: var(--gray-10);
    word-spacing: -0.09em;
    text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);

    margin-bottom: .3rem;

    > span+span {
        margin-left: .6rem;
    }

    > span strong {
        color: var(--green-darker);
    }
`;

export const DescriptionWrapper = styled.div`
    color: var(--white);
    font-weight: 400;
    line-height: normal;
    width: 100%;
    font-size: 1.4vw;
    text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);
`;

export const NavigationButtons = styled.div`
    display: flex;
    align-items: center;

    gap: 1rem;
    margin-top: 2rem;
`;

export const PlayIcon = styled(Play)`
`;

export const InfoCircleIcon = styled(InfoCircle)`
`;

export const PlayButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding: .38rem 2.2rem .38rem 1.72rem;
    gap: .49rem;

    word-break: break-word;
    white-space: nowrap;

    border-radius: 4px;

    background-color: var(--white);

    &:hover {
        filter: brightness(.8);
    }

    > span {
        font-size: 1.35rem;
        font-weight: 550;    

        color: var(--black);
    }

    > svg {
        width: 45px;
        color: var(--black);
    }
`;

export const MoreInfoButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding: .7rem 1.95rem .7rem 1.8rem;
    gap: 1rem;

    word-break: break-word;
    white-space: nowrap;
    
    border-radius: 4px;

    background-color: var(--gray-transparent-200);

    &:hover {
        filter: brightness(.8);
    }

    > span {
        font-size: 1.35rem;
        font-weight: 550;
        letter-spacing: .035rem;

        color: var(--white);
    }

    > svg {
        width: 34px;
        color: var(--white);
    }
`;

export const EmbeddedComponents = styled.div`
    position: absolute;
    right: 0;
    bottom: 28%;
    z-index: 2;
    
    z-index: 3;
`;

export const MaturityRating = styled.div<MaturityRatingProps>`
    display: flex;
    align-items: center;

    height: 2.4vw;
    padding: .1vw 3.5vw .1vw .8vw;

    border-left: 3px solid var(--white);
    background-color: var(--gray-transparent-500);

    > span {
        display: flex;
        justify-content: center;
        align-items: center;

        &::after {
            display: flex;
            justify-content: center;
            align-items: center;

            width: 1.8vw;
            height: 1.8vw;
            padding: .2rem;
            
            font-size: 1.1vw;
            font-weight: 750;
            
            border-radius: 3px;
            background-color: ${({ adult }) => adult ? 'var(--red)' : 'var(--green-secondary-darker)'};
            content: ${({ adult }) => adult ? "'+18'" : "'L'"};

            @media (max-width: 1200px) {
                width: 1.6vw;
                height: 1.6vw;
            }

            @media (max-width: 900px) {
                width: 1.4vw;
                height: 1.4vw;
            }
        }
    }
`;
