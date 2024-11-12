import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Movies from './components/movies/Movies';
import MovieDetails from './components/movie-details/MovieDetails';
import FavouriteMovies from './components/favourite-movies/FavouriteMovies';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Movies />} />
                    <Route path="/movie/:title" element={<MovieDetails />} />
                    <Route path="/favourite-movies" element={<FavouriteMovies />} />
                    <Route path="*" element={<h1>Not Found</h1>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
