const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjViOWQ4NTQzODM2OGYxMzg2OTc3MzlkMDY3NmU5MCIsInN1YiI6IjY1ZGI2NDU5ODI2MWVlMDE4NWMyZmE3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EqaglO-GjtRSZOQomGgTqN6cuNF7LE1oecefis70Kds ",
  },
};

export function findMovie(id_movie) {
  let url = "https://api.themoviedb.org/3/movie/" + id_movie + "?&language=fr";
  return fetch(url, options).then((response) => response.json());
}
export function findVideo(id_movie){
  let url = "https://api.themoviedb.org/3/movie/" + id_movie +
  "/videos?&language=fr";
  return fetch(url , options).then((response) => response.json());
}

export function listMovies(filters = {}) {
  const apiUrl = new URL("https://api.themoviedb.org/3/discover/movie");
  const getParams = new URLSearchParams(filters);
  apiUrl.search = getParams.toString();

  return fetch(apiUrl, options)
    .then((response) => response.json())
    .then((response) => response.results);
}
