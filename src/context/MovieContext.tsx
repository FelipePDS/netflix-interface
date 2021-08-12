import { createContext, useContext, ReactNode, useState } from 'react';

export type MovieProps = {
    adult: boolean;
    backdrop_path: string;
    first_air_date: string;
    genre_ids: (string | undefined)[];
    id: string;
    name?: string;
    number_of_seasons?: number;
    original_name?: string;
    original_title?: string;
    overview: string;
    poster_path: string;
    runtime?: string;
    title?: string;
    vote_average: number;
};

export type GenreProps = {
    id: number;
    name: string;
}

export interface FormatedMovieProps extends MovieProps {
    backdrop_path_full: string;
    first_air_year: string;
    genres: GenreProps[] | (GenreProps | undefined)[];
    poster_path_full: string;
    rating: string;
    seasons?: string;
};

export type MovieSectionProps = {
    id: number;
    name: string;
    movies: FormatedMovieProps[];
};

export type FeatureMovieIndexProps = {
    sectionIndex: number;
    movieIndex: number;
};

type MovieContextData = {
    movieSectionList: MovieSectionProps[];
    featureMovieIndex: FeatureMovieIndexProps;
    updateSectionMoviesList: (sectionMoviesList: MovieSectionProps[]) => void;
    updateFeaturedMovieIndex: (sectionIndex: number, movieId: number) => void;
};

const MovieContext = createContext({} as MovieContextData);

type MovieContextProviderProps = {
    children: ReactNode
};

export function MovieContextProvider({ children }: MovieContextProviderProps) {
    const [movieSectionList, setMovieSectionList] = useState<MovieSectionProps[]>([]);
    const [featureMovieIndex, setFeatureMovieIndex] = useState<FeatureMovieIndexProps>(
        {} as FeatureMovieIndexProps
    );

    function updateSectionMoviesList(movieSectionList: MovieSectionProps[]) {
        setMovieSectionList(movieSectionList);
    }

    function updateFeaturedMovieIndex(sectionIndex: number, movieIndex: number) {
        setFeatureMovieIndex({ sectionIndex, movieIndex });
    }

    return (
        <MovieContext.Provider value={{
            movieSectionList,
            featureMovieIndex,
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
