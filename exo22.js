let tab = [4,8,7,12];
let tab2 = [];
let i = tab.length-1;
let j=0;

while(i>=0){
    tab2[j] = tab[i];
    i--;
    j++;
}



for(let i = 0;i<tab2.length;i++){
    console.log(tab2[i]);
}