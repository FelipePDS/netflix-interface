import React, { useEffect, useState } from 'react';

import { FormatedMovieProps, useMovieContext } from '../../context/MovieContext';

import { 
    Container,
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
        sectionMoviesList,
        featureMovieIndex
    } = useMovieContext();

    const [featuredMovie, setFeaturedMovie] = useState<FormatedMovieProps>(
        {} as FormatedMovieProps
    );

    useEffect(() => {
        setFeaturedMovie(
            sectionMoviesList[featureMovieIndex.sectionIndex]
            .movies[featureMovieIndex.movieIndex]
        );

    }, [sectionMoviesList, featureMovieIndex]);

    return (
        <Container 
            imageUrl={featuredMovie.backdrop_path_full}
        >
            <FeaturedMovieInfo>
                <TitleWrapper>
                    {featuredMovie.name}
                </TitleWrapper>

                <DetailsWrapper>
                    <span>
                        <strong>{featuredMovie.rating} relevante</strong>
                    </span>

                    <span>{featuredMovie.first_air_year}</span>

                    <span>{/*featuredMovie.seasons*/} 03 Temporadas</span>
                </DetailsWrapper>

                <DescriptionWrapper>
                    {featuredMovie.overview}
                </DescriptionWrapper>

                <NavigationButtons>
                    <PlayButton>
                        <PlayIcon />
                        <span>Assistir</span>
                    </PlayButton>

                    <MoreInfoButton>
                        <InfoCircleIcon />
                        <span>Mais Informações</span>
                    </MoreInfoButton>
                </NavigationButtons>
            </FeaturedMovieInfo>

            <EmbeddedComponents>
                <MaturityRating adult={featuredMovie.adult}>
                    <span />
                </MaturityRating>
            </EmbeddedComponents>
        </Container>
    );
}

export default FeaturedMovie;
