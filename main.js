// console.log("Salut tous le monde")

// // Les variables

// var nom, age, a, b,c;
// nom ="Uziii";
// console.log("Il est de type" + typeof(nom));
// console.log(nom);
// nom= 456756;
// console.log("Il est de type" + typeof(nom));

// age=12;
// console.log("Il est de type" + typeof(age));

// a='12';
// b= 12;
// console.log(a + b );
// console.log(a - b );
// console.log(a * b );

// c = true;
// console.log(c);
// console.log("Il est de type" + typeof(c));

// console.log(a == b);
// console.log( a === b);

// console.log(a != b);
// console.log(a !== b);

// const valeur1 = "Hello World";


// //diff let et var

// function func(){
//     var test = "montcuq"
//     if(true){
//         var test2="dans le lot"
//         let test3 ="en Occitanie"
//         console.log(test + " " + test2 + " " + test3 )
//     }
//     console.log(test + " " + test2 )
// }

// func();

// //les structures conditionnelles

// const majorite = 18;
// let age1 = 25;

// if( age1 > majorite){
//     console.log("Je suis majeur");
// }else {
//     console.log("Je ne suis pas majeur");
// }
   
// let mois = 2;

// if(mois == 1 || mois == "Janvier"){
//     console.log("Janvier");
// } else if (mois == 2 && typeof(mois)) {
//     console.log("Fevrier")
// }

// // switch

// switch(mois){
//     case 1:
//         console.log("Janvier");
//         break;
//     case 2:
//         console.log("Février") 
//         break;
//     case 3:
//         console.log("Mars")
//         break;
//     default:
//         console.log("aucun")
//         break;           
// }

// var prompt = require("prompt-sync")();
// const demo = prompt("salut ");

// console.log(`je suis ${demo}`);


// for (let index = 0; index < 10; index++) {
//     console.log(index)
    
// }

// for (let index = 10; index > 0; index--) {
//     console.log(index)
    
// }

// let i=1
// while (i<10) {
//     console.log(i)
//     i+=2
// }

// let a = 10;
// do{
//     console.log("a = " + a++)
// }while(a<10);

// let tableau = []
// let tabData = [1,2,4,"toto",34]

// for (let index = 0; index < tabData.length; index++) {
//     console.log(tabData[index]);
 
// }

// tabData.push("titi");

// for (let index = 0; index < tabData.length; index++) {
//     console.log(tabData[index]);
 
// }

// tabData.unshift("lolo");
// for( key in tabData){
//     console.log(key)
// }

// for (const item of tabData){
//     console.log(item)
// }

// tabData.splice(3,1)

// const fonc = function(nom){
//     return nom
// }

// var val = fonc("popo")

// console.log(val);