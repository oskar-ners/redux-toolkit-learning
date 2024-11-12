import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../state/state';
import { useEffect } from 'react';
import { fetchMovies } from '../../state/movies/moviesSlice';
import { Movie } from '../../interfaces/movies.interface';
import './Movies.css';
import MovieCard from '../movie-card/MovieCard';
import FilterMovies from '../filter-movies/FilterMovies';

const Movies = () => {
    const dispatch = useDispatch<AppDispatch>();
    const movies: Movie[] = useSelector((state: RootState) => state.movies.movies);
    const listname: string = useSelector((state: RootState) => state.movies.listname);

    useEffect(() => {
        dispatch(fetchMovies('now_playing'));
    }, [dispatch]);

    return (
        <div className="movies-container">
            <FilterMovies />
            <h2 className="movies-title">{formatString(listname)}</h2>
            <div className="movies-grid">
                {movies.length ? (
                    movies.map((movie: Movie) => <MovieCard key={movie.id} movie={movie} />)
                ) : (
                    <p className="no-movies-message">No movies available</p>
                )}
            </div>
        </div>
    );
};

const formatString = (title: string) => {
    return title
        .split('_')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
};

export default Movies;
