var prompt = require("prompt-sync")();
let age = prompt("Votre age? ")
let salaire = prompt("Votre salaire? ")
let anciennete = prompt("Votre anciennete? ")
let indemmite = 0;
if (anciennete >= 1 && anciennete <= 10  ){
    indemmite= indemmite + parseInt(salaire)/2;
} else if(anciennete>10){
    indemmite = indemmite + parseInt(salaire)*anciennete 
    
} else {
    indemmite=0
}

if(age>= 46 && age<=49){
    indemmite= indemmite + parseInt(salaire) * 2
} else if (age >= 50){
    indemmite= indemmite + parseInt(salaire) * 5
}

console.log(`Le montant de l'indemnité pour un salarié de ${age} ans et avec ${anciennete} années d'ancienneté s'éleve à ${indemmite}`)