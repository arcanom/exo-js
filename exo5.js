//exercice 5 
//#region
var prompt = require("prompt-sync")();
const  capital = prompt("Votre capital ? ");

var prompt = require("prompt-sync")();
const  tauxInteret = prompt("Votre taux d'interet ? ");

var prompt = require("prompt-sync")();
const  duree = prompt("Votre durée ? ");

let montantInteret ;
montantInteret =  Math.round( capital * (tauxInteret/100) * duree);
console.log(`Votre montant d'intéret s'élévera de  ${montantInteret}`)
let capitalFinal;
capitalFinal = parseInt(capital) + montantInteret;
console.log(`Votre capital final s'éleve à ${capitalFinal}`)
//#endregion