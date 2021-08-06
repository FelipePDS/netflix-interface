import React, { useEffect, useState } from 'react';

import { useProfileContext } from '../../context/ProfileContext';
import { FormatedMovieProps, SectionMoviesProps, useMovieContext } from '../../context/MovieContext';

import { userApi, movieApi } from '../../services/api';
import { LoadProfileList } from '../../utils/profileUtil';

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

  const { 
    profileList,
    wasCaughtSelectedProfile,
    getProfile,
    selectedProfileId
  } = useProfileContext();

  const {
    sectionMoviesList,
    updateSectionMoviesList,
    updateFeatureMovieIndex,
    featureMovieIndex
  } = useMovieContext();

  const [isLoad, setIsLoad] = useState<Boolean>(true);

  LoadProfileList();

  useEffect(() => {
    if (!wasCaughtSelectedProfile) {
      userApi.get('users', {
        params: {
          id: selectedProfileId
        }
      })
        .then(({ data }) => {
          getProfile(data[0]);
        })
        .catch(err => {
          console.log(err);
        });
    }

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
      Promise.all([...loadUrlsMovieApi])
        .then(responses => {

          const sectionMovieResponses: SectionMoviesProps[] = responses.map(
            (response, index) => {
              const movieList = response.data.results as FormatedMovieProps[];

              console.log(response.data.results);

              return {
                id: index,
                name: movieGenreRoutes[index].name,
                movies: movieList.map(movie => {
                  const first_air_year = movie.first_air_date?.split('-')[0];
                  const rating = `${movie.vote_average * 10}%`;

                  const imagePathBase = 'https://image.tmdb.org/t/p/original';
                  const backdrop_path_full = imagePathBase + movie.backdrop_path;
                  const poster_path_full = imagePathBase + movie.poster_path;

                  const seasons = `
                    ${movie.number_of_seasons} Temporada${
                      movie.number_of_seasons === 1 ? '' : 's'
                    }
                  `;

                  return {
                    ...movie,
                    first_air_year,
                    rating,
                    backdrop_path_full,
                    poster_path_full,
                    seasons
                  }
                })
              }
            }
          );

          updateSectionMoviesList(sectionMovieResponses);

          const indexSectionMovieFeature = 0;

          const randomFeatureMovie = Math.floor(
            Math.random() * sectionMovieResponses[indexSectionMovieFeature].movies.length
          );

          updateFeatureMovieIndex(
            indexSectionMovieFeature,
            randomFeatureMovie
          );

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
      getProfile,
      sectionMoviesList, 
      selectedProfileId, 
      wasCaughtSelectedProfile,
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
