import { findMovie, findVideo } from "./apiFetch.js";
import { createElement, createMovieCard, createMovieDetails } from "./movieTemplate.js";

const id_movie = new URL(document.location.href).searchParams.get("film");

findMovie(id_movie).then((movie) => {
  console.log(movie);
  createMovieDetails(movie, "main");
});

findVideo(id_movie).then( (videos) => {
    createElement()
    console.log(videos); 
});
