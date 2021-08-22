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
	height: 56.25vw;

	font-size: 50px;

	background-image: url(${({ imageUrl }) => imageUrl});
	background-size: 100%;
	background-repeat: no-repeat;

	transition: opacity .4s cubic-bezier(.665,.235,.265,.8) 0s;

	&::after {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;

		width: 100%;
		height: 100%;

		background: linear-gradient(
			180deg,
			rgba(0,0,0,.01) 60%,
			var(--primary) 95%
		);

		content: '';
	}
`;

export const HeroImageWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 100%;

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
	left: 3.2%;
	bottom: 35%;
	z-index: 2;
	max-width: 34vw;

	@media (max-width: 600px) {
		max-width: 40vw;
	}
`;

export const TitleWrapper = styled.h1`
	font-size: 3.8vw;
	font-weight: 700;

	color: var(--white);
	text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);

	margin-bottom: 1vw;
`;

export const DetailsWrapper = styled.div`
	font-size: .9vw;
	font-weight: 100;
	color: var(--gray-10);
	word-spacing: -0.09em;
	text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);

	margin-bottom: .25vw;

	> span+span {
		margin-left: .5vw;
	}

	> span strong {
		color: var(--green-darker);
	}

	@media (max-width: 730px) {
		font-size: 1.1vw;
	}

	@media (max-width: 450px) {
		font-size: 1.4vw;
	}
`;

export const DescriptionWrapper = styled.div`
	width: 100%;
	max-height: 11vw;
	margin-bottom: 1.7vw;

	color: var(--white);
	font-weight: 400;
	line-height: normal;
	font-size: 1.4vw;
	text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);
	text-overflow: ellipsis;
	overflow: hidden;

	@media (max-width: 530px) {
		font-size: 1.5vw;
	}

	@media (max-width: 450px) {
		font-size: 1.8vw;
	}
`;

export const NavigationButtons = styled.div`
	display: flex;
	align-items: center;

	gap: 0.85vw;
`;

export const PlayIcon = styled(Play)`
`;

export const InfoCircleIcon = styled(InfoCircle)`
`;

export const PlayButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;

	padding: .28vw 1.8vw .28vw 1.42vw;
	gap: .39vw;

	word-break: break-word;
	white-space: nowrap;

	border-radius: 4px;

	background-color: var(--white);

	&:hover {
		filter: brightness(.8);
	}

	> span {
		font-size: 1.06vw;
		font-weight: 550;

		color: var(--black);
	}

	> svg {
		width: 2.35vw;
		color: var(--black);
	}

	@media (max-width: 630px) {
		padding: .42vw 2vw .42vw 1.62vw;

		> span {
			font-size: 1.3vw;
		}
	}

	@media (max-width: 500px) {
		padding: .54vw 2.2vw .54vw 1.82vw;

		> span {
			font-size: 1.55vw;
		}
	}
`;

export const MoreInfoButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;

	padding: .56vw 1.35vw .56vw 1.3vw;
	gap: .78vw;

	word-break: break-word;
	white-space: nowrap;
	
	border-radius: 4px;

	background-color: var(--gray-transparent-200);

	&:hover {
		filter: brightness(.8);
	}

	> span {
		font-size: 1.06vw;
		font-weight: 550;
		letter-spacing: .035rem;

		color: var(--white);
	}

	> svg {
		width: 1.79vw;
		color: var(--white);
	}

	@media (max-width: 630px) {
		padding: .69vw 1.55vw .69vw 1.5vw;

		> span {
			font-size: 1.3vw;
		}
	}

	@media (max-width: 470px) {
		padding: .81vw 1.75vw .81vw 1.7vw;

		> span {
			font-size: 1.55vw;
		}
	}
`;

export const EmbeddedComponents = styled.div`
	position: absolute;
	right: 0;
	bottom: 35%;
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

	@media (max-width: 800px) {
		height: 2.6vw;
		padding: .1vw 3.2vw .1vw .9vw;

		border-left: 2px solid var(--white);

		> span::after {
			font-size: 1.3vw;

			width: 1.2vw;
			height: 1.2vw;
		}
	}
`;
