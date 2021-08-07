import React, { useEffect, useState } from 'react';

import { useProfileContext } from '../../context/ProfileContext';
import { 
  GenreProps,
  FormatedMovieProps, 
  SectionMoviesProps, 
  useMovieContext 
} from '../../context/MovieContext';

import { formatMovieList } from '../../utils/movieUtil';
import { 
  LoadProfileList,
  UpdateSelectedProfile
} from '../../utils/profileUtil';

import { movieApi } from '../../services/api';

import { Container } from './styles';

import MenuTop from '../../components/MenuTop';
import FeaturedMovie from '../../components/FeaturedMovie';
import Load from '../../components/Load';

type MovieGenreRouteProps = {
  name: string;
  routePath: string;
};

const Browse: React.FC = () => {
  const currentLanguage = navigator.language;

  const { profileList } = useProfileContext();
  const {
    sectionMoviesList,
    updateSectionMoviesList,
    updateFeatureMovieIndex,
    featureMovieIndex
  } = useMovieContext();

  const [isLoad, setIsLoad] = useState<Boolean>(true);

  LoadProfileList();
  UpdateSelectedProfile();

  useEffect(() => {
    const movieGenreRoutes : MovieGenreRouteProps[] = [
      { name: 'Em alta', routePath: '/tv/popular?' },
      { name: 'Populares na Cloneflix', routePath: '/trending/all/week?' },
      { name: 'Melhores Avaliados', routePath: '/movie/top_rated?' },
      { name: 'Lançamentos', routePath: '/movie/now_playing?' },
      { name: 'Ação', routePath: '/discover/movie?with_genres=28&' },
      { name: 'Ficção científica', routePath: '/discover/movie?with_genres=878&' },
      { name: 'Romance', routePath: '/discover/movie?with_genres=10749&' }
    ];

    const movieBaseRoute = `
      language=${currentLanguage}&api_key=${process.env.REACT_APP_API_KEY}
    `;

    const loadUrlsMovieApi = movieGenreRoutes.map(({ routePath }) => {
      const url = routePath.concat(movieBaseRoute);

      return movieApi.get(url);
    });

    if (sectionMoviesList.length === 0) {
      movieApi.get(`/genre/list?api_key=${process.env.REACT_APP_API_KEY}`)
        .then(({ data }) => {
          return data.genres;
        })
        .then((genreList: GenreProps[]) => {
          Promise.all([...loadUrlsMovieApi])
            .then(responses => {

              const sectionMoviesResponses: SectionMoviesProps[] = responses.map(
                (response, index) => {
                  const movieList = response.data.results as FormatedMovieProps[];

                  return {
                    id: index,
                    name: movieGenreRoutes[index].name,
                    movies: formatMovieList(movieList, genreList)
                  }
                }
              );

              updateSectionMoviesList(sectionMoviesResponses);

              const indexSectionMovieFeature = 0;
              let randomIndexFeatureMovie: number;

              do {
                randomIndexFeatureMovie = Math.floor(
                  Math.random() * sectionMoviesResponses[indexSectionMovieFeature].movies.length
                );
              } while (
                sectionMoviesResponses[indexSectionMovieFeature]
                  .movies[randomIndexFeatureMovie].backdrop_path === null
              );

              updateFeatureMovieIndex(
                indexSectionMovieFeature,
                randomIndexFeatureMovie
              );

            })
            .catch(err => {
              console.log(err);
            });
        })
        .catch(err => {
          console.log(err);
        });
    }

    setTimeout(() => {
      setIsLoad(
        !(sectionMoviesList.length > 0) ||
        (featureMovieIndex.movieIndex === undefined &&
        featureMovieIndex.sectionIndex === undefined) ||
        !(profileList.length > 0)
      );
    }, 1200);

  }, [currentLanguage, 
      profileList,
      sectionMoviesList,
      updateSectionMoviesList,
      updateFeatureMovieIndex,
      featureMovieIndex]
  );

  return (
    <Container>
      {
        isLoad
          ? (
            <Load />
          )
          : (
            <>
              <MenuTop hasMenuNavigation />
      
              <FeaturedMovie />
            </>
          )
      }
    </Container>
  );
};

export default Browse;
