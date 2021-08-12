import React, { useEffect, useState } from 'react';

import { useProfileContext } from '../../context/ProfileContext';
import { 
  GenreProps,
  FormatedMovieProps, 
  MovieSectionProps, 
  useMovieContext 
} from '../../context/MovieContext';

import { 
  LoadProfileList,
  UpdateSelectedProfile
} from '../../utils/profileUtil';

import { 
  formatMovieList,
  requestUrlsMovieApi,
  raffleFeaturedMovieIndex
} from '../../utils/movieUtil';

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
    const [isLoad, setIsLoad] = useState<Boolean>(true);

  const { profileList } = useProfileContext();
  const {
    sectionMoviesList,
    updateSectionMoviesList,
    updateFeaturedMovieIndex,
    featureMovieIndex
  } = useMovieContext();

  LoadProfileList();
  UpdateSelectedProfile();

  useEffect(() => {
    if (sectionMoviesList.length === 0) {
      const apiKey = process.env.REACT_APP_API_KEY;
      
      const movieApiRoutePaths : MovieGenreRouteProps[] = [
        { name: 'Em alta', routePath: '/tv/popular?' },
        { name: 'Populares na Cloneflix', routePath: '/trending/all/week?' },
        { name: 'Melhores Avaliados', routePath: '/movie/top_rated?' },
        { name: 'Lançamentos', routePath: '/movie/now_playing?' },
        { name: 'Ação', routePath: '/discover/movie?with_genres=28&' },
        { name: 'Ficção científica', routePath: '/discover/movie?with_genres=878&' },
        { name: 'Romance', routePath: '/discover/movie?with_genres=10749&' }
      ];

      movieApi.get(`/genre/list?api_key=${apiKey}`)
        .then(({ data }) => {
          return data.genres;
        })
        .then((genreList: GenreProps[]) => {
          Promise.all([...requestUrlsMovieApi(movieApiRoutePaths)])
            .then(responses => {

              const sectionMoviesResponses: MovieSectionProps[] = responses.map(
                (response, index) => {
                  const movieList = response.data.results as FormatedMovieProps[];

                  return {
                    id: index,
                    name: movieApiRoutePaths[index].name,
                    movies: formatMovieList(movieList, genreList)
                  }
                }
              );

              updateSectionMoviesList(sectionMoviesResponses);

              const sectionFeaturedMovieIndex = 0;
              const randomFeaturedMovieIndex = raffleFeaturedMovieIndex(
                sectionMoviesResponses, sectionFeaturedMovieIndex
              );

              updateFeaturedMovieIndex(
                sectionFeaturedMovieIndex,
                randomFeaturedMovieIndex
              );

            })
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

  }, [profileList,
      sectionMoviesList,
      updateSectionMoviesList,
      updateFeaturedMovieIndex,
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
