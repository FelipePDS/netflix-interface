import { createContext, useContext, ReactNode, useState } from 'react';

export type MovieProps = {
	adult: boolean;
	backdrop_path: string;
	first_air_date: string;
	genre_ids: (string | undefined)[];
	id: string;
	name: string;
	number_of_seasons: number;
	original_name: string;
	original_title: string;
	overview: string;
	poster_path: string;
	runtime: string;
	title: string;
	vote_average: number;
};

export type GenreProps = {
	id: number;
	name: string;
}

export interface FormatedMovieProps extends MovieProps {
	images_base_url: string;
	backdrop_path_original_url: string;
	backdrop_path_w1280_url: string;
	poster_path_original_url: string;
	poster_path_w1280_url: string;
	first_air_year: string;
	genres: GenreProps[] | (GenreProps | undefined)[];
	rating: string;
	seasons: string;
};

export type SectionMovieProps = {
	id: number;
	name: string;
	isPoster: boolean | undefined;
	movies: FormatedMovieProps[];
};

export type FeaturedMovieIndexProps = {
	sectionIndex: number;
	movieIndex: number;
};

type MovieContextData = {
	sectionMovieList: SectionMovieProps[];
	featuredMovieIndex: FeaturedMovieIndexProps;
	updateSectionMoviesList: (sectionMoviesList: SectionMovieProps[]) => void;
	updateFeaturedMovieIndex: (sectionIndex: number, movieId: number) => void;
};

const MovieContext = createContext({} as MovieContextData);

type MovieContextProviderProps = {
	children: ReactNode
};

export function MovieContextProvider({ children }: MovieContextProviderProps) {
	const [sectionMovieList, setSectionMovieList] = useState<SectionMovieProps[]>([]);
	const [featuredMovieIndex, setFeaturedMovieIndex] = useState<FeaturedMovieIndexProps>(
		{} as FeaturedMovieIndexProps
	);

	function updateSectionMoviesList(movieSectionList: SectionMovieProps[]) {
		setSectionMovieList(movieSectionList);
	}

	function updateFeaturedMovieIndex(sectionIndex: number, movieIndex: number) {
		setFeaturedMovieIndex({ sectionIndex, movieIndex });
	}

	return (
		<MovieContext.Provider value={{
			sectionMovieList,
			featuredMovieIndex,
			updateSectionMoviesList,
			updateFeaturedMovieIndex
		}}>
			{children}
		</MovieContext.Provider>
	);
}

export function useMovieContext() {
	return useContext(MovieContext);
};
