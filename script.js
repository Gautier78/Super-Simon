class superSimonGame {

    constructor(nbRound,nbCouleursAppuyees, speedRound,couleurActive){
        this.nbRound = 0; //valeur initiale
        this.nbCouleursAppuyees = 1; //valeur initiale
        this.speedRound = 1 ; //valeur initiale
        this.couleurActive = 1 ; //valeur constante car une seule couleur s'allume à la fois.
    }

    
//Fonction qui lance la partie lors du clic sur le bouton "Start"//
//La fonction affiche le numéro du tour actuel ainsi que son nveau de vitesse//
    startGame(start){

        document.getElementById("letsGo").style.display = "block";

        // Vitesse des actions qui augmentent à chaque fin de tours//
        while (speedRound <= 8){
        console.log(speedRound);
            speedRound +=1;
        }

        return `Round numéro ${start.nbRound}, la vitesse est de ${start.speedRound}.`;
        }


}


//Cette fonction permet d'afficher les regles ainsi que le bouton pour fermer les regles
function showRegles()
{
    document.getElementById("regles").style.display = "block";
    document.getElementById("cacherRegles").style.display = "block";
}
//Cette fonction permet de cacher les regles ainsi que le bouton pour les fermer les regles
function hideRegles()
{
    document.getElementById("regles").style.display = "none";
    document.getElementById("cacherRegles").style.display = "none";
}


/*

//Fonction qui se lance lorsque la partie est perdue//
//La fonction affiche le numéro du tour perdu ainsi que la couleur qui nous a fait perdre//
function lose(){
    const end = 0;
    return `Perdu ! Vous êtes allez jusqu'au tour numéro ${start.nbRound}. La couleur qui vous a fait perdre est ${star.couleurActive}. Voulez vous rejouer?`;
}

//Fonction qui relance une partie lorsqu"on clic sur le bouton "Restart"//
function restart(restart){
    this.start();
    nbRound = 0;
    speedRound = 1;
}

//TEST TEST TEST numéro random TEST TEST TEST//
function affCache() {
    var div = document.getElementById(slau);
    if (div.style.display == ""){
    div.style.display = "none";
    }
    else{
    div.style.display = "block";
    }
    }

  
// 1 = rouge / 2 = bleu / 3 = Vert / 4 = Jaune /
//fonction permettant de chosiir une couleur au hasard lors d'un tour
function hasard(4){
	return 1+Math.floor(Math.random()*4);
}

console.log(startRound(superSimon));
console.log(endRound(end));
console.log(restartGame(superSimon));

console.log(hasard(4));
*/