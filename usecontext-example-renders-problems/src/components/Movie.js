import { useContext } from "react";
import UserContext from "../contexts/UserContext";

const Movie = ({ movie }) => {
  console.log("Movie");

  const { toggleFavoriteMovieToUser, user } = useContext(UserContext);

  const imgStyles = {
    height: "260px",
    objectFit: "cover",
  };

  const isFavorite = user?.favoriteMovies?.includes(movie.id);

  return (
    <div className="card">
      <img
        src={movie.imageUrl}
        alt={movie.title}
        className="card-img-top"
        style={imgStyles}
      />
      <div className="card-body">
        <h4>{movie.title}</h4>
        {user?.id && (
          <button
            onClick={() => toggleFavoriteMovieToUser(movie.id)}
            className={`btn ${
              isFavorite ? "btn-success" : "btn-outline-primary"
            }`}
          >
            Favorite
          </button>
        )}
      </div>
    </div>
  );
};
export default Movie;
