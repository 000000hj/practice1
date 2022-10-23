var r=document.querySelector("#r");
var btn=document.querySelector("#cal");
var circum=document.querySelector("#circum");
var area=document.querySelector("#area");
btn.onclick=function(){ 
    circum.value=r.value*2*Math.PI;
    area.value=Math.pow(r.value,2)*Math.PI;
}
