import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '../../interfaces/movie.interface';

const API_URL = 'https://api.themoviedb.org/3/movie';
const API_KEY =
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjYxNGM5MTUxMTZkNGQ5ZGQ2NzAzMDYwMTcxMzY0NiIsIm5iZiI6MTczMDcxODUxOC40Mzg4MzA5LCJzdWIiOiI2NzI4YWE3ZDU5MTgxMzdjZmMzOWJhYmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NLlME08IOCzAjdIZk9rrE65Z9tcKQ_P98joKip0F9MM';

interface moviesState {
    title: string;
    movies: Movie[];
    favouriteMoviesList: Movie[];
}

const initialState: moviesState = {
    title: 'Now Playing Movies',
    movies: [],
    favouriteMoviesList: JSON.parse(localStorage.getItem('favouriteMovies') || '[]'),
};

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setFavouriteMovies: (state) => {
            state.movies = state.favouriteMoviesList;
        },
        addFavouriteMovie: (state, action: PayloadAction<Movie>) => {
            state.favouriteMoviesList.push(action.payload);
            localStorage.setItem('favouriteMovies', JSON.stringify(state.favouriteMoviesList));
        },
        removeFavouriteMovie: (state, action: PayloadAction<Movie>) => {
            state.favouriteMoviesList = state.favouriteMoviesList.filter((movie) => movie.id !== action.payload.id);
            localStorage.setItem('favouriteMovies', JSON.stringify(state.favouriteMoviesList));
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.title = action.meta.arg;
            state.movies = action.payload;
        });
    },
});

export const fetchMovies = createAsyncThunk<Movie[], string>('movies/setMovies', async (endpoint) => {
    try {
        const response = await fetch(`${API_URL}/${endpoint}?language=en-US&page=1`, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: API_KEY,
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const json = await response.json();
        return json.results;
    } catch (error) {
        console.error(`Failed to fetch ${endpoint} movies:`, error);
        return [];
    }
});

export const { setFavouriteMovies, addFavouriteMovie, removeFavouriteMovie } = moviesSlice.actions;

export default moviesSlice.reducer;
