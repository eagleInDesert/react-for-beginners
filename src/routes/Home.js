import React, { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const fetchData = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    );
    const json = await response.json();
    setMovies((prevMovies) => {
      console.log("Previous movies:", prevMovies); // 이전 상태
      console.log("New movies:", json.data.movies); // 업데이트될 상태
      return json.data.movies;
    });
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <h2>Please wait for a minute</h2>
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <Movie
                id={movie.id}
                title={movie.title}
                coverImg={movie.medium_cover_image}
                summary={movie.summary}
                genres={movie.genres}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
