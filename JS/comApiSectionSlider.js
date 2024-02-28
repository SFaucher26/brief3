import { listMovies } from "./apiFetch.js";

let inputBtnNext;
let inputBtnPrev;
let imgSlider;
let titleSlider;
let checkboxes = document.querySelectorAll(".checkbox");

// let filmDatas;
let indexFilm;
let movies;
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

/*================================================ */

window.addEventListener("load", async () => {
  inputBtnNext = document.querySelector(".input-next");
  inputBtnPrev = document.querySelector(".input-prev");
  imgSlider = document.querySelector(".img-slider");
  titleSlider = document.querySelector(".slider-title");
  // checkboxes = document.querySelectorAll(".checkbox");
  movies = await fetchData(queryParams);
  addListeners();
  indexFilm = 0; // initialisation indexFilm pour le slider
  checkboxes[1].checked = true;
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
const createUrl = (queryParams, apiEndPoint) => {
  const queryString = new URLSearchParams(queryParams).toString();
  const url = apiEndPoint + '?' + queryString;
  // console.log('Fonction CreateUrl: ', url, queryParams);
  return(url);
}
/*======================================================================== */

/*=============================FETCH =============================*/
const fetchData = async (queryParams) => {
  return await listMovies(queryParams)
    .then((filmDatas) => {
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

function addListeners() {
  inputBtnNext.addEventListener("click", () => {
    if (indexFilm != 19) {
      indexFilm++;
    } else {
      indexFilm = 0;
    }

    setCardSlider(movies, indexFilm);
  });

  inputBtnPrev.addEventListener("click", () => {
    if (indexFilm == 0) {
      indexFilm = movies.length - 1;
    } else {
      indexFilm--;
    }
    setCardSlider(movies, indexFilm);
  });
}

  //Checkbox Options de Filtrage 
  checkboxes.forEach(element => {
    
    element.addEventListener('change', async (e) => {
      const cb3 = document.querySelector('.cb3-in-div');
      if (e.target.id === 'choix1') {
        if(!cb3.classList.contains('inactive')){
          cb3.classList.add('inactive');
        }
        const queryParams = {
          'include_adult' : 'false',
          'include_video' : 'false',
          'language': 'en-US',
          'page': 1,
          'sort_by': 'primary_release_date.desc',
          'primary_release_date.lte': '2024/02/27'
      };
      const url = createUrl(queryParams,apiUrl1);
      movies = await fetchData(queryParams);
        
      } else if (e.target.id === 'choix2') {
        if(!cb3.classList.contains('inactive')){
          cb3.classList.add('inactive');
        }
        const queryParams = {
          'include_adult' : 'false',
          'include_video' : 'false',
          'language': 'en-US',
          'page': 1,
          'sort_by' : 'popularity.desc'
        };
        const url = createUrl(queryParams, apiUrl1);

        movies = await fetchData(queryParams);

      } else {
        cb3.classList.remove('inactive');
        const cb3Input = document.querySelector('.cb3-input');
        const cb3Submit = document.querySelector('.cb3-submit');
        cb3Submit.addEventListener('click', async () => {
          const valueYear = cb3Input.value;
          const queryParams = {
            'language': 'en-US',
            'primary_release_date.lte': `${valueYear}/12/30`,
            'primary_release_date.gte': `${valueYear}/01/01`,
            'page': 1
          };
          const url = createUrl(queryParams,apiUrl1);
          movies = await fetchData(queryParams);
        } )
      }
    })
  })