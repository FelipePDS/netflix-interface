import { AxiosResponse } from 'axios';

import { 
	GenreProps,
	FormatedMovieProps,
	SectionMovieProps
} from '../context/MovieContext';

import { movieApi } from '../services/api';

type MovieApiRoutePathsProps = {
	name: string;
	routePath: string;
  isPoster?: boolean;
};

function requestUrlsMovieApi(
	movieApiRoutePaths: MovieApiRoutePathsProps[]
): Promise<AxiosResponse<any>>[] {
	const currentLanguage = navigator.language;
	const apiKey = process.env.REACT_APP_API_KEY;
  
	const movieRouteParams = `
		language=${currentLanguage}&api_key=${apiKey}
	`;

	const requests = movieApiRoutePaths.map(({ routePath }) => {
		const url = routePath.concat(movieRouteParams);

		return movieApi.get(url);
	});

	return requests;
}

async function getGenreList(): Promise<GenreProps[]> {
	const currentLanguage = navigator.language;
	const apiKey = process.env.REACT_APP_API_KEY;

	const movieGenresResponses = await movieApi.get(
		`/genre/list?language=${currentLanguage}&api_key=${apiKey}`
	);
	const movieGenresList: GenreProps[] = movieGenresResponses.data.genres;

	const tvGenresResponses = await movieApi.get(
		`/genre/tv/list?language=${currentLanguage}&api_key=${apiKey}`
	);
	const tvGenresList: GenreProps[] = tvGenresResponses.data.genres;

	const genreList = movieGenresList.concat(tvGenresList);

	return genreList;
}

function formatMovieList(
	movieList: FormatedMovieProps[], genreList: GenreProps[]
): FormatedMovieProps[] {
	return movieList.map(movie => {
		const first_air_year = movie.first_air_date?.split('-')[0];
		const rating = `${movie.vote_average * 10}%`;

		const images_base_url = `${process.env.REACT_APP_IMAGES_URL_BASE}`;

		const imageSizeOriginal = `${process.env.REACT_APP_IMAGE_SIZE_ORIGINAL}`;
		const imageSizeW1280 = `${process.env.REACT_APP_IMAGE_SIZE_W1280}`;

		const backdrop_path_original_url = images_base_url + imageSizeOriginal + movie.backdrop_path;
		const backdrop_path_w1280_url = images_base_url + imageSizeW1280 + movie.backdrop_path;
		
		const poster_path_original_url = images_base_url + imageSizeOriginal + movie.poster_path;
		const poster_path_w1280_url = images_base_url + imageSizeW1280 + movie.poster_path;

		const seasons = `
			${movie.number_of_seasons} Temporada${
				movie.number_of_seasons === 1 ? '' : 's'
			}
		`;

		const genres = movie.genre_ids.map(genreId => (
			genreList.find((genre) => (
				genre.id === Number(genreId) && genre
			))
		));

		return {
			...movie,
			first_air_year,
			rating,
			images_base_url,
			backdrop_path_original_url,
			backdrop_path_w1280_url,
			poster_path_original_url,
			poster_path_w1280_url,
			seasons,
			genres
		}
	});
}

function raffleFeaturedMovieIndex(
	sectionFeaturedMovie: SectionMovieProps,
): number {
	let randomFeaturedMovieIndex: number;

	do {
		randomFeaturedMovieIndex = Math.floor(
			Math.random() * sectionFeaturedMovie.movies.length
		);
	} while (
		sectionFeaturedMovie.movies[randomFeaturedMovieIndex].backdrop_path === null
			|| sectionFeaturedMovie.movies[randomFeaturedMovieIndex].overview === ''
	);

	return randomFeaturedMovieIndex;
}

export { 
	requestUrlsMovieApi,
	getGenreList,
	formatMovieList,
	raffleFeaturedMovieIndex
}
