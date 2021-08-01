import { createContext, useContext, ReactNode, useState } from 'react';

export type MovieProps = {
    id: string;
    name?: string;
    title?: string;
    overview: string;
    poster_path: string;
    imageUrl: string;
    rating: string;
    releaseDate: string;
    seasons?: string;
    runtime?: string;
    genres: string;
};

type SectionMovies = {
    id: number;
    name: string;
    movies: MovieProps[];
};

export type FeatureMovieIndexProps = {
    sectionIndex: number;
    movieIndex: number;
};

type MovieContextData = {
    sectionMoviesList: SectionMovies[];
    featureMovieIndex: FeatureMovieIndexProps;
    updateSectionMoviesList: (sectionMoviesList: SectionMovies[]) => void;
    updateFeatureMovieIndex: (sectionIndex: number, movieId: number) => void;
};

const MovieContext = createContext({} as MovieContextData);

type MovieContextProviderProps = {
    children: ReactNode
};

export function MovieContextProvider({ children }: MovieContextProviderProps) {
    const [sectionMoviesList, setSectionMoviesList] = useState<SectionMovies[]>([]);
    const [featureMovieIndex, setFeatureMovieId] = useState<FeatureMovieIndexProps>(
        {} as FeatureMovieIndexProps
    );

    function updateSectionMoviesList(sectionMoviesList: SectionMovies[]) {
        setSectionMoviesList(sectionMoviesList);
    }

    function updateFeatureMovieIndex(sectionIndex: number, movieIndex: number) {
        setFeatureMovieId({ sectionIndex, movieIndex });
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
