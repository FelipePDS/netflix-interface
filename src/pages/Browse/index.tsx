import React, { useEffect, useState } from 'react';

import { 
  FormatedMovieProps, 
  SectionMovieProps, 
  useMovieContext 
} from '../../context/MovieContext';

import { 
  LoadProfileList,
  UpdateSelectedProfile
} from '../../utils/profileUtil';

import { 
  requestUrlsMovieApi,
  formatMovieList,
  getGenreList,
  raffleFeaturedMovieIndex
} from '../../utils/movieUtil';

import { Container, SectionMovieListContainer } from './styles';

import Load from '../../components/Load';
import MenuTop from '../../components/MenuTop';
import FeaturedMovie from '../../components/FeaturedMovie';
import SectionMovie from '../../components/SectionMovie';
import Footer from '../../components/Footer';

type MovieApiRoutePathsProps = {
  name: string;
  routePath: string;
  isPoster?: boolean;
};

const Browse: React.FC = () => {
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  const {
    sectionMovieList,
    updateSectionMoviesList,
    updateFeaturedMovieIndex
  } = useMovieContext();

  LoadProfileList();
  UpdateSelectedProfile();

  useEffect(() => {
    async function loadMovies() {
      const genreList = await getGenreList();

      const movieApiRoutePaths: MovieApiRoutePathsProps[] = [
        { name: 'Em alta', routePath: '/tv/popular?' },
        { name: 'Melhores Avaliados', routePath: '/movie/top_rated?' },
        { name: 'Lançamentos', routePath: '/movie/now_playing?' },
        { name: 'Populares na Netflix', routePath: '/trending/all/week?', isPoster: true },
        { name: 'Ação', routePath: '/discover/movie?with_genres=28&' },
        { name: 'Ficção científica', routePath: '/discover/movie?with_genres=878&' },
        { name: 'Romance', routePath: '/discover/movie?with_genres=10749&' }
      ];

      Promise.all(requestUrlsMovieApi(movieApiRoutePaths)).then(responses => {
        const sectionMoviesListResponses: SectionMovieProps[] = responses.map(
          (response, index) => {
            const movieList: FormatedMovieProps[] = response.data.results;

            console.log(response.data.results);

            return {
              id: index,
              name: movieApiRoutePaths[index].name,
              isPoster: movieApiRoutePaths[index].isPoster ? true : false,
              movies: formatMovieList(movieList, genreList)
            }
          }
        );

        updateSectionMoviesList(sectionMoviesListResponses);

        const sectionFeaturedMovieIndex = 0;
        const randomFeaturedMovieIndex = raffleFeaturedMovieIndex(
          sectionMoviesListResponses[sectionFeaturedMovieIndex]
        );

        updateFeaturedMovieIndex(sectionFeaturedMovieIndex, randomFeaturedMovieIndex);
      })
      .catch(err => {
        console.log(err);
      });
    }

    const hasSectionMovieListLoaded = sectionMovieList.length > 0;

    if (!hasSectionMovieListLoaded) {
      loadMovies();
    }

    setTimeout(() => {
      setIsLoading(!hasSectionMovieListLoaded);
    }, 1200);

  }, [sectionMovieList,
      updateSectionMoviesList,
      updateFeaturedMovieIndex]
  );

  return (
    <Container>
      {
        isLoading
          ? (
            <Load />
          )
          : (
            <>
              <MenuTop hasMenuNavigation />
      
              <FeaturedMovie />

              <SectionMovieListContainer>
                {
                  sectionMovieList.map(({ id }, index) => (
                    <SectionMovie 
                      key={id} 
                      sectionMovieIndex={index}
                    />
                  ))
                }
              </SectionMovieListContainer>

              <Footer />
            </>
          )
      }
    </Container>
  );
};

export default Browse;
