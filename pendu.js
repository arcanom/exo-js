let vieRestante = 5;
let compteur = 0;
let pendu = ["chouineur","pomme","voisin","tabasco","processeur","calculette","gitan","babouche","poire","bagarre","jaune"]
let affichagePendu = [];
let nbrePendu = [];
let rand = Math.floor(Math.random()*pendu.length);
let valeurPendu = pendu[rand]
let isVerified = false
valeurPendu =  valeurPendu.split("")


 for(let i=0;i<valeurPendu.length;i++){
    affichagePendu[i] = "*"
 }

 for(let i=0;i<affichagePendu.length;i++){
    nbrePendu[i] = affichagePendu[i]
 }

console.log(nbrePendu);
var prompt = require("prompt-sync")();


while(affichagePendu.includes('*') == true && vieRestante > 0){
    let propo = prompt(` Proposition n°${compteur+1} `)
    for(let i=0;i<valeurPendu.length;i++){
        let test = valeurPendu[i];
        if(test ==  propo){
            affichagePendu[i]= propo
        } 
    }
    for(let i=0;i<affichagePendu.length;i++){
        if(affichagePendu[i] != nbrePendu[i]){
            isVerified = true;
            nbrePendu[i] = affichagePendu[i]
        } 
    }

    if(isVerified == true){
        console.log(affichagePendu)
        console.log(`La lettre ${propo} est présente dans le pendu` )
    } else {
        vieRestante--
        console.log(affichagePendu)
        console.log(`Il vous reste ${vieRestante} vie(s)`)
    }
    compteur++
    isVerified= false;
 
}