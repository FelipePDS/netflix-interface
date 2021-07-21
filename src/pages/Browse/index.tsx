import React, { useContext, useEffect, useState } from 'react';

import { ProfileContext } from '../../context/ProfileContext';
import { userApi, movieApi } from '../../services/api';
import { UpdateProfileList } from '../../utils/profileUtil';

import { Container } from './styles';

import MenuTop from '../../components/MenuTop';

type MovieProps = {
  id: string;
  name?: string;
  title?: string;
  overview: string;
  poster_path: string;
};

type SectionMoviesProps = {
  id: number;
  name: string;
  movies: MovieProps[];
};

const Browse: React.FC = () => {
  const [sectionsMovies, setSectionsMovies] = useState<SectionMoviesProps[]>([]);

  const { 
    profileList,
    wasCaughtProfile,
    getProfile,
    selectedProfileId
  } = useContext(ProfileContext);

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

    if (sectionsMovies.length === 0) {
      movieApi.get(`/tv/popular?language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}`)
        .then(({ data }) => {
          console.log(data.results);
        });
    }
  }, [wasCaughtProfile, getProfile, sectionsMovies, selectedProfileId]);

  return (
    <Container>
      <MenuTop hasMenuNavigation />
    </Container>
  );
};

export default Browse;
