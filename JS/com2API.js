let inputBtnNext= document.querySelector('.input-next');
let inputBtnPrev= document.querySelector('.input-prev');
let imgSlider= document.querySelector('.img-slider');
let titleSlider = document.querySelector('.slider-title');
let filmDatas;
let indexFilm;

/*=========================END POINT listes de films==================== */  
      const apiUrl = 'https://api.themoviedb.org/3/discover/movie';
    /*END POINT listes des genres */  
      // const apiUrl = 'https://api.themoviedb.org/3/genre/movie/list';
    /*END POINT latest, get the newest movies */  
      // const baseUrl = 'https://api.themoviedb.org/3/movie/latest';
    /*URL DES IMAGES WIDTH 500 */
    // const baseImgUrl = 'https://image.tmdb.org/t/p/w500'
    /*URL DES IMAGES ORIGINAL */
    const baseImgUrl = 'https://image.tmdb.org/t/p/original'
  
    /* Construction de la requete et de ses params (headers, query) */
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          // Authorization: 'Bearer c47bd14b3a924dc92ca478ce9fe20c73'
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDdiZDE0YjNhOTI0ZGM5MmNhNDc4Y2U5ZmUyMGM3MyIsInN1YiI6IjY1ZGNmMTQ1YTg5NGQ2MDE4NzBiZWM2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2GezATe3_bfSrTs41ih8czoYYk6VpTKSasFK0y4ZBk4'

        }
      };
/*====================================================================== */
      
/*=========Options de filtrage de l'API injectées en url ================*/
      let releaseDate = '2024-02-27'
      const queryParams = {
        'include_adult' : 'false',
        'include_video' : 'false',
        'language' : 'en-US',
        'page' : 1,
        'sort_by' : 'popularity.desc',
        // 'sort_by' : 'primary_release_date.asc',
        // 'primary_release_date.gte' : releaseDate,
        // 'primary_release_date.gte' : releaseDate,
        // 'primary_release_date.lte' : '2024-01-15',
        // 'year' : 2023
      };
      const queryString = new URLSearchParams(queryParams).toString();
      const url = apiUrl+ '?' + queryString;
      console.log(url);
/*======================================================================== */

/*=============================FETCH =============================*/
   
const fetchData = () => {
    fetch(url, options)
      .then(response => response.json())
      .then(response => {
        filmDatas = response.results;
        setCardSlider(filmDatas,indexFilm);
      })
      .catch(err => console.error(err));   
}
/*======================================================================== */

/*================INITIALISATION SLIDER============*/

const setCardSlider = (data,indexFilm) => {
    let imgUrl = baseImgUrl + data[indexFilm].poster_path;
    imgSlider.setAttribute('src', imgUrl);
    titleSlider.textContent = data[indexFilm].title;
}
/*================================================ */

inputBtnNext.addEventListener('click',() => {
    // console.log("Log bouton next: ",filmDatas);
    if(indexFilm != 19){
        indexFilm ++;
    } else {
        indexFilm =0
    };

    setCardSlider(filmDatas,indexFilm);
})

// inputBtnPrev.addEventListener('click',() => {
//     // console.log("Log bouton next: ",filmDatas);
//     if(indexFilm == 0){
        
//         indexFilm = filmDatas.length;
//     } else {
//         indexFilm =--
//     };
//     console.log(indexFilm);

//     // setCardSlider(filmDatas,indexFilm);
// })

/*================================================ */
window.addEventListener('load', () => {
    fetchData();
    indexFilm=0; // initialisation indexFilm pour le slider
});


