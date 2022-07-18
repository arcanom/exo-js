var prompt = require("prompt-sync")();
let taille = prompt("Votre taille ? ")
let poids = prompt("Votre poids? ")

if((taille<=169 && (poids<=53 && poids>=48)) 
|| (taille<=163 && poids<=59) 
|| (taille<=160 && m<=65) ){
    console.log("La taille que vous devez mettre est la 1")
} else if((taille<=178 &&(poids<=53 && poids>=48) 
           || (taille<=175 && (poids<=59 && poids>="54")) 
           || (taille<=172 && (poids<=65 && poids >=60)) 
           || ((taille<=169 && taille>=160) && (poids<=71 && poids>=66)) ))
{
    console.log("La taille que vous devez mettre est la 2")
} else if ((taille<=183 && taille>=163 ) &&(poids<= 77 && poids>=54)){
    console.log("La taille que vous devriez prendre est 3")
} else {
    console.log("Les données rentrées ne correspondent à aucune taille")
}