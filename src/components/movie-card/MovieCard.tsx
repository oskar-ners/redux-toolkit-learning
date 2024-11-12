import { Link } from 'react-router-dom';
import { Movie } from '../../interfaces/movie.interface';
import './MovieCard.css';
import { useDispatch, useSelector } from 'react-redux';
import { addFavouriteMovie, removeFavouriteMovie } from '../../state/movies/moviesSlice';
import { RootState } from '../../state/state';

const MovieCard = ({ movie }: { movie: Movie }) => {
    const dispatch = useDispatch();
    const favouriteMoviesList = useSelector((state: RootState) => state.movies.favouriteMoviesList);
    const handleAddToFavourite = (event: React.MouseEvent) => {
        event.preventDefault();
        if (favouriteMoviesList.find((favouriteMovie) => favouriteMovie.id === movie.id)) {
            return;
        }
        dispatch(addFavouriteMovie(movie));
    };
    const handleRemoveFromFavourite = (event: React.MouseEvent) => {
        event.preventDefault();
        dispatch(removeFavouriteMovie(movie));
    };
    const isFavourite = favouriteMoviesList.some((favouriteMovie) => favouriteMovie.id === movie.id);
    return (
        <Link to={`/movie/${movie.title}`} className="movie-card-link">
            <div className="movie-card">
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title || 'No image available'}
                    className="movie-poster"
                />
                <div className="movie-info">
                    <h3 className="movie-title">{movie.title}</h3>
                    <p className="movie-overview">{movie.overview}</p>
                </div>
                {!isFavourite && (
                    <button onClick={handleAddToFavourite} className="add-to-favourite">
                        Add to favourite
                    </button>
                )}
                {isFavourite && (
                    <button onClick={handleRemoveFromFavourite} className="remove-from-favourite">
                        Remove from favourite
                    </button>
                )}
            </div>
        </Link>
    );
};

export default MovieCard;
