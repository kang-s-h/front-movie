import './makeMovie.css';
import { IMAGE_URL } from '../Config';

function MakeMovie({ data, onMovieClick }) {
  return (
    <div className="section__main">
      {data.map((movie) => (
        <div key={movie.id} className="section__main--box">
          <img
            className="section__main--box-img"
            src={`${IMAGE_URL}${movie.poster_path}`}
            alt={movie.title}
            onClick={() => onMovieClick(movie)}
          />
          <div className="section__main--box-title">{movie.title}</div>
          <span className="section__main--box-rate">{movie.vote_average}</span>
          <img className="section__main--box-rateImg" src="/src/assets/star.svg" alt="rating" />
        </div>
      ))}
    </div>
  );
}

export default MakeMovie;
