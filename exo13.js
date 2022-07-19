var prompt = require("prompt-sync")();
let nombre = prompt("Votre nombre? ")
while(nombre < 10 || nombre > 20) {
    if(nombre < 10){
        console.log("Trop petit")
        nombre = prompt("Votre nombre? ")
    } else {
        console.log("Trop grand")
        nombre = prompt("Votre nombre? ")
    }
}
    console.log("Bravo bon toutou")