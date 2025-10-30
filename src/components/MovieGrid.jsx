import { useState } from "react";
import MovieCard from "./MovieCard";

export default function MovieGrid({ movies, watchlist, toggleWatchlist }) {

  const [searchTerm, setSearchTerm] = useState('');
  const [selectGenre, setSelectGenre] = useState('all genres');
  const [selectRating, setSelectRating] = useState('all');


  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
  }

  const handleGenreSelect = (e) => {
    setSelectGenre(e.target.value);
  }

  const handleRatingSelect = (e) => {
    setSelectRating(e.target.value);
  }

  const matchesGenre = (movie, genre) => {
    return genre === "all genres" || movie.genre.toLocaleLowerCase() === genre.toLocaleLowerCase();
  }

  const matchesRatings = (movie, rating) => {
    switch (rating) {
      case "all":
        return true;

        case "good":
          return movie.rating >= 8;

          case "ok":
            return movie.rating >= 5 && movie.rating < 8;

            case "bad":
              return movie.rating < 5;

              default:
              return false;
    }
  }

  const matchesSearchTerm = (movie, searchTerm) => {
    return movie.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
  }
  
  const filteredMovies = movies.filter((movie) => 
    matchesGenre(movie, selectGenre) && matchesRatings(movie, selectRating)
    && matchesSearchTerm(movie, searchTerm) 
  )

  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="Search movies..."
        onChange={handleSearchInput}
        value={searchTerm}
        name="search"
        id="search-input"
      />

    <div className="filter-bar">
      <div className="filter-slot">
        <label htmlFor="genre">Genre</label>
        <select className="filter-dropdown" value={selectGenre} onChange={handleGenreSelect}>
          <option value="all genres">All Genres</option>
          <option value="action">Action</option>
          <option value="drama">Drama</option>
          <option value="fantasy">Fantasy</option>
          <option value="horror">Horror</option>
        </select>
      </div>

      <div className="filter-slot">
        <label htmlFor="rating">Rating</label>
        <select className="filter-dropdown" value={selectRating} onChange={handleRatingSelect}>
          <option value="all">All</option>
          <option value="good">Good</option>
          <option value="ok">Ok</option>
          <option value="bad">Bad</option>
        </select>
      </div>
    </div>

      <div className="movies-grid">
            {
              filteredMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} toggleWatchlist={toggleWatchlist} isWatchlisted={watchlist.includes(movie.id)} />
              ))
            }
      </div>
    </div>
  )
}
