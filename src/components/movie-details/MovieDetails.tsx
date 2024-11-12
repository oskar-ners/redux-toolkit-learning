import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/state';
import './MovieDetails.css';

const MovieDetails = () => {
    const { title } = useParams();
    const movie = useSelector((state: RootState) => state.movies.movies.find((movie) => movie.title === title));

    if (!movie) {
        return <p>Loading...</p>;
    }

    return (
        <div className="movie-details-container">
            <div className="movie-details-header">
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title || 'Movie poster'}
                    className="movie-details-poster"
                />
                <div className="movie-details-info">
                    <h2 className="movie-details-title">{movie.title}</h2>
                    <div className="movie-details-rating">
                        <span>Rating:</span> {movie.vote_average} / 10
                    </div>
                </div>
            </div>
            <div className="movie-details-body">
                <h3>Overview</h3>
                <p className="movie-details-overview">{movie.overview}</p>
                <div className="movie-details-extra">
                    <p>Release Date: {movie.release_date}</p>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
