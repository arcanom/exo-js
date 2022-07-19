let i = 1;
plusGrand = 0;
while(i <= 20){
    var prompt = require("prompt-sync")();
    let nombre = prompt(`Votre nombre ${i} `)
    if(parseInt(nombre) > plusGrand){
        plusGrand = nombre
    }
    i++
} 

console.log(`Votre nombre le plus grand est ${plusGrand}`)