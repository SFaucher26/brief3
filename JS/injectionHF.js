window.addEventListener("load", () => {

    








    
})

//FONCTION POUR CREER LES ELEMENTS 
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
  
