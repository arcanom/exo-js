function reset(){
compteur = 0;
nombreMystere = Math.floor(Math.random() * 50)

var regle = document.getElementById("regle");
var reponse = document.getElementById("reponse");
var nbCompteur = document.getElementById("compteur")

regle.textContent = "J'ai généré un nombre entre 1 et 50";
reponse.textContent ="Essayez de le deviner en proposant ci-dessous"
nbCompteur.textContent = compteur; 

}
function envoiReponse(val){
 val = document.getElementById("envoiReponse").value;
 if(val > nombreMystere ){
    regle.textContent= `le nombre mystère est plus petit que ${val}`
    compteur++
    nbCompteur.textContent = compteur; 
 } else if (val < nombreMystere){
    regle.textContent= `le nombre mystère est plus grand que ${val}`
    compteur++
    nbCompteur.textContent = compteur; 
 } else {
    regle.textContent =`Bravo...! ! ! Vous avez trouvé en ${compteur} coups!`
    reponse.textContent=`Le nombre mystère était ${nombreMystere}`
}
}


var compteur = 0;
var nombreMystere = Math.floor(Math.random() * 50)

var regle = document.getElementById("regle");
var reponse = document.getElementById("reponse");
var nbCompteur = document.getElementById("compteur")

regle.textContent = "J'ai généré un nombre entre 1 et 50";
regle.style.color = "white"
reponse.textContent ="Essayez de le deviner en proposant ci-dessous"
reponse.style.color ="white"
nbCompteur.textContent = compteur; 

