import { findMovie } from "./apiFetch.js";
import { createMovieCard } from "./movieTemplate.js";

const id_movie = new URL(document.location.href).searchParams.get("film");

findMovie(id_movie).then((movie) => {
  console.log(movie);
  createMovieCard(movie, "main");
});
