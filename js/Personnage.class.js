'use strict'; 

class Personnage {
  constructor(nom, pv, degatsDeBase) {
    this.nom = nom;
    this.pv = pv;
    this.degatsDeBase = degatsDeBase;
    //this.armure=armure;
    //this.arme = null; // Toujours 0 au début
  }
// Attaque une cible
  attaquer(dragon) {
    if (this.pv >0) {
      const degats = this.degatsDeBase;
      addTextToHtml(`${this.nom} attaque ${dragon.nom} et lui inflige ${degats} points de dégâts`);
      dragon.pv -= degats;
      if (dragon.pv > 0) {
        addTextToHtml(`${dragon.nom} a encore ${dragon.pv} points de vie`);
      } else {
        dragon.pv = 0;
        addTextToHtml(`${this.nom} a tué ${dragon.nom}`);
      }
    } else {
      addTextToHtml(
        `${this.nom} n'a plus de points de vie et ne pas pas attaquer`
      );
    }
  }
  // Renvoie la description du personnage
  decrire() {
    return `${this.nom} a ${this.pv} points de vie, et inflige ${
      this.degatsDeBase} points de dégats`;
  }
}


class Dragon {
  constructor(nom, pv, degatsDeBase) {
    this.nom = nom;
    this.pv = pv;
    this.degatsDeBase = degatsDeBase;
    //this.armure=armure;
    //this.arme = null; // Toujours 0 au début
  }
 // Attaque une cible
  attaquer(chevalier) {
    if (this.pv >0) {
      const degats = this.degatsDeBase;
      console.log(
        `${this.nom} attaque ${
          chevalier.nom
        } et lui inflige ${degats} points de dégâts`
      );
      chevalier.pv -= degats;
      if (chevalier.pv > 0) {
        addTextToHtml(`${chevalier.nom} a encore ${chevalier.pv} points de vie`);
      } else {
        chevalier.pv = 0;
        addTextToHtml(`${this.nom} a tué ${chevalier.nom}`);
      }
    } else {
      addTextToHtml(
        `${this.nom} n'a plus de points de vie et ne pas pas attaquer`
      );
    }
  }
  // Renvoie la description du personnage
  decrire() {
    return `${this.nom} a ${this.pv} points de vie, et inflige ${
      this.degatsDeBase} points de dégâts`;
  }
}
