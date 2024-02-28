import { listMovies } from "./apiFetch.js";

let inputBtnNext;
let inputBtnPrev;
let imgSlider;
let titleSlider;
let checkboxes;
// let filmDatas;
let indexFilm;
/*================================================ */
window.addEventListener("load", async () => {
  inputBtnNext = document.querySelector(".input-next");
  inputBtnPrev = document.querySelector(".input-prev");
  imgSlider = document.querySelector(".img-slider");
  titleSlider = document.querySelector(".slider-title");
  checkboxes = document.querySelectorAll(".checkbox");
  const movies = await fetchData();
  addListeners(movies);
  indexFilm = 0; // initialisation indexFilm pour le slider
  checkboxes[2].checked = true;
});

/*=========================END POINT listes de films==================== */
const apiUrl = "https://api.themoviedb.org/3/discover/movie";
/*END POINT listes des genres */
// const apiUrl = 'https://api.themoviedb.org/3/genre/movie/list';
/*END POINT latest, get the newest movies */
// const baseUrl = 'https://api.themoviedb.org/3/movie/latest';
/*URL DES IMAGES WIDTH 500 */
// const baseImgUrl = 'https://image.tmdb.org/t/p/w500'
/*URL DES IMAGES ORIGINAL */
const baseImgUrl = "https://image.tmdb.org/t/p/original";
/*====================================================================== */

/*=========Options de filtrage de l'API injectées en url ================*/
let releaseDate = "2024-02-27";

const queryParams = {
  include_adult: "false",
  include_video: "false",
  language: "en-US",
  page: 1,
  sort_by: "popularity.desc",
  // 'sort_by' : 'primary_release_date.asc',
  // 'primary_release_date.gte' : releaseDate,
  // 'primary_release_date.gte' : releaseDate,
  // 'primary_release_date.lte' : '2024-01-15',
  // 'year' : 2023
};
const queryString = new URLSearchParams(queryParams).toString();
const url = apiUrl + "?" + queryString;
console.log(url);
/*======================================================================== */

/*=============================FETCH =============================*/
const fetchData = async () => {
  return await listMovies(queryParams)
    .then((filmDatas) => {
      console.log(filmDatas);
      setCardSlider(filmDatas, 0);
      return filmDatas;
    })
    .catch((err) => console.error(err));
};
/*======================================================================== */

/*================INITIALISATION SLIDER============*/
const setCardSlider = (data, indexFilm) => {
  let imgUrl = baseImgUrl + data[indexFilm].poster_path;
  imgSlider.setAttribute("src", imgUrl);
  titleSlider.textContent = data[indexFilm].title;
};
/*================================================ */

function addListeners(filmDatas) {
  inputBtnNext.addEventListener("click", () => {
    // console.log("Log bouton next: ",filmDatas);
    if (indexFilm != 19) {
      indexFilm++;
    } else {
      indexFilm = 0;
    }

    setCardSlider(filmDatas, indexFilm);
  });

  inputBtnPrev.addEventListener("click", () => {
    // console.log("Log bouton next: ",filmDatas);
    if (indexFilm == 0) {
      indexFilm = filmDatas.length - 1;
    } else {
      indexFilm--;
    }
    setCardSlider(filmDatas, indexFilm);
  });

  //Checkbox Options de Filtrage
  checkboxes.forEach((element) => {
    element.addEventListener("change", (e) => {
      if (e.target.checked) {
        console.log(`Case cochée: ${e.target.id}`);
      }
    });
  });
}
