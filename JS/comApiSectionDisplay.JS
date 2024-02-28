import { listMovies } from "./apiFetch.js";
import { createElement, createMovieCard } from "./movieTemplate.js";

window.addEventListener("load", () => {
  listMovies({
    include_adult: false,
    include_video: false,
    language: "en-US",
    page: 1,
    sort_by: "popularity.desc",
  })
    .then((movies) => {
      //je crée le main qui contiendra les cards de film
      const dest = document.querySelector(".container-display");

      //boucle sur les films pour créer l'affichage dans la card
      for (const movie of movies) {
        const movieCard = createMovieCard(movie, dest);
        movieCard.addEventListener('click', ()=>{
          document.location.href = `/details.html?film=${movie.id}`
        })
      }

    })
    .catch((err) => console.error(err));
});

const dateFormatter = new Intl.DateTimeFormat("en", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

/**
 *
 * @param {Date} date Date object to format in string 'yyyy/mm/dd'
 * @returns {string}
 */
function formatDateToString(date) {
  return dateFormatter.format(date).split("/").reverse().join("/");
}
