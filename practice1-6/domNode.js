function newRegister(){
    var newP=document.createElement("p");

    var delBtn=document.createElement("span");
    var deltext=document.createTextNode("X");
    delBtn.setAttribute("class","del");
    delBtn.appendChild(deltext);
    newP.appendChild(delBtn);

    var userName=document.querySelector('#userName');
    var newText=document.createTextNode(userName.value);
    newP.appendChild(newText);
    var nameList=document.querySelector('#nameList');
   
    nameList.appendChild(newP);
    userName.value="";

    var removeBtn=document.querySelectorAll(".del");
    for(var i=0;i<removeBtn.length;i++)
{
    removeBtn[i].addEventListener("click",function(){
        if(this.parentNode.parentNode)
        this.parentNode.parentNode.removeChild(this.parentNode);
    });
}

}


