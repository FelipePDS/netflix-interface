import React, { useEffect, useState } from 'react';

import { FormatedMovieProps, useMovieContext } from '../../context/MovieContext';

import { 
	Container,
	HeroImageWrapper,
	FeaturedMovieInfo,
	TitleWrapper,
	DetailsWrapper,
	DescriptionWrapper,
	NavigationButtons,
	PlayIcon,
	InfoCircleIcon,
	PlayButton,
	MoreInfoButton,
	EmbeddedComponents,
	MaturityRating
} from './styles';

const FeaturedMovie: React.FC = () => {
	const {
		sectionMovieList,
		featuredMovieIndex
	} = useMovieContext();

	const [featuredMovie, setFeaturedMovie] = useState<FormatedMovieProps>(
		{} as FormatedMovieProps
	);

	useEffect(() => {
		setFeaturedMovie(
			sectionMovieList[featuredMovieIndex.sectionIndex]
			.movies[featuredMovieIndex.movieIndex]
		);

	}, [sectionMovieList, featuredMovieIndex]);

	return (
		<Container 
			imageUrl={featuredMovie.backdrop_path_original_url}
		>
			<HeroImageWrapper>
				<FeaturedMovieInfo>
					<TitleWrapper>
						{featuredMovie.name?.substr(0, 30)}
						{featuredMovie.name?.length >= 30 && '...'}
					</TitleWrapper>

					<DetailsWrapper>
						<span>
							<strong>{featuredMovie.rating} relevante</strong>
						</span>

						<span>{featuredMovie.first_air_year}</span>

						<span>{/*featuredMovie.seasons*/} 03 Temporadas</span>
					</DetailsWrapper>

					<DescriptionWrapper>
							{featuredMovie.overview?.substr(0, 300)}
							{featuredMovie.overview?.length >= 300 && '...'}
					</DescriptionWrapper>

					<NavigationButtons>
						<PlayButton>
							<PlayIcon />
							<span>Assistir</span>
						</PlayButton>

						<MoreInfoButton>
							<InfoCircleIcon />
							<span>Mais informações</span>
						</MoreInfoButton>
					</NavigationButtons>
				</FeaturedMovieInfo>

				<EmbeddedComponents>
					<MaturityRating adult={featuredMovie.adult}>
						<span />
					</MaturityRating>
				</EmbeddedComponents>
			</HeroImageWrapper>
		</Container>
	);
}

export default FeaturedMovie;
