var email = "contact@teamjs.fr"
var mdp = "leLundiAuSoleil"

var prompt = require("prompt-sync")();
let emaildemande = prompt("Votre email? ")
let mdpdemande = prompt("Votre mot de passe? ")

if(emaildemande === email){
    if(mdpdemande === mdp){
        console.log("OK")
        console.log("Bienvenue sur votre espace sécurisé")
    } else {
        console.log("Votre mot de passe est incorrecte")
    }
} else {
 console.log("Votre email est incorrecte")
}