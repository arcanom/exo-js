
let compteur = 0;
let justeprix = Math.floor(Math.random() * 1000)
var prompt = require("prompt-sync")();
let propo = prompt(` Prèmiere Proposition `)
while(parseInt(justeprix) != parseInt(propo)) {
    if(justeprix > propo){
        propo = prompt("C'est plus! ")
        compteur++
    } else {
        propo = prompt("C'est moins ! ")
        compteur++
    }
}
console.log(`Vous avez trouvé le juste prix ( ${justeprix} ) en ${compteur} essai(s)`)