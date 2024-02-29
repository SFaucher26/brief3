import { findMovie, findVideo } from "./apiFetch.js";
import { createMovieCard, createMovieDetails } from "./movieTemplate.js";

//
const id_movie = new URL(document.location.href).searchParams.get("film");

findMovie(id_movie).then((movie) => {
  console.log(movie);
  findVideo(id_movie).then( (videos) => {
    console.log(videos); 
    createMovieDetails(movie, videos, "main");
});
  
});


