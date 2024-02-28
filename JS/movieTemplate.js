export function createMovieCard(movie, dest) {
  //je crée l'élément card qui affichera chaque film
  const card = createElement("div", "container-card", dest);

  //titre
  const h3 = createElement("h2", "titre", card);
  h3.innerHTML = movie.title;
  //img
  const img = createElement("img", "affiche", card);
  img.url = `https://image.tmdb.org/t/p/w500/`;
  img.src = img.url + movie.poster_path;
  //description
  const p = createElement("p", "description", card);
  p.innerHTML = movie.overview;
  //note
  const note = createElement("p", "note", card);
  note.innerHTML = "Note moyenne : " + Math.ceil(movie.vote_average);
  //date sortie
  const dateSortie = createElement("p", "date-sortie", card);
  const date = movie.release_date;
  const maDate = new Date(date)
  dateSortie.innerHTML = "Date de sortie : " + maDate.toLocaleDateString('fr');
  
  return card;
}
export function createMovieDetails(movie, videos, dest) {
  const video = videos.results[0];

  //je crée l'élément card qui affichera chaque film
  const card = createElement("div", "container-card", dest);

  //Tag line
  const tagline = createElement("h2", "tag", card);
  tagline.innerHTML = movie.tagline;
  // Titre original
  const titreOriginal = createElement('h2', 'titre-original', card);
  titreOriginal.innerHTML = movie.original_title;
  // genre
  const genre = createElement("p", "genre", card);
  const genres = movie.genres.map((e) => {
    return e.name;
  });
  genre.innerHTML = genres.join(" - ");

  //img
  const img = createElement("img", "affiche", card);
  img.url = `https://image.tmdb.org/t/p/w500/`;
  img.src = img.url + movie.poster_path;
  //description
  const p = createElement("p", "description", card);
  p.innerHTML = movie.overview;
  //note
  const note = createElement("p", "note", card);
  note.innerHTML = "Note moyenne : " + Math.ceil(movie.vote_average);
  //date sortie

  const dateSortie = createElement("p", "date-sortie", card);
  const date = movie.release_date;
  const maDate = new Date(date)
  dateSortie.innerHTML = "Date de sortie : " + maDate.toLocaleDateString('fr');

  //video
  if (video) {
    const videoEl = createElement("iframe", "video", card);
    videoEl.outerHTML = `<iframe width="1097" height="617" src="https://www.youtube.com/embed/${video.key}" title="${video.name}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
  }
  return card;
}

/**
 * @param {string} elem Element tag to create
 * @param {string} name Class name to init the elem
 * @param {string | Element} location Where to create the elem in the DOM
 *
 * @returns {Element}
 */
export function createElement(elem, name, location) {
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
}
