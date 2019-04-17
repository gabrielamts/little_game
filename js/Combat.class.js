class Combat {
  constructor( perso1Param, perso2Param, couleurParam ) {
    this.perso1   = perso1Param;
    this.perso2   = perso2Param;

    this.tour = 1;
  }

  tourDeCombat() {
    // On affiche le n° du tour en cours
    addTextToHtml('<p style="color:' + ';">Tour n°' + this.tour + ', combat entre ' + this.perso1.nom + ' et ' + this.perso2.nom + '</p>');
    // On l'incrémente
    this.tour++;

    // On teste la vitesse
    if( Math.random() > 0.5 ) { // 1 chance sur 2
      // En fonction de la vitesse, l'un des personnages tape l'autre
      this.perso1.attaquer(this.perso2);
    }
    else {
      this.perso2.attaquer(this.perso1);
    }

    addTextToHtml('<hr />');
  }

  combatComplet() {
    // Tant que les deux ne sont pas morts
    while( this.perso1.pv > 0 && this.perso2.pv > 0 ){
      // On s'tape
      this.tourDeCombat();
    }

    // Quand l'un des deux est mort, on affiche le gagnant et on le retourne
    var gagnant = this.perso2;
    if(this.perso1.pv > 0) {
      gagnant = this.perso1;
    }

    addTextToHtml('<p style="color:'+ ';"><strong>' + gagnant.nom + ' à gagné ! Yay !</strong></p>');
    gagnant.decrire();
    return gagnant;
  }
}
