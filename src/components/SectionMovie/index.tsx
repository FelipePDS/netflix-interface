import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { 
  SectionMovieProps,
  useMovieContext
} from '../../context/MovieContext';

import { 
  Container,
  SectionTitle,
  AngleRightIcon,
  Wrapper,
  PaginationIndicator,
  SectionContent,
  HandleNext,
  ChevronForwardIcon
} from './styles';

import MovieCard from '../MovieCard';

type Props = {
  sectionMovieIndex: number;
};

type PagesSectionMovieProps = {
  index: number;
  isCurrent: boolean;
};

const SectionMovie: React.FC<Props> = ({
  sectionMovieIndex
}) => {
  const { sectionMovieList } = useMovieContext();
  const sectionMovie: SectionMovieProps = sectionMovieList[sectionMovieIndex];

  const [
    pagesSectionMovie,
    setPagesSectionMovie
  ] = useState<PagesSectionMovieProps[]>(
    [{
      index: 0,
      isCurrent: true
    }]
  );

  const sectionWrapperMessagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const movieCardMessagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const sectionWrapperElement = sectionWrapperMessagesRef.current;
    const movieCardElement = movieCardMessagesRef.current;

    if (sectionWrapperElement && movieCardElement) {
      const sectionWrapperWidth = sectionWrapperElement.clientWidth;
      const movieCardWidth = movieCardElement.clientWidth;

      const totalMovieCardsOnScreen = sectionWrapperWidth / movieCardWidth;

      const totalPagesSectionMovie = Math.floor(
        sectionMovie.movies.length / totalMovieCardsOnScreen
      );

      setPagesSectionMovie(
        Array.from(
          Array(totalPagesSectionMovie).keys()
        )
        .map(index => ({
          index,
          isCurrent: index === 0
        }))
      );
    }
  }, [
      sectionWrapperMessagesRef,
      movieCardMessagesRef,
      sectionMovie
    ]
  );

  function handleNextPage() {
    const currentPage = pagesSectionMovie.find(page => page.isCurrent) 
      || pagesSectionMovie[0];

    const nextPage = pagesSectionMovie.find(page => (
      page.index === currentPage.index + 1
    )) || pagesSectionMovie[0];

    setPagesSectionMovie(
      pagesSectionMovie.map(page => ({
        index: page.index,
        isCurrent: page.index === nextPage.index
      }))
    );
  }

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

      <Wrapper ref={sectionWrapperMessagesRef}>
        <PaginationIndicator className="paginationIndicator">
          {
            pagesSectionMovie.map(page => (
              <li 
                key={page.index}
                className={`${page.isCurrent && 'active'}`}
              />
            ))
          }
        </PaginationIndicator>

        <SectionContent>
          {
            sectionMovie.movies.map(movie => (
              <div
                key={movie.id}
                ref={movieCardMessagesRef}
              >
                <MovieCard
                  {...movie}
                />
              </div>
            ))
          }
        </SectionContent>

        <HandleNext
          onClick={() => handleNextPage()}
        >
          <ChevronForwardIcon className="handleNextIcon" />
        </HandleNext>
      </Wrapper>
    </Container>
  );
}

export default SectionMovie;
