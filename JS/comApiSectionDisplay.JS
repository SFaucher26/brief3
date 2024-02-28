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
        createMovieCard(movie, dest);
      }

      // card.addEventListener('click', () =>{

      // })
    })
    .catch((err) => console.error(err));
});

//curl --request GET \
/*=========Options de filtrage de l'API injectées en url ================*/
// let releaseDate = '2024-02-27'

// const queryParams = {
//   'include_adult' : 'false',
//   'include_video' : 'false',
//   'language' : 'en-US',
//   'page' : 1,
//   'sort_by' : 'popularity.desc',
//   // 'sort_by' : 'primary_release_date.asc',
//   // 'primary_release_date.gte' : releaseDate,
//   // 'primary_release_date.gte' : releaseDate,
//   // 'primary_release_date.lte' : '2024-01-15',
//   // 'year' : 2023
// };
// const queryString = new URLSearchParams(queryParams).toString();
// const url = apiUrl+ '?' + queryString;
// console.log(url);
/*======================================================================== */

// const filmDetails = (id, options) => {
  // let url = "https:api.themoviedb.org/3/movie/" + id + "?language=en-US";
  // fetch(url, options)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     const movieDetail = data;
  //     console.log("fonction film detail :", movieDetail);
  //   });
// };
// filmDetails(969492, options);

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
