import './App.css';
import { useState, useEffect } from "react";
import Footer from './components/Footer';
import Header from './components/Header';
import MovieGrid from './components/MovieGrid';
import Watchlist from './components/Watchlist';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './styles.css';

function App() {
    const [movies, setMovies] = useState([]);
    const [watchlist, setWatchlist] = useState([]);

    useEffect(() => {
      fetch("movies.json")
      .then(response => response.json())
      .then(data => setMovies(data))
    }, []);

    const toggleWatchlist = (movieId) => {
      setWatchlist(
        prev => prev.includes(movieId) ? prev.filter(id => id !== movieId) : [...prev, movieId]
      )
    }

  return (
    <div className="App">
      <div className="container">
        <Header />
        <Router>
          <nav>
            <ul>
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li>
                <Link to={'/watchlist'}>WatchList</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path='/' element={<MovieGrid movies={movies} watchlist={watchlist} toggleWatchlist={toggleWatchlist} />} />
            <Route path='/watchlist' element={<Watchlist movies={movies} watchlist={watchlist} toggleWatchlist={toggleWatchlist} />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
