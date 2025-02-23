import PropTypes from "prop-types";

function Movie({ movie }) {
  return (
    <div key={movie.id}>
      <h2>{movie.title}</h2>
      <img src={movie.medium_cover_image} />  
      <p>{movie.summary}</p>
      <ul>
        {movie.genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
