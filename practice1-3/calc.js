var title=document.querySelector("#title")
title.innerHTML=prompt("내용입력:");
title.style.fontWeight="900";
calc();
function calc(){
    var a=prompt("사각형 가로 값:");
    var b=prompt("사각형 세로 값:");
    var result=a*b;
    alert("사각형의 너비:"+result);

}
