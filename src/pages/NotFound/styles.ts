import styled from 'styled-components';

export const Container = styled.div`
	width: 100vw;
	height: 100vh;

	background-image: url("https://assets.nflxext.com/ffe/siteui/pages/errors/bg-lost-in-space.png");
	background-attachment: fixed;
	background-repeat: no-repeat;
	background-size: cover;

	&::after {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: -1;

		background: linear-gradient(
			77deg,
			rgba(0,0,0,.4) 0,
			rgba(0,0,0,0) 35%
		);

		content: '';
	}

	> span {
		position: absolute;
		right: 0;
		bottom: 0;

		margin: 2.5vw 4.8vw;
		z-index: 2;

		font-size: 1.4em;
		color: var(--gray-50);
		text-shadow: 2px 2px 4px rgb(0 0 0 /45%);

		@media (max-width: 1400px) {
			font-size: 1.1em;
		}
	}
`;

export const ErrorContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	width: 100vw;
	height: 100vh;

	> div {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;

		text-align: center;
		max-width: 61rem;
		margin: 1rem;

		> h1 {
			font-size: 4.7vw;
			text-shadow: 2px 2px 4px rgb(0 0 0 /45%);

			margin-bottom: 2.1rem;
		}

		> p {
			font-size: 1.65vw;
			letter-spacing: .05rem;
			text-shadow: 2px 2px 4px rgb(0 0 0 /45%);

			margin-bottom: 1.6rem;
		}

		> a {
			display: flex;
			justify-content: center;
			align-items: center;

			padding: .9rem 2rem;
			margin-bottom: 3.2rem;

			border-radius: 4px;
			font-size: 1.2vw;
			font-weight: bold;
			color: var(--black);
			background-color: var(--white);

			cursor: pointer;

			&:hover {
        opacity: .85;
    	}
		}

		> span {
			font-size: 2.1em;
			font-weight: 100;
			letter-spacing: .3rem;
			line-height: 2.1em;
			text-shadow: 2px 2px 4px rgb(0 0 0 /45%);

			padding: 0 1vw;

			border-left: 2px solid var(--red);
		}

		@media (max-width: 1100px) {
			> a {
				font-size: 15px;
				padding: .7rem 1.7rem;
			}

			> span {
				font-size: 1.8em;
				line-height: 1.8em;
			}
		}

		@media (max-width: 800px) {
			> h1 {
				font-size: 39px;
			}

			> p {
				font-size: 15px;
			}

			> a {
				font-size: 13px;
				padding: .6rem 1.2rem;
			}

			> span {
				font-size: 1.2em;
				line-height: 1.2em;
				padding: 0 .6vw;
			}
		}
	}
`;
