import React from 'react';

import { Container } from './styles';

import { FormatedMovieProps } from '../../context/MovieContext';

const MovieCard: React.FC<FormatedMovieProps> = ({
  name,
  title,
  backdrop_path_full,
  poster_path_full,
  genres
}) => {
  return (
    <Container 
      imageUrl={poster_path_full}
    >
      {/* {name || title} */}
    </Container>
  );
}

export default MovieCard;
