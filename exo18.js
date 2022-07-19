function secondes(heure,minutes,secondes){
 let result = heure * 3600 + minutes * 60 + secondes
 return result
}

var prompt = require("prompt-sync")();
let heures  = parseInt(prompt("Heures? "));
let minutes =  parseInt(prompt("Minutes? "));
let seconde = parseInt(prompt("Secondes?" ));

let result=secondes(heures,minutes,seconde)

console.log(result)