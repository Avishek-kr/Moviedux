import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MovieGrid from './components/MovieGrid';
import './styles.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <MovieGrid />
      </div>
      <Footer />
    </div>
  );
}

export default App;
