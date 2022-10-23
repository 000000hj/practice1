var selectOrder=document.querySelectorAll(".checkbox");
var total=document.querySelector("#total");
var sum=24000;
total.value=sum+"원";

for(var i=0;i<selectOrder.length;i++){
    selectOrder[i].onclick=function(){

        if(this.checked == true){
        sum += parseInt(this.value);
        }

        else {
        sum -= parseInt(this.value);
        }
    
        total.value=sum+"원";
    }
  
}

