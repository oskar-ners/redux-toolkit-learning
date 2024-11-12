import { useDispatch } from 'react-redux';
import { fetchMovies } from '../../state/movies/moviesSlice';
import { AppDispatch } from '../../state/state';

const FilterMovies = () => {
    const dispatch = useDispatch<AppDispatch>();
    return (
        <div>
            <button onClick={() => dispatch(fetchMovies('now_playing'))}>Now Playing</button>
            <button onClick={() => dispatch(fetchMovies('popular'))}>Popular</button>
            <button onClick={() => dispatch(fetchMovies('top_rated'))}>Top Rated</button>
            <button onClick={() => dispatch(fetchMovies('upcoming'))}>Upcoming</button>
        </div>
    );
};

export default FilterMovies;
