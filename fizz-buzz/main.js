function augmentation(){
    valeurtest++;
    var test = document.getElementById("valeur");
    test.textContent= valeurtest;
    fizzBuzz(valeurtest)
}

function diminution(){
   
   valeurtest--;
   var test = document.getElementById("valeur");
   test.textContent= valeurtest;
   fizzBuzz(valeurtest)
}

function fizzBuzz(valeur){
    if(valeur % 3 == 0 &&  valeurtest % 5 == 0 ){
        var test = document.getElementById("valeur");
        test.textContent ="Buzz-Fizz";
        test.style.color = "orange"
        test.style.fontSize = "bolder"
     } else if(valeur % 5 == 0){
        var test = document.getElementById("valeur");
        test.textContent ="Fizz";
        test.style.color = "green"
        test.style.fontSize = "bolder"
     } else if( valeur % 3 == 0 ){
         var test = document.getElementById("valeur");
         test.textContent ="Buzz";
         test.style.color = "blue"
         test.style.fontSize = "bolder"
     }else {
         var test = document.getElementById("valeur");
         test.textContent= valeurtest;
         test.style.color = "black"
     }
}

let valeurtest = 1
var test = document.getElementById("valeur");
test.textContent = valeurtest

