var prompt = require("prompt-sync")();
let age =  prompt("Votre age? ")

if (age < 3){
    console.log("Vous êtes trop jeune")
} else if(age >= 3 && age <=6) {
    console.log("Vous êtes de la catégory baby")
} else if(age ==7 || age == 8){
    console.log("Vous êtes de la catégory Poussin")
} else if(age == 9 || age== 10){
    console.log("Vous êtes de la catégory Pupille")
} else if(age==11 || age==12){
    console.log("Vous êtes de la catégory Minime")
} else if (age>=13 && age<18)
{
    console.log("Vous êtes de la catégory cadet") 
} else {
    console.log("Vous n'êtes plus un enfant")
}