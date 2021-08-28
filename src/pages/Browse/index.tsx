import React, { useEffect, useState } from 'react';

import { useProfileContext } from '../../context/ProfileContext';
import { 
  GenreProps,
  FormatedMovieProps, 
  SectionMovieProps, 
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

import { 
  Container,
  SectionMovieListContainer
} from './styles';

import Load from '../../components/Load';
import MenuTop from '../../components/MenuTop';
import FeaturedMovie from '../../components/FeaturedMovie';
import SectionMovie from '../../components/SectionMovie';
import Footer from '../../components/Footer';

type MovieGenreRouteProps = {
  name: string;
  routePath: string;
};

const Browse: React.FC = () => {
  const [isLoad, setIsLoad] = useState<Boolean>(true);

  const { profileList } = useProfileContext();
  const {
    sectionMovieList,
    updateSectionMoviesList,
    updateFeaturedMovieIndex,
    featuredMovieIndex
  } = useMovieContext();

  LoadProfileList();
  UpdateSelectedProfile();

  useEffect(() => {
    async function getSectionMovieList() {
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

      const genreResponses = await movieApi.get(
        `/genre/list?api_key=${apiKey}`
      );

      const genreList: GenreProps[] = genreResponses.data.genres;

      Promise.all([...requestUrlsMovieApi(movieApiRoutePaths)])
        .then(responses => {

          const sectionMovieListResponses: SectionMovieProps[] = responses.map(
            (response, index) => {
              const movieList: FormatedMovieProps[] = response.data.results;

              return {
                id: index,
                name: movieApiRoutePaths[index].name,
                movies: formatMovieList(movieList, genreList)
              }
            }
          );

          updateSectionMoviesList(sectionMovieListResponses);

          const sectionFeaturedMovieIndex = 0;
          const randomFeaturedMovieIndex = raffleFeaturedMovieIndex(
            sectionMovieListResponses, sectionFeaturedMovieIndex
          );

          updateFeaturedMovieIndex(
            sectionFeaturedMovieIndex, randomFeaturedMovieIndex
          );

        })
        .catch(err => {
          console.log(err);
        });
    }

    if (sectionMovieList.length === 0) {
      getSectionMovieList();
    }

    const hasSectionMovieListLoaded: boolean = sectionMovieList.length > 0;

    const hasFeaturedMovieLoaded: boolean = featuredMovieIndex.movieIndex !== undefined 
      && featuredMovieIndex.sectionIndex !== undefined;

    const hasProfileListLoaded: boolean = profileList.length > 0;

    setTimeout(() => {
      setIsLoad(
        (
          hasSectionMovieListLoaded &&
          hasFeaturedMovieLoaded &&
          hasProfileListLoaded
        ) && false
      );
    }, 1200);

  }, [profileList,
      sectionMovieList,
      updateSectionMoviesList,
      updateFeaturedMovieIndex,
      featuredMovieIndex]
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

              <SectionMovieListContainer>
                {
                  sectionMovieList.map((({ id }, index) => (
                    <SectionMovie 
                      key={id} 
                      sectionMovieIndex={index}
                    />
                  )))
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
