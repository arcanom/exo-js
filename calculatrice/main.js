function GetZero(){
    document.getElementById("result").textContent = "";
}

function calculer(event){
    let ecran = document.getElementById("ecran")
    ecran.onclick = function(event){
        let val = event.target.value;
        
        if(val =="11"){
            GetZero();
        }
        else if(val == "="){
            let calcul = eval(result.textContent)
            GetZero();
            result.textContent += calcul
        }
        else{
            result.textContent += val
        }
    }
}

let result=  document.getElementById("result");
result.addEventListener("click",calculer())
