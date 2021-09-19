import React from 'react';

import { 
  Container,
  MovieCardControl
} from './styles';

import { useWindowDimensions } from '../../utils/appUtil';

import { FormatedMovieProps } from '../../context/MovieContext';

interface MovieCardProps extends FormatedMovieProps {
  isPoster?: boolean;
};

const MovieCard: React.FC<MovieCardProps> = ({
  backdrop_path_w1280_url,
  poster_path_w1280_url,
  isPoster
}) => {
  const { windowWidth } = useWindowDimensions();

  const isMobileCard = windowWidth < 800;

  const movieCardImage = isMobileCard || isPoster
    ? poster_path_w1280_url
    : backdrop_path_w1280_url;

  return (
    <Container 
      className={`
        ${isPoster ? 'poster-movie' : ''}
        ${isMobileCard ? 'mobile-card' : ''}
      `}
      imageUrl={movieCardImage}
    >
      <MovieCardControl>
        
      </MovieCardControl>
    </Container>
  );
}

export default MovieCard;
