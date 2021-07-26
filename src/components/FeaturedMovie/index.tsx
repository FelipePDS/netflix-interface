import React from 'react';

import { FeatureMovieIndexProps, useMovieContext } from '../../context/MovieContext';

import { Container } from './styles';

type Props = {
    featuredMovieIndex: FeatureMovieIndexProps;
};

const FeaturedMovie: React.FC<Props> = ({ 
    featuredMovieIndex 
}) => {
    const {
        sectionMoviesList,
        featureMovieIndex
    } = useMovieContext();

    const featureMovie = sectionMoviesList[featureMovieIndex.sectionIndex]
        .movies[featureMovieIndex.movieIndex];
    
    console.log(featureMovie);

    return (
        <Container>
            
        </Container>
    );
}

export default FeaturedMovie;
