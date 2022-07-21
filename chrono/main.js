function reset(){
    stop();
    document.getElementById("stop").classList.remove("d-block")
    document.getElementById("start").classList.remove("d-none")
    document.getElementById("stop").classList.add("d-none")
    document.getElementById("start").classList.add("d-block")
    heure = 0
    min = 0
    secondes = 0
    milli = 0
    affHeure =  document.getElementById("temps")

affHeure.textContent = `${heure}:0${min}:0${secondes}:00${milli}`
}

function temps(){
    milli= milli + 8
    if(milli >= 1000){
        milli =0;
        secondes++
        if(secondes>=60){
            secondes=0;
            min++
            if(min>=60){
                min=0;
                heure++
            }
        }
    
    }
}
    


function timer() {
    t = setTimeout(start, 10);
}

function start(){
   
        temps();
        affHeure.textContent = (heure > 9 ? heure : "0" + heure ) + ":" + 
        (min > 9 ? min :"0" +min ) + ":" +
        (secondes > 9 ? secondes : "0" + secondes ) + ":" +( milli > 99 ? milli :  "0"+ milli)
        timer();
        
    
    }

function stop (){
    clearTimeout(t);
}

function startIntostop(){
    start();
    document.getElementById("start").classList.remove("d-block")
    document.getElementById("start").classList.add("d-none")
    document.getElementById("stop").classList.remove("d-none")
 
}
function stopIntostart(){
    stop();
    document.getElementById("stop").classList.remove("d-block")
    document.getElementById("stop").classList.add("d-none")
    document.getElementById("start").classList.remove("d-none")
}
let heure = 0;
let min = 0;
let secondes = 0;
let milli = 0;
var t;
let affHeure =  document.getElementById("temps")

affHeure.textContent = `${heure}:0${min}:0${secondes}:00${milli} `