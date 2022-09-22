
function calc(){
   
}
function show(){
    var price=document.querySelector("#price").value;
    var dis=document.querySelector("#discount").value;
    var discount=(dis/100)*price;
    var result=price-discount;
    document.querySelector("#comment").innerHTML="상품의 가격은"+price+"원이고, 할인율은"+dis+"%입니다."+discount+"원을 절약한"+result+"원에 살 수 있습니다.";

}

