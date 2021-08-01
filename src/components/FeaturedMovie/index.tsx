import React, { useEffect } from 'react';
import { useState } from 'react';

import { MovieProps, useMovieContext } from '../../context/MovieContext';

import { Container } from './styles';

const FeaturedMovie: React.FC = () => {
    const {
        sectionMoviesList,
        featureMovieIndex
    } = useMovieContext();

    const [featureMovie, setFeatureMovie] = useState<MovieProps>(
        {} as MovieProps
    );

    useEffect(() => {
        setFeatureMovie(
            sectionMoviesList[featureMovieIndex.sectionIndex]
            .movies[featureMovieIndex.movieIndex]
        );
    }, [sectionMoviesList, 
        featureMovieIndex]
    );

    return (
        <Container>
            {featureMovie.id}
        </Container>
    );
}

export default FeaturedMovie;
