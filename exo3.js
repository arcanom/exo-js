//exercice 3
//#region
let pi ;
let perimetre
let aire;
let perimetrearrondi;
let airearrondi;
pi = Math.PI
var prompt = require("prompt-sync")();
const diametre = prompt("Diametre ? ");


perimetre = diametre * pi;
aire = (diametre / 2 ) ** 2 * pi;
perimetrearrondi= Math.round(perimetre);
airearrondi= Math.round(aire);
console.log(`Diametre: ${diametre}`)
console.log(`Perimetre ${perimetre}`)
console.log(`Aire: ${aire}`)
console.log(`Perimetre arrdoni: ${perimetrearrondi}`)
console.log(`Aire: ${airearrondi}`)
//#endregion
