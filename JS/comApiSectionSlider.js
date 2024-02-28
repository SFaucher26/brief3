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
const apiUrl1 = 'https://api.themoviedb.org/3/discover/movie';
/*END POINT listes des genres */
const apiUrl2 = 'https://api.themoviedb.org/3/genre/movie/list';
/*END POINT latest, get the newest movies */
const apiUrl3 = 'https://api.themoviedb.org/3/movie';
/*URL DES IMAGES WIDTH 500 */
// const baseImgUrl = 'https://image.tmdb.org/t/p/w500'
/*URL DES IMAGES ORIGINAL */
const baseImgUrl = 'https://image.tmdb.org/t/p/original'

/*=========Options de filtrage de l'API injectées en url: ================*/
/*========= Playing now chargé par défault au chargement ================*/
let releaseDate = '2024-02-27'

const queryParams = {
  // 'include_adult' : 'false',
  // 'include_video' : 'false',
  'language': 'en-US',
  'page': 1,
  // 'sort_by' : 'popularity.desc',
  // 'sort_by' : 'primary_release_date.asc',
  // 'primary_release_date.gte' : releaseDate,
  // 'primary_release_date.gte' : releaseDate,
  // 'primary_release_date.lte' : '2024-01-15',
  // 'year' : 2023
};
const queryString = new URLSearchParams(queryParams).toString();
const url = apiUrl3 + '/now_playing' + '?' + queryString;
// const url ='https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'
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
  checkboxes.forEach(element => {
    element.addEventListener('change', (e) => {
      console.log(e.target.id);
      if (e.target.id === 'choix1') {
        const queryParams = {
          'language': 'en-US',
          'page': 1,
        };
        // console.log(`Case cochée: ${e.target.id}`,' Query Param: ',queryParams);
      } else if (e.target.id === 'choix2') {
        const queryParams = {
          'language': 'en-US',
          'page': 1,
        };
        // console.log(`Case cochée: ${e.target.id}`,' Query Param: ',queryParams);

      } else {
        document.querySelector('.cb3-in-div').classList.remove('inactive');
        const queryParams = {
          'language': 'en-US',
          'year': 2023,
          'page': 1
        };
        console.log(`Case cochée: ${e.target.id}`, ' Query Param: ', queryParams);

      }
    })
  })

}