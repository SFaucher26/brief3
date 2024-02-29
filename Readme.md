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

[x] #2
[] https://github.com/SFaucher26/brief3/issues/2

[x] #7
[] https://github.com/SFaucher26/brief3/issues/7

[x] #8
[] https://github.com/SFaucher26/brief3/issues/8

**1- Création et initialisation du slider**

Slider contenu dans le fichier: "JS\comApiSectionSlider.js" sur une base de card mise à jour par un fetch d'initialisation selon le endpoint :
            'https://api.themoviedb.org/3/discover/movie'
Avec option de base par défaut (rangement par popularity desc.)

=>![alt text](imagem.png)

**2- Mise en place du filtrage sur ce slider**

Mise en place sur une base HTML,CSS et JS et via trois options gérées par boutons radio: "now playing", "popularity", "année de sortie"
D'autres peuvent être ajoutés selon le besoin ou bien les existants peuvent être aisément modifiés grâce à la modularité du code associé.

=>![alt text](imagem-1.png)

**3- Code associé**
La page html s'appuie sur 3 scripts qui servent le projet global selon les sections:

=>![alt text](imagem2.png)

Concernant le slider, il s'agit de JS\comApiSectionSlider.js qui s'appuie sur un import de fonction (listMovies) de JS\apiFetch.js concernant les requête API de filtrage.


### Page détail ###






