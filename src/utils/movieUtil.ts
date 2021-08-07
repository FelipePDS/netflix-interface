import { AxiosResponse } from 'axios';

import { 
    GenreProps,
    FormatedMovieProps
} from '../context/MovieContext';

import { movieApi } from '../services/api';

type MovieApiRoutePathsProps = {
    name: string;
    routePath: string;
};

function formatMovieList(
    movieList: FormatedMovieProps[],
    genreList: GenreProps[]
): FormatedMovieProps[] {
    return movieList.map(movie => {
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

        const genres = movie.genre_ids.map(genreId => (
            genreList.find(({ id, name }) => (
            id === Number(genreId)
                && {
                id,
                name
                }
            ))
        ));

        return {
            ...movie,
            first_air_year,
            rating,
            backdrop_path_full,
            poster_path_full,
            seasons,
            genres
        }
    });
}

function requestUrlsMovieApi(

    apiKey: string | undefined,
    currentLanguage: string,
    movieApiRoutePaths: MovieApiRoutePathsProps[]

): Promise<AxiosResponse<any>>[] {
    const movieGenreRoutes : MovieApiRoutePathsProps[] = [
        { name: 'Em alta', routePath: '/tv/popular?' },
        { name: 'Populares na Cloneflix', routePath: '/trending/all/week?' },
        { name: 'Melhores Avaliados', routePath: '/movie/top_rated?' },
        { name: 'Lançamentos', routePath: '/movie/now_playing?' },
        { name: 'Ação', routePath: '/discover/movie?with_genres=28&' },
        { name: 'Ficção científica', routePath: '/discover/movie?with_genres=878&' },
        { name: 'Romance', routePath: '/discover/movie?with_genres=10749&' }
    ];
  
    const movieBaseRoute = `
        language=${currentLanguage}&api_key=${apiKey}
    `;

    const requests = movieGenreRoutes.map(({ routePath }) => {
        const url = routePath.concat(movieBaseRoute);

        return movieApi.get(url);
    });

    return requests;
}

export { 
    formatMovieList,
    requestUrlsMovieApi
}