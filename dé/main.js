function rollDice (){
    setTimeout( function(){
        let randomNumber1 = Math.floor(Math.random() * 6) + 1;
        let randomNumber2 = Math.floor(Math.random() * 6) + 1;
        
        
        let result = document.getElementById("result");
        document.getElementById("img1").setAttribute("src","./img/dice"+randomNumber1+".png")
        document.getElementById("img2").setAttribute("src","./img/dice"+randomNumber2+".png")
        if(randomNumber1 === randomNumber2){
            result.textContent="Draw"
        } else if(randomNumber1 < randomNumber2){
            result.textContent="Player 2 wins"
            compteurWinjoueur2++
            winJoueur2.textContent = `Win: ${compteurWinjoueur2}`

        } else {
            result.textContent=" Player 1 wins"
            compteurWinjoueur1++
            winJoueur1.textContent = `Win: ${compteurWinjoueur1}`
        }
    },500)
}
let winJoueur2 = document.getElementById("win2");
let winJoueur1 = document.getElementById("win1");
let compteurWinjoueur1 =0;
let compteurWinjoueur2 =0;

winJoueur1.textContent = `Win: ${compteurWinjoueur1}`
winJoueur2.textContent = `Win: ${compteurWinjoueur2}`
document.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        rollDice();
    }
   });