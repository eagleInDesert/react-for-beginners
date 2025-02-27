import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({ id, title, coverImg, summary, genres }) {
  return (
    <div key={id}>
      <h2><Link to = {`/movie/${id}`}>{title}</Link></h2>
      <img src={coverImg} />  
      <p>{summary}</p>
      <ul>
        {genres.map((genre) => (
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
