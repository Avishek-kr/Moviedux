import React from 'react'
import MovieCard from './MovieCard';

export default function Watchlist({ movies, watchlist, toggleWatchlist }) {
  console.log(watchlist);
  return (
    <div>
      <div className='title'>Your Watchlist</div>
      <div className="watchlist">
        {
          watchlist.map(id => {
            const movie = movies.find((movie) => movie.id === id);
            return  <MovieCard key={movie.id} movie={movie} toggleWatchlist={toggleWatchlist} isWatchlisted={true} />
          })
        }
      </div>
    </div>
  )
}
