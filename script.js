
const superSimon ={
    nbRound : "",
    nbTouchesAppuyees : "",
    speedRound : 1,
    couleurActive : "",
}


function showRegles(test)
{
    document.getElementById("test").style.display = "block";
}

function hideRegles(test)
{
    document.getElementById("test").style.display = "none";
}

/*  
function functionTest(test)
{
  //masquer
document.getElementById("test").style.display = "none";

//Afficher
document.getElementById("test").style.display = "block";

/*  

//Fonction qui lance la partie lors du clic sur le bouton "Start"//
//La fonction affiche le numéro du tour actuel ainsi que son nveau de vitesse//
function start(start){
   
   
    // Vitesse des actions qui augmentent à chaque fin de tours//
    while (speedRound <= 8){
       console.log(speedRound);
        speedRound +=;
}

    return `Round numéro ${start.nbRound}, la vitesse est de ${start.speedRound}.`;
}

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
/*





class NomDeLaClasse {
    // param nécéssaire
    constructor(param = 12, constructor){
        this.MavaleurInitial = 0;


        // param avec valeur par défault
        // constructeur(param = 0){}
    }

    maFonction(parametres){
            // tu fais tes bails 
            // elle ce lance que quand tu l'appel
            // tu peux en lancer d'autres d'autre part


            
    }
    maFonctionNumero2(){
        // on lance la fonction une A LINTERIEUR DE LA CLASS
        this.maFonction();

        // on appele la variable mavaleurinitial
        this.MavaleurInitial;

        this.MavaleurInitial = 12;
    }

}

const ObjetClass = new NomDeLaClasse(25);
const ObjetNTR = new NomDeLaClasse(50);

ObjetClass.maFonctionNumero2();
ObjetNTR.maFonctionNumero2();
*/