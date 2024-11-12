import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Movies from './components/movies/Movies';
import MovieDetails from './components/movie-details/MovieDetails';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Movies />} />
                    <Route path="/movie/:title" element={<MovieDetails />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
