var test = document.getElementById("demo");

var test2 = document.querySelector("#demo2")

test2.textContent = "I am happy"

var affichage = "<h1> Hello world </h1>"

var prenom =prompt("Qui suis je? : ");

affichage += `<p>Je suis ${prenom} <p>`

test.innerHTML = `${affichage}`;

function changeColor(newColor){
    let element = document.getElementById('para') 
    element.style.color = newColor;
    alert(newColor);
}

let button = document.getElementById('my-button');

button.addEventListener("click", () => {

    let titre = document.querySelector("#titre");
    titre.textContent ="Je suis un titre les gars, ok";
    titre.style.backgroundColor = "green";

    document.getElementById("couleur1").classList.remove("btn-primary");
    document.getElementById("couleur1").classList.add("btn-danger");
    document.getElementById("couleur2").classList.remove("btn-danger");
    document.getElementById("couleur2").classList.add("btn-info");
});

var val =0;
function augmentation(){
    let valeur= document.getElementById("valeur");
    val++;
    valeur.textContent=val;
}