var prompt = require("prompt-sync")();
let nombre = prompt("Votre nombre? ")
let multi = 0;
for(let i=1; i<=10;i++){
    multi = nombre * i
    console.log(`${nombre} x ${i} = ${multi} `)
}