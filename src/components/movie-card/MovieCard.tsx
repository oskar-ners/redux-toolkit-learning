import { Link } from 'react-router-dom';
import { Movie } from '../../interfaces/movies.interface';
import './MovieCard.css';

const MovieCard = ({ movie }: { movie: Movie }) => {
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
            </div>
        </Link>
    );
};

export default MovieCard;
