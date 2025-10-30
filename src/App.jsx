import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MovieGrid from './components/MovieGrid';
import Watchlist from './components/Watchlist';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './styles.css';

function App() {
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
            <Route path='/' element={<MovieGrid />} />
            <Route path='/watchlist' element={<Watchlist />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
