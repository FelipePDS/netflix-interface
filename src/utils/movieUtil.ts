import { 
    GenreProps,
    FormatedMovieProps
} from '../context/MovieContext';

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

export { formatMovieList }