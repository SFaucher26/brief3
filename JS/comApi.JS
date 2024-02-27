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
        .then(response => response.json())
        .then(response => {
            apiDatas = response;
        })
        .catch(err => console.error(err));
})


const createElement =(elem ,name ,location) => {
    const element = document.createElement(elem);
    if (name!==''){
        element.classList.add(name);
    }
    const inDocHtml = document.querySelector(location);
    inDocHtml.appendChild(element);
    return element;
}

createElement('main','','body');
createElement('div', 'container-img','main');

// const displayData =(element) => {
//     const filmDiv = createElement('div','film-container');

//     // const pEl = createElement('p','title');
//     // pEl.textContent = element.original_title;
//     // const filmImg = createElement('img','film-img');
//     // const image_url = new URL(`https://image.tmdb.org/t/p/w500${element.poster_path}`);
//     // filmImg.setAttribute ('src', `${image_url}.poster_path`);
//     // const overview = createElement('p', 'overview');
//     // overview.textContent = element.overview;
//     // filmDiv.appendChild(pEl,filmImg,overview);
// }