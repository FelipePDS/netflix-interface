import React, { useContext, useEffect } from 'react';

import { ProfileContext } from '../../context/ProfileContext';
import { useMovieContext } from '../../context/MovieContext';

import { userApi, movieApi } from '../../services/api';
import { UpdateProfileList } from '../../utils/profileUtil';

import { Container } from './styles';

import MenuTop from '../../components/MenuTop';
import FeaturedMovie from '../../components/FeaturedMovie';

type MovieGenreRouteProps = {
  name: string;
  routePath: string;
};

const Browse: React.FC = () => {
  const currentLanguage = navigator.language;

  const { 
    profileList,
    wasCaughtProfile,
    getProfile,
    selectedProfileId
  } = useContext(ProfileContext);

  const {
    sectionMoviesList,
    featureMovieIndex,
    updateSectionMoviesList,
    updateFeatureMovieIndex
  } = useMovieContext();

  UpdateProfileList(profileList);

  useEffect(() => {
    if (!wasCaughtProfile) {
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

    const apiMovieUrls = movieGenreRoutes.map(({ routePath }) => {
      const url = routePath.concat(movieBaseRoute);

      return movieApi.get(url);
    });

    if (sectionMoviesList.length === 0) {
      Promise.all([...apiMovieUrls])
        .then(responses => {

          const sectionMovieResponses = responses.map((response, index) => ({
            id: index,
            name: movieGenreRoutes[index].name,
            movies: response.data.results
          }));

          updateSectionMoviesList(sectionMovieResponses);

          const randomFeatureMovie = Math.floor(
            Math.random() * sectionMovieResponses[0].movies.length
          );

          const indexSectionMovieFeature = 0;

          updateFeatureMovieIndex(
            indexSectionMovieFeature,
            randomFeatureMovie
          );

        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [currentLanguage, 
      getProfile,
      sectionMoviesList, 
      selectedProfileId, 
      wasCaughtProfile,
      updateSectionMoviesList,
      updateFeatureMovieIndex]
  );

  return (
    <Container>
      <MenuTop hasMenuNavigation />

      <FeaturedMovie featuredMovieIndex={featureMovieIndex} />
    </Container>
  );
};

export default Browse;
