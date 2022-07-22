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
        } else {
            result.textContent=" Player 1 wins"
        }
    },500)
}

document.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        rollDice();
    }
   });