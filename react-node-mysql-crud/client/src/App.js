import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [movieName, setMovieName] = useState("");
  const [review, setReview] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [newReview, setNewReview] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/api/get")
      .then((response) => response.json())
      .then((response) => setMovieList(response));
  }, []);

  const submitReview = () => {
    fetch("http://localhost:3001/api/insert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ movieName, movieReview: review }),
    })
      .then((res) => res.json())
      .then(() =>
        setMovieList([...movieList, { name: movieName, movieReview: review }])
      );
  };

  const deleteReview = (movieName) => {
    fetch(`http://localhost:3001/api/delete/${movieName}`, {
      method: "DELETE",
    });
  };

  const updateReview = (movie) => {
    fetch("http://localhost:3001/api/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        movieName: movie.name,
        movieReview: movie.movieReview,
      }),
    });

    setNewReview("");
  };

  return (
    <div className="App">
      <h1>CRUD APPLICATION</h1>
      <div className="form">
        <label>Movie Name:</label>
        <input
          type="text"
          name="movieName"
          onChange={(e) => setMovieName(e.target.value)}
          value={movieName}
        />
        <label>Review:</label>
        <input
          type="text"
          name="review"
          onChange={(e) => setReview(e.target.value)}
          value={review}
        />
        <button onClick={submitReview}>Submit</button>
        {movieList.map((movie) => {
          return (
            <div className="card">
              <h1>Movie Name: {movie.name}</h1>
              <p>Movie Review: {movie.movieReview}</p>
              <button onClick={() => deleteReview(movie.name)}>Delete</button>
              <input
                type="text"
                id="updateInput"
                onChange={(e) => setNewReview(e.target.value)}
              />
              <button onClick={() => updateReview(movie)}>Update</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
