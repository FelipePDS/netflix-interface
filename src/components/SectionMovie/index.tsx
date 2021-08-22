import React from 'react';
import { Link } from 'react-router-dom';

import { 
  SectionMovieProps,
  useMovieContext
} from '../../context/MovieContext';

import { 
  Container,
  SectionTitle,
  AngleRightIcon,
  SectionContent
} from './styles';

import MovieCard from '../MovieCard';

type Props = {
  sectionMovieId: number;
};

const SectionMovie: React.FC<Props> = ({
  sectionMovieId
}) => {
  const {
    sectionMovieList
  } = useMovieContext();

  const sectionMovie: SectionMovieProps = sectionMovieList[sectionMovieId];

  return (
    <Container>
      <SectionTitle>
        <Link to="/browse">
          {sectionMovie.name} 

          <span className="view-all-content">
            <strong>Ver tudo</strong>
            <AngleRightIcon />
          </span>
        </Link>
      </SectionTitle>

      <SectionContent>
        {
          sectionMovie.movies.map(movie => (
            <MovieCard
              key={movie.id}
              {...movie}
            />
          ))
        }
      </SectionContent>
    </Container>
  );
}

export default SectionMovie;
