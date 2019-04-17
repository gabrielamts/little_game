'use strict'; 

//Saisie de nombre entier ou a virgule obligatoire //
function saisieNombre( message, valeurParDefaut) {
    var saisie;
    do {
        saisie = window.prompt (message, valeurParDefaut);

        if(saisie != null ) // Sinon nombre est transformé en NaN par parseFloat, et on reste coincé dans la boucle
            saisie = parseFloat(saisie);
    }
    while ( (isNaN(saisie)) && (saisie != null) );

    return saisie;
}

// Renvoie un nombre aléatoire
function nombreAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


////////////////////////////////// Eul projet
function addTextToHtml( eulTexte ) {
  eulJsHTML.append(eulTexte);
}

function emptyHtml() {
  eulJsHTML.empty();
}
