//exercice 5 
//#region
var prompt = require("prompt-sync")();
const  capital = prompt("Votre capital ? ");

var prompt = require("prompt-sync")();
const  tauxInteret = prompt("Votre taux d'interet ? ");

var prompt = require("prompt-sync")();
const  duree = prompt("Votre durée ? ");

let capitalFinal;
capitalFinal = Math.round(parseInt(capital) * (Math.pow(1+pourcent,duree)));
console.log(`Votre capital final s'éleve à ${capitalFinal}`)
//#endregion