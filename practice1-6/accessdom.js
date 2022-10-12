var isToggle=false;
document.getElementById("heading").onclick=function(){
if(isToggle==false)
{   isToggle=true;
    this.style.fontSize='4em';}
else
{
    isToggle=false;
    this.style.fontSize="2em";
}
} ;


