# Attendus du projet #
Réalisation d'une page web qui affiche des films récupérés à l'aide de l'API The Movie Data Base.

### Langages utilisés ###
HTML, CSS, JAVASCRIPT

### Méthode de travail ###
Projet développé en Agile à l'aide d'un tableau kanban avec création d'issues

### Structure des pages ###

=> 

### Fetch API ###

=>

### Création des cards pour affichage ###

=> 

### Création du slider avec filtrage en fetch API ###
 
 ** Listes des tâches correspondantes **

[x] [Issue #2: Recuperation données API](https://github.com/SFaucher26/brief3/issues/2)

[x] [Issue #7 : Filtrage](https://github.com/SFaucher26/brief3/issues/7)

[x] [Issue #8 : Filtrage](https://github.com/SFaucher26/brief3/issues/8)


**1- Création et initialisation du slider**

Slider contenu dans le fichier: "JS\comApiSectionSlider.js" sur une base de card mise à jour par un fetch d'initialisation selon le endpoint :
            'https://api.themoviedb.org/3/discover/movie'
Avec option de base par défaut (rangement par popularity desc.)

<!-- ![alt text](/assets/imagem.png) -->
```js
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
```

**2- Mise en place du filtrage sur ce slider**

Mise en place sur une base HTML,CSS et JS et via trois options gérées par boutons radio: "now playing", "popularity", "année de sortie"
D'autres peuvent être ajoutés selon le besoin ou bien les existants peuvent être aisément modifiés grâce à la modularité du code associé.

![alt text](/assets/imagem-1.png)

**3- Code associé**
La page html s'appuie sur 3 scripts qui servent le projet global selon les sections:

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script defer type="module" src="./JS/comApiSectionDisplay.JS"></script>
    <script defer type="module" src="./JS/comApiSectionSlider.js"></script>
    <script defer type ="module" src="./JS/injectionHF.js"></script>
    
    <link rel="stylesheet" href="./style/style.css">
    <link rel="stylesheet" href="./style/style-slider.css">
    <title>Ciné-max</title>
</head>
```
<!-- =>![alt text](/assets/imagem2.png) -->

Concernant le slider, il s'agit de JS\comApiSectionSlider.js qui s'appuie sur un import de fonction (listMovies) de JS\apiFetch.js concernant les requête API de filtrage.


### Page détail ###






