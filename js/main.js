'use strict'; 

/*************************************************************************************************/
/* **************************************** DONNEES JEU **************************************** */
/*************************************************************************************************/


var eulJsHTML = $('.eulJs');


var chevalier = new Personnage("Gertrude", 200, 30);
var dragon = new Dragon("Tabaluga", 400, 20);


chevalier.attaquer(dragon);
dragon.decrire();

var mortal = new Combat(chevalier, dragon);
mortal.tourDeCombat();

var leLaRespcapee = mortal.combatComplet();
console.log(mortal);
