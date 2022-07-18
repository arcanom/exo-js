var prompt = require("prompt-sync")();
let AB =  prompt("Le côté AB? ")
let BC = prompt("Le côté BC? ")
let CA = prompt("Le côté CA?  ")

if(AB == CA ){
    if(AB == BC){
        console.log("le triangle est équilatéral")
    } else 
    {
        console.log("Le triangle est isocèle en A")
    }
} else if (AB == BC){
    console.log("Le triangle est en iscoèle en B")
} else if(BC == CA){
    console.log("Le triangle est en iscoèle en C")
} else {
    console.log("Le triangle n'est pas isocèle")
}