function menu()
{
console.log("1- Stocker les notes des élèves dans un tableau")
console.log("2- Afficher la liste des notes")
console.log("3- Modifier une note")
console.log("4- Afficher La moyenne de la classe ")
console.log("5- Afficher la note la plus élévée ")
console.log("6- Afficher la note la plus basse ")
console.log("0- Quitter le programme")
}

function stock(tab){
    let compteur = 0;
    let i=0;
    let note = parseInt(prompt(`Note n°${compteur+1} `));
    while(note != 0){
        
        tab[i] = note;
        i++;
        compteur++;
        note = parseInt(prompt(`Note n°${compteur+1} `));
    }
    return tab
}

function listeNotes(tab){
    for(let i=0;i<tab.length;i++){
        console.log(tab[i])
    }
}

function modifNote(tab){
    position = prompt("La position de la note à modifier ")
    noteModifie = prompt("Nouvelle note ")
    tab[position-1] = noteModifie
    return tab
}

function moyenne(tab){
    let moyenne =0;
    for(let i=0;i<tab.length;i++){
        moyenne = (moyenne + tab[i])
    }
    moyenne = moyenne / tab.length
    console.log(`La moyenne des notes est ${moyenne}`)
}

function plusGrand(tab){
    let plusGrand = 0
    for(let i=0;i<tab.length;i++){
        if(tab[i] > plusGrand){
            plusGrand = tab[i]
        }
    }
    console.log(`la note la plus grande est ${plusGrand}`)
}

function plusPetit(tab){
    let plusPetit = 50;
    if(tab[i] < plusPetit){
        plusPetit = tab[i]
    }
    console.log(`la note la plus grande est ${plusPetit}`)
}



let notes = []
menu()
var prompt = require("prompt-sync")();
let choix = parseInt(prompt("Votre choix? "))
while(choix != 0)
{
    switch (choix) {
    case 1:
        stock(notes);
        menu();
        choix = parseInt(prompt("Votre choix? "));
        break;
    case 2:    
        listeNotes(notes);
        menu();
        choix = parseInt(prompt("Votre choix? "))
        break;
    case 3:
        modifNote(notes) 
        menu();
        choix = parseInt(prompt("Votre choix? ")) ; 
        break; 
    case 4:
        moyenne(notes)
        menu();
        choix = parseInt(prompt("Votre choix? "));
        break;
    case 5:
        plusGrand(notes);
        menu();
        choix = parseInt(prompt("Votre choix? "));
        break;

    case 6:
        plusPetit(notes);
        menu();
        choix = parseInt(prompt("Votre choix? "));
        break;
}}