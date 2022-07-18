//exercice 4
//#region
let test;
var prompt = require("prompt-sync")();
const palindrome = prompt("Votre mot ? ");

test = palindrome.split("").reverse().join("");
if(test === palindrome){
    console.log(`Votre ${palindrome} est un palindrome`)
} else {
      console.log(`Votre ${palindrome} n'est pas un palindrome`)
       }

//#endregion