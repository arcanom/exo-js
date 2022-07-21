 var test = document.getElementById("modal1");
 var test2 = document.getElementById("modal2");
 var test3 = document.getElementById("modal3");

 var modal = document.getElementById("modalText1");
 var modal2 = document.getElementById("modalText2");
 var modal3 = document.getElementById("modalText3");


 var  closeWindow= document.getElementById("close")
 var  closeWindow2= document.getElementById("close2")
 var  closeWindow3= document.getElementById("close3")
 test.onclick = function() {
    modal.style.display = "block";
 }
 test2.onclick = function() {
    modal2.style.display = "block";
 }
 test3.onclick = function() {
    modal3.style.display = "block";
 }

 closeWindow.onclick = function() {
    modal.style.display = "none";
 
 }

 closeWindow2.onclick = function() {
   
    modal2.style.display = "none";
  
 }
 closeWindow3.onclick = function() {

    modal3.style.display = "none";
 }

 window.onclick = function() {
    if(event.target === modal){
        modal.style.display = "none";
        
        
    } else if(event.target === modal2){
        modal2.style.display = "none";
    } else if(event.target === modal3) {
        modal3.style.display = "none";
    }
 }