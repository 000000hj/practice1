var big=document.querySelector("#cup");
var smallpick=document.querySelectorAll('.small');
var isOpen=false;

for(var i=0;i<smallpick.length;i++)
{
    smallpick[i].onclick=showBig;
    
}
function showBig()
{
    var newpick=this.src;
    big.setAttribute("src",newpick);
   
}
var view=document.querySelector('#view');
view.addEventListener("click",function(){
  if(isOpen==false){
    document.querySelector("#detail").style.display="block";
    view.innerText="상세 설명 닫기";
    isOpen=true;
  }
  else{
    document.querySelector("#detail").style.display="none";
    view.innerText="상세 설명 보기";
    isOpen=false;
  }
});