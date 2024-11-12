import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, setFavouriteMovies } from '../../state/movies/moviesSlice';
import { AppDispatch, RootState } from '../../state/state';
import { Link } from 'react-router-dom';

const FilterMovies = () => {
    const dispatch = useDispatch<AppDispatch>();
    const favouriteMoviesLength = useSelector((state: RootState) => state.movies.favouriteMoviesList.length);
    return (
        <div>
            <button onClick={() => dispatch(fetchMovies('now_playing'))}>Now Playing</button>
            <button onClick={() => dispatch(fetchMovies('popular'))}>Popular</button>
            <button onClick={() => dispatch(fetchMovies('top_rated'))}>Top Rated</button>
            <button onClick={() => dispatch(fetchMovies('upcoming'))}>Upcoming</button>
            <Link to={'/favourite-movies'}>
                <button onClick={() => dispatch(setFavouriteMovies())}>
                    Your Favourite Movies ({favouriteMoviesLength})
                </button>
            </Link>
        </div>
    );
};

export default FilterMovies;
