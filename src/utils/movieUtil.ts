import { AxiosResponse } from 'axios';

import { 
    GenreProps,
    FormatedMovieProps,
    SectionMoviesProps
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
    movieApiRoutePaths: MovieApiRoutePathsProps[]
): Promise<AxiosResponse<any>>[] {
    const currentLanguage = navigator.language;
    const apiKey = process.env.REACT_APP_API_KEY;
  
    const movieBaseRoute = `
        language=${currentLanguage}&api_key=${apiKey}
    `;

    const requests = movieApiRoutePaths.map(({ routePath }) => {
        const url = routePath.concat(movieBaseRoute);

        return movieApi.get(url);
    });

    return requests;
}

function raffleFeaturedMovieIndex(
    sectionMoviesResponses: SectionMoviesProps[],
    sectionFeaturedMovieIndex: number
): number {
    let randomFeaturedMovieIndex: number;

    do {
    randomFeaturedMovieIndex = Math.floor(
        Math.random() * sectionMoviesResponses[sectionFeaturedMovieIndex].movies.length
    );
    } while (
    sectionMoviesResponses[sectionFeaturedMovieIndex]
        .movies[randomFeaturedMovieIndex].backdrop_path === null
    );

    return randomFeaturedMovieIndex;
}

export { 
    formatMovieList,
    requestUrlsMovieApi,
    raffleFeaturedMovieIndex
}
