let inputBtn= document.querySelector('input');
let imgTest= document.querySelector('.img-test');

// window.addEventListener('load', () => {
  inputBtn.addEventListener('click', () =>{
    /*END POINT listes de films */  
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
      let releaseDate = '2024-02-27'
      const queryParams = {
        'include_adult' : 'false',
        'include_video' : 'false',
        'language' : 'en-US',
        'page' : 1,
        // 'sort_by' : 'popularity.desc',
        'sort_by' : 'primary_release_date.asc',
        // 'primary_release_date.gte' : releaseDate,
        // 'primary_release_date.lte' : '2024-01-15',
        'release_date.gte' : releaseDate,
        // 'year' : 2023
      };

      const queryString = new URLSearchParams(queryParams).toString();
      const url = apiUrl+ '?' + queryString;
      console.log(url);
      

      fetch(url, options)
        .then(response => response.json())
        .then(response => {
          let data = response.results;
          console.log(data);
        })
        .catch(err => console.error(err));   
})
