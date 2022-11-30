
let monTexte = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";

// Completer le code suivant pour afficher la longueur de la variable monTexte

alert(monTexte.length);

//Ajouter du code ci dessous pour réaliser la suite de l'exercice

let pop = document.getElementById('position');
pop.innerText = monTexte.indexOf('i');

let myToc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";

let chaine = document.getElementById('chaineMaj');
chaine = myToc.toUpperCase();

for(let i = 0; i < monTexte.length; i++) {
    if(monTexte[i] === "a") {
        alert("lettre a trouvé");
    }
}