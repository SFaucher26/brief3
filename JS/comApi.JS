let apiDatas;
window.addEventListener('load', () => {
    const apiUrl = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'
    const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjViOWQ4NTQzODM2OGYxMzg2OTc3MzlkMDY3NmU5MCIsInN1YiI6IjY1ZGI2NDU5ODI2MWVlMDE4NWMyZmE3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EqaglO-GjtRSZOQomGgTqN6cuNF7LE1oecefis70Kds '
        }
      };
    

  fetch(apiUrl, options)
    .then((response) => response.json())
    .then((data) => {
      const movies = data.results;
      console.log(movies);


      //je crée le main qui contiendra les cards de film
      createElement("section",'container-display', "main");

      //boucle sur les films pour créer l'affichage dans la card
      for (const movie of movies) {
        //je crée l'élément card qui affichera chaque film
        const card = createElement("div", "container-card", ".container-display");
        card.id = movie.id;
        //titre
        const h3 = createElement("h3", "titre", card);
        h3.innerHTML = movie.title;
        //img
        const img = createElement("img", "affiche", card);
        img.url = `https://image.tmdb.org/t/p/w500/`;
        img.src = img.url + movie.poster_path;
        //description
        const p = createElement("p", "description", card);
        p.innerHTML = movie.overview;
        //note
        const note = createElement("p", 'note', card);
        note.innerHTML = "Note moyenne : " + Math.ceil(movie.vote_average);
        //date sortie
        const dateSortie = createElement("p", "date-sortie", card)
        dateSortie.innerHTML = "Date de sortie : " + movie.release_date
        // console.log(movie.title)
        // console.log(movie.overview)
        // console.log(movie.poster_path)
        // console.log(movie.id);
      }
      card.addEventListener('click', () =>{
        
  
      })



    })
    .catch((err) => console.error(err));
});




/**
 * @param {string} elem Element tag to create
 * @param {string} name Class name to init the elem
 * @param {string | Element} location Where to create the elem in the DOM
 *
 * @returns {Element}
 */
const createElement = (elem, name, location) => {
  const element = document.createElement(elem);
  if (name !== "") {
    element.classList.add(name);
  }
  let inDocHtml;
  if (location instanceof Element) {
    // Si c'est un élément HTML
    inDocHtml = location;
  } else {
    // Si c'est une string
    inDocHtml = document.querySelector(location);
  }

  inDocHtml.appendChild(element);
  return element;
};

const dateFormatter = new Intl.DateTimeFormat('en', {
  year: 'numeric',
  month: "2-digit",
  day: "2-digit"
})

/**
 * 
 * @param {Date} date Date object to format in string 'yyyy/mm/dd'
 * @returns {string}
 */
function formatDateToString(date) {
  return dateFormatter
    .format(date)
    .split('/')
    .reverse()
    .join('/')
}

