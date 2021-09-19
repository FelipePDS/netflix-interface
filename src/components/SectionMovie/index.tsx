import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useMovieContext } from '../../context/MovieContext';

import { 
  Container,
  SectionTitle,
  AngleRightIcon,
  Wrapper,
  PaginationIndicator,
  SectionContent,
  HandlePagination,
  ChevronForwardIcon,
  ChevronBackIcon
} from './styles';

import MovieCard from '../MovieCard';

type Props = {
  sectionMovieIndex: number;
};

type PagesSectionMovieProps = {
  index: number;
  isCurrent: boolean;
  totalMovieCardsOnPage: number;
};

const SectionMovie: React.FC<Props> = ({
  sectionMovieIndex
}) => {
  const { sectionMovieList } = useMovieContext();
  const sectionMovie = sectionMovieList[sectionMovieIndex];

  const [ pagesSectionMovie, setPagesSectionMovie ] = useState<PagesSectionMovieProps[]>(
    [{
      index: 0,
      isCurrent: true,
      totalMovieCardsOnPage: 0
    }]
  );

  const [sectionWasScrolled, setSectionWasScrolled] = useState<boolean>(false);

  const sectionWrapperMessagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const movieCardMessagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const sectionWrapperElement = sectionWrapperMessagesRef.current;
    const movieCardElement = movieCardMessagesRef.current;

    if (sectionWrapperElement && movieCardElement) {
      const sectionWrapperWidth = sectionWrapperElement.clientWidth;
      const movieCardWidth = movieCardElement.clientWidth;

      const totalMovieCardsOnScreen =  Math.floor(sectionWrapperWidth / movieCardWidth);

      let totalPagesSectionMovie = Math.floor(
        sectionMovie.movies.length / totalMovieCardsOnScreen
      );

      const totalExcessMoviesOnPage = sectionMovie.movies.length % totalPagesSectionMovie;

      const totalMovieCardsOnLastPage = totalExcessMoviesOnPage === 0
        ? totalMovieCardsOnScreen : totalExcessMoviesOnPage;

      totalExcessMoviesOnPage > 0 && totalPagesSectionMovie++;

      setPagesSectionMovie(
        Array.from(
          Array(totalPagesSectionMovie).keys()
        )
        .map(index => ({
          index,
          isCurrent: index === 0,
          totalMovieCardsOnPage: index === totalPagesSectionMovie - 1
            ? totalMovieCardsOnLastPage : totalMovieCardsOnScreen
        }))
      );
    }
  }, [sectionWrapperMessagesRef,
      movieCardMessagesRef,
      sectionMovie]
  );

  function handlePaginationDirection(direction: 'right' | 'left') {
    const currentPage = pagesSectionMovie.find(page => page.isCurrent) 
      || pagesSectionMovie[0];

    let nextPage: PagesSectionMovieProps;

    nextPage = pagesSectionMovie.find(page => (
      page.index === currentPage.index - 1
    )) || pagesSectionMovie[pagesSectionMovie.length - 1];

    if (direction === 'right') {
      nextPage = pagesSectionMovie.find(page => (
        page.index === currentPage.index + 1
      )) || pagesSectionMovie[0];
    }

    setPagesSectionMovie(
      pagesSectionMovie.map(page => ({
        ...page,
        isCurrent: page.index === nextPage.index
      }))
    );

    const sectionWrapperElement = sectionWrapperMessagesRef.current;
    const movieCardElement = movieCardMessagesRef.current;
    const movieCardWidth = movieCardElement.clientWidth;

    const currentPageWidth = movieCardWidth * (pagesSectionMovie[nextPage.index - 1]?.totalMovieCardsOnPage * (nextPage.index - 1));
    const nextPageWidth = movieCardWidth * nextPage.totalMovieCardsOnPage;
    const nextSectionScroll = nextPage.index !== 0
      ? currentPageWidth + nextPageWidth
      : 0;

    sectionWrapperElement.scrollTo({
      left: nextSectionScroll,
      behavior: 'smooth'
    });

    !sectionWasScrolled && setSectionWasScrolled(true);
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

      <Wrapper 
        ref={sectionWrapperMessagesRef}
        className={`${sectionWasScrolled && 'section-wrapper-expanded'}`}
      >
        <PaginationIndicator className="paginationIndicator">
          {pagesSectionMovie.map(page => (
            <li 
              key={page.index}
              className={`${page.isCurrent && 'active'}`}
            />
          ))}
        </PaginationIndicator>

        <HandlePagination
          className={`handlePrevious ${!sectionWasScrolled && 'disabled'}`}
          onClick={() => handlePaginationDirection('left')}
        >
          <ChevronBackIcon className="handlePreviousIcon" />
        </HandlePagination>

        <SectionContent>
          {
            sectionMovie.movies.map(movie => (
              <div key={movie.id} ref={movieCardMessagesRef}>
                <MovieCard
                  {...movie}
                  isPoster={sectionMovie.isPoster}
                />
              </div>
            ))
          }
        </SectionContent>

        <HandlePagination
          className="handleNext"
          onClick={() => handlePaginationDirection('right')}
        >
          <ChevronForwardIcon className="handleNextIcon" />
        </HandlePagination>
      </Wrapper>
    </Container>
  );
}

export default SectionMovie;
