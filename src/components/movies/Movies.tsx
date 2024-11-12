import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../state/state';
import { useEffect } from 'react';
import { fetchMovies } from '../../state/movies/moviesSlice';
import { Movie } from '../../interfaces/movie.interface';
import './Movies.css';
import MovieCard from '../movie-card/MovieCard';
import FilterMovies from '../filter-movies/FilterMovies';

const Movies = () => {
    const dispatch = useDispatch<AppDispatch>();
    const movies: Movie[] = useSelector((state: RootState) => state.movies.movies);
    const title: string = useSelector((state: RootState) => state.movies.title);

    useEffect(() => {
        dispatch(fetchMovies('now_playing'));
    }, [dispatch]);

    return (
        <div className="movies-container">
            <FilterMovies />
            <h2 className="movies-title">{formatTitle(title)}</h2>
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

const formatTitle = (title: string) => {
    return title
        .split('_')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
};

export default Movies;
