function nbAnnees(myDay, myMonth, myYear) {
    let dayNow = 20
    let moisNow = 7
    let yearNow = 2022
    let senior;
    if(yearNow - myYear > 60 ) {
        return senior = true 
    } else if( yearNow - myYear == 60 ){
        if(moisNow > myMonth){
            return senior = true ;
        } else if(moisNow == myMonth){
            if(dayNow >= myDay ){
                return senior= true;
            }
            else {
                return senior = false;
            }
       
        }
        else{
            return senior = false;
        }

    } else {
        return senior = false;
    }

}

var prompt = require("prompt-sync")();
let myDay  = prompt("Votre jour de naissance? ");
let myMonth = prompt("Votre mois de naissance?");
let myYear =  prompt("Votre année de naissance");


let senior = nbAnnees(myDay,myMonth,myYear)

if ( senior == true){
    console.log("Vous êtes élligible au pass Sénior")
} else {
    console.log("Vous n'êtes pas élligible au pass Senior")
}