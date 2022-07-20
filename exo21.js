let tab = [45,55,65,75,35]
let croissant = true
for(let i =0;i<tab.length-1;i++){
    if(tab[i] > tab[i+1]){
        croissant = false
        break;
    }
}

if( croissant == false){
    console.log("le tableau n'est pas trié par ordre croissant")
}
else {
    console.log("le tableau est trié par ordre croissant")
}