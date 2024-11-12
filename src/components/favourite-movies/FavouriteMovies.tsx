import '../movie-card/MovieCard.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/state';
import MovieCard from '../movie-card/MovieCard';
import { Movie } from '../../interfaces/movie.interface';

const FavouriteMovies = () => {
    const favouriteMovies = useSelector((state: RootState) => state.movies.favouriteMoviesList);
    const handleGoBack = () => {
        window.history.back();
    };
    return (
        <div className="movies-container">
            <button onClick={handleGoBack} className="go-back-button">
                Go Back
            </button>
            <h1 className="movies-title">Favourite Movies ({favouriteMovies.length})</h1>
            <div className="movies-grid">
                {favouriteMovies.length ? (
                    favouriteMovies.map((movie: Movie) => <MovieCard key={movie.id} movie={movie} />)
                ) : (
                    <p className="no-movies-message">No movies available</p>
                )}
            </div>
        </div>
    );
};

export default FavouriteMovies;
