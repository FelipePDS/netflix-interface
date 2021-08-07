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

export type SectionMoviesProps = {
    id: number;
    name: string;
    movies: FormatedMovieProps[];
};

export type FeatureMovieIndexProps = {
    sectionIndex: number;
    movieIndex: number;
};

type MovieContextData = {
    sectionMoviesList: SectionMoviesProps[];
    featureMovieIndex: FeatureMovieIndexProps;
    updateSectionMoviesList: (sectionMoviesList: SectionMoviesProps[]) => void;
    updateFeatureMovieIndex: (sectionIndex: number, movieId: number) => void;
};

const MovieContext = createContext({} as MovieContextData);

type MovieContextProviderProps = {
    children: ReactNode
};

export function MovieContextProvider({ children }: MovieContextProviderProps) {
    const [sectionMoviesList, setSectionMoviesList] = useState<SectionMoviesProps[]>([]);
    const [featureMovieIndex, setFeatureMovieIndex] = useState<FeatureMovieIndexProps>(
        {} as FeatureMovieIndexProps
    );

    function updateSectionMoviesList(sectionMoviesList: SectionMoviesProps[]) {
        setSectionMoviesList(sectionMoviesList);
    }

    function updateFeatureMovieIndex(sectionIndex: number, movieIndex: number) {
        setFeatureMovieIndex({ sectionIndex, movieIndex });
    }

    

    return (
        <MovieContext.Provider value={{
            sectionMoviesList,
            featureMovieIndex,
            updateSectionMoviesList,
            updateFeatureMovieIndex
        }}>
            {children}
        </MovieContext.Provider>
    );
}

export function useMovieContext() {
    return useContext(MovieContext);
};
