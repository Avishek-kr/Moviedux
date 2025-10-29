import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

export default function MovieGrid() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch("movies.json")
    .then(response => response.json())
    .then(data => setMovies(data))
  }, []);

  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
  }
  
  const filteredMovies = movies?.filter((movie) => movie.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));

  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="Search movies..."
        onChange={handleSearchInput}
        value={searchTerm}
      />
      <div className="movies-grid">
            {
              filteredMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))
            }
      </div>
    </div>
  )
}
