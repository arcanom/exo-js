let somme = 0;
let paiement = 0;
let dix = 0;
let cinq = 0
a = true
while(a == true) {
    var prompt = require("prompt-sync")();
    let nombre = prompt("Le prix de votre article ")
    somme = somme + parseInt(nombre)
    if(nombre == 0){
        a = false
    }
}

console.log(`Vous devez payer: ${somme}`)
paiement = prompt("Combien donnez vous? ")
let rendu = somme - paiement
if(rendu > 0){
    console.log("vous n'avez pas saisi assez veuillez revoir votre paiement? ")
    
} else if(rendu <0) {
 if(rendu % 10 === 0){
    dix = (rendu*-1) / 10
    for(let i=0; i<dix;i++ ){
        console.log("Billet de  10€")
    }
   // console.log(`Voila votre monnaie ${dix} billet(s) de 10€`)
 } else {
    let restedix = rendu % 10 *-1

    dix = (rendu*-1-restedix)/10

    if(restedix % 5 === 0 ){
        cinq =restedix / 5
        for(let i=0; i<dix;i++ ){
            console.log("Billet de  10€")
        }
        for(let i=0; i<cinq;i++ ){
            console.log("Billet de  5 €")
        }
        //console.log(`Voila votre monnaie ${dix} billet(s) de 10€ et ${cinq} billet(s) de 5€ `)
    } else{
        let restecinq = restedix % 5 
        cinq = (restedix-restecinq) / 5
        for(let i=0; i<dix;i++ ){
            console.log("Billet de  10€")
        }
        for(let i=0; i<cinq;i++ ){
            console.log("Billet de 5 €")
        }
        for(let i=0;i<restecinq;i++){
            console.log("Pièce de 1€")
        }
        //console.log(`Voila votre monnaie ${dix} billet(s) de 10€, ${cinq} billet(s) de 5€ et ${restecinq} piece(s) de 1€ `)
    }
 }
} else {
    console.log("Le compte est bon")
}
