export function createMovieCard(movie, dest) {
  //je crée l'élément card qui affichera chaque film
  const card = createElement("div", "container-card", dest);

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
  const note = createElement("p", "note", card);
  note.innerHTML = "Note moyenne : " + Math.ceil(movie.vote_average);
  //date sortie
  const dateSortie = createElement("p", "date-sortie", card);
  dateSortie.innerHTML = "Date de sortie : " + movie.release_date;
  // console.log(movie.title)
  // console.log(movie.overview)
  // console.log(movie.poster_path)
  // console.log(movie.id);
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
