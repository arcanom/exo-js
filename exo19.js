let student = [];
moyenne = 0;
plusGrand = 0;
plusPetit = 20

for(let i=0;i<20;i++){
    var prompt = require("prompt-sync")();
    let notes = parseInt(prompt(`Votre note ${i+1} `))
    student[i] = notes 
}

for(let i=0; i<student.length;i++){
    moyenne = moyenne + student[i]
}

moyenne = moyenne / student.length
console.log(moyenne)

for(let i=0;i<student.length;i++){
    if(student[i]>plusGrand){
        plusGrand = student[i]
    }
    if(plusPetit>student[i]){
        plusPetit = student[i]
    }
}

console.log(plusGrand)
console.log(plusPetit)