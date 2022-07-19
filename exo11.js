var prompt = require("prompt-sync")();
let montantNet = prompt("Votre montant net? ");
let nbreAdulte = prompt("le nombre d'adultes? ");
let nbreEnfants = prompt("le nombre d'enfants? ");
let impot = 0;
let part = 0;
let montantPart= 0;
if(nbreAdulte == 1 ){
    if(montantNet <= 10084){
        impot=0
    }
    else if(montantNet > 10084 || montantNet <=25710 ) {
        impot = Math.round(montantNet * (11/100) + montantNet*(30/100))
    } else if (montantNet > 25710 || montantNet <= 73516 ){
        impot = Math.round(montantNet * (30/100) + montantNet*(30/100))
    } else if(montantNet> 73516 || montantNet <=158122){
        impot = Math.round(montantNet * (41/100) + montantNet*(30/100))
    } else {
        impot= Math.round(montantNet * (45/100) + montantNet*(30/100))
    }
} else {
    if(parseInt(nbreEnfants) == 2){
        part = parseInt(nbreAdulte) * 1 + parseInt(nbreEnfants) *0.5 
        montantPart= montantNet / part
        console.log(montantPart)

        if(montantPart <= 10084){
            impot=0
        }
        else if(montantPart => 10084 || montantPart <=25710 ) {
            impot = Math.round(((montantPart - 10084) * (11/100))*part)
        } else if (montantPart > 25710 || montantPart <= 73516 ){
            impot = Math.round(((montantPart -25710) * (30/100))*part)
        } else if(montantPart> 73516 || montantPart <=158122){
            impot = Math.round((montantPart - 73516)  * (41/100)*part)
        } else {
            impot= Math.round((montantPart - 158122)  * (45/100)*part)
        }
    } else {
        part= parseInt(nbreAdulte) * 1 + 2*0.5 + (parseInt(nbreEnfants)-2)*1
        montantPart= montantNet / part
        if(montantPart <= 10084){
            impot=0
        }
        else if(montantPart > 10084 || montantPart <=25710 ) {
            impot = Math.round(((montantPart - 10084) * (11/100))*part)
        } else if (montantPart > 25710 || montantPart <= 73516 ){
            impot = Math.round(((montantPart -25710) * (30/100))*part)
        } else if(montantPart> 73516 || montantPart <=158122){
            impot = Math.round((montantPart - 73516)  * (41/100)*part)
        } else {
            impot= Math.round((montantPart - 158122)  * (45/100)*part)
        }
       }
}

console.log(`Le montant de l'impot sur le revenu pour un foyer composé de ${nbreAdulte} adulte(s) et de ${nbreEnfants} enfants avec un revenu fiscal de ${montantNet} s'éleve à ${impot} `)