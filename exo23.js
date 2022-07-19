function triselection(tab){
    let n = tab.length
    for(i=0; i<=n-2;i++){
        let min = i ;
        for(let j=i+1;j<=n-1;j++){
            if(tab[j] < tab[min]){
                min = j
            }
        }
        if(min != i ){
            let tampon;
            tampon = tab[i]
            tab[i] = tab[min]
            tab[min] = tampon
        }
    }
}

let tab = []
let stop= true;
let i=0;
while(i<5){
    
    var prompt = require("prompt-sync")();
    let notes = parseInt(prompt(`Numero de tableau ${i+1} `));
    tab[i] = notes;
    i++ ;
}
let result = triselection(tab)
for(let i = 0;i<tab.length;i++){
    console.log(tab[i]);
}